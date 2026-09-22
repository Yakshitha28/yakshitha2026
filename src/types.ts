export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  badge?: string;
  featured?: boolean;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  metrics?: { label: string; value: string }[];
  keyFeatures: string[];
  interactiveType?: 'codered' | 'cafe' | 'food';
}

export interface RoadmapStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  accentColor: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
  category: 'Hackathon' | 'University' | 'Engineering' | 'Systems';
}

export interface TechItem {
  name: string;
  category: 'Languages' | 'Web' | 'Core CS' | 'Tools';
  level: string;
}
