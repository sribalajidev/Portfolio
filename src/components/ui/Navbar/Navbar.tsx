"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import gsap from "gsap";
import { sectionTransitions } from "@/components/animations/sectionTransitions";

import styles from "./Navbar.module.scss";

// Sanity Types
import { Navigation } from "@/sanity/types/navigation";
import { urlFor } from "@/sanity/lib/image";

interface NavbarProps {
    data: Navigation;
}

export default function Navbar({ data }: NavbarProps) {
  const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
  } as const;

  const [isNavOpen, setIsNavOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (route: string) => {
    setIsNavOpen(false);

    // Anchor links (/#about, /#experience, etc.)
    if (route.startsWith("/#")) {
      const sectionId = route.replace("/#", "");

      // Already on homepage → smooth scroll
      if (pathname === "/") {
        const transitionTrigger = sectionTransitions.get(sectionId);

        if (transitionTrigger) {
          gsap.to(window, {
            duration: 1,
            ease: "power2.inOut",
            scrollTo: {
              y: transitionTrigger.start,
              autoKill: true,
            },
          });

          return;
        }

        const element = document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }

        return;
      }

      // On another page → navigate to homepage with hash
      router.push(route);
      return;
    }

    // Home
    if (route === "/") {
      if (pathname === "/") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        router.push("/");
      }

      return;
    }

    // Any other internal page
    router.push(route);
  };

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
      <nav
        className={`${styles.mainNavigation} ${isNavOpen ? styles.open : ""
          }`}
      >
        <div className={styles.siteLogo}>
          <Image
            src={urlFor(data.logo.image).width(128).url()}
            alt={data.logo.alt}
            width={128}
            height={93}
            className={styles.logoImg}
            priority
          />
        </div>

        <div
          className={`${styles.hamburger} ${isNavOpen ? styles.isActive : ""
            }`}
          onClick={toggleNav}
          aria-expanded={isNavOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </div>
      </nav>

      <div
        className={`${styles.navOverlay} ${isNavOpen ? styles.open : ""
          }`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <div className={styles.navContainer}>
          <div className={styles.navlinkWrapper}>
            {data.links.map((link) => (
              <div key={link._key} className={styles.navItem}>
                <button
                  type="button"
                  className={styles.navLink}
                  onClick={() => handleNavigation(link.route)}
                >
                  {link.title}
                </button>
              </div>
            ))}
          </div>

          <div className={styles.sociallinksWrapper}>
            {data.socialLinks.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <a
                  key={item._key}
                  href={item.url}
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
            <p className={styles.content}>{data.website}</p>
          </div>
        </div>
      </div>
    </>
  );
}