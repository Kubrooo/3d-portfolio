import { creasico, lulojoki } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
  nodejs,
  pricewise,
  react,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  figma,
  kotlin,
  csharp,
  mysql,
  mssql,
  dotnet,
  iwima,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "UI/UX",
  },
  {
    imageUrl: kotlin,
    name: "Kotlin",
    type: "Frontend",
  },
  {
    imageUrl: csharp,
    name: "C-sharp",
    type: "Fullstack",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: mssql,
    name: "Microsoft SQL Server",
    type: "Database",
  },
  {
    imageUrl: dotnet,
    name: "ASP.NET",
    type: "Backend",
  },
];

export const experiences = [
  {
    title: "Android Developer - Intern",
    company_name: "PT Creasi Tekno Solusi",
    icon: creasico,
    iconBg: "#5A9C8E",
    date: "Jun 2024 - Dec 2024",
    points: [
      "Assisted in designing and implementing user interfaces for Android applications using modern UI/UX principles.",
      "Contributed to the development of Android apps from scratch and participated in the improvement of existing features.",
      "Conducted testing to identify bugs and ensure the functionality and stability of applications.",
      "Collaborated with the development team to meet project deadlines and deliver quality software.",
    ],
  },
  {
    title: "College Student",
    company_name: "Institut Widya Pratama",
    icon: iwima,
    iconBg: "#ebebebff",
    date: "Sep 2025 - Present",
    points: [
      "Currently pursuing a degree in Information Systems at Institut Widya Pratama.",
      "Learning and applying modern development tools to create efficient digital solutions.",
      "Collaborating on academic projects that integrate technology and business strategy.",
      "Actively improving skills in programming, problem solving, and creative thinking through coursework and independent learning.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/kubrooo",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/galih-tri-ardiansyah-82b931254",
  },
];

export const projects = [
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: `Kubroo's Bot`,
    description:
      "A bot built with Node.js that helps Toram Online players via WhatsApp by providing real-time information, player utilities, and game tips.",
    link: "https://github.com/Kubrooo/Kubroo-Baileys",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "EventGo - Event, Ticket, and Sponsorship Management App",
    description:
      "A dekstop-based application that helps manage events, ticket sales, and sponsorships efficiently. Includes features for event creation, ticket categorization, purchase tracking, and sponsor management.",
    link: "https://github.com/Kubrooo/EventGo",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "PitWall - F1 Race Strategy Dashboard",
    description:
      "An immersive real-time F1 race strategy simulation dashboard. Experience the thrill of the pit wall as you monitor telemetry, dynamic weather, and unpredictable race-changing incidents.",
    link: "https://pit-wall-dashboard.vercel.app/",
  },
];
