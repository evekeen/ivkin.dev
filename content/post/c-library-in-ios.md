---
include_footer: true
title: "How to build and use a DyLib in iOS app"
draft:true
---
# How to build and use a DyLib in iOS app
I've used library nlopt for minimization problem

1. You need to build it for iOS. Use toolchain for cmake: https://github.com/leetal/ios-cmake
```
   cmake -DCMAKE_INSTALL_PREFIX=install .. -G Xcode -T buildsystem=1 -DCMAKE_TOOLCHAIN_FILE=../ios.toolchain.cmake -DPLATFORM=OS64
   cmake --build . --config Release
```
2. After cmake with the toolchain open generated project in XCode and fix signing profiles
3. Build
4. Create the framework

```
export OUT_DIR="/Users/ivkin/my"
export LIB_NAME="nlopt"
export SOURCE_INFO_PLIST="Info.plist"
export DYLIBS="build/Release/libnlopt.0.11.1.dylib"
export DY_FILE="libnlopt.0.dylib"

# set OUT_DIR and LIB_NAME
FW_PATH="$OUT_DIR/$LIB_NAME.framework"
INFO_PLIST="$FW_PATH/Info.plist"
OUT_DYLIB="$FW_PATH/$LIB_NAME"

# set the DYLIBS and SOURCE_INFO_PLIST for the library
mkdir -p "$FW_PATH"
cp "$SOURCE_INFO_PLIST" "$INFO_PLIST"
#cp "$DYLIBS" "$FW_PATH/$DY_FILE"
lipo $DYLIBS -output "$OUT_DYLIB" -create
install_name_tool -id @rpath/$LIB_NAME.framework/$LIB_NAME "$OUT_DYLIB"
```

5. Include the framework in __Target->Build Phases->Link Binary With Libraries__
6. Embed the framework in __Target->Build Phases->Embed Frameworks__
7. Modify the library name to lookup add a step __Target->Build Phases->Run Script__
```
install_name_tool -change @rpath/libnlopt.0.dylib @rpath/nlopt.framework/nlopt "$TARGET_BUILD_DIR/$TARGET_NAME.app/$PRODUCT_NAME"
```
8. Info.plist
`MinimumOSVersion = 10.0`