// ============================================================
// PORTFOLIO TYPES - Centralized TypeScript interfaces
// ============================================================

export interface Technology {
  name: string;
  icon: string;
  category: "backend" | "frontend" | "database" | "cloud" | "tools";
  color?: string;
}

export interface Experience {
  id: string;
  company: string;
  logo?: string;
  role: string;
  period: string;
  location: string;
  type: "full-time" | "part-time" | "freelance" | "internship";
  description: string;
  achievements: string[];
  technologies: string[];
  current?: boolean;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: "completed" | "in-progress" | "archived";
  featured: boolean;
  category: string;
  features?: string[];
  year?: number;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  logo?: string;
  category: "cloud" | "development" | "database" | "other";
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  description?: string;
  logo?: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    location: string;
    email: string;
    phone?: string;
    whatsapp?: string;
    website?: string;
    avatar?: string;
    cvUrl?: string;
    available: boolean;
  };
  social: SocialLink[];
  technologies: Technology[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
  services: Service[];
  stats: Stat[];
  github: {
    username: string;
    pinnedRepos?: string[];
  };
}

export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  blog?: string;
  company?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  homepage?: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  fork: boolean;
}
