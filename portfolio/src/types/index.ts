export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  about: string;
  highlights: string;
  review: string;
  imageUrl: string;
  screenshots?: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'design' | 'video' | 'api';
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export type 