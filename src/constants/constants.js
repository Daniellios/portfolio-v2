import { DiJsBadge } from 'react-icons/di';
import {
  SiNestjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { Icon } from '@iconify/react';
import { ImGit } from 'react-icons/im';

export const projects = [
  {
    title: 'Four in a row game',
    images: ['/images/four-in-a-row-game.png'],
    description: 'Connect four in a row game',
    tags: ['React', 'TypeScript', 'CSS'],
    source: 'https://github.com/Daniellios/connect-four',
    visit: 'https://connect-four-xi.vercel.app/',
    id: 166,
  },
  {
    title: 'Deplace Maison',
    images: ['/images/Déplacé-Maison.png'],
    description: 'Simple landing page for a clothing brand',
    tags: ['React', 'CSS'],
    source: 'https://github.com/Daniellios/clothes-landing',
    visit: 'https://clothes-landing.vercel.app/',
    id: 156,
  },
  {
    title: 'Admin Dashboard',
    images: ['https://i.ibb.co/W6g39w3/image.png'],
    description: 'Multi page and purpose Admin Dashboard',
    tags: ['React', 'Tailwind'],
    source: 'https://github.com/Daniellios/dashboard-main',
    visit: 'https://effervescent-bonbon-b72539.netlify.app/',
    id: 7,
  },
  {
    title: 'Hidden Object Game',
    isGame: true,
    description:
      'One of my projects on my previous position as a PixiJs developer',
    images: ['/images/Hidden.png'],
    tags: ['TypeScript', 'React', 'PixiJs', 'HTML', 'CSS'],
    source: 'https://daniellios.github.io/HO-test/',
    visit:
      'https://drive.google.com/drive/folders/1RgRW-RVp80i7Qs_fjVID8HbSXoIZPl48?usp=sharing',
    id: 0,
  },
  {
    title: 'Yandex food ',
    isGame: true,
    description: 'Playable ad for yandex-food',
    images: ['/images/Ya-food.png'],
    tags: ['TypeScript', 'React', 'PixiJs', 'HTML', 'CSS'],
    source: 'https://daniellios.github.io/yndx-food/',
    visit:
      'https://drive.google.com/drive/folders/18X62PfO4a8kYyR3h6n5pTH0RqOKAz8S1?usp=sharing',
    id: 11,
  },
  {
    title: 'Mahjong Game',
    isGame: true,
    description: 'This is a mahjong game I made for G5 Entertainment.',
    images: ['/images/Mahjong.png'],
    tags: ['TypeScript', 'React', 'PixiJs', 'HTML', 'CSS'],
    source: 'https://daniellios.github.io/SM-game/',
    visit:
      'https://drive.google.com/drive/folders/1AgifLkc0QmPan-ATlKTtLscLbLCB3586?usp=sharing',
    id: 1,
  },

  {
    title: 'Mail Clone',
    description: 'VK all Cup qualification task',
    images: ['/images/Mail.png'],
    tags: ['NextJS', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    source: 'https://github.com/Daniellios/vk-all-cup',
    visit: 'https://vk-all-cup.vercel.app/',
    id: 8,
  },
  {
    title: 'Task Manager',
    description: 'Task manager to keep track of things you need to do',
    images: ['/images/TaskManagerUI.png'],
    tags: [
      'NextJS',
      'React',
      'TypeScript',
      'Redux',
      'Tailwind',
      'Framer Motion',
    ],
    source: 'https://github.com/Daniellios/todo-app',
    visit: 'https://todo-app-hazel-six.vercel.app',
    id: 2,
  },
  {
    title: 'Invoice App',
    description:
      'Store and manage the most important info about the rendered services in one place.',
    images: ['/images/InvoiceApp.jpg'],
    tags: ['React', 'Redux', 'NextJS', 'TypeScript', 'React Styled Components'],
    source: 'https://github.com/Daniellios/invoice-app',
    visit: 'https://invoice-app-delta.vercel.app/',
    id: 4,
  },
];

export const HeaderTitles = [
  {
    title: 'Projects',
    link: '#projects',
  },
  {
    title: 'Skills',
    link: '#skills',
  },
  {
    title: 'Experience',
    link: '#experience',
  },
  {
    title: 'Contacts',
    link: '#contacts',
  },
];

export const Jobs = [
  {
    id: 0,
    title: 'Front-end Developer',
    company: 'Moun',
    tasks: [
      'Developed fintech services for one of the largest banks in Russia (React, Redux, TS, Styled Components, Webpack, REST API).',
      'Developed 6 projects from scratch, supported, updated and actively developed 15+ projects across 3 products (React, Angular).',
      'Actively supported and improved component libraries (React, Styled Components, Rollup).',
      'Set up configurations to improve code quality (TSconfig, ESlint, editorconfig).',
      'Used Git, GitLab for project version control. Jira and Confluence to control the work process.',
      'Made architectural decisions and participated in the discussion of new business requirements at the stage of formation.',
    ],
    range: 'May 2023 - Now',
  },
  {
    id: 1,
    title: 'Fullstack Developer',
    company: 'VIECO',
    tasks: [
      'Developed client app with React, TypeScript, Next.js, TailWind',
      'Developed admin dashboard panel',
      'Designed and developed REST API with NestJS, PostgreSQL',
      'Integration of fron-end and backend',
      'Architectural and business logic coordination',
    ],
    range: 'September 2022 - May 2023',
  },
  {
    id: 2,
    title: 'PixiJS Developer',
    company: 'PlayableArt',
    tasks: [
      'Developed playable ads using JS, TS, React, PixiJS, HTML, CSS',
      'Contributed and maintained local framework',
      'Worked on scenarios of playbles',
      'Prepared and bundled final projects for clients',
    ],
    range: 'December - June 2022',
  },
  {
    id: 3,
    title: 'HTML Layout Designer',
    company: 'Freelance',
    tasks: [
      'Web-site building with JS, HTML, SCSS',
      'Terms of refence preparation',
      'Bundle configuration (Parcel, Gulp)',
    ],
    range: 'September - December 2021',
  },
];

export const TechIcons = [
  {
    id: 1,
    name: 'React',
    designation: '',
    image: <SiReact size='3rem' color='rgb(97, 218, 251)' />,
  },
  {
    id: 2,
    name: 'React',
    designation: '',
    image: <SiRedux color='rgb(118, 74, 188)' size='3rem' />,
  },
  {
    id: 3,
    name: 'React',
    designation: '',
    image: <DiJsBadge size='3rem' color='#FFD600' />,
  },
  {
    id: 4,
    name: 'React',
    designation: '',
    image: <SiTypescript size='3rem' color='#0D61A9' />,
  },
  {
    id: 5,
    name: 'React',
    designation: '',
    image: <Icon icon='cib:next-js' height='48px' color='white' />,
  },
  {
    id: 6,
    name: 'React',
    designation: '',
    image: <SiNestjs size='3rem' color='#F50057'></SiNestjs>,
  },
  {
    id: 7,
    name: 'React',
    designation: '',
    image: <SiPostgresql size='3rem' color='#0277BD'></SiPostgresql>,
  },
  {
    id: 8,
    name: 'React',
    designation: '',
    image: <SiSass size='3rem' color='#F06292' />,
  },
  {
    id: 9,
    name: 'React',
    designation: '',
    image: <SiTailwindcss size='3rem' color='#00ACC1'></SiTailwindcss>,
  },
  {
    id: 14,
    name: 'React',
    designation: '',
    image: <ImGit size='3rem' color='#F4511E' />,
  },
];
