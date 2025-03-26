import React from "react";
import {
  android,
  bootstrap,
  cpp,
  css,
  dart,
  django,
  docker,
  figma,
  firebase,
  flutter,
  html,
  ios,
  js,
  mongodb,
  mysql,
  nodejs,
  postgresql,
  postman,
  python,
  react,
  sqlite,
  tailwind,
} from "../assets/svgs";

const skillsData = [
  [
    { name: "HTML-5", image: html },
    { name: "CSS-3", image: css },
    { name: "Tailwind-CSS", image: tailwind },
    { name: "Bootstrap", image: bootstrap },
    { name: "JavaScript", image: js },
  ],
  [
    { name: "ReactJs", image: react },
    { name: "Node.js", image: nodejs },
    { name: "MongoDB", image: mongodb },
    { name: "Docker", image: docker },
    { name: "Postman", image: postman },
  ],
  [
    { name: "C++", image: cpp },
    { name: "Python", image: python },
    { name: "Django", image: django },
    { name: "SQLite", image: sqlite },
    { name: "PostgreSQL", image: postgresql },
    { name: "MySQL", image: mysql },
  ],
  [
    { name: "Dart", image: dart },
    { name: "Flutter", image: flutter },
    { name: "Figma", image: figma },
    { name: "Firebase", image: firebase },
    { name: "Android", image: android },
    { name: "iOS", image: ios },
  ],
];

export default skillsData;
