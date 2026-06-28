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
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Systems", imgPath: "/images/concepts.svg" },
  { text: "APIs", imgPath: "/images/designs.svg" },
  { text: "Products", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Systems", imgPath: "/images/concepts.svg" },
  { text: "APIs", imgPath: "/images/designs.svg" },
  { text: "Products", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Production APIs" },
  { value: 40, suffix: "%", label: "API Performance Gain" },
  { value: 35, suffix: "%", label: "Deployment Time Reduction" },
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
    imgPath: "/images/logos/policy-cortex.png",
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
    title: "Scalable Problem-Solving",
    desc: "Breaking complex product and infrastructure challenges into reliable systems that ship cleanly.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear Communication",
    desc: "Keeping stakeholders aligned with concise updates, honest tradeoffs, and predictable delivery.",
  },
  {
    imgPath: "/images/collaboration.png",
    title: "Cross-Functional Collaboration",
    desc: "Working smoothly with product, QA, and engineering teams across discovery, build, and launch.",
  },
  {
    imgPath: "/images/time.png",
    title: "Delivery Ownership",
    desc: "Shipping dependable work on schedule without compromising quality, performance, or safety.",
  },
  {
    imgPath: "/images/scalable.png",
    title: "AI & RAG Systems",
    desc: "Building multimodal retrieval, voice AI, and workflow automation that expand product capability.",
  },
  {
    imgPath: "/images/seo.png",
    title: "Quality Engineering",
    desc: "Applying testing, monitoring, and careful implementation to keep systems resilient in production.",
  },
];

