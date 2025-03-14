import {
  android,
  bootstrap,
  cpp,
  css,
  dart,
  django,
  docker,
  firebase,
  flutter,
  html,
  ios,
  js,
  mongodb,
  mysql,
  nodejs,
  postgresql,
  python,
  react,
  sqlite,
  tailwind,
} from "../assets/svgs";

const skillsData = [
  {
    title: "frontend",
    skills: [
      { name: "HTML-5", image: html },
      { name: "CSS-3", image: css },
      { name: "Tailwind-CSS", image: tailwind },
      { name: "Bootstrap", image: bootstrap },
      { name: "JavaScript", image: js },
      { name: "ReactJs", image: react },
      { name: "Node.js", image: nodejs },
      { name: "MongoDB", image: mongodb },
    ],
  },
  {
    title: "backend",
    skills: [
      { name: "C++", image: cpp },
      { name: "Python", image: python },
      { name: "Django", image: django },
      { name: "Docker", image: docker },
      { name: "PostgreSQL", image: postgresql },
      { name: "MySQL", image: mysql },
    ],
  },
  {
    title: "mobile",
    skills: [
      { name: "Flutter", image: flutter },
      { name: "Dart", image: dart },
      { name: "Firebase", image: firebase },
      { name: "SQLite", image: sqlite },
      { name: "Android Studio", image: android },
      { name: "iOS", image: ios },
    ],
  },
];

export default skillsData;
