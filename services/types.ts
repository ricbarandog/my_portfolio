
export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface SkillItem {
  category: string;
  skills: string[];
}

export interface ProjectLink {
  title: string;
  url: string;
  thumbnail: string;
  description: string;
  category: 'coding' | 'creative';
  tags: string[];
}
