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
      "Zack applied creativity and technical expertise to build scalable AI-powered systems, greatly improving platform speed and user experience.",
    imgPath: "/images/logos/medscroll.png",
    logoPath: "/images/logos/medscroll.png",
    title: "Backend Developer",
    date: "July 2024 - Present",
    responsibilities: [
      "Built and maintained high-performance backend systems with PostgreSQL and MySQL, powering medical learning platforms used by students and professionals.",
      "Designed and deployed scalable GraphQL and REST APIs for real-time progress tracking, course delivery, and integration with external medical databases.",
      "Implemented fault-tolerant monitoring, logging, and alerting pipelines to ensure high system availability.",
      // "Ensured engineering best practices with automated testing, peer reviews, CI/CD, and modern DevOps pipelines.",
      // "Collaborated with cross-functional teams (educators, clinicians, product) to deliver features that improved engagement and outcomes.",
    ],
  },
  {
    review:
      "Zack’s contributions to Lisbon’s backend systems were outstanding. He consistently approached complex challenges with a problem-solving mindset, driving performance and scalability improvements.",
    imgPath: "/images/logos/lisbon.png",
    logoPath: "/images/logos/lisbon.png",
    title: "Backend Developer",
    date: "November 2023 - June 2024",
    responsibilities: [
      "Architecting and deploying high-performance backend systems to streamline logistics operations and ensure reliable delivery services.",
      "​​Design and maintain RESTful and event-driven APIs to support real-time shipment tracking, intelligent route optimization, and seamless integration with third-party platforms.",
      "Develop scalable data models and storage strategies using MySQL and MongoDB to support complex logistics workflows, from inventory and warehouse management to last-mile delivery.",
      // "Enhancing system reliability through advanced monitoring, logging, and fault-tolerant designs.",
      // "Implement robust CI/CD pipelines to enable rapid, safe deployments and maintain high development velocity across distributed teams.",
    ],
  },
  {
    review:
      "Zack’s work on Hekerbella’s applications brought quality and efficiency, delivering solutions that enhanced user experience and aligned with product goals.",
    imgPath: "/images/logos/heckerbella.png",
    logoPath: "/images/logos/heckerbella.png",
    title: "Full Stack Developer",
    date: " December 2021 – November 2023",
    responsibilities: [
      "Developed scalable and high-performance backend services using NestJS and TypeScript, powering core hospital operations such as patient management, appointment scheduling, billing, and reporting.",
      "Built responsive and user-friendly frontend interfaces using React, ensuring a smooth user experience for doctors, staff, and administrators.",
      "Designed and maintained RESTful APIs to handle communication between frontend and backend, including patient data management, calendar scheduling, and treatment records.",
      // "Implemented robust authentication and role-based authorization systems, securing sensitive patient and hospital data across the full stack.",
      // "Integrated payment gateways and SMS APIs to support secure billing and real-time notifications.",
      // "Managed MongoDB databases, designing schemas and optimizing queries for efficient access to critical medical data",
      // "Conducted end-to-end testing, debugging, and deployment of features to ensure high reliability in production.",
    ],
  },
  {
    review:
      "Zack’s work at BetPawa delivered high-quality, efficient solutions that strengthened platform reliability and enhanced the online betting experience.",
    imgPath: "/images/logos/betpawa.ico",
    logoPath: "/images/logos/betpawa.ico",
    title: "Full Stack Developer",
    date: "September 2019 – October 2021",
    responsibilities: [
      "Collaborated with product and design teams to deliver responsive and engaging React Native (mobile) and Angular (web) frontends for millions of users.",
      "Built and maintained scalable backend services to support real-time betting operations, including odds management, bet placement, payouts, and wallet transactions.",
      "Integrated with payment gateways (UIP, Remita) for seamless deposits, withdrawals, recurring billing, and real-time transaction settlement.",
      // "Implemented robust authentication, authorization, and anti-fraud mechanisms, ensuring platform security and compliance with gaming regulations.",
      // "Developed secure RESTful APIs for user account management, deposits, withdrawals, and transaction histories, ensuring smooth interaction across mobile and web platforms.",
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
