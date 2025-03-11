import {
  bootstrap,
  cpp,
  css,
  dart,
  django,
  docker,
  firebase,
  flutter,
  html,
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
      { name: "ReactJs", image: react },
      { name: "Tailwind-CSS", image: tailwind },
      { name: "Bootstrap", image: bootstrap },
    ],
  },
  {
    title: "backend",
    skills: [
      { name: "Node.js", image: nodejs },
      { name: "MongoDB", image: mongodb },
      { name: "Docker", image: docker },
      { name: "PostgreSQL", image: postgresql },
      { name: "C++", image: cpp },
      { name: "JavaScript", image: js },
      { name: "Python", image: python },
      { name: "Django", image: django },
      { name: "MySQL", image: mysql },
    ],
  },
  {
    title: "mobile",
    skills: [
      { name: "Flutter", image: flutter },
      { dart: "Dart", image: dart },
      { name: "Firebase", image: firebase },
      { name: "SQLite", image: sqlite },
    ],
  },
];

export default skillsData;
