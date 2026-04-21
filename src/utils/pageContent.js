import imgHero from "../assets/images/hero.webp";
import imgBgOne from "../assets/images/bg-one.webp";
import imgBgTwo from "../assets/images/bg-two.webp";
import imgBgThree from "../assets/images/bg-three.webp";

import projectOne from "../assets/images/projects/project-1.webp";
import projectTwo from "../assets/images/projects/project-2.webp";
import projectThree from "../assets/images/projects/project-3.webp";
import projectFour from "../assets/images/projects/project-4.webp";
import projectFive from "../assets/images/projects/project-5.webp";
import projectSix from "../assets/images/projects/project-6.webp";
import projectSeven from "../assets/images/projects/project-7.webp";
import projectEight from "../assets/images/projects/project-8.webp";

import iconOne from '../assets/images/icon-1.png';
import iconTwo from '../assets/images/icon-2.png';
import iconThree from '../assets/images/icon-3.png';
import iconFour from '../assets/images/icon-4.png';
import { sub } from "three/tsl";

export const pageContent = {
  hero: {
    tagline:
      "Frontend Developer Building modern web experiences",
    badge: "Available for a full-time role",
    description: "Hi, I'm Sri Balaji - a frontend developer focused on building clean, responsive and performance driven web applications using React and modern Javascript.",
    imageSrc: imgHero,
    imageAlt: "Hero Banner Image"
  },

  about: {
    subtitle: "About Me",
    title: "The Story Behind My Work",
    description:
      "I’m a frontend developer specializing in building clean, responsive, and performance-focused web applications using React and modern JavaScript. I focus on translating designs into reliable, scalable user interfaces.",
    collob: [
      {
        title: "How I collaborate",
        subtitle: "My working style",
        traits: [
          {
            imgSrc: iconOne,
            imageAlt: "Async-first icon",
            name: "Async-first",
            desc: "Clear documentation, structured updates, and decisions that stay visible.",
          },
          {
            imgSrc: iconTwo,
            imageAlt: "Low-noise collaboration icon",
            name: "Low-noise collaboration",
            desc: "Focused discussions, more meaningful outcomes.",
          },
          {
            imgSrc: iconThree,
            imageAlt: "Ownership mindset icon",
            name: "Ownership mindset",
            desc: "Take responsibility for features end-to-end, from implementation to deployment.",
          },
          {
            imgSrc: iconFour,
            imageAlt: "Feedback-driven icon",
            name: "Feedback-driven",
            desc: "Ship early, refine continuously, and improve based on real input.",
          },
        ],
        process: [
            {
              num: 1,
              title: "Understand the problem",
              detail: "Align on goals, constraints, and what success actually looks like.",
            },
            {
              num: 2,
              title: "Plan before building",
              detail: "Break down components, data flow, and edge cases early.",
            },
            {
              num: 3,
              title: "Build iteratively",
              detail: "Develop in small increments with continuous validation.",
            },
            {
              num: 4,
              title: "Refine and deliver",
              detail: "Optimize performance, ensure quality, and prepare for release.",
            },
        ],
      }
    ],
  },

  skills: {
    categories: [
      ["HTML5", "CSS3", "SASS", "Bootstrap", "Tailwind", "Javascript", "jQuery", "React"],
      ["Vue", "Nodejs", "Expressjs", "Drupal", "MySQL", "MongoDB", "Git", "Jira"]
    ]
  },

  experience: {
    subtitle: "Experience",
    title: "Where I've Built & Scaled Digital Products.",
    stats: [
      {
        label: "Companies",
        value: "3"
      },
      {
        label: "Projects",
        value: "10+"
      },
      {
        label: "Technologies",
        value: "7+"
      },
      {
        label: "Problems Solving",
        value: "∞"
      }
    ],
    description: "Focused on crafting scalable digital products through thoughtful architecture and modern web technologies.",
    timeline: [
      {
        role: "Associate - Projects",
        company: "Cognizant",
        duration: "March 2026 – Present",
        url: "https://www.cognizant.com/",
        img: imgBgThree,
        tags: [
          "Web",
          "Healthcare",
          "Enterprise"
        ]
      },
      {
        role: "Software Engineer",
        company: "Tech Mahindra",
        duration: "Jan 2022 – Present",
        url: "https://www.techmahindra.com/",
        img: imgBgOne,
        tags: [
          "Enterprise",
          "Frontend",
          "Team Collaboration"
        ]
      },
      {
        role: "Frontend Developer",
        company: "Hogarth WorldWide",
        duration: "Apr 2020 – Jan 2022",
        url: "https://www.wppproduction.com/",
        img: imgBgTwo,
        tags: [
          "Creative",
          "Web",
          "Drupal"
        ]
      },
    ],
    projects: [
      {
        title: "TPG Telecom",
        url: "https://www.tpgtelecom.com.au/",
        img: projectOne
      },
      {
        title: "Universal Genève",
        url: "https://www.universalgeneve.com/",
        img: projectTwo
      },
      {
        title: "UPS Movin",
        url: "https://www.movin.in/",
        img: projectThree
      },
      {
        title: "Vertex Pharmaceuticals",
        url: "https://www.vrtx.com/en-global/",
        img: projectFour
      },
      {
        title: "Orkambi",
        url: "https://www.orkambi.com/",
        img: projectFive
      },
      {
        title: "Kalydeco",
        url: "https://www.kalydeco.com/",
        img: projectSix
      },
      {
        title: "Trikafta",
        url: "https://www.trikafta.com/",
        img: projectSeven
      },
      {
        title: "CF Source HCP",
        url: "https://www.cfsourcehcp.com/",
        img: projectEight
      },
    ]
  },

  footer: {
    email: "s.sribalaji.dev@gmail.com",
    note: "Open to frontend opportunities and collaborations."
  }
};
