import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'Tutorial' | 'AI' | 'Linux' | 'Tool';
  link: string;
  isExternal: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'Free' | 'Experimental' | 'Coming Soon';
  link?: string;
  techStack: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  label: string;
}

export interface StatData {
  name: string;
  value: number;
}