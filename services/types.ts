
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

export enum LoadingState {
  IDLE = 'IDLE',
  GENERATING_SCRIPT = 'GENERATING_SCRIPT',
  GENERATING_AUDIO = 'GENERATING_AUDIO',
  PLAYING = 'PLAYING',
  ERROR = 'ERROR'
}
