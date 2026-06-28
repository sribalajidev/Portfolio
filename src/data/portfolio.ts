export const portfolioData = {
  navigation: {
    links: [
      {
        label: "Home",
        href: "home",
      },
      {
        label: "About Me",
        href: "about",
      },
      {
        label: "Experience",
        href: "experience",
      },
      {
        label: "Let's Talk",
        href: "contact",
      },
    ],

    socialLinks: [
      {
        name: "GitHub",
        href: "https://github.com/sribalajidev",
        icon: "github" as const,
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/sribalajis",
        icon: "linkedin" as const,
      },
    ],

    website: "www.sribalajidev.com",
  },

  hero: {
    tagline: [
      "Frontend Developer",
      "Building modern",
      "web experiences",
    ],
    badge: "Available for a full-time role",
    description: "Hi, I'm Sri Balaji — a Frontend Engineer specializing in React, Next.js and TypeScript. I build scalable, accessible and high-performance web applications with a strong focus on clean architecture, reusable components and exceptional user experience.",
    imageSrc: "/images/hero.webp",
    imageAlt: "Hero Banner Image"
  },

  about: {
    subtitle: "About Me",
    title: "The Story Behind My Work",
    description:
      "I specialize in building scalable frontend applications using React, Next.js and TypeScript. I focus on translating designs into reliable, scalable user interfaces.",
    collaboration: {
      title: "How I collaborate",
      subtitle: "My working style",
      traits: [
        {
          imgSrc: "/images/icon-1.png",
          imageAlt: "Async-first icon",
          name: "Async-first",
          desc: "Clear documentation, structured updates, and decisions that stay visible.",
        },
        {
          imgSrc: "/images/icon-2.png",
          imageAlt: "Low-noise collaboration icon",
          name: "Low-noise collaboration",
          desc: "Focused discussions, more meaningful outcomes.",
        },
        {
          imgSrc: "/images/icon-3.png",
          imageAlt: "Ownership mindset icon",
          name: "Ownership mindset",
          desc: "Take responsibility for features end-to-end, from implementation to deployment.",
        },
        {
          imgSrc: "/images/icon-4.png",
          imageAlt: "Feedback-driven icon",
          name: "Feedback-driven",
          desc: "Ship early, refine continuously, and improve based on real input.",
        },
      ],
    },
    process: {
      title: "From brief to shipped",
      subtitle: "My development workflow",
      steps: [
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
    },
    timezone: {
      title: "Flexible across time zones",
      subtitle: "Always available for global collaboration",
      locations: [
        "India",
        "USA",
        "UK",
        "UAE",
        "Australia",
      ],
    },
  },

  skills: {
    categories: [
      ["Reactjs", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Sass", "Tailwind CSS"],
      ["Nodejs", "Expressjs", "Drupal", "MySQL", "MongoDB", "Git", "Jira", "CMS"]
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
        label: "Enterprise Products",
        value: "10+"
      },
      {
        label: "Years Experience",
        value: "5+"
      },
      {
        label: "Frontend Focus",
        value: "100%"
      }
    ],
    description: "Focused on crafting scalable digital products through thoughtful architecture and modern web technologies.",
    timeline: [
      {
        year: "2026",
        duration: "Mar 2026 – Present",
        role: "Associate – Projects",
        company: "Cognizant",
        summary:
          "Modernizing enterprise applications by refactoring legacy frontend architecture and introducing scalable development practices.",

        technologies: [
          "Next.js",
          "TypeScript",
          "Gen AI",
          "Automation",
        ],

        highlights: [
          "Refactored legacy components into maintainable, reusable architecture.",
          "Developed utility scripts to automate repetitive code refactoring tasks, including large-scale design token migration across the codebase.",
          "Introduced modern frontend practices using TypeScript and component-driven development.",
          "Leveraging Next.js, TypeScript and AI-assisted workflows to modernize enterprise frontend development and improve developer productivity."
        ]
      },

      {
        year: "2022",
        duration: "Jan 2022 – Mar 2026",
        role: "Software Engineer",
        company: "Tech Mahindra",
        summary:
          "Built scalable enterprise web applications with a strong focus on frontend architecture, reusable systems and performance.",

        technologies: [
          "React",
          "Drupal",
          "TypeScript",
          "Sass",
        ],

        highlights: [
          "Developed decoupled Drupal + React architecture for scalable frontend delivery.",
          "Designed reusable UI components and responsive design systems.",
          "Improved frontend performance, accessibility and cross-browser compatibility.",
          "Mentored developers on React, Git workflows and engineering best practices."
        ]
      },

      {
        year: "2020",
        duration: "Apr 2020 – Jan 2022",
        role: "Frontend Developer",
        company: "Hogarth Worldwide",
        summary:
          "Delivered responsive Drupal websites while building a strong foundation in frontend engineering and collaborative development.",

        technologies: [
          "Drupal",
          "Twig",
          "HTML5",
          "CSS3",
          "Bootstrap",
        ],

        highlights: [
          "Developed accessible, responsive interfaces for enterprise websites.",
          "Created reusable Twig templates and modular frontend components.",
          "Worked closely with designers and backend teams in Agile workflows.",
          "Maintained clean Git workflows and consistent sprint delivery."
        ]
      }
    ],
  },

  footer: {
    email: "s.sribalaji.dev@gmail.com",
    note: "Open to frontend opportunities and collaborations."
  }
};