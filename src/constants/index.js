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
        title: "Founder",
        company_name: "Lulojoki.id",
        icon: lulojoki,
        iconBg: "#242424",
        date: "May 2025 - Present",
        points: [
            "Initiated and built the brand from the ground up, including identity, mission, and long-term goals.",
            "Designed and developed digital solutions to support brand visibility and user engagement.",
            "Managed content strategy, marketing efforts, and community outreach to grow the audience organically.",
            "Oversaw end-to-end development, from idea validation to execution, while continuously iterating based on feedback.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/kubrooo',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/galih-tri-ardiansyah-82b931254',
    }
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: `Kubroo's Bot`,
        description: 'A bot built with Node.js that helps Toram Online players via WhatsApp by providing real-time information, player utilities, and game tips.',
        link: 'https://github.com/Kubrooo/Kubroo-Baileys',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'EventGo - Event, Ticket, and Sponsorship Management App',
        description: 'A dekstop-based application that helps manage events, ticket sales, and sponsorships efficiently. Includes features for event creation, ticket categorization, purchase tracking, and sponsor management.',
        link: 'https://github.com/Kubrooo/EventGo',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'DailyIntern',
        description: 'Esport Management is a Windows Forms-based application used to manage esports tournaments. It provides features for managing teams and matches, as well as displaying real-time tournament and team statistics.',
        link: 'https://github.com/Kubrooo/EsportManagement',
    }
];