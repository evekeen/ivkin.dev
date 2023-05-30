---
title: "My Startup Journey: Challenges and the Battle for Intellectual Property"
date: 2023-05-16T17:19:35-04:00
Description: ""
Tags: []
Categories: []
DisableComments: false
---

# YC Startup School and the co-founder matching platform

<img src="/images/monet-tech-startup.jpg" width="300px" style="float: left; padding-right: 20px;">

After completing the YC Startup School last summer, I found myself on a relentless pursuit of a co-founder and an exciting project to join as a
technical partner. I figured it would be share the startup journey with someone else. Eager to connect with
like-minded entrepreneurs, I turned to a co-founder matching platform that not only provided a platform for collaboration but also organized online
matching events. These events involved brief
five-minute conversations with randomly paired founders, allowing us to gauge compatibility before moving on to the next potential match.
Throughout these calls, I had the pleasure of meeting numerous individuals and exploring their projects. While some of them showed promise, I
discovered that many talented people weren't quite as
enthusiastic about collaboration as I had hoped. It became evident that finding the right match, someone who shared my vision and dedication was no
easy task. Although I encountered a few promising
projects along the way, each one seemed to possess its own set of flaws.

In December, I decided to let go of my relentless pursuit of the "perfect" co-founder and instead focus on taking action. After all,
building something, no matter how small, was
undoubtedly better than remaining stagnant. With this newfound determination, I embarked on a journey to create an online marketplace that catered to
coaches offering classes for recreational
activities. It aimed to be a digital recreational center, providing a platform for users to discover and engage in various training
programs.

<img src="/images/startup-girl.jpg" width="300px" style="float: left; padding-right: 20px;">
Fortuitously, I connected with a woman with experience as an administrator within recreational centers. We began our partnership by
completing an in-depth 50-question co-founders survey, laying the groundwork for a solid foundation. 
The survey covers many important topics that could be easily overlooked when trying to know a new person, a potential co-founder, better. It has several sections:

* HOW YOU OPERATE
* ROLES
* CORPORATE STRUCTURE AND FUNDING
* PERSONAL MOTIVATION
* COMMITMENT & FINANCES
* TEAM CULTURE
* CO-FOUNDER RELATIONSHIP


Subsequently, we engaged in several calls to foster a
deeper understanding of each other's values, aspirations, and work methodologies. The initial signs were incredibly promising; we shared a great
alignment on fundamental aspects such as company
culture, integrity, and the essential principles of running a successful venture.

<br style="clear: both;">

# The Beginning: A Promising Start

To test the waters and gain a deeper understanding of the business, I chose to participate in a small project. The startup was a year old, with two
part-time contractors developing the web
application. They had also secured a grant for some initial funding, which had been used to design Figma sketches for the platform. We agreed on a
roughly 50/50 equity split after the completion of
the test project, with shares vesting over four years and a one-year cliff, which is standard practice in the startup world. The founder had already
been vested for 1.5 years, which I wasn't entirely
thrilled about but was willing to accept.

<img src="/images/agreement.jpg" width="300px" style="float: left; padding-right: 20px;">

Despite finding the request for an immediate NDA somewhat peculiar, I decided to sign it for the sake of simplicity. I did, however, decline to sign
the contract she sent me, explaining that I
would only commit to something or pay for a lawyer once I was confident about my involvement in the project. We agreed to sign a contract after the
completion of the test project.

Honestly, that is a big newbie mistake; never start working with someone having no agreement at all.
It does not have to be written by expensive lawyers, and I think I was tricked here to believe it would be a complicated process.

<br style="clear: both;">

# A leap into chaos: Rescuing a sinking ship

<img src="/images/captain-laptop.jpg" width="300px" style="float: left; padding-right: 20px;">

Upon my onboarding to the team, the air was filled with enthusiasm and optimism. I was welcomed with the news that our application was nearly primed
for launch, with only one feature remaining on the docket. It seemed like smooth sailing from here, a prospect that filled me with eager anticipation.

