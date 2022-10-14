import {
  FaReact,
  FaNode,
  FaDocker,
  FaGlobe,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiGooglecloud,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiC,
} from "react-icons/si";

export const me = {
  name: "Mohammad Arham",
  subtitle: "Computer Engineering Student & Backend Developer",
  tagline:
    "I am a computer engineering student who loves to build software to create fun experiences.",
  about:
    "Junior Computer Engineering student building production ready systems for my startup. I love making fun projects on the side usually for the memes. Checkout some of my recent projects below.",
  location: "Amherst, MA",
  image: "/assets/arhammusheer.jpeg",
  education: [
    {
      degree: "Bachelors of Science",
      major: "Computer Engineering",
      school: "University of Massachusetts Amherst",
      graduation: "May 2024",
      awards: ["Chancellor's Award: $12,000"],
    },
  ],
  experience: [
    {
      company: "University of Massachusetts Amherst",
      location: "Amherst, MA",
      position: "IT Computer Classroom Assistant",
      duration: "Fall 2021 - Present",
      bullets: [
        "Provided phone and in-person support for classroom technical issues.",
        "Maintained and imaged the upkeep IT classroom computers.",
      ],
    },
    {
      company: "Cisco Systems",
      location: "Bangalore, India",
      position: "Front End Developer Intern - Talent Outreach Program",
      duration: "Aug 2019 - Feb 2020",
      bullets: [
        "Collaborated with other team members to create an event management platform for high schools.",
        "Developed a responsive design implementing a mobile-first approach.",
        "Supported entire CRUD operations on the front end for the REST API.",
        "Designed and developed a desktop and mobile UI dashboard for a Django WebApp.",
      ],
    },
  ],
  projects: [
    {
      name: "Croissant.one (This Website)",
      description: "A website to showcase my projects and resume",
      contribution:
        "I built the entire website from scratch using React.js, TypeScript, and Chakra UI and deployed it on Vercel.",
      technologies: ["React", "Typescript", "Chakra-UI", "Vercel"],
      links: [
        {
          name: "Website",
          uri: "https://croissant.one",
        },
      ],
      image: "/assets/croissant.svg",
    },
    {
      name: "AudioShelf",
      description:
        "A mobile app with over 2k users to discover audiobooks in 30 languages and summarize them in 5 minutes",
      contribution:
        "I built the backend infrastructure for the app including authentication systems, OAuth Scope and a REST API. I also built an internal CMS dashboard to manage content publishing and translations.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Google Cloud",
        "Docker",
        "OAuth2",
      ],
      links: [
        {
          name: "Website",
          uri: "https://getaudioshelf.com",
        },
        {
          name: "Play Store",
          uri: "https://play.google.com/store/apps/details?id=com.audioshelfapp",
        },
      ],
      image: "https://content.getaudioshelf.com/logo.png",
    },
    {
      name: "Dad API",
      description: "A REST API to get dad jokes and pickup lines",
      contribution:
        "I built the entire API from scratch using Node.js and Express and deployed it on Google Cloud Run.",
      technologies: ["Node.js", "Express", "Google Cloud", "Docker"],
      links: [
        {
          name: "Joke Endpoint",
          uri: "https://dad.croissant.one/api/joke",
        },
        {
          name: "Pickup Line Endpoint",
          uri: "https://dad.croissant.one/api/pickup",
        },
      ],
      image: "/assets/dad.png",
    },
  ],
  skills: [
    {
      name: "Typescript",
      icon: SiTypescript,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name: "Clang",
      icon: SiC,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Node.js",
      icon: FaNode,
    },
    {
      name: "Docker",
      icon: FaDocker,
    },

    {
      name: "Google Cloud",
      icon: SiGooglecloud,
    },
  ],
  social: [
    // {
    //   name: "Website",
    //   icon: FaGlobe,
    //   uri: "https://croissant.one",
    // },
    {
      name: "Github",
      icon: FaGithub,
      uri: "https://github.com/arhammusheer",
      hover: {
        bg: "gray.900",
        color: "white",
      },
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      uri: "https://www.linkedin.com/in/mohammad-arham/",
      hover: {
        bg: "blue.500",
        color: "white",
      },
    },
  ],
} as const;
