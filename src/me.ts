import { DiScrum } from "react-icons/di";
import {
  FaDocker,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaNewspaper,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { HiChip } from "react-icons/hi";
import {
  SiAmazonaws,
  SiC,
  SiGo,
  SiGooglecloud,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiShell,
  SiTypescript,
} from "react-icons/si";

import { IMe, ITheme } from "./me.interface";

// Warning: Don't use "black" or "white" values
export const themeColor: ITheme = "orange";

// Multiple theme options
export const multiThemeOptions: ITheme[] = [
  "orange",
  "purple",
  "blue",
  "red",
  "cyan",
  "green",
];

// To disable support for multiple themes, set this value to `false`;
export const enableMultiTheme: boolean = true;

export const me = {
  name: "Mohammad Arham",
  // Facts are optional
  facts: [
    "This website is fully navigable with a keyboard.",
    "I also build PCBs and make hardware projects.",
    "You can change your color scheme by clicking the top right icon.",
    "Kubernetes and croissants are my two favorite things—both require finesse.",
    "I built my own bus tracker display so i'm never late in the morning.",
    "I track temperature and humidity in my room and have 3 months of data. Ask me what I found!",
    "Try clicking on random things, you might find some fun animations.",
    "I spent about 6 hours on the theme button alone.",
    "Try opening the console and see if you can find any easter eggs.",
  ],
  subtitle: "Computer Engineering Student & Backend Developer",
  tagline:
    "I am a computer engineering student who loves to build fun high quality experiences and continuously learn new things.",
  bigHeading: {
    black: "I make things",
    blue: "for the web",
  },
  about:
    "Senior Computer Engineering student who strives for high quality hardware and software experiences. I love making fun projects and build stuff I like to use myself. Oh and here is a croissant for you 🥐!",
  location: "Amherst, MA",
  image: "/assets/arhammusheer.jpeg",
  education: [
    {
      degree: "Bachelors of Science",
      major: "Computer Engineering",
      school: "University of Massachusetts Amherst",
      graduation: "December 2024",
      awards: ["Chancellor's Award: $12,000"],
    },
  ],
  experience: [
    {
      company: "CarGurus",
      location: "Cambridge, MA",
      position: "Engineering Co-op, Platform as a Service",
      duration: "Jan 2023 - June 2023",
      bullets: [
        "Worked on an internal CLI tool using Golang and Kubernetes to automate the deployment and management of infrastructure, resulting in a significant reduction in deployment time and increased efficiency in managing resources",
        "Collaborated with developers across teams and followed Scrum and Agile practices to deliver features and fix bugs in a timely manner",
        "Wrote an internal documentation chatbot using semantic search and GPT4 API which intended to increase productivity across teams",
      ],
    },
    {
      company: "AudioShelf",
      location: "Amherst, MA",
      position: "Co-Founder & CTO",
      duration: "Feb 2022 - March 2023",
      bullets: [
        "Led the backend development pipeline and managed a team of 2 interns.",
        "Developed the backend API and audio content delivery service using a microservices architecture on the Google Cloud Platform.",
        "Developed a CMS dashboard and a supporting management API from scratch for content and user management and permissions using React.",
        "Hosted the fully scalable serverless API on GCP Cloud run using docker, cloud builds, and cloud run which supported up to 200 concurrent users in production.",
      ],
    },
    {
      company: "University of Massachusetts Amherst",
      location: "Amherst, MA",
      position: "IT Computer Classroom Assistant",
      duration: "Fall 2021 - Present",
      bullets: [
        "Provided phone and in-person support for classroom technical issues.",
        "Supported the upkeep and maintenance of computer labs managed by IT.",
        "Notify and resolve any issues affecting workflows in computer labs using a ticket system.",
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
      name: "Bus Tracker IoT",
      description:
        "An always connected IoT device which let's me track when the next bus will leave my stop helping me save time and plan better every morning.",
      contribution:
        "I built the entire IoT device from scratch using an ESP32, Write a relay server in Node.js and pulled data from the UMass Transit API to display the next bus time.",
      technologies: [
        "Node.js",
        "TypeScript",
        "ESP32",
        "Arduino",
        "C++",
        "Google Cloud",
      ],
      links: [{ name: "Image", uri: "/assets/bus-tracker.jpg" }],
      image: "/assets/bus-tracker.jpg",
      backgroundImage: "/assets/bus-tracker.jpg",
    },
    {
      name: "Croissant Paste It",
      description:
        "Ever wanted a place to dump some text and share it with someone or yourself on another device? Me too! So I built an app for your pasting needs.",
      contribution:
        "I designed and wrote the app in Typescript with backend in Node.js and Express and the frontend in React.js. I also deployed the app on railway.app.",
      technologies: ["Node.js", "Express", "React", "TypeScript", "Railway"],
      links: [
        {
          name: "Website",
          uri: "https://paste.croissant.one",
        },
        {
          name: "Github",
          uri: "https://github.com/arhammusheer/paste.croissant.one",
        },
      ],
      image: "/assets/croissant-paste-it.png",
    },
    {
      name: "Lord of the Lunchroom",
      description:
        "A project for HackUMass which let 2 people in a cowboy duel smart hats to see who wins the table in the wochester dining hall. The project won the funnest hack award.",
      contribution:
        "I wrote the code for the matchmaking server and the arduino smart hats which used infrared technology as guns and detectors and a displays to show the match status.",
      image: "/assets/lord-of-the-lunchroom.jpg",
      backgroundImage: "/assets/lord-of-the-lunchroom.jpg",
      technologies: ["Node.js", "JavaScript", "ESP8266", "Arduino", "C++"],
      links: [
        {
          name: "Devpost",
          uri: "https://devpost.com/software/lord-of-the-lunchroom",
        },
        { name: "Image", uri: "/assets/lord-of-the-lunchroom.jpg" },
      ],
    },
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
        {
          name: "Github",
          uri: "https://github.com/arhammusheer/croissant.one",
        },
      ],
      image: "/assets/croissant.svg",
    },
    {
      name: "Dad API",
      description: "A REST API to get dad jokes and pickup lines",
      contribution:
        "I built the entire API from scratch using Node.js and Express and deployed it on Google Cloud Run.",
      technologies: ["Node.js", "Express", "Google Cloud", "Docker"],
      links: [
        {
          name: "Try It Out",
          uri: "https://dad.croissant.one",
        },
        {
          name: "Joke Endpoint",
          uri: "https://dad.croissant.one/api/joke",
        },
        {
          name: "Pickup Line Endpoint",
          uri: "https://dad.croissant.one/api/pickup",
        },
        {
          name: "Github",
          uri: "https://github.com/arhammusheer/dad-api",
        },
      ],
      image: "/assets/dad.png",
    },
    // {
    //   name: "Loud Noises",
    //   description:
    //     "A web app to play loud noises when you're in the same chat room as them. Press the big red button to play a list of sounds on their device. No registration required.",
    //   contribution:
    //     "Built a full stack app with socket.io and deployed it on Heroku.",
    //   technologies: ["Node.js", "Express", "Socket.io", "Heroku", "Bootstrap"],
    //   links: [
    //     {
    //       name: "Website",
    //       uri: "https://loudnoises.herokuapp.com/",
    //     },
    //   ],
    //   image: "/assets/big-red-button.svg",
    // },
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
      name: "Golang",
      icon: SiGo,
    },
    {
      name: "Bash/Shell",
      icon: SiShell,
    },
    {
      name: "Embedded Systems",
      icon: HiChip,
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
    {
      name: "Kubernetes",
      icon: SiKubernetes,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      name: "AWS",
      icon: SiAmazonaws,
    },
    {
      name: "Git",
      icon: FaGit,
    },
    {
      name: "Agile/Scrum",
      icon: DiScrum,
    },
  ],
  social: [
    {
      name: "Resume",
      icon: FaNewspaper,
      uri: "Mohammad-Arham-Resume.pdf",
      hover: {
        bg: ["brand.500", "brand.700"],
        color: "white",
      },
    },
    {
      name: "Github",
      icon: FaGithub,
      uri: "https://github.com/arhammusheer",
      hover: {
        bg: ["gray.900", "gray.800"],
        color: "white",
      },
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      uri: "https://www.linkedin.com/in/mohammad-arham/",
      hover: {
        bg: ["linkedin.500", "linkedin.700"],
        color: "white",
      },
    },
  ],

  contact: {
    email: "arhammusheer@gmail.com",
  },
} as IMe;
