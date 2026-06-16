import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3 / SCSS' },
      { name: 'JavaScript (ES6+)' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'Vue.js' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'PHP' },
      { name: 'MySQL' },
      { name: 'Firebase' },
      { name: 'REST APIs' },
    ],
  },
  {
    name: 'QA & Testing',
    skills: [
      { name: 'Selenium' },
      { name: 'QA Testing' },
      { name: 'Test Planning' },
      { name: 'Bug Reporting' },
      { name: 'Regression Testing' },
    ],
  },
  {
    name: 'Design & Tools',
    skills: [
      { name: 'Figma' },
      { name: 'Adobe Photoshop' },
      { name: 'Adobe Illustrator' },
      { name: 'Adobe Premiere' },
      { name: 'After Effects' },
      { name: 'Git / GitHub' },
    ],
  },
];
