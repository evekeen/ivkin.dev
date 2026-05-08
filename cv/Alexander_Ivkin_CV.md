# Alexander Ivkin

Barcelona, Spain | [ivkin.dev](https://ivkin.dev) | [LinkedIn](https://linkedin.com/in/evekeen) | [GitHub](https://github.com/evekeen)

## Summary

Engineering leader and company builder with 15+ years shipping software products end to end — from JVM testing at Sun Microsystems to production AI agents today. Founded and sold a consumer mobile app with 6K paying subscribers. Co-founded a venture-backed health-tech startup as CTO. Led engineering teams of 3–6, owned product roadmaps, hired and mentored engineers. Currently independent — helping companies ship production agentic AI applications and modernize tired interfaces.

## Experience

### Independent AI Consultant — Ivkin LLC (Sep 2025 – Present)

Helping companies ship production agentic AI systems and modernize product surfaces end to end.

**Fairmarkit — Bid Pulse + Fair Platform** (Jan 2026 – Present)
Two production systems for a B2B procurement marketplace.

- Bid Pulse: agentic RFQ monitoring — discovers open bids, matches against 2.5M+ supplier catalog products via three-tier engine (MPN exact match → keyword scoring → pgvector semantic search), dual-evaluator LLM verification, email digest with engagement tracking
- Fair Platform: an internal Lovable that lets product managers and sales build and ship production prototypes to clients without engineering capacity. AI-assisted IDE with live preview, git-based scaffolding, one-click publishing, per-app Kubernetes isolation, security hardening (egress proxy, runtime threat detection, Okta SSO)
- Stack: Python (FastAPI), TypeScript, Next.js, React, PostgreSQL (pgvector), Kubernetes, ArgoCD, Terraform, DigitalOcean, OpenAI, Anthropic Claude

**Zumbach Electronic AG** (Sep 2025 – Present)
Reimagined UX for a Swiss industrial measurement system whose interfaces had been frozen in the 90s.

- Conducted user research with factory floor operators, then designed and built the replacement web platform from scratch
- Real-time live dashboard with multi-channel measurement grid; ZeroMQ pub/sub streaming from device → FastAPI → WebSocket to React
- Touch-screen-optimized tolerance configuration and product-recipe editing for factory operators
- Stack: React, TypeScript, FastAPI, Python, ZeroMQ, Docker (multi-arch incl. Raspberry Pi)

### Winrate.com — Head of Product Development (Aug 2025 – Jan 2026)

AI sales platform. Managed 4 engineers with full product ownership — roadmap, prioritization, delivery. Built the entire AI agent stack and supporting infrastructure from scratch.

- AI agent system for ICP creation, scoring, deep research with RAG, account research, call transcript analysis, and meeting prep — LangGraph with PostgreSQL checkpointing and human-in-the-loop interrupts
- Call transcript ingestion across Gong and Fireflies — three-stage pipeline (poller → SQS → processor) with chunking, embedding, and pgvector semantic search
- Distributed rate limiting and job orchestration — reduced wasted Lambda invocations by 96% (from ~30x to 1.1x per job at 15K jobs/day) via Redis Lua token-bucket and backpressure-aware singleton dispatcher
- Evaluation framework with multi-model comparison (Claude vs GPT-4) for continuous agent quality tracking
- Stack: TypeScript, React, AWS (Lambda, SQS, EventBridge, S3), PostgreSQL (pgvector), Redis, LangGraph, OpenAI

### Ace Trace — Founder & CEO (2021 – Aug 2025, Acquired)

Mobile sports video editor and shot tracer for golf, disc golf, and baseball. Built, grew, and sold the company.

- Grew to $15K MRR, 6K paying subscribers, ~10K monthly installs, 4.4-star App Store rating, #2 on App Store for "golf tracer"
- Custom neural network detecting 4-pixel objects in video and physics-based trajectory fitting compiled as iOS DyLib
- Ran extensive A/B tests on retention, pricing, and UX — killed features that didn't move metrics (social feed, auto-tracking)
- Hired and managed contractors for UX, ML research, and QA; organized weekly testing cadence
- Sold to an Italian app portfolio company through Flippa with full upfront payment via escrow.com

### Enabled Health Inc. — Co-Founder & CTO (Jan 2024 – Feb 2026)

AI-powered physical therapy for hospitals. Raised $200K pre-seed. Won MA Digital Health Sandbox grant.

- Led cross-functional team of engineers, UX and motion designers, and data analysts across two hospital pilots
- Built iOS bedside trainer with computer vision exercise tracking and a voice AI agent for patient communication
- Conducted hospital staff and patient interviews to validate features
- Closed company when hospital sales cycles proved unsustainable; returned remaining capital to investors

### Recspert — CTO & Product Manager (Dec 2022 – Apr 2023)

Led team of 3 building a marketplace for recreational training sessions.

- Full-stack platform with Stripe connected accounts (75/25 split), real-time messaging (Twilio), background checks (Checkr)
- Stack: React, TypeScript, Node.js, MongoDB, Stripe, Firebase Auth

### ALM Works — Lead Software Developer (Apr 2015 – Mar 2022, 7 years)

Enterprise Jira plugin ecosystem. 5,000+ customers; acquired by Tempo Software (2021).

- Built Structure.Gantt from scratch leading a team of 4 — cross-project timeline visualization, dependency tracking, resource allocation. 5,000+ installations
- Labs team (Structure Innovations): conducted customer interviews, prototyped MVPs, shipped Cross-Team PI Planner
- Interviewed engineering candidates and mentored junior developers across seven years; established new development processes

### Earlier Career

- **OpenWay Group** (2009–2015) — Built a testing framework for the Way4 card transaction processing engine — still in production use 15+ years later. Led Payment System Interchange team. Later moved to software development on web, mobile, kiosk, and ATM banking projects on the Way4 platform handling payments for 500+ organizations across 100+ countries
- **InviewLab** (2009–2013, part-time) — Built spectral recognition software; Skolkovo Innovation Award 2011 finalist
- **Sun Microsystems / Oracle** (2007–2009) — Test engineer on JDTS (Java Device Test Suite), testing JVM implementations across 11,000+ tests

## Education

- Moscow Institute of Physics and Technology (MIPT) — PhD track, Computer Science (computer vision research)
- SPbGETU "LETI" — Master's degree, Electronics and Microelectronics

## Technical Skills

- **Languages:** TypeScript, Python, Swift, Java, Kotlin, C++
- **AI/ML:** LangGraph, LangChain, OpenAI, Claude, PyTorch, OpenCV, pgvector, RAG, evaluation frameworks
- **Frontend:** React, Next.js, TailwindCSS
- **Backend:** Node.js, FastAPI, PostgreSQL, Redis, MongoDB
- **Infrastructure:** AWS (Lambda, SQS, EventBridge, S3), Kubernetes, Docker, Terraform, GitHub Actions
- **Mobile:** Swift/SwiftUI, React Native
