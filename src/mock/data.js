import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Gideon Grinberg | Developer', // e.g: 'Name | Developer'
  lang: 'en-US', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Gideon Grinberg',
  subtitle: "I'm just a kid with a keyboard.",
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    "Hi! My name is Gideon Grinberg. I am 14, and I've been coding for 3 years. This is my personal site (coding project), blog (random musings), and porfolio. I mainly code in Python, C, and Dart but I also use HTML/CSS/JS, C++, Java, Rust, and more! I enjoy all projects, including front- and back-end, AI/ML, and everything else. Check out some of my work below. \n Note: This site is a work in progress.",
  paragraphTwo: '\n',
  paragraphThree: '\n',
  resume: 'https://gideon357.github.io/resume.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'viralcheck.png',
    title: 'ViralCheck',
    info:
      'A social media experience for aspiring YouTube creators looking for a platform to share ideas, find inspiration, and even get creative with some of the machine learning features. It includes a ML view predictor, and a content sharing function.',
    info2:
      "I built this for MLH's NotUniversity Hackathon, and it won 5th place in the Innovation in STEM Hackathon",
    repo: 'https://devpost.com/software/viralcheck-social-media-app',
    url: 'https://viralcheck-1.aahmad4.repl.co/',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Web Framework (Working Title)',
    info:
      'This is my latest project. It is a Python framework to build frontend web apps. It is built on top of WebAssembly and a virtual DOM',
    info2:
      "It is currently a work in progress, so the repo won't refelct all recent work. This project was inspired by my experiences with frontend, including in hackathons. I had observed how difficult it was to build frontends, and connect them with Python, especially with ML. While Flask and Django solve this, it is challenging to coordinate frontend, backend, and design. Frameworks like Flutter seek to rectify this, and this project tries to do the same for Python ",
    url: 'https://gideon357.github.io/404',
    repo: 'https://github.com/gideon357/web-framework', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's get in touch!",
  btn: 'Contact Me',
  email: 'grinberg1165@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/gideon357',
    },
    {
      id: nanoid(),
      name: 'file',
      url: 'https://gideon357.github.io/resume.pdf',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
