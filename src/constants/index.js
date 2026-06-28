const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Insights", imgPath: "/images/ideas.svg" },
  { text: "Strategies", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Insights", imgPath: "/images/ideas.svg" },
  { text: "Strategies", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "Satisfied Clients" },
  { value: 35, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/mamo.png",
  },
  {
    imgPath: "/images/logos/unionbank.png",
  },
  {
    imgPath: "/images/logos/betpawa.png",
  },

  {
    imgPath: "/images/logos/apifonica.png",
  },
  {
    imgPath: "/images/logos/heckerbella.png",
  },
  {
    imgPath: "/images/logos/loopscribe.svg",
  },
  {
    imgPath: "/images/logos/secure-sitizen.png",
  },
  {
    imgPath: "/images/logos/lisbon.png",
  },
  {
    imgPath: "/images/logos/medscroll.png",
  },
];

const abilities = [
  {
    imgPath: "/images/innovation.png",
    title: "Innovative Problem-Solving",
    desc: "Approaching challenges with creativity and technical expertise to build effective solutions.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear & Consistent Communication",
    desc: "Providing consistent updates and maintaining transparency at every stage of a project.",
  },
  {
    imgPath: "/images/collaboration.png",
    title: "Collaborative Mindset",
    desc: "Thriving in team environments by contributing ideas, sharing knowledge, and driving projects forward.",
  },
  {
    imgPath: "/images/time.png",
    title: "Deadline Commitment",
    desc: "Ensuring projects are delivered on schedule without compromising quality or performance.",
  },
  {
    imgPath: "/images/scalable.png",
    title: "Scalable Development",
    desc: "Designing and implementing software that grows seamlessly with user needs and business goals.",
  },
  {
    imgPath: "/images/seo.png",
    title: "Commitment to Quality",
    desc: "Crafting high-quality solutions with precision and meticulous attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Cloud Computing",
    imgPath: "/images/logos/aws.png",
  },
  {
    name: "AI-powered Tools",
    imgPath: "/images/logos/cursor-ai.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Zack consistently delivered high-impact full stack and AI-powered solutions at Medscroll, helping improve performance, reliability, and the overall learning experience for healthcare users.",
    imgPath: "/images/logos/medscroll.png",
    logoPath: "/images/logos/medscroll.png",
    title: "Full Stack Engineer",
    date: "Feb 2024 – Present",
    responsibilities: [
      "Developed and maintained scalable full stack applications using Node.js/TypeScript (NestJS), Python (FastAPI), and Go (Gin) on the backend, paired with React and Next.js frontends, serving millions of daily users with a strong focus on reliability, performance, and quality engineering.",
      "Built responsive, performant Next.js frontend interfaces for clinical exam preparation features, including dynamic course browsers, practice session UIs, and exam category dashboards with SSR and API Route integrations.",
      "Developed React-based UI components for the voice-to-voice conversation agent, enabling candidates to initiate, manage, and interact with live AI-powered exam simulations directly from the browser.",
      "Designed and implemented a Next.js frontend for the Medscroll podcast platform, featuring an audio player, episode listings, and dynamic content rendering powered by backend LLM and voice synthesis APIs.",
      "Reduced database load and improved API response times by 40% through advanced Redis caching strategies for high-frequency healthcare data access patterns.",
      "Built and maintained Docker-based deployment workflows on Ubuntu Linux servers, improving deployment reliability and achieving consistent production uptime.",
      "Optimized PostgreSQL and MongoDB schemas for high-volume operations, applying complex query optimization and indexing strategies to sustain performance at scale; leveraged GORM for type-safe database access in Go services.",
      "Integrated multiple third-party APIs with robust error handling, retry mechanisms, and data normalization tailored for healthcare compliance and data integrity.",
      "Architected and deployed a Multimodal Embedding & RAG System using Gemini Embeddings 2 and Pinecone, enabling semantic search and AI-powered knowledge retrieval over clinical content supporting context-aware question answering across multiple exam categories.",
      "Built a voice-to-voice live conversation agent enabling candidates preparing for clinical exams to practice and simulate different exam types and categories in real-time, integrating OpenAI, Claude, Google Gemini, and ElevenLabs SDKs for multi-model AI voice interaction.",
      "Designed and built an AI-powered content automation pipeline for clinical exam course generation, supporting multiple exam categories including RACP and OSCE, using agentic workflows to structure, sequence, and output course material at scale.",
      "Developed an automated slide generation workflow integrating LLM APIs with templated output logic, enabling rapid, consistent creation of educational presentation decks for clinical exam preparation content.",
      "Built an AI-driven podcast generation pipeline for the Medscroll podcast, automating script generation, content structuring, and audio production workflows using LLM and voice synthesis integrations.",
      "Engineered a voice-to-voice live assistant agent using the Google Gemini Live API with tool calls and function calls, enabling real-time user support, Q&A handling, and task completion via conversational AI.",
      "Built high-throughput Go (Gin) microservices for data ingestion and processing pipelines, leveraging Go's concurrency model (goroutines, channels) for parallel API calls and background job execution alongside Python FastAPI services.",
      "Integrated OpenAI, Google Gemini, and ElevenLabs APIs into backend services to deliver AI-powered voice agents, intelligent document processing, multimodal analysis, workflow automation, and LLM-driven features.",
      "Used OpenAI Codex and QwenCoder for automated test generation, producing Jest unit and integration tests as well as Go testify-based tests for healthcare data service modules.",
    ],
  },
  {
    review:
      "Zack’s contributions to PolicyCortex’s backend systems were outstanding. He consistently approached complex challenges with a problem-solving mindset, driving performance, scalability, and reliability improvements.",
    imgPath: "/images/logos/policy-cortex.png",
    logoPath: "/images/logos/policy-cortex.png",
    title: "Full Stack Engineer",
    date: "May 2023 – Jan 2024",
    responsibilities: [
      "Architected and maintained production-grade backend services using NestJS (TypeScript), FastAPI (Python), and Go (Gin), implementing controllers, providers, modules, guards, middleware, and dependency injection patterns for production-grade authentication and data APIs.",
      "Built React and Next.js frontends for internal policy management dashboards, including data tables, filtering UIs, authentication flows, and reporting views connected to NestJS, FastAPI, and Go backend APIs.",
      "Implemented Next.js App Router with server-side rendering and dynamic routing to deliver fast, SEO-optimized policy product pages with seamless backend data integration.",
      "Improved API response times by 35% through strategic Redis caching with optimized key design, TTL policies, and cache invalidation, directly enhancing user experience and platform reliability.",
      "Achieved 99.8% uptime across a multi-server AWS environment (EC2) by implementing structured logging, comprehensive error handling, and CloudWatch monitoring.",
      "Designed and optimized PostgreSQL schemas, indexes, and migrations to support complex transactional and authentication workflows at scale; used GORM for ORM-layer operations in Go services.",
      "Built resilient third-party API integrations with retry logic, rate limit management, and timeout controls, ensuring stable and compliant data flow for production services.",
      "Designed and implemented automated n8n workflows to orchestrate multi-step data processing pipelines integrating webhooks, conditional logic, and API nodes to automate internal notifications, data sync, and reporting tasks, reducing manual engineering effort significantly.",
      "Leveraged AI development tools to accelerate engineering workflows:",
      "Used Claude Code to accelerate architectural decision-making and rapidly prototype complex NestJS module structures, Go Gin service layouts, and FastAPI route handlers, reducing scaffolding overhead and freeing capacity for higher-order engineering challenges.",
      "Used Cursor as the primary AI-augmented development environment for intelligent code completion, inline refactoring, and context-aware generation across TypeScript, Python, and Go codebases.",
      "Used ChatGPT for rapid prototyping of API endpoint logic, generating test cases, and drafting technical documentation and onboarding guides.",
      "Integrated Google GenAI SDK (Text Generation API) for building internal LLM-powered data processing pipelines within FastAPI and Go Gin services.",
      "Integrated the Anthropic Text Generation API for intelligent data summarization and NLP-based query assistance within backend services.",
      "Collaborated closely with cross-functional teams including frontend engineers, product, and QA throughout the full SDLC, from discovery through deployment, in an agile environment.",
    ],
  },
  {
    review:
      "Zack’s contributions to Lisbon Platform were outstanding. He consistently approached complex challenges with a problem-solving mindset, driving performance and scalability improvements.",
    imgPath: "/images/logos/lisbon.png",
    logoPath: "/images/logos/lisbon.png",
    title: "Full Stack Engineer (Contract)",
    date: "Nov 2022 – May 2023",
    responsibilities: [
      "Built modular, production-grade backend services in Node.js/TypeScript (NestJS) with controllers, services, and interceptors supporting payment, notification, and business logic APIs.",
      "Developed React and Next.js frontend applications for payment flows, user account dashboards, and business notification interfaces, integrating directly with NestJS and Go backend APIs.",
      "Built reusable React component libraries for the platform UI, covering form validation, data tables, and real-time notification displays with clean, maintainable TypeScript code.",
      "Reduced deployment time by 35% through Docker containerization and CI/CD pipeline automation on Ubuntu Linux infrastructure.",
      "Implemented Redis for session management and API response caching with TTL management and cache invalidation, improving platform performance.",
      "Designed PostgreSQL schemas and wrote optimized queries supporting complex business reporting workflows.",
      "Built supplementary Go (Gin) services for high-throughput event processing and background job execution, leveraging Go's native concurrency model for non-blocking pipeline operations.",
      "Used Cursor and OpenCode for pair-programming AI assistance during feature sprints, accelerating delivery of NestJS module scaffolding, service layer logic, Go middleware, and database migration scripts.",
      "Integrated the OpenAI Agents Orchestration API for an experimental AI-orchestrated notification workflow, enabling agent-driven scheduling and multi-step processing of business alert pipelines.",
    ],
  },
  {
    review:
      "Zack’s work on Hekerbella’s applications brought quality and efficiency, delivering solutions that enhanced user experience and aligned with product goals.",
    imgPath: "/images/logos/heckerbella.png",
    logoPath: "/images/logos/heckerbella.png",
    title: "Full Stack Engineer (Contract)",
    date: "May 2022 – Nov 2022",
    responsibilities: [
      "Built secure RESTful APIs using NestJS guards and interceptors for a healthcare management platform handling sensitive patient data, implementing authentication, authorization, and robust validation strategies.",
      "Developed responsive user interfaces with React and Next.js, enabling efficient patient record management, appointment scheduling, and billing workflows.",
      "Built reusable Next.js page components and layouts with server-side data fetching, improving load performance and delivering a consistent user experience across the healthcare platform.",
      "Integrated frontend applications with backend APIs, ensuring seamless data flow, state management, and optimized user experience across modules.",
      "Designed PostgreSQL schemas for patient records, billing, and reporting, with optimized queries for complex healthcare workflows.",
      "Implemented Redis caching for frequently accessed healthcare records, reducing database load and improving query performance.",
      "Maintained production code quality through Jest unit and integration testing, structured logging, and thorough documentation.",
      "Used ChatGPT and Gemini Pro for generating boilerplate API handler logic, writing JSDoc documentation, and drafting database schema designs for rapid iteration during early-stage development.",
    ],
  },
  {
    review:
      "Zack’s work at BetPawa delivered high-quality, efficient solutions that strengthened platform reliability and enhanced the online betting experience.",
    imgPath: "/images/logos/betpawa.ico",
    logoPath: "/images/logos/betpawa.ico",
    title: "Full Stack Engineer",
    date: "Dec 2020 – May 2022",
    responsibilities: [
      "Engineered highly concurrent backend and frontend systems in Node.js/TypeScript (NestJS), React, and Next.js, supporting millions of users with 99.8% uptime across distributed infrastructure, with AngularJS maintained for legacy modules.",
      "Built React and Next.js frontends for live sports betting interfaces, including real-time score displays, bet slip UIs, and wallet dashboards, integrating WebSocket streams for live data updates.",
      "Implemented Next.js SSR for high-traffic sports landing pages, improving initial load times and SEO performance across key betting markets.",
      "Implemented real-time WebSocket/Socket.IO features for live score updates and betting events across a multi-server environment behind a load balancer.",
      "Designed sophisticated Redis caching strategies for live sports data and high-frequency wallet transactions, optimizing key design for performance under load.",
      "Integrated third-party sports data APIs with pagination handling, rate limiting, retry logic, and data normalization to ensure reliable data flow.",
      "Integrated the Google GenAI Live API for experimental real-time sports commentary features, streaming AI-generated live match insights via WebSocket to connected clients.",
      "Used OpenAI Codex for generating boilerplate TypeScript service modules, accelerating development of bet processing and wallet transaction handlers.",
    ],
  },
];

