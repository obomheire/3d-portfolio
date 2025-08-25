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
  { value: 95, suffix: "+", label: "Completed Projects" },
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
    date: "September 2019 – October 2021",
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
    date: " December 2021 – November 2023",
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
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Zack. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Zack was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Zack was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Zack's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Zack is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Zack was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Zack’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Zack was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
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
