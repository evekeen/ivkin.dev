# Alexander Ivkin

Barcelona, Spain · [ivkin.dev](https://ivkin.dev) · [github.com/evekeen](https://github.com/evekeen) · [linkedin.com/in/evekeen](https://linkedin.com/in/evekeen) · [ivkin.dev/llms.txt](https://ivkin.dev/llms.txt)

---

## Summary

Full-stack engineer, 15+ years shipping products end to end. Currently building production AI agent systems — LLM orchestration, evaluation pipelines, React frontends, cloud infrastructure. Founded and sold a mobile app (6K paying subscribers). Deep hands-on experience with Python, Docker, Linux, React, and the full stack around LLM agents.

---

## Relevant Experience

### Independent AI Consultant — Ivkin LLC
**Jan 2026 – present · Barcelona**

**Fairmarkit / Bid Pulse** — Built an agentic RFQ monitoring system end to end for a procurement marketplace.

- Multi-stage matching pipeline: exact match → keyword scoring → batch semantic search (pgvector, OpenAI embeddings) → dual LLM evaluator verification (parallel loose/strict passes producing score ranges)
- Ground-truth evaluation system for measuring matching accuracy across the pipeline
- Full admin UI, email digest system with tracking, infrastructure (Terraform/OpenTofu, Docker, DigitalOcean)
- Stack: Python (FastAPI, pydantic-ai, SQLAlchemy), React 19, TypeScript, PostgreSQL (pgvector), Docker, Langfuse

**Zumbach Electronic AG (Switzerland)** — Reimagined UX for industrial laser measurement monitoring system.

- Real-time dashboard: ZeroMQ pub/sub → FastAPI → WebSocket → React UI, replacing legacy hardware displays
- Multi-arch Docker builds (amd64, arm64, arm/v7 for Raspberry Pi on production lines)
- Custom monorepo component library (35+ components, Storybook), ZMQ device simulator
- Stack: React 18, TypeScript, FastAPI, Python, Docker, pyzmq

### Winrate — Head of Product Development
**Aug 2025 – Jan 2026 · 6 months**

AI sales platform. Built the entire AI agent stack, evaluation framework, and distributed infrastructure from scratch. 7,123 commits in the monorepo.

- **AI agent system** (LangGraph + LangChain, TypeScript): multi-turn conversational workflows with human-in-the-loop, structured LLM output with Zod, multi-agent orchestration (planner → executor → compiler), RAG over pgvector, dynamic tool registration, call transcript ingestion pipeline (Gong/Fireflies → chunk → embed → store)
- **Evaluation framework** (LangSmith): dataset-driven, multi-model comparison (Claude vs GPT-4), configurable evaluators covering relevancy, coherence, citations, format compliance
- **Distributed rate limiting**: Atomic Lua scripts in Redis (token bucket), backpressure-aware job dispatcher on Lambda + SQS — reduced wasted invocations by 96% at 15K jobs/day
- Stack: React 19, TypeScript, AWS (Lambda, SQS, EventBridge, S3), PostgreSQL (pgvector), Redis, LangGraph, OpenAI GPT-4o

### Ace Trace — Founder & Solo Developer
**2021 – Aug 2025 · Acquired**

Mobile sports video editor with AI shot tracing. iOS and Android. **$15K MRR, 6,000+ paying subscribers, 10K monthly installs, 4.4★ App Store.**

- Custom UNet-RCNN neural network detecting objects as small as 4 pixels — three production model variants deployed via iOS On-Demand Resources
- Physics-based trajectory fitting: NLopt + Boost/odeint C++ ODE solver compiled as iOS DyLib
- OpenCV video stabilization, Visual SLAM, camera pose estimation
- Ran extensive A/B tests on features, pricing, and UX — killed features that didn't move retention, iterated pricing until finding a model that doubled conversion
- Built an AI agent for automated marketing outreach to golf influencers on Instagram
- Acquired in 2025

### Enabled Health — Co-Founder & CTO
**Jan 2024 – Feb 2026**

AI-powered physical therapy for hospitals. Voice AI agent, iPad trainer with computer vision pose/movement assessment. 80% of new code written by AI agents (Claude Code, Cursor). Managed mixed remote/on-site team. $200K pre-seed, 2 hospital pilots, MA Digital Health Sandbox grant. Closed company and returned investments — learned hard lessons about healthcare go-to-market.

### Recspert — CTO & Product Manager
**Dec 2022 – Apr 2023**

Virtual recreational center platform. Led team of 3 engineers, built from scratch: scheduling system, Stripe payments (connected accounts), real-time messaging (Twilio), background checks (Checkr). React 18, TypeScript, Node.js/Express, MongoDB.

### ALM Works — Lead Software Developer
**Apr 2015 – Mar 2022 · 7 years · Saint Petersburg → acquired by Tempo Software**

Built Structure for Jira (enterprise project management plugin, 5,000+ customers).

- Built **Structure.Gantt** from scratch leading a team of 4 — cross-project timeline visualization, dependency tracking, resource allocation
- **Labs team**: user research, prototyping, shipped Cross-Team PI Planner

### Earlier

- **InviewLab** (2009–2013) — Built spectral recognition software for sample material analysis from scratch. **Skolkovo Innovation Award 2011 finalist.**
- **OpenWay Group** — Built a testing framework for the Way4 card transaction engine (~2011), still in production 15 years later. Payment System Interchange team leader. Then internet/mobile banking on the Way4 platform.
- **Sun Microsystems / Oracle** — Test Engineer on JDTS (Java Device Test Suite), testing JVM implementations on embedded devices.

---

## Education

**Moscow Institute of Physics and Technology (MIPT)** — PhD track (Computer Vision), 2013–2015
- Built an object tracking system; published in Herald of Bauman MSTU

**SPbGETU "LETI"** — Master's degree, Electronics and Microelectronics, 2007–2009

**SPbGETU "LETI"** — Bachelor's degree, Electronics and Microelectronics, 2003–2007

**Relevant courses:** Stanford ML (2022), MIT Introduction to Deep Learning (2024), Neural Networks (Stepik, 2018)

---

## Technical Skills

**Languages:** Python, TypeScript, Swift, Java, Kotlin
**AI/ML:** LangGraph, LangChain, pydantic-ai, PyTorch, OpenCV, pgvector embeddings, structured output (Zod), LLM evaluation (LangSmith, Langfuse, ground-truth, multi-model comparison)
**Frontend:** React (18, 19), Next.js, TailwindCSS, shadcn/ui, Radix UI, Storybook
**Backend:** FastAPI, Node.js, SQLAlchemy, Alembic, ZeroMQ
**Infrastructure:** Docker (multi-arch), AWS (Lambda, SQS, EventBridge, S3), Terraform/OpenTofu, Linux, GitHub Actions CI/CD
**Databases:** PostgreSQL (pgvector), Redis (Lua scripting), MongoDB

---

## Hackathons & Builder Projects

Active participant at **Sundai Club** (weekly AI hackathons, Boston):

- **Tasks Auto-Complete** — AI agent monitoring desktop via Screenpipe, detecting routine patterns, offering to finish tasks. Electron + Chrome extension + Python browser-use agent
- **Fashion Search** — "Perplexity for Fashion" built in 8 hours. Next.js, GPT-4, Stable Diffusion, Google Shopping API
- **Vibe Debugging with Memes** — MCP server generating memes from error messages for Cursor
- **Evals for AI-Assisted Engineering** — Analyzing Claude Code traces for evaluating AI-assisted coding skills
- **James Webb Live** — 3D interactive visualization of real galaxy photographs. Three.js

Also: MIT Reality Hack (VR, Unity + Magic Leap), MIT AI Filmmaking Hackathon, YC Startup School (2022), ran indie hacker meetup in Belgrade
