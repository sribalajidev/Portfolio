export interface ExperienceStat {
  _key: string;
  label: string;
  value: string;
}

export interface ExperienceTimelineItem {
  _key: string;
  year: string;
  duration: string;
  role: string;
  company: string;
  summary: string;
  technologies: string[];
  highlights: string[];
}

export interface Experience {
  subtitle: string;
  title: string;
  description: string;
  stats: ExperienceStat[];
  timeline: ExperienceTimelineItem[];
  anchor?: string;
}