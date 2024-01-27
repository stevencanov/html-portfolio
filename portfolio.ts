import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Luis Cano",
  title: "Hi all, I'm Luis",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with Python, Django, React.js, React Native and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "https://docs.google.com/document/d/1qfGU9FeSZ3qW7h5mXjw4yB37i_tnVAxwxCcAllwV10Y/edit?usp=sharing",
};

export const openSource = {
  githubUserName: "stevencanov",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:stevencanov@gmail.com",
  linkedin: "https://www.linkedin.com/in/1hanzla100/",
  github: "https://github.com/stevencanov",
  instagram: "https://www.instagram.com/stevencanov/",

};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "65", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "45",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University Catolica de Pereira",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2019 - April 2022",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "University Tecnologica de Pereira",
    subHeader: "Degree  in Information Systems and Technologies",
    duration: "February 2014 - November 2019",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Frond End Developer",
    company: "CloudSoft Inc",
    companyLogo: "/img/icons/common/meganos.png",
    date: "May  2023 - December 2023",
    desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Macos Swift(UI), Firebase, and AWS S3. Implemented Chatbots for automated customer integration.",
  },
  {
    role: "Full Stack Developer",
    company: "Comfamiliar Risaralda",
    companyLogo: "/img/icons/common/duseca_software_logo.jpeg",
    date: "Jan 2021 - Jan 2023",
    desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
  },


];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/stevencano/html-portfolio",
    link: "https://stevencanov.github.io/html-portfolio/",
  },
  {
    name: "Hugo Ace Barber Shop",
    desc: "Located at 8106 Roosevelt Ave Suite 204, this shop specializes in traditional barbershop services in an old school environment. They offer men's haircuts, boy's haircuts, kid's haircuts, fades, tapers, afros, hair styling, beard trimming, hot towel shave, and straight razor shave. Their approach includes getting to know each customer for a personalized experience​.",
    link: "https://jacksonheightsbarber.com/",
  },
  {
    name: "Harmony Clean Services App",
    desc: "Welcome to the Cleaning App project! This app is designed to make the task of cleaning and organizing your living space easier and more efficient. With features like task scheduling, progress tracking, and helpful tips, Harmony Clean App is your go-to solution for maintaining a tidy environment.",
    github: "https://github.com/stevencanov/CleanApp",

  },
];



// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Luis Cano",
  description: greetings.description,
  author: "Luis Cano",
  keywords: [
    "Luis",
    "Luis Cano",
    "stevencanov",
    "Portfolio",
    "Luis Portfolio ",
    "Luis Cano Portfolio",
  ],
};
