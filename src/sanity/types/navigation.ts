import { SanityImage } from "./image";

export interface NavigationLink {
  _key: string;
  title: string;
  route: string;
}

export interface SocialLink {
  _key: string;
  title: string;
  url: string;
  icon: "github" | "linkedin";
}

export interface Navigation {
  logo: SanityImage;
  title: string;
  website: string;
  links: NavigationLink[];
  socialLinks: SocialLink[];
}
