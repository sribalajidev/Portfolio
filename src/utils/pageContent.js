import imgHero from "../assets/images/hero.png";
import imgTPG from "../assets/images/projects/tpgtelecom.png";
import imgUPS from "../assets/images/projects/movin.png";
import imgGeneve from "../assets/images/projects/universalgeneve.png";
import imgVertex from "../assets/images/projects/vertex.png";
import imgVertexHcp from "../assets/images/projects/vertexhcp.png";

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
    title: "About Me",
    description:
      "I’m a frontend developer specializing in building clean, responsive, and performance-focused web applications using React and modern JavaScript. I focus on translating designs into reliable, scalable user interfaces.",

    cards: [
      {
        title: "Building Clean Interfaces",
        description:
          "I build responsive and accessible user interfaces with a strong focus on layout consistency, usability, and maintainable frontend architecture.",
      },
      {
        title: "React & JavaScript",
        description:
          "Developing component-based user interfaces with React and modern JavaScript, emphasizing clarity, reusability, and predictable state management.",
      },
      {
        title: "Best Practices",
        description:
          "Building scalable and maintainable frontend components by applying modern UI patterns, clean code practices, and performance considerations.",
      }
    ]
  },

  skills: {
    categories: [
      ["HTML5", "CSS3", "SASS", "Bootstrap", "Tailwind", "Javascript", "jQuery", "React"],
      ["Vue", "Nodejs", "Expressjs", "Drupal", "MySQL", "MongoDB", "Git", "Jira"]
    ]
  },

  experience: {
    subtitle: "Experience",
    title: "My Professional Journey",
    description:
      "My professional journey spans enterprise CMS platforms and modern frontend development. I’ve collaborated with cross-functional teams to build scalable, user-focused web applications while continuously adapting to evolving frontend trends.",
    timeline: [
      {
        role: "Software Engineer",
        company: "Tech Mahindra",
        duration: "Jan 2022 – Present",
        project: [
          {
            name: "TPG Telecom",
            imgSrc: imgTPG,
            link: "https://tpgtelecom.com.au/"
          },
          {
            name: "UPS Movin",
            imgSrc: imgUPS,
            link: "https://movin.in/"
          },
          {
            name: "Universal Genève",
            imgSrc: imgGeneve,
            link: "https://www.universalgeneve.com/"
          },
        ],
        details: [
          "Worked on enterprise-level projects including TPG Telecom, UPS Movin, Cigna CareAllies, and Universal Genève, focusing on frontend architecture and user experience enhancements. Developed custom Drupal themes with a strong focus on performance, accessibility, and reusable UI patterns. Collaborated with backend teams to design and integrate custom modules, ensuring seamless frontend–backend interaction. Contributed to modern frontend initiatives by building interactive UI components using React.js. Mentored and onboarded new developers while delivering features within tight project timelines."
        ],
        tags: [
          "Drupal",
          "React.js",
          "JavaScript",
          "Frontend Architecture",
          "Team Collaboration"
        ]
      },
      {
        role: "Frontend Developer",
        company: "Hogarth WorldWide",
        duration: "Apr 2020 – Jan 2022",
        project: [
          {
            name: "Vertex Pharmaceuticals Incorporated",
            imgSrc: imgVertex,
            link: "https://www.vrtx.com/en-global/"
          },
          {
            name: "Vertex Treatments Finder",
            imgSrc: imgVertexHcp,
            link: "https://www.vertextreatmentshcp.com/"
          }
        ],
        details: [
          "Worked on Drupal-based websites for Vertex Pharmaceuticals, focusing on scalable and maintainable frontend solutions. Managed and optimized Twig templates to improve frontend structure, consistency, and performance. Collaborated with backend developers to build custom components with clean frontend–backend integration. Used Git and JIRA to manage tasks, track progress, and maintain efficient development workflows."
        ],
        tags: [
          "Drupal",
          "Twig",
          "JavaScript",
          "Git",
          "Cross-functional Collaboration"
        ]
      }
    ]
  },

  footer: {
    email: "s.sribalaji.dev@gmail.com",
    note: "Open to frontend opportunities and collaborations."
  }
};
