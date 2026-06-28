"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "./Navbar.module.scss";
import { portfolioData } from "@/data/portfolio";


export default function Navbar() {
  const { navigation } = portfolioData;
  const iconMap = { github: FaGithub, linkedin: FaLinkedin, } as const;

  const scrollToSection = (id: string) => {
    setIsNavOpen(false);

    const element = document.getElementById(id);
    
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  return (
      <>
    <nav className={`${styles.mainNavigation} ${isNavOpen ? styles.open : ''}`}>
      <div className={styles.siteLogo}>
        <Image src="/images/logo.webp" alt="Site Logo" width={60} height={60} className={styles.logoImg} priority />
      </div>
      <div className={`${styles.hamburger} ${isNavOpen ? styles.isActive : ''}`} onClick={toggleNav} aria-expanded={isNavOpen}>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </div>
      </nav>
      <div className={`${styles.navOverlay} ${isNavOpen ? styles.open : ''}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className={styles.navContainer}>
          <div className={styles.navlinkWrapper}>
            {navigation.links.map((link) => (
              <div key={link.href} className={styles.navItem}>
                <button
                  type="button"
                  className={styles.navLink}
                  onClick={() => scrollToSection(link.href)}
                >
                  {link.label}
                </button>
              </div>
            ))}
          </div>
          <div className={styles.sociallinksWrapper}>
            {navigation.socialLinks.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                >
                  <Icon size={30} />
                </a>
              );
            })}
          </div>
          <div className={styles.contentWrapper}>
            <p className={styles.content}>{navigation.website}</p>
          </div>
        </div>
      </div>
      </>
  );
}