Nevertheless, the reality that awaited me was starkly different. As I dived into the codebase and began my exploration of the application, it became
glaringly evident that the product was a far cry from being ready for release.

In addition to noticeable cosmetic issues such as inconsistent CSS (everything was out of place, errors were in black, every label had a different
font style, and elements were not aligned together) and a horde of unhandled exceptions, the application was in an identity crisis. It
lacked a clear sense of purpose, its raison d'être. As I tried to navigate it from a user's perspective, I found key functionalities missing or
malfunctioning.

However, that wasn't the worst part. I could not even understand what the app was for - I tried to purchase a class, and I could not do it. I tried to
create and post my class, but I could not. I asked the co-founder what was even the use case of the platform was for, but she could explain. I
read the pitch deck and everything, but it didn't make sense. The slides were about one thing, the Figma sketches about another, and the actual code
was irrelevant to either.

So I thought - that's not what I was looking for; this is a mess. Should I quit it? Since it is always easy to quit and I was watching lots of startup
materials, it looked like true founders don't give up quickly, and they keep pushing even when it's hard.
I'm not afraid of a challenge, so I decided - fuck it, let's make it work.

<img src="/images/zoom-call.jpg" width="300px" style="float: left; padding-right: 20px;">

I opened the source code and read some of it with a constant palm attached to my face. It was apparent - the team was not who they said they were.
Both engineers were, at best junior interns doing their first project, yet one of them was listed as a CTO of the company with huge experience. The
worst part - they were given a salary. Despite all that, every week at our Zoom calls and Slack communication, I stayed super positive and encouraged
to motivate them to learn from my example and do better. A fun fact about Zoom calls - only me and the co-founder were with cameras on; the rest
didn't show their faces. Honestly, it's a red flag meaning the team did not establish trust or good corporate culture.

Learning she paid salaries to these people made me sick - the quality of their work was garbage, so the first order of business was to offer them to
work for free for some time as interns. Surprisingly one of them was okay with that. He admitted his lack of skills and was motivated to learn from
me. The other one just quit. That's how I started re-doing everything. And I started from Lean Canvas, then use cases, then user flow in the app, and
finally mockups in Figma. It was difficult to even come up with use cases at first since the co-founder could not understand even the concept of use
case, nor could she speak product management to me. So I did everything myself.

Regrettably, the founder struggled to grasp the essence of use cases and the language of product management, rendering me a one-man show. Although
daunting, I held my ground, steadfast in my mission to breathe life into this project, one line of code at a time.

# Deep dive into the project


<img src="/images/nerdy-boy.jpg" width="300px" style="float: left; padding-right: 20px;">

While working on the product, I started fixing what was broken in the code part. And the most significant issue was that it was written in good old
plain JavaScript using ReactJS with no TypeScript. In the first couple of weeks, I rewrote 60% code to Typescript, fixing bugs and creating unit tests
along the way. At the same time, I explained the concept of Storybook to the team, and we created stories for every component we made or touched
during the development. Finally, I started seeing some structure in the organization.

It was hard doing everything myself, and despite one engineer staying as an intern, I soon realized he was not doing anything. I decided to bring
someone good to the project. One of my ex-co-workers was super interested and just quit his job. I initiated onboarding him to the team. However,
there was a problem - since he is Russian, it was a deal breaker for the co-founder since she was told no investor would work with a startup with
Russian founders or engineers because of the war thing. It was a painful and lengthy process of negotiating with her. Finally, we found a compromise -
he will work from another country, and having residency there would be enough to provide a clean team bio to the investors. As soon as the
negotiations were done, he suddenly disappeared, and later, I learned that he had returned to his old job due to family issues. That was
disappointing; however, he actually brought a replacement - his friend, a very good software engineer living in Kazakhstan. We started working
together.

<img src="/images/woman-walking-dogs.jpg" width="300px" style="float: left; padding-right: 20px;">

