"use client"; // This file is a client component because it uses state and effects
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateSectionTransition } from "@/components/animations/sectionTransitions";

// components import
import Loader from "@/components/ui/Loader/Loader";
import Navbar from "@/components/ui/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import ScrollText from "@/components/ui/ScrollText/ScrollText";
import Experience from "@/components/sections/Experience/Experience";
import Footer from "@/components/ui/Footer/Footer";

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);
  const [loaderStart, setLoaderStart] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowLoader(true);
      sessionStorage.setItem("hasVisited", "true");
      requestAnimationFrame(() => {
        setLoaderStart(true);
      });
    }
  }, []);

  // refs for sections - section animation
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const footerSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    animateSectionTransition({
      from: heroSectionRef.current,
      to: aboutSectionRef.current,
    });
  });
  return (
    <>
      {showLoader ? (
        <Loader
          start={loaderStart}
          onFinish={() => setShowLoader(false)}
        />
      ) : (
        <> 
          <Navbar />
          <div ref={heroSectionRef}>
            <Hero />
          </div>
          <div ref={aboutSectionRef}>
            <About />
          </div>
          <div>
            <ScrollText />
          </div>
          <div ref={experienceSectionRef}>
            <Experience />
          </div>
          <div ref={footerSectionRef}>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
