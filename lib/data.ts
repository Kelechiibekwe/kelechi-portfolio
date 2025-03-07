import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  
    {
      title: "Full-Stack Developer @TD Securities",
      location: "Calgary, AB",
      description:
        "At TD Securities, I integrated fractional shares, modernized Java systems, delivered SEC-driven settlement changes, improved Python code quality and led server migrations. I also tackled Redis, Airflow, and Node.js issues, ensuring scalable solutions for evolving business needs.",
      icon: React.createElement(FaLaptopCode),
      date: "2022 - present",
    },
    // {
    //   title: "Front-End Developer",
    //   location: "Orlando, FL",
    //   description:
    //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    //   icon: React.createElement(CgWorkAlt),
    //   date: "2019 - 2021",
    // },
    {
      title: "M.Eng in Mechanical Engineering",
      location: "Calgary, Canada",
      description:
        "I earned a Master’s in Mechanical Engineering from the University of Calgary.",
      icon: React.createElement(LuGraduationCap),
      date: "2022",
    }
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "Node.js",
  "Java",
  "Spring",
  "Next.js",
  "Typescript",
  "Express",
  "PostgreSQL",
  "Python",
  "Flask",
  "Docker",
  "OpenAI API",
  "HTML",
  "CSS"
] as const;
