import {
  lll,
  lll_banner,
  netfrux_banner,
  netfrux_logo,
  shellcode,
  shellcode_banner,
  talentmonk,
  talentmonk_banner,
  webxela_banner,
  webxela_logo,
} from "../assets/images";

const experienceData = [
  {
    image: netfrux_logo,
    company: "NetFrux Technologies",
    jobType: "Full-time",
    description:
      "Built a powerful automated Python/Selenium framework to efficiently manage 10 Twitter accounts with unique proxies, enabling simultaneous logins, automated content management, and secure operations.\n\nDeveloped high-performance Flutter applications using BLoC and Provider for state management, implementing custom widgets, complex animations, and real-time data handling to ensure a seamless, responsive, and engaging user experience across platforms.\n\nOptimized application performance by applying advanced state management techniques, significantly reducing load times while enhancing speed, memory efficiency, and overall stability.\n\nDesigned scalable, reusable, and modular components to accelerate development, ensuring maintainability across projects while seamlessly integrating APIs and third-party services for robust backend communication.",
    techStack: ["Flutter", "Dart", "BLoC", "Provider", "Python", "Selenium"],
    githubLink: "https://github.com/your-github/netfrux-project",
    liveLink: "https://netfrux.com",
    timePeriod: "Nov 2024 - Present",
    location: "Chandigarh, India",
    role: "Software Developer",
    banner: netfrux_banner,
  },
  {
    image: webxela_logo,
    company: "WEBXELA",
    jobType: "Full-time",
    description:
      "Developed a highly interactive lottery app using Flutter, REST API, BLoC, and clean architecture, seamlessly integrating Razorpay to enable secure and hassle-free ticket purchases.\n\nEngineered a high-performance technical service provider app leveraging Provider state management and REST API, optimizing efficiency, scalability, and delivering an intuitive user experience.\n\nResolved critical bugs, implemented advanced performance optimizations, and enhanced application stability, responsiveness, and overall user satisfaction through continuous improvements.",
    techStack: ["Flutter", "Dart", "BLoC", "Provider", "REST API"],
    githubLink: "https://github.com/your-github/webxela-project",
    liveLink: "https://webxela.com",
    timePeriod: "Jan 2024 - Oct 2024",
    location: "Bengaluru, Karnataka, India",
    role: "Flutter Developer",
    banner: webxela_banner,
  },
  // {
  //   image: talentmonk,
  //   company: "TalentMonk",
  //   jobType: "Internship",
  //   description:
  //     "Designed and implemented a dynamic template builder using React Hook Form, managing deep-level content hierarchy for customizable fonts, styles, colors, and themes.\n\nDeveloped an intuitive content customization system, enabling administrators to effortlessly modify content, leveraging MERN stack technologies and Redux for efficient state management.\n\nFocused on crafting polished, user-friendly interfaces with a strong emphasis on responsiveness, accessibility, and seamless customization, enhancing the overall user experience.\n\nRecognized for delivering high-performance front-end solutions, ensuring smooth and scalable customization capabilities.",
  //   techStack: ["React", "Redux", "MERN Stack", "React Hook Form"],
  //   githubLink: "https://github.com/your-github/talentmonk-project",
  //   liveLink: "https://talentmonk.com",
  //   timePeriod: "Nov 2023 - Jan 2024",
  //   location: "Bengaluru, Karnataka, India",
  //   role: "Full-stack Developer",
  //   banner: talentmonk_banner,
  // },
  {
    image: lll,
    company: "Little Leagues Live",
    jobType: "Internship",
    description:
      "Developed a high-performance Android application using Flutter and Firebase, integrating the Instamojo payment gateway to enable seamless sports class and accessory purchases.\n\nImplemented a secure and efficient transaction system, ensuring a smooth and reliable payment experience for users.\n\nOptimized app performance and ensured stability across Android devices by leveraging expertise in Flutter, Firebase, and secure digital payment processing.\n\nEnhanced user engagement with a responsive UI, intuitive navigation, and real-time data synchronization, delivering a seamless and scalable application experience.",
    techStack: ["Flutter", "Firebase", "Instamojo"],
    githubLink: "https://github.com/your-github/little-leagues-project",
    liveLink: "https://littleleagues.live/",
    timePeriod: "Mar 2023 - Jul 2023",
    location: "Kolkata, West Bengal, India",
    role: "Flutter Developer",
    banner: lll_banner,
  },
  {
    image: shellcode,
    company: "ShellCode Solutions",
    jobType: "Internship",
    description:
      "Developed the frontend for a dynamic travel and hospitality platform, enabling seamless tour planning, vehicle rentals, and hotel bookings with an intuitive and responsive user interface.\n\nLed the digital transformation of a poultry management system, automating workflows and reducing manual effort by 50%, while improving operational efficiency by 30% through optimized data management and real-time monitoring.\n\nDesigned and developed a study abroad platform offering university insights, IELTS coaching, and comprehensive exam preparation resources, enhancing accessibility for aspiring international students.\n\nEngineered a feature-rich real estate application for property transactions, integrating secure digital document verification and seamless access to legal assistance, streamlining the buying and selling process.",
    techStack: ["Flutter", "Firebase", "REST API"],
    githubLink: "https://github.com/your-github/shellcode-project",
    liveLink: "https://shellcode.co.in",
    timePeriod: "Dec 2022 - Feb 2023",
    location: "Pune, Maharashtra, India",
    role: "Flutter Developer",
    banner: shellcode_banner,
  },
];

export default experienceData;
