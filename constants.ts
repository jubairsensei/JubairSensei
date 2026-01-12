import { Youtube, Send, Bot, Github, Twitter, Mail } from "lucide-react";
import { NavItem, Resource, Project, BlogPost, SocialLink } from "./types";

export const BRAND_NAME = "Jubair Sensei";
export const TAGLINE = "Hack, Learn, Dominate!";
export const PROFILE_IMAGE = "https://github.com/jubairsensei.png"; // Auto-pulls from GitHub

export const LINKS = {
  youtube: "https://youtube.com/@jubairsensei",
  telegram: "https://t.me/JubairSensei",
  telegramBot: "https://t.me/JubairSenseibot",
  github: "https://github.com/jubairsensei",
  donate: "/donate", 
};

// Simplified Menu
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Community", path: "/community" },
  { label: "Donate", path: "/donate" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "YouTube", url: LINKS.youtube, icon: Youtube, label: "Subscribe" },
  { platform: "Telegram", url: LINKS.telegram, icon: Send, label: "Join Channel" },
  { platform: "GitHub", url: LINKS.github, icon: Github, label: "Code" },
];

export const DONATION_INFO = {
  bybit: "162413299",
  bitget: "1103257109",
  binance: "897570060",
  bnb: "0xEc807fCFa6801c4E790976bbF799f79dEe81Bc3f"
};

export const FEATURED_RESOURCES: Resource[] = [
  {
    id: "1",
    title: "Python for Hackers",
    description: "Start your journey into cybersecurity with Python scripting essentials.",
    category: "Tutorial",
    link: LINKS.youtube,
    isExternal: true,
  },
  {
    id: "2",
    title: "Ultimate VPS Setup",
    description: "Secure your Linux server in 10 minutes. Firewall, SSH keys, and Fail2Ban.",
    category: "Linux",
    link: LINKS.youtube,
    isExternal: true,
  },
  {
    id: "3",
    title: "Basic Tech Master",
    description: "Master the fundamentals of technology and build a strong digital foundation.",
    category: "Tutorial",
    link: LINKS.youtube,
    isExternal: true,
  },
];

export const PROJECTS: Project[] = []; // Projects list cleared as requested

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Why You Should Learn Linux in 2024",
    excerpt: "Linux is the backbone of the internet. Here is why every developer needs to master the CLI.",
    date: "Oct 12, 2024",
    category: "Career",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Automating Your Daily Tasks with Python",
    excerpt: "Stop doing boring stuff manually. Write scripts to handle files, emails, and data.",
    date: "Oct 05, 2024",
    category: "Automation",
    readTime: "8 min read",
  },
];