const testimonials = [
  {
    name: "Ifeanyi Otiwa",
    mentions: "@ifeanyiotiwa",
    review:
      "Zack played a key role in building and scaling BetPawa’s betting platform, delivering secure, high-performance systems that handled millions of real-time transactions with reliability. His contributions to payments integration, live betting features, and platform optimization greatly improved user experience, engagement, and overall system resilience.",
    imgPath: "/images/otiwa.png",
  },
  {
    name: "Mohammed Hassan",
    mentions: "@emperohm",
    review:
      "Zack was a key driver of innovation at Lisbon Platform, where he engineered scalable APIs, AI-powered tools, and real-time tracking systems that transformed logistics operations. His ability to balance technical depth with business impact made him invaluable in improving compliance, reducing costs, and delivering a more reliable customer experience.",
    imgPath: "/images/emperor.png",
  },
  {
    name: "Naheem Adedokun",
    mentions: "@naheemadedokun",
    review:
      "Zack was instrumental in developing and delivering a full hospital management system that streamlined patient care, scheduling, and billing operations. His strong backend and frontend expertise, combined with a focus on security and performance, significantly improved efficiency and reliability across the platform",
    imgPath: "/images/naheem.png",
  },
  {
    name: "Valentine Egbonyi",
    mentions: "@valentineegbonyi",
    review:
      "Zack is an exceptional software engineer who combines strong technical expertise with innovative problem-solving. His work on AI integration, scalable APIs, and performance optimization at Medscroll significantly improved student engagement, platform reliability, and overall efficiency.",
    imgPath: "/images/val.png",
  },
  {
    name: "Oluwasanmin Owoka",
    mentions: "@sanmiowoka",
    review:
      "Zack was instrumental in scaling BetPawa’s betting platform to handle high-volume, real-time transactions during peak events. His expertise in payments, security, and live feature development not only boosted performance and compliance but also created a smoother, more engaging experience for millions of users.",
    imgPath: "/images/sanmi.png",
  },
  {
    name: "Samuel Ayodele",
    mentions: "@samuelayodele",
    review:
      "Zack brought exceptional backend expertise to Lisbon Platform, building real-time logistics systems that greatly improved delivery accuracy, payment processing, and customer support. His work on AI-powered assistants, secure integrations, and cost-optimized infrastructure directly enhanced reliability, scalability, and user satisfaction across the platform.",
    imgPath: "/images/samuel.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/zack.bello.35/",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link: "https://web.facebook.com/obomheire/",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link: "https://x.com/Bello_Zack/",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/zack-bello-79a163126/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
