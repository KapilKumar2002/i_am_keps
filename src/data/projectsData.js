import { project } from "../assets/images";

const projectsData = [
  {
    image: project,
    name: "Socket Chat App",
    description:
      "This project is a fully functional real-time chat application built using Node.js, Express, and Socket.io, allowing users to engage in seamless conversations with instant message delivery and real-time status updates. The frontend is crafted using React.js, ensuring a dynamic and responsive user interface, while Zustand efficiently manages the application state. Tailwind CSS, along with DaisyUI, has been used to design an elegant and user-friendly interface that enhances the user experience.\n\nThe primary objective of this project was to explore and implement real-time communication using WebSockets, handling multiple concurrent users efficiently. The app supports authentication through JSON Web Token (JWT), providing a secure environment for users. With robust event handling and optimized message broadcasting, this chat app delivers a smooth, real-time messaging experience with minimal latency. It is an ideal project for understanding the core principles of WebSockets, state management, and scalable chat applications.",
    techStack: [
      "MERN Stack",
      "Socket.io",
      "Tailwind CSS",
      "Zustand",
      "Daisy UI",
      "JWT",
    ],
    githubLink: "https://github.com/yourusername/socket-chat-app",
    liveLink: "https://socket-chat-app-live.com",
    timePeriod: "Feb 2025 - Mar 2025",
    projectType: "Full-stack WebApp",
  },
  {
    image: project,
    name: "Twitter Backend API",
    description:
      "A robust and scalable backend API designed to mimic the core functionalities of Twitter, built using Node.js, Express.js, and MongoDB. This API enables users to perform essential social media interactions such as posting tweets, retweeting, liking, commenting, and following/unfollowing users. Authentication is secured using JSON Web Token (JWT), ensuring safe and reliable access control for user sessions.\n\nThe backend efficiently handles file uploads with Multer and Cloudinary, enabling seamless media storage and retrieval. Advanced search capabilities allow users to find tweets based on captions, tags, and usernames, enhancing content discoverability. Furthermore, the project is containerized with Docker, making it platform-independent and easy to deploy across various environments. This API serves as a foundational system for social media platforms, focusing on security, scalability, and efficiency.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Docker",
      "Cloudinary",
    ],
    githubLink: "https://github.com/yourusername/twitter-backend-api",
    liveLink: "https://twitter-backend-api-live.com",
    timePeriod: "Feb 2025 - Mar 2025",
    projectType: "Backend Api Clone",
  },
  {
    image: project,
    name: "ABCC: Automated Bacterial Colony Count App",
    description:
      "The Automated Bacterial Colony Count (ABCC) App is an AI-powered application designed to automate bacterial colony counting with high precision. Developed using OpenCV and Flask REST API, the application achieves an impressive accuracy of 87%. The system processes images efficiently, ensuring quick and reliable colony counts.\n\nThis project was validated across three datasets, ensuring consistent performance across different bacterial cultures. By leveraging computer vision and machine learning, this app streamlines the tedious manual counting process, saving time and improving accuracy for microbiologists and researchers. It is a step forward in digitalizing laboratory work, making bacterial colony counting more efficient and error-free.",
    techStack: ["Flutter", "Firebase", "Flask REST API", "OpenCV"],
    githubLink: "https://github.com/yourusername/abcc-app",
    liveLink: "https://abcc-app-live.com",
    timePeriod: "Feb 2025 - Mar 2025",
    projectType: "Mobile App",
  },
  {
    image: project,
    name: "SmartBin: A Flutter-based IoT Application",
    description:
      "SmartBin is an innovative IoT-powered waste management solution developed using Flutter and Firebase. This intelligent bin system detects objects within a 1-meter range and automatically opens its lid, providing a touch-free waste disposal experience. The system boasts 82% accuracy in depth measurement, ensuring reliable performance in detecting objects.\n\nTo optimize waste collection efficiency, the SmartBin system includes real-time alerts and notifications, reducing overflow situations. Additionally, a user chat feature allows for instant issue resolution, while GPS-enabled location tracking aids in effective waste management planning. This project combines IoT, smart automation, and user-centric features to revolutionize waste disposal solutions.",
    techStack: ["Flutter", "Firebase", "IoT"],
    githubLink: "https://github.com/yourusername/smartbin",
    liveLink: "https://smartbin-live.com",
    timePeriod: "Feb 2025 - Mar 2025",
    projectType: "Mobile App",
  },
  {
    image: project,
    description:
      "Katio is a captivating multiplayer game developed using Python’s Kivy/KivyMD framework, featuring an engaging 8-way coloring algorithm. Designed for two players, the game challenges them to execute strategic jumps, eliminating their opponents with well-planned moves.\n\nThis project combines logical thinking with interactive gameplay, ensuring an exciting and competitive experience for players. The implementation of smooth animations, intuitive controls, and visually appealing graphics enhances the user experience. Katio is a great example of leveraging Python for game development while incorporating strategic elements to keep players engaged.",
    techStack: ["Python", "Kivy", "KivyMD"],
    githubLink: "https://github.com/yourusername/katio",
    liveLink: "https://katio-live.com",
    timePeriod: "Feb 2025 - Mar 2025",
    projectType: "Mobile App",
  },
];

export default projectsData;
