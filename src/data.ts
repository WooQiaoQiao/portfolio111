import { Project, Experience } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Flow & Focus',
    category: '交互设计 Interactive',
    description: 'A conceptual mobile application redesign focusing on gestural navigation and mindful interactions.',
    imageUrl: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1200',
    year: '2025'
  },
  {
    id: '2',
    title: 'The Void Gallery',
    category: '空间设计 Spatial',
    description: 'An exhibition space layout emphasizing natural light, acoustic dampening, and minimal structure.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    year: '2024'
  },
  {
    id: '3',
    title: 'Monochrome Echoes',
    category: '平面设计 Graphic',
    description: 'A visual identity system developed for a contemporary music festival using structural typography.',
    imageUrl: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&q=80&w=1200',
    year: '2024'
  },
  {
    id: '4',
    title: 'Echo Interface',
    category: '交互设计 Interactive',
    description: 'Web-based interactive data visualization for environmental noise pollution tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    year: '2023'
  },
  {
    id: '5',
    title: 'Urban Sanctuary',
    category: '空间设计 Spatial',
    description: 'Interior architecture for a modern meditation studio in the heart of the city.',
    imageUrl: 'https://images.unsplash.com/photo-1510411326442-99042b58ea5a?auto=format&fit=crop&q=80&w=1200',
    year: '2023'
  },
  {
    id: '6',
    title: 'Type Matters',
    category: '平面设计 Graphic',
    description: 'An editorial series exploring the history and modern application of classic typefaces.',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
    year: '2022'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Senior Multidisciplinary Designer',
    company: 'Design Studio XYZ',
    period: '2023 - Present',
    description: 'Leading interactive and spatial design projects for international clients. Focusing on holistic brand experiences.'
  },
  {
    id: '2',
    role: 'Interactive Designer',
    company: 'Creative Digital',
    period: '2021 - 2023',
    description: 'Developed user-centered digital interfaces and web experiences. Collaborated closely with developers.'
  },
  {
    id: '3',
    role: 'Graphic / Spatial Designer',
    company: 'Minimalist Architecture Co.',
    period: '2019 - 2021',
    description: 'Assisted in spatial layouts and created visual identities for real estate and architectural projects.'
  }
];
