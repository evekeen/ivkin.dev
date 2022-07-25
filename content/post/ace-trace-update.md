---
title: "Summer status update"
date: 2022-07-24T14:47:47-04:00
Description: ""
Tags: []
Categories: []
DisableComments: false
---
For the past few months I've been working non-stop on two things:
1. Finding product-market-fit for [Ace Trace](https://acetrace.app)
2. Searching for like-minded people to build a new company together.

For the Ace Trace my main focus was:
- UX improvements to increase the value of the product and hopefully retention
- Experimenting with the pricing and purchase options to allow more users to enjoy the app on one hand, and to target professional users separately to offer premium features for a higher price
- Delivering the automatic tracking feature for disc golf users to increase the value of the app, and enable B2B sales in the future.
- Add a separate golf trajectory editing tool to enable the app for the golf audience

## UX improvements
The major change was to remove extra step in the trajectory creation. Normally it requires these steps:
1. Scroll the video to find a beginning of the flight
2. Select the disc with the cursor
3. Tap the plus button to add a point
4. Add 4-10 points more to create a line

Step #3 here seems to be completely redundant - why not just add a point immediately as soon as users stopped moving the cursor while selecting the disc? No extra taps - the simpler the interface, the happier is the user.

![](/images/design-20.gif)

Surprisingly, it seems to work backward - users got confused, they wanted to tap a [+] button, and they could not find it. The conversion rates were significantly reduced.


I decided to keep it for now anyway, I'm going to reiterate that later since the improvement is obvious to me. I just need to make it more obvious for the users.


## New purchase options

Ace Trace used to only have subscriptions for $12/year or $8/6 months. Users were complaining that they don't want to have a subscription but rather would pay a one-time fee.

So I decided to add another option to purchase individual video exports. The whole thing requires a backend now to maintain the amount of purchases videos for every user.

Also, it only made sense to raise the subscription prices in this case and target pro users with the subscription model, while keeping video bundle options for more recreational users.

Raising the prices lead to adding a free video per 35 days, otherwise, I was afraid that people will start to decline purchasing due to a sense of unfairness. A free video per 35 days required even more complicated backend development.

![](/images/paywall-bundles.png)

So I did all the backend development along with updated app screens and workflows. I was very excited to roll out the first version of it.

And as soon as I did, users stopped buying it. It was a disaster.
I'm still trying to play with the prices and everything, and it's getting better now.

Also, it might have been the case that users just stopped downloading the app in the first place at the exact same time as I did these changes. It's hard to validate since I only added good analytics [mixpanel.com](https://mixpanel.com) at the same time as I made these changes. Before that, I was relying on Google Analytics which kinda sucks - it thresholds events all the time and would not show you the whole picture. Also, the quality of Google Analytics tools is significantly worse and it's not pleasant to use at all. Mixpanel is way cooler, but it costs a lot of money - but thanks to the [YC startup school](https://www.startupschool.org/), I have credits to use it for free.

__Interesting insight__: conversion rates are doubled for users that were offered a free video every 35 days vs users without a free option. It's completely counterintuitive, I'm fascinated by the power of A/B tests!
BTW [Firebase](https://firebase.google.com/) makes it super easy to run a test like this, which is especially convenient since I'm using Firebase for everything already.



## Automatic tracking

I've been working on the automatic tracking from day one. Initially, I gave up on the idea, since it was taking too much time, and I needed to launch something rather than keep digging into computer vision algorithms.

Then I had to create an Android version of the app, which ate another 6 months and a lot of brain cells. This spring I was finally back in the business of making the automatic tracking real. With help of my friend, we trained a couple of neural networks.

I was mining the data collecting videos that our users willingly shared with me. I had professionals annotate these videos to create a dataset, which was pretty expensive and of bad quality. Then I tried hiring one of the Ace Trace users to help me with the annotations - it took forever to finish 200 videos, and I just decided it was enough. In June I really made it a priority to ship the automated tracking, so we did.

I finally created a python backed on AWS EC2, after giving up on the idea of running tracking right on the mobile device. It's up and running, however people seem to not use it correctly, most of them get bad results because they did not select the disc with the bounding box correctly in the interface.

Overall, super overrated feature, I have barely 60 videos being automatically tracked per day, which is significantly less than the number of videos tracked manually.

Anyway, it looks cool however, works only for frisbees right now.
![](/images/automatic-tracking.gif)

## Golf interface

Suddenly golf players started using Ace Trace, and even though I hoped to expand it to the golf market, I was completely unprepared when all the users started complaining about how it was not working for them. Surprisingly some of the users still found it very useful and started posting traces on Instagram.

In the beginning, I even thought maybe it was pretty good as it was, and I just need to start targeting golf players. But then I tried using it - it was impossible. So I decided to add something quickly to help the golfer trace treir shots.

I spend weeks trying to predict golf ball trajectory by initial points and read a bunch of papers on the physics of the flight. In the meantime, I hired a contractor to help me with the ML algorithm that is capable of seeing a tiny ball in the video.

My first contractor tried to do the simplest possible detection-based algorithm. After a few weeks of almost zero progress, I decided to fire him. I hired another much more promising guy, let's see what we can do together.

I quickly realize that it was going to take way longer than I expected to add something good for golfers, so I decided to engineer a simple manual interface. At least this way they will be able to trace something, and it hopefully will still be much more convenient than the original disc golf interface. After a couple of weeks of prototyping, I decided to go with the simple Bezier curve fitting interface.

The user gets 4 points to move around and create a smooth curve with them. The problem was timing - how to fit the timing so it resembles the actual golf ball flight? I've tried different functions - quadratic curve, log, exp. IN the end, I decided to give users a handle to adjust the log function sharpness. It's not very accurate, but it's good enough I believe.
![](/images/golf-interface.gif)

Learn what happens next - in the next episode of [ivkin.dev](https://ivkin.dev)