import Navbar from "@/components/ui/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Skills from "@/components/ui/ScrollText/ScrollText";
import Experience from "@/components/sections/Experience/Experience";
import Footer from "@/components/ui/Footer/Footer";

export const componentRegistry = {
  navigation: Navbar,
  hero: Hero,
  about: About,
  skills: Skills,
  experience: Experience,
  footer: Footer,
} as const;