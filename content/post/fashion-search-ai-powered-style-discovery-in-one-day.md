---
title: "Fashion Search Ai Powered Style Discovery in One Day"
date: 2025-04-10T20:53:38-04:00
Description: ""
Tags: ["ai", "hackathon"]
Categories: []
DisableComments: false
---
**Launch Date:** April 6, 2025 (Sundai Club Hackathon)  
**Tagline:** *"The Perplexity for Fashion. Discover your style. Visualize your look. This is fashion discovery, redefined."* ([All Projects - Sundai Club](https://www.sundai.club/projects#:~:text=The%20Perplexity%20for%20Fashion,This%20is%20fashion%20discovery%2C%20redefined))

## From Cybersecurity Theme to a Fashionable Pivot

Last Sunday, I participated in a one-day hackathon at **Sundai.club** – a weekly AI hackers' meetup in Boston. The official theme was cybersecurity, sponsored by an AI security company. However, I teamed up with a fun group of fellow hackers and we decided to pivot to something more playful: an AI-driven fashion search engine. 
After all sundai is not just about smart engineers and using AI, but also about being frolic, which aligns with my values a lot 🙂
![](/images/fashion-team.jpg)

We wanted to build *"the Perplexity for Fashion"* – essentially a specialized AI assistant for style advice ([All Projects - Sundai Club](https://www.sundai.club/projects#:~:text=The%20Perplexity%20for%20Fashion,This%20is%20fashion%20discovery%2C%20redefined)). The result of our 8-hour sprint was **Fashion Search**, an app that lets users discover new outfits and shop for recommended looks via AI.

This hackathon project was a series of firsts for me: my first time using **Next.js** for a full-stack app and my first deployment on **Vercel**. Despite the learning curve, Next.js proved to be a great fit for rapidly building both the frontend and backend API in one project. By the end of the day, we had a live demo running on Vercel ([GitHub - evekeen/fashion_search](https://github.com/evekeen/fashion_search#:~:text=)), complete with user authentication, an AI-powered recommendation engine, and real product search integration.

## Architecture Planning and Parallel Development

Before diving into coding, we spent crucial time discussing and planning our architecture. This upfront investment proved invaluable for our three-person team:

- **Module Separation:** We divided the application into clear, independent modules: the frontend UI, the AI processing pipeline, and the shopping integration. Each developer could work on their module without blocking others.

- **API Contract Design:** We defined clear interfaces between modules upfront. For example, we agreed that the AI pipeline would return a standardized JSON structure containing both the generated image URL and a list of clothing items to search for. This allowed the shopping module developer to start building their integration while the AI pipeline was still in development.

- **Data Flow Planning:** We mapped out how data would flow through the system - from user input to final recommendations. This helped us identify potential bottlenecks early and plan our rate limiting strategy.

- **Technology Choices:** We made key decisions about our tech stack together, ensuring everyone understood the implications. For instance, choosing Next.js meant we could use its API routes for our backend, simplifying deployment.

This architectural planning session, though it took about an hour of our hackathon time, enabled us to work in parallel effectively. While one person built the frontend components, another could develop the AI integration, and a third could work on the shopping API - all without stepping on each other's toes.

## Project Overview and Goals

**Fashion Search** is an AI-powered style recommendation platform that allows users to upload images reflecting their preferred fashion aesthetics, describe their desired style, and receive targeted outfit recommendations ([GitHub - evekeen/fashion_search](https://github.com/evekeen/fashion_search#:~:text=)). In essence, it's like having a personal stylist and shopper powered by AI. The app's core goals and features include:

- **Inspiration Uploads:** Users can upload reference photos of outfits or items they like. These images help define the user's style preferences (e.g. boho, streetwear, minimalist).
- **Style Description:** Users fill a short form describing what they're looking for – for example, *"I need a spring outfit with a casual vibe, budget-friendly, for a male 20s"*. They can also provide attributes like preferred colors, gender, or occasion.
- **AI-Generated Look:** The app uses an AI image model to **visualize a recommended outfit** that matches the user's description. This helps the user *see* the style suggestion.
- **Shopping Recommendations:** In parallel, the app searches online for real clothing items (jacket, top, pants, shoes, etc.) that fit the described look. It then presents a curated list of products by category, so the user can shop the complete outfit.

## Tech Stack and Architecture

Our stack was a mix of modern web frameworks and several AI services working in concert:

- **Next.js 13 + TypeScript:** Handles both the frontend UI and backend API routes. React 19 and Tailwind CSS power the interface styling ([GitHub - sundai-club/insta-gift](https://github.com/sundai-club/insta-gift#:~:text=,Integration%3A%20Major%20fashion%20retailer%20APIs)). Next.js gave us a convenient way to build serverless API endpoints alongside the frontend, which was perfect for a hackathon.
- **Vercel:** We deployed the app on Vercel for ease of hosting. This was my first Vercel deployment, and it streamlined the CICD – every git push auto-deployed our latest build. It was impressive to see the app live so quickly.
- **NextAuth (Auth.js):** We implemented simple OAuth login (Google) using NextAuth. This gated the main features behind a login, mostly to track users' searches and avoid abuse. Setting up authentication in Next.js was straightforward and important since our app calls rate-limited APIs.

 [![](https://mermaid.ink/img/pako:eNpFUMtuwjAQ_BVrzxAR4jzIoVIgQFNFFYJSVXU4uGSBtMSOnITSIr6r935ZTRDpybMzszPynmAtUwQftooXOxLPExGwZYmKDJX81O-KdLt3ZMge8VgZ7yUJioJIQZ5RrXG_SsSw0UeNHtTVrqVCNp09dSkJZlHLjVkQkSjnWyRTFKh4lemsBapDtsZS28aNbcIWFX_bIwmzzaYutaeVpiwM4vj3Z0z6LXfPJvHypTtTsi2KmA4tUBkpHlrygc0xzS414fVTtwANoiuAjj5EloJfqRo7kKPK-WWEUyIISaDaYY4J-BqmXH0kkIiz3im4eJUyv60pWW934G_4vtRTXaS8wjDj-sT_FhQpqpGsRQW-2ySAf4Ij-LRvGtQyB65jmZ5lD2gHvsA3XWp4A8ellutSatKec-7Ad9PZM-yB03dt23V6juk5nn3-A-qAjtw?type=png)](https://mermaid.live/edit#pako:eNpFUMtuwjAQ_BVrzxAR4jzIoVIgQFNFFYJSVXU4uGSBtMSOnITSIr6r935ZTRDpybMzszPynmAtUwQftooXOxLPExGwZYmKDJX81O-KdLt3ZMge8VgZ7yUJioJIQZ5RrXG_SsSw0UeNHtTVrqVCNp09dSkJZlHLjVkQkSjnWyRTFKh4lemsBapDtsZS28aNbcIWFX_bIwmzzaYutaeVpiwM4vj3Z0z6LXfPJvHypTtTsi2KmA4tUBkpHlrygc0xzS414fVTtwANoiuAjj5EloJfqRo7kKPK-WWEUyIISaDaYY4J-BqmXH0kkIiz3im4eJUyv60pWW934G_4vtRTXaS8wjDj-sT_FhQpqpGsRQW-2ySAf4Ij-LRvGtQyB65jmZ5lD2gHvsA3XWp4A8ellutSatKec-7Ad9PZM-yB03dt23V6juk5nn3-A-qAjtw)
 
  *System architecture of Fashion Search. The Next.js app (deployed on Vercel) serves the frontend and API. It integrates with multiple external AI services: OpenAI for GPT-4 (text understanding), OpenAI's DALL·E, Hugging Face Stable Diffusion, and Replicate FLUX-Pro (image generation). It also uses Serper.dev to fetch Google Shopping results, and Redis for caching & rate-limiting.*

As shown in the architecture diagram above, **Fashion Search** connects to a suite of AI and cloud services to deliver its functionality:

- **OpenAI GPT-4 API:** We used OpenAI's GPT-4 (via the ChatGPT API) as the "brain" of the stylist. GPT-4 interprets the user's text input (style description and any insights from uploaded images) and generates a concise **style profile and search plan**. Essentially, it acts as the fashion expert: taking the user's preferences and formulating what outfit pieces are needed and what to search for. For example, GPT-4 might output: *"This user wants a casual spring look: recommend a light denim jacket, white t-shirt, khaki chinos, and white sneakers."* This guided the rest of the pipeline.
- **AI Image Generation (Stable Diffusion, DALL·E 2, FLUX-Pro):** To *visualize* the recommended style, we integrated three text-to-image models:
  - *Stable Diffusion* via Hugging Face's API – a versatile open-source image model.
  - *OpenAI DALL·E 2* – OpenAI's generative image API, known for creative fidelity.
  - *FLUX 1.1 Pro* via Replicate – a lesser-known model from Black Forest Labs that excels at fashion imagery (we discovered Flux-Pro on Replicate and wanted to try its "trending fashion" capabilities).
  
  We experimented with all three models given time constraints. The backend would send the outfit description prompt to a model and get back the generated image. We found that **Stable Diffusion** (with the right prompt tuning) and **Flux-Pro** produced the most stylish and relevant outfit renderings. DALL·E didn't not impress me. The generated image is then displayed in the results as a "AI-crafted outfit inspiration."

![](/images/fashion-style1.jpg)

- **Google Shopping Search (Serper.dev):** To find real products matching the outfit, we needed a way to query Google Shopping or another product database. This turned out to be one of the hardest parts of the project. We initially considered official APIs or scrapers (like SerpApi, which we noted in our plan ([GitHub - evekeen/fashion_search](https://github.com/evekeen/fashion_search#:~:text=,Data%20Storage%3A%20Redis))), but many were paid or complex to use. We eventually settled on **Serper.dev**, which markets itself as *"the world's fastest & cheapest Google Search API"* ([Serper - The World's Fastest and Cheapest Google Search API](https://serper.dev#:~:text=The%20World%27s%20Fastest%20%26%20Cheapest,Google%20Search%20API)). Serper's API allowed us to perform a live Google Shopping query for each clothing item. For example, for "light denim jacket men" it returns a list of products with titles, prices, and images. We integrated these results into our app, showing a list of actual items (with links to the stores) for each recommended outfit component.
- **Redis:** We used a cloud Redis instance to store user search history and enforce rate limiting. Since the external APIs (OpenAI, etc.) have usage caps, we limited each user to a certain number of searches per day. Redis stored a simple counter per user and cached recent results. This is also useful for not repeating the OpenAI call if the user refreshes the page with the same query, for example. In a hackathon setting, setting up Redis was quick (using Upstash free tier), and it gave us persistence without setting up a full database.

## Rapid Design Iteration with AI

One of the most exciting aspects of building Fashion Search was how we leveraged AI tools for rapid design iteration. We used **Lovable** and **v0.dev** to quickly prototype different UI layouts and design ideas. This workflow was incredibly efficient:

![](/images/fashion-screenshot1.jpg)

- **Design Exploration:** We would draft web app layouts using these AI design tools, experimenting with different component arrangements and visual styles. The tools would generate complete, functional UI mockups that we could instantly visualize.

- **Screenshot to Implementation:** When we found a design we liked, we'd take a screenshot and use Cursor to transform our existing code to match the new layout. The AI would understand the visual changes and implement them in our Next.js components.

![](/images/fashion-screenshot2.jpg)

- **Team Collaboration:** Our team could quickly iterate through designs together. One person would generate a design idea, we'd discuss it, and then implement it within minutes using AI assistance. This rapid feedback loop was crucial for our one-day hackathon timeline.

- **Component Generation:** Sometimes we'd ask the AI to add entirely new sections to our website based on a design reference. For example, we could say "add a product grid section like in this image" and the AI would generate the necessary React components and styling.

This AI-powered design workflow was a game-changer. Without these tools, we would have spent hours manually coding UI changes. Instead, we could focus on the core functionality while maintaining a polished, professional look. It's incredible how AI agents have accelerated our development speed - we're truly coding at the speed of light these days.

## Post-Hackathon Production Readiness

While we had a working demo by the end of the hackathon, making Fashion Search production-ready required several nights of additional work. Here's what I had to address:

- **Authentication Implementation:** Contrary to what we demonstrated, the initial version didn't have proper authentication. I had to properly implement NextAuth with Google OAuth, set up secure session management, and ensure protected routes worked correctly.

- **Rate Limiting:** To prevent API abuse and manage costs, I implemented a Redis-based rate limiting system that restricts users to a certain number of searches per day. This was crucial since we're using paid APIs (OpenAI, Hugging Face, etc.).

- **Error Handling:** The demo version had basic error handling, but production needed robust error messages, fallbacks, and proper logging.

- **UI Polish:** While functional, the initial UI needed refinement for a better user experience. I added loading states, improved error messages, and enhanced the mobile responsiveness.

- **Security Measures:** I implemented proper API key management, input validation, and CORS policies to ensure the application was secure for public use.

This post-hackathon work highlighted an important truth about hackathons: while they're great for proving concepts and building demos, turning a hackathon project into a production-ready application requires significant additional effort. The gap between "it works on my machine" and "it works for everyone" is substantial, especially when dealing with AI APIs and user authentication.

## Integration Challenges

Building **Fashion Search** in a day was intense and came with a few challenges worth noting:

- **Figuring out the right image generation model:** We had to ensure the prompts we generated for the image models were specific and style-oriented (e.g., *"photo of a man wearing a light blue denim jacket, white t-shirt, khaki chinos, white sneakers, streetwear style"*). Each model had different prompt strengths – for instance, Stable Diffusion needed more detail to avoid generic results, whereas DALL·E sometimes needed style keywords removed to not confuse it. Despite a few hiccups (some models hallucinated with weird images), the flux model provided reliable results consistently.

![](/images/fashion-style2.jpg)

- **Google Shopping API Workarounds:** The search integration was the trickiest part. **Serper.dev** allowed us to fetch Google Shopping results without heavy cost (it offers 2,500 free queries, which was plenty for a demo). However, the downside was **image quality**. The product images returned by Serper are Google's compressed thumbnails (from `encrypted-tbn0.gstatic.com` URLs), which are quite small. In our app, the product pictures appeared a bit pixelated and low-resolution – not ideal for a visually-driven fashion app. We noted this as a trade-off for using a free/cheap service. In the future, we'd consider either upgrading to a paid API that gives higher-res images or implementing a secondary step to fetch better images from the product page. For the hackathon demo, we accepted the thumbnail quality in exchange for having *real* shoppable items listed instantly.

- **Next.js and Vercel Learning Curve:** Being new to Next.js, I ran into a few gotchas setting up the project structure. For example, configuring **NextAuth** for the first time took a bit of reading (callbacks, providers, etc.), and deploying environment variables on Vercel required careful handling (we had to add our API keys for OpenAI, HuggingFace, etc. in Vercel's dashboard). We also debugged some CORS issues when calling external APIs from our serverless functions. Fortunately, the Next.js dev experience is excellent – hot-reloading and built-in API routing sped up our progress. Vercel's deployment process was seamless once everything was configured. Seeing the app live at **[fashion-sundai.vercel.app](https://fashion-sundai.vercel.app)** during the demo was incredibly rewarding.

 ([Fashion Search | AI-Powered Fashion Recommendations](https://fashion-sundai.vercel.app/)) *An example outfit inspiration generated by Fashion Search. The app suggests complete looks (like this coordinated yellow athleisure set) and finds where you can buy each item. In this case, it would list a yellow cropped hoodie, matching joggers, and white boots with links to retailers.* 

*(Image above: stock photo used in the UI for illustration.)*

## Live Demo and Results

By the end of the hackathon, **Fashion Search** was up and running with core functionality. We presented a live demo where a user could upload inspiration photos, enter a style brief, and get a personalized style board. The app would display an AI-generated outfit image along with a list of clothing items (with prices) under sections like "Jacket", "Top", "Pants", "Shoes". Each item had a link to the store (via Google Shopping results). 

One example query we tried was for a "smart casual outfit for dinner, female, budget under $200". Fashion Search returned an elegant look: a black midi dress, denim jacket, and ankle boots. It generated an image of a woman in a semi-formal dress with a jacket, and listed a few product options for each piece (e.g., three black dresses from different brands, some denim jacket choices, etc.). This really showed the potential of combining generative AI with live shopping data – the audience could **see** the outfit idea and also **shop** it instantly.

Another fun test was using the uploaded image feature: we fed in a streetwear style Instagram photo and asked for a similar look. GPT-4 analyzed the image (we described it via prompt since we didn't fully implement image recognition) and came up with "graphic tee, oversized bomber jacket, ripped jeans, sneakers". The image models created a pretty convincing streetwear outfit visualization, and the shopping list pulled in some matching items (even a bomber jacket from ASOS that looked very close to the generated image!). It was a hit in the room.

## Final Thoughts

Building **Fashion Search** in one day was an exciting challenge and a great learning experience. It was incredible to go from an idea in the morning to a working AI product by evening. This project showcased the power of combining multiple AI services: by integrating language models, image generators, and search APIs, we created a mini "AI stylist" that can both *imagine* and *find* fashion items. The concise timeframe pushed us to be pragmatic – for instance, using Serper.dev for quick integration despite its limitations, and juggling three image APIs to maximize our chances of good outputs. 

Moving forward, there are plenty of improvements we could make. Higher resolution product images and more robust image analysis of user-uploaded photos would make the experience even better. We'd also refine the prompt engineering for the image models to get more consistent results (perhaps even fine-tune a Stable Diffusion model on fashion shots). Additionally, expanding the shopping sources beyond Google (e.g., using specific retailer APIs or Amazon) could provide more diverse recommendations.

All in all, **Fashion Search** was a success for a hackathon project. It was demoed live on Sundai Club's project showcase (you can find the project page on Sundai's site ([All Projects - Sundai Club](https://www.sundai.club/projects#:~:text=The%20Perplexity%20for%20Fashion,This%20is%20fashion%20discovery%2C%20redefined)) and the source code on GitHub). The live app is still hosted on Vercel at the link below – feel free to try it out (just note it's a hackathon prototype, so some quirks or API limits may apply). This project reinforced how quickly one can build something cool with the right tools and a bit of creativity. It definitely made for a more *stylish* Sunday than we initially expected, and it brought together AI and fashion in a way that felt like a glimpse of the future of shopping.

**Links:**

- 📝 **Project Page:** [Sundai Club – Fashion Search](https://www.sundai.club/projects/cef5b417-173f-4000-9eae-28155847b873)  
- 🤖 **Sundai Club** [All Projects - Sundai Club](https://www.sundai.club/projects]
- 💻 **GitHub Repository:** [evekeen/fashion_search](https://github.com/evekeen/fashion_search) (code and README)  
- 🌐 **Live Demo:** [fashion-sundai.vercel.app](https://fashion-sundai.vercel.app) – *AI Fashion Search Engine*  
- 🔍 **Serper API:** [Serper.dev](https://serper.dev) – *Google Search API we used for product results*