At one of the meetings, the co-founder brought up something that worried me - apparently, she was walking dogs for money. That was weird, especially
considering that she was paying salaries to people left and right. So I started asking questions, and she said it was all good, and we just needed to
launch our product soon so that she could pay off her credit card debt. What? Credit card debt? Yes, that's right - she was paying the engineers and
lawyers; she purchased subscriptions to services like Canva, QuickBooks, and so on, and all of that was bought with credit cards.

She said - it's okay. I only need to pay minimum monthly payments; that's why I walk the dogs. It was very difficult for me to understand the fine
part of that, but she told me it was because I'm Russian and have a different mentality. As an American entrepreneur, she would pursue the dream and
do everything it takes along the way despite how hard it might look for me. Well, we could not come up with an agreement, even though I explicitly
told her that it was a completely inappropriate way of doing business. As a potential co-founder, I would never agree to a decision like this in the
future — another red flag.

\- What was I supposed to do? - she said. - I cannot code like you, so I had to hire someone.

You need to learn how to code - learn how to code, bring a technical co-founder, or don't run a software startup.

Anyway, I decided to move on - it's better to do something than argue. After another couple of months of coding, our MVP is almost ready. We had fun!
I've implemented almost everything that I've planned myself for the launch. We had weekly meetings with the team. I bought an outstanding beginner
testing engineer, and she helped a lot with testing. The co-founder was super positive and did all sorts of good HR stuff, e.g., we would do
icebreakers during the meetings and tell what our favorite type of potato was.


<img src="/images/man-and-dog.jpg" width="300px" style="float: left; padding-right: 20px;">

Once we talked again about the company, I was still curious about the financial situation because if I decided to join it, it would become my problem.
It turned out that the credit card loan was only part of the whole thing. Also, she inherited $50K and invested them into the company right away. She
didn't talk much about it, but when I kept asking, she eventually admitted that she was written as an investor there. Another red flag! Before that, I
had an understanding that we were going to have a 50/50 split of equity between founders, but now it's unclear since on top of 50% of her share, she
also will have that investment portion. For me, it would not make sense to have less than 50% because I was doing the whole work, and everything she
spent before went to create something utterly useless that we had to throw away. Any attempt to understand what exactly was the deal there she ignored
until one day I pushed, and she offered for me to talk to her lawyer about that. I don't want to hire a lawyer and pay the bill when I have yet to
understand if I want to be in that company. So I decided to keep building and figure out after we launch the MVP. Even though I still haven't signed
anything and the test project took much longer than I expected, I still didn't want to spend money on lawyers. The best way to understand if the
business is working in this situation when she could not convince me by data was to actually launch the MVP and see with my own eyes if it's working.

I was thinking sometimes more and more that I did everything myself, and it was not clear why the co-founder. I decided to bring a 3rd co-founder who
would at least do the product management part. We started interviewing people. However, they were all this type of bored at their jobs, dudes who
never did startups or product management. They could not answer the simple questions about user interviews or anything related to data-driven approach
to decision-making about the product. However, I realized the co-founder wanted to avoid bringing another one; she thought she was helpful, and she
was very sensitive to this. All of this lead to my burn-out.

# The Fall: A Sudden Change of Heart

<img src="/images/man-broken-window.jpg" width="300px" style="float: left; padding-right: 20px;">

I was going to go to the Startup Grind conference in Redwood city, as I went the last year. I was inspired and met interesting people the previous
year, so that it would be a good re-start for me. Doing everything myself was hard, but after all, I'm a strong person, and a little break could help
me. I told the co-founder about my burnout and that we will have to wait for one week longer before we could ship our first version (which was one
week away already). However, she was firmly against it and didn't want to hear about my burnout or delay the launch date. Despite my trying to explain
to her she won't be able to pay her credit card debt in the near future and our launch won't bring us immediate revenue, she still was counting on
that as a last resort. She was willing to just hire someone if I needed a break and ship it without me. That sounded very odd to me, so I advised her
not to do it because it didn't make sense to take another loan and waste time onboarding new people when she could just wait for me one week to
reboot. Unfortunately, she just told me goodbye, and we ended up on a video call. I decided to remove my code contribution from the GitHub repo I
created myself earlier - I reverted it to the stage how it was before I started contributing.

