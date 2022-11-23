---
include_footer: true
title: "How to build and use a DyLib in iOS app"
date: 2022-11-22T21:20:47-05:00
Description: ""
Tags: ["ios", "acetrace"]
Categories: []
DisableComments: false
---
In [Ace Trace App](https://acetrace.app), I apply different curve fitting algorithms to create a smooth line and draw it in a video.  
In order to draw a realistic ball golf trajectory, it needs to follow the physics of the ball flight.
![](/images/golf_ball_forces.jpg)

There are many articles about specific forces affecting the ball. In the end, calculating coordinates at a time point comes down to solving differential equations with these forces and predicting the trajectory by experimental data.
![](/images/golf_ball_trajectories.png)
It's common to experiment with data and algorithms using Python and tools like SciPy; however, to run these algorithms on a mobile device, they must be written in a native language.  
My primary platform is iOS, and there is no good tool available for curve fitting either in the standard library or in some package on Github. I came across a few  C++ libraries that can be very useful for curve fitting.

## Solving differential equations with Boost
There is [Boost's](https://www.boost.org/) module __odeint__ for differential equations, which is the exact equivalent of what you might have used in Python.  
And the good news is Boost can be installed on macOS and then included in a build without any additional hassle:
```
brew install boost
```
Add the corresponding path to __Headers Search Paths__ to XCode project targets: `/opt/homebrew/Cellar/boost/1.80.0/include`  
Add the path to the __Library Search Paths__ as well: `/opt/homebrew/Cellar/boost/1.80.0/lib`  
And then, you can use it in Objective-C code. Here is how I solve differential equations for the trajectory:
```
#include <boost/numeric/odeint.hpp>
using namespace boost::numeric::odeint;

void derivatives(const state_type &x, state_type & dxdt, double t) {
    auto w_i = x[7];
    auto w_k = x[9];
    dxdt[0] = x[1];
    dxdt[1] = -(d / m) * x[1] * x[1] + coef * (w_j * x[5] - w_k * x[3]);    
    dxdt[2] = x[3];
    dxdt[3] = -32.2 - (d / m) * x[3] * x[3] + coef * (w_k * x[1] - w_i * x[5]);    
    dxdt[4] = x[5];
    dxdt[5] = -(d / m) * x[5] * x[5] + coef * (w_i * x[3] - w_j * x[1]);
    dxdt[6] = x[7];
    dxdt[7] = 0;
    dxdt[8] = x[9];
    dxdt[9] = 0;
}

class Observer {
public:
    void operator()(const state_type &current_x, const double current_time) noexcept {
        x.push_back(current_x);
        time.push_back(current_time);
    }
    std::vector<state_type> x;
    std::vector<double> time;
};

typedef runge_kutta_dopri5< std::vector<double> > stepper_type;

std::vector<state_type> integrate(state_type &x, std::vector<double> times) {
    auto stepper = make_controlled( 1E-12 , 1E-12 , stepper_type() );
    Observer observer_at_chosen_steps{};
    integrate_times(stepper, derivatives, x, times, 0.1, std::ref(observer_at_chosen_steps));
    return observer_at_chosen_steps.x;
}
```

Here we successfully used `integrate_times` - a function from the Boost library.

## Fitting a function parameters using the minimization technique
The best tool outside of the Python world that I've found for that problem is the [NLopt](https://nlopt.readthedocs.io/en/latest/) library. It's perfect for solving the minimization problem and is similar to the Python's alternative interface.

![](/images/Nlopt-logo.png)

### Cooking the ios framework

However, you cannot just include it in the project as we did with Boost.
You have to wrap the library in a framework. Let's see how to make one.

1. Check out the git repository: `git clone git@github.com:stevengj/nlopt.git`  
2. You need to build it for iOS. Use the toolchain for cmake [https://github.com/leetal/ios-cmake](https://github.com/leetal/ios-cmake).  
Copy the __ios.toolchain.cmake__ file to the root directory of the __nlopt__ repo  

3. Build a combined library - it will run on both an actual device and a simulator:
```
cd nlopt
mkdir build-combined
cd build-combined
cmake -DCMAKE_INSTALL_PREFIX=install .. -G Xcode -T buildsystem=1 -DCMAKE_TOOLCHAIN_FILE=../ios.toolchain.cmake -DPLATFORM=OS64COMBINED   
```
4. After cmake with the toolchain, open the generated project in XCode, fix signing profiles, and select the development team in __Build Settings__ for all targets.
5. Set the __Product Bundle Identifier__ in the Build Settings where required. You will get these errors if you try to compile the project.
6. Build XCode project
```
cmake --build . --config Release
cmake --install . --config Release
```
7. Create the framework. There is the bash script for that. Make sure to correct the paths.
```
export OUT_DIR="/Users/ivkin/git/nlopt/ios-framework"
export LIB_NAME="nlopt"
export SOURCE_INFO_PLIST="Info.plist"
export DYLIBS="build-simulator/Release-iphonesimulator/libnlopt.0.11.1.dylib"
export DY_FILE="libnlopt.0.dylib"

# set OUT_DIR and LIB_NAME
FW_PATH="$OUT_DIR/$LIB_NAME.framework"
INFO_PLIST="$FW_PATH/Info.plist"
OUT_DYLIB="$FW_PATH/$LIB_NAME"

# set the DYLIBS and SOURCE_INFO_PLIST for the library
mkdir -p "$FW_PATH"
cp "$SOURCE_INFO_PLIST" "$INFO_PLIST"
lipo $DYLIBS -output "$OUT_DYLIB" -create
install_name_tool -id @rpath/$LIB_NAME.framework/$LIB_NAME "$OUT_DYLIB"
```

8. Sign the library. You can find a signature in the output of your recent builds. Modify the command to use your path and the signature:
```
codesign --verbose=2 --force --sign EEAXXXXXXXXXXXXXXXXXX4CF1 ~/git/nlopt/ios-framework/nlopt.framework/nlopt
```
9. Include the framework in __Target->Build Phases->Link Binary With Libraries__
10. Embed the framework in __Target->Build Phases->Embed Frameworks__
11. For some reason the build will try to use incorrect library name.  
We have to fix it by modifying the library name to lookup during the build. Let's add a build step in __Target->Build Phases->Run Script__
```
install_name_tool -change @rpath/libnlopt.0.dylib @rpath/nlopt.framework/nlopt "$TARGET_BUILD_DIR/$TARGET_NAME.app/$PRODUCT_NAME"
```
12. And the last step is to fix MinimumOSVersion in the `Info.plist` of the framework.
    `MinimumOSVersion = 10.0`

Now you can build your project with nlopt framework.

### Using NLopt framework in Object-C

Let's use it in the Obejctive-C code. Here is how I use it to predict the golf ball trajectory by a few known locations:
```
#include <nlopt.hpp>

vector<double> fitCurveParams(vector<cv::Point2d> points, vector<double> times) {
    nlopt::opt opt(nlopt::LN_NELDERMEAD, 8);
    std::vector<double> lb(8);
    lb[0] = -1; // x
    lb[2] = 0; // y
    lb[4] = 2; // z
    lb[1] = -50; // vx
    lb[3] = 1; // vy
    lb[5] = 20; // vz
    lb[6] = -200; // w_i
    lb[7] = -200; // w_k
    opt.set_lower_bounds(lb);

    std::vector<double> ub(8);
    ub[0] = 1;
    ub[2] = 1;
    ub[4] = 10;
    ub[1] = 50;
    ub[3] = 100;
    ub[5] = 300;
    ub[6] = 200;
    ub[7] = 200;
    opt.set_upper_bounds(ub);
    
    vector<vector<double>> track;
    for (int i = 0; i < points.size(); i++) {
        vector<double> point { points[i].x, points[i].y };
        track.push_back(point);
    }

    DistanceData data { track, times };
    opt.set_min_objective(distanceFunc, &data);
    opt.set_xtol_rel(1e-4);
    vector<double> x {0, 0, 0, 30, 5, 50, 100, 100};
    double minf;

    try {
        nlopt::result result = opt.optimize(x, minf);
    } catch(std::exception &e) {
        cout << "nlopt failed: " << e.what() << endl;
    }
    return x;
}
```