const techStackImgs = [
  {
    name: "Node.js / NestJS",
    imgPath: "/images/logos/nodejs.png",
  },
  {
    name: "Python / FastAPI",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "React / Next.js",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "AWS / Docker",
    imgPath: "/images/logos/aws.png",
  },
  {
    name: "AI & Automation",
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
      "Develop and maintain scalable full stack applications using Node.js (NestJS), Python (FastAPI), Go (Gin), React, and Next.js, delivering reliable healthcare solutions with a strong focus on scalability, performance, and maintainability.",
      "Build responsive Next.js applications for clinical exam preparation, including course browsers, practice sessions, dashboards, and server-side rendered content.",
      "Develop React interfaces enabling real-time AI-powered clinical examination simulations through voice-to-voice interactions.",
      "Design and implement the Medscroll podcast platform, integrating AI-generated content, voice synthesis, and dynamic content delivery.",
      "Reduced database load and improved API response times by 40% through advanced Redis caching strategies.",
      "Built Docker deployment workflows on Ubuntu servers, improving deployment consistency and production reliability.",
      "Optimized PostgreSQL and MongoDB schemas through indexing, query optimization, and efficient data modeling; leveraged GORM for Go services.",
      "Integrated third-party APIs with retry mechanisms, timeout handling, structured error recovery, and data normalization.",
      "Architected and deployed multimodal RAG pipelines using Gemini Embeddings and Pinecone to power semantic search across clinical knowledge bases.",
      "Engineered real-time voice AI applications integrating OpenAI, Anthropic Claude, Google Gemini, and ElevenLabs for interactive clinical examination simulations.",
      "Designed AI-powered content generation pipelines automating clinical course creation across multiple examination categories.",
      "Built automated presentation generation workflows using LLM APIs and structured templates.",
      "Developed AI-powered podcast generation pipelines automating script generation, content organization, and voice synthesis.",
      "Engineered conversational AI assistants using the Gemini Live API with tool calling and function calling capabilities.",
      "Built high-throughput Go microservices using goroutines and channels for concurrent healthcare data ingestion and processing alongside FastAPI services.",
      "Integrated OpenAI, Google Gemini, Anthropic, and ElevenLabs APIs to deliver voice AI, intelligent document processing, multimodal analysis, and workflow automation.",
      "Leveraged Claude Code, Cursor, OpenAI Codex, QwenCoder, and OpenCode to accelerate software development, automate testing, improve code quality, and streamline engineering workflows.",
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
      "Architected and maintained production-grade backend services using NestJS (TypeScript), FastAPI (Python), and Go (Gin), implementing secure authentication, modular architectures, middleware, dependency injection, and REST APIs.",
      "Built React and Next.js applications for policy management dashboards, authentication, reporting, and administrative workflows.",
      "Implemented server-side rendering and dynamic routing with Next.js to improve application performance and user experience.",
      "Improved API response times by 35% through Redis caching, optimized key management, and cache invalidation strategies.",
      "Maintained 99.8% uptime across AWS-hosted production environments through monitoring, structured logging, and resilient error handling.",
      "Designed PostgreSQL schemas, indexes, and migrations supporting transactional business workflows; leveraged GORM for Go services.",
      "Built resilient third-party API integrations using retry logic, timeout management, rate limiting, and data normalization.",
      "Designed and implemented automated n8n workflows for notifications, reporting, data synchronization, and internal business processes.",
      "Leveraged ChatGPT and GitHub Copilot to accelerate prototyping, debugging, documentation, and engineering workflows while validating all generated outputs before production deployment.",
      "Evaluated the OpenAI API for intelligent workflow automation and text generation prototypes supporting internal engineering initiatives.",
      "Collaborated closely with product managers, QA engineers, and frontend developers throughout the Agile software development lifecycle.",
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
      "Built modular backend services using Node.js, TypeScript, and NestJS, implementing controllers, services, guards, and interceptors supporting payment, notification, and business APIs.",
      "Developed React and Next.js applications for payment workflows, user dashboards, and business notification systems integrated with backend APIs.",
      "Built reusable React component libraries for forms, tables, and notification interfaces using TypeScript.",
      "Reduced deployment time by 35% through Docker containerization and CI/CD automation on Ubuntu infrastructure.",
      "Implemented Redis caching for session management and API response optimization using effective TTL and cache invalidation strategies.",
      "Designed PostgreSQL schemas and optimized SQL queries supporting transactional and reporting workloads.",
      "Built supplementary Go (Gin) services for asynchronous event processing and background job execution using goroutines.",
      "Integrated the OpenAI API into a Python service to prototype AI-assisted notification workflows, evaluating prompt quality, response consistency, and workflow reliability.",
      "Leveraged ChatGPT to accelerate research, rapid prototyping, debugging, and technical documentation while validating AI-generated outputs before production use.",
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
      "Built secure RESTful APIs using NestJS with authentication, authorization, guards, interceptors, and input validation for healthcare applications.",
      "Developed responsive React and Next.js applications supporting patient management, appointment scheduling, billing, and healthcare administration.",
      "Built reusable Next.js components with server-side rendering and server-side data fetching to improve application performance and maintainability.",
      "Integrated frontend applications with backend APIs, ensuring reliable data flow and seamless user experiences.",
      "Designed PostgreSQL schemas supporting patient management, billing, and reporting workflows.",
      "Implemented Redis caching to improve application responsiveness and reduce database load.",
      "Maintained production-quality software through Jest unit and integration testing, structured logging, debugging, and technical documentation.",
      "Participated in code reviews, performance optimization, and engineering best practices to improve software quality and maintainability.",
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
      "Engineered scalable backend services and frontend applications using Node.js, TypeScript, NestJS, React, Next.js, and AngularJS, supporting millions of users across distributed production environments.",
      "Built React and Next.js interfaces for live sports betting, including real-time scoreboards, betting slips, wallet dashboards, and live event tracking.",
      "Implemented server-side rendering with Next.js to improve application performance and SEO for high-traffic betting pages.",
      "Developed real-time communication services using WebSocket and Socket.IO to deliver live scores, betting events, and wallet updates across load-balanced infrastructure.",
      "Designed Redis caching strategies for live sports feeds and high-frequency wallet transactions, reducing database load and improving response times.",
      "Integrated third-party sports data providers using pagination, retry logic, timeout handling, rate limiting, and data normalization.",
      "Developed comprehensive Jest unit and integration tests covering betting workflows, wallet services, concurrency scenarios, and third-party API integrations.",
      "Collaborated on backend optimization, production support, code reviews, and engineering best practices to improve scalability, reliability, and maintainability.",
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
