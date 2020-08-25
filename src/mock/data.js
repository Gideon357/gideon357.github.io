import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Gideon Grinberg | Website', // e.g: 'Name | Developer'
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
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