The same day I flew to California with my friend and ex-coworker. It was a lot of fun to chat with him about all sorts of different project ideas as
well as about Ace Trace problems and the way to improve it. However, the conference experience was ruined by threats from the co-founder - she tried
to force me to give her what I'd built, bringing up lawyers and my future problems with immigration. It all looked like she was just trying to
intimidate me or manipulate me. However, it sounded very scary and unpleasant. Suddenly I could only think about this instead of creating new projects
and exploring interesting connections.


<img src="/images/courtroom.jpg" width="300px" style="float: left; padding-right: 20px;">
I tried to reason with her over text messages and, later, when she removed me from Slack, through phone calls. I explained calmly to her why I
believed I should keep my source code with me, and she never tried to explain her point of view. Instead of any explanation, there were only threats.
Once, I even offered her to onboard a new team to start working where I started, and she seemed to be interested in that. However, the next morning I
received an email from her newly hired engineer, asking me for my code and all sort of questions related to it (e.g., code documentation). I tried to
call her again and explain that with the code I'd created, I could only give her some compensation, and I tried to do a simple math of how many hours
I worked times the salary of an average senior developer. The minute I named the estimate, she hung up, and within 20 minutes, I received another
threat stating that all our future communication would be conducted through lawyers.

In a few days, when I was back in Boston, I did receive an official letter from her lawyers. It said that as that company hired me, anything I built
belonged to them, and also it stated that I tried to extort money from them. However, I showed it to people in the startup community online, and some
of them were lawyers and told me it was baseless and that I should not be worried. We did write an official response, though, asking on what grounds
they think they own my code, but we never received any response to that. I really didn't want to spend money on lawyers and these baseless threats;
however, I had to. As I understood, in the best-case scenario, even if she paid me for my code, we would have to hire lawyers to make an official
settlement and avoid future litigations. Just like that - not only I spent four months for nothing, but now I also have extra trouble and possibly
need to invest money.

# Lessons Learned 

<img src="/images/woman-hacking.jpg" width="300px" style="float: left; padding-right: 20px;">

Out of curiosity, I was monitoring her website, and in a few days, I saw something there. It was the app I created, running! She got my code somehow.
The first thought was a relief - finally, at least, I won't be dealing with a lawsuit. However, it was extremely unfair that she just stole my code
somehow. I talked to my friend, and he didn't give her the code. She obviously didn't have it, nor she knows how it works. The only explanation -
since I transferred the GitHub admin account to her, she must have contacted the support of GitHub and got the historical version of the repository
somehow.

Well, I honestly don't believe she is even capable of finishing and launching any successful business, which makes it easier for me to forget about my
code being mine. On the other hand, now I have an opportunity to sue her later in case she actually makes it since the IP belongs to me.

We will see how it turns out. And I'm back to creation. Ace Trace has a lot of things to work on; it constantly grows. A lot of cool people around me
are building something amazing, and it's good to be back. The whole experience is a big lesson to me, which maybe even is worth spending four months
half time. A very, very valuable lesson. Pepolygraphople can be not how they seem - always do a background check. For example, she had a co-founder before, but
the co-founder left. She claims they left because they found a job in Europe. However, I never checked that story.

<img src="/images/polygraph.jpg" width="300px" style="float: left; padding-right: 20px;">
A lot of red flags, and some of the things didn't quite make sense in my head, which might have been an indicator of her manipulating and lying to me.
Now it seems differently - for some reason, I had a lot of trust in her being an honest person. But when you know, she wasn't honest and wanted to
take advantage of me, a lot of things seem more obvious as an indication of a lie in her story. Her story didn't add up a few times; I had to be more
careful.

Also, a signed agreement would eliminate any potential lawsuit - it would be clear who owns what and on what grounds. Not having an agreement makes
space for lawyers to improvise and is a potential vulnerability.