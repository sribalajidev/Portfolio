"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { animateSectionTransition } from "@/components/animations/sectionTransitions";

import Loader from "@/components/ui/Loader/Loader";
import Navbar from "@/components/ui/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import ScrollText from "@/components/ui/ScrollText/ScrollText";
import Experience from "@/components/sections/Experience/Experience";
import Footer from "@/components/ui/Footer/Footer";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true); // default true, not false
  const [loaderStart, setLoaderStart] = useState(false);
  const [contentReady, setContentReady] = useState(false); // gates section mounting

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      sessionStorage.setItem("hasVisited", "true");
      requestAnimationFrame(() => {
        setLoaderStart(true);
      });
    } else {
      // Returning visitor — skip the loader entirely, mount immediately
      setShowLoader(false);
      setContentReady(true);
    }
  }, []);

  const handleLoaderFinish = useCallback(() => {
    setShowLoader(false);
    setContentReady(true); // NOW do the sections mount
  }, []);

  const heroSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const footerSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!contentReady) return;

    animateSectionTransition({
      from: heroSectionRef.current,
      to: aboutSectionRef.current,
    });
  }, [contentReady]);

  return (
    <>
      {showLoader && (
        <Loader start={loaderStart} onFinish={handleLoaderFinish} />
      )}

      {contentReady && (
        <>
          <Navbar />
          <div ref={heroSectionRef} id="home">
            <Hero />
          </div>
          <div ref={aboutSectionRef} id="about">
            <About />
          </div>
          <div>
            <ScrollText />
          </div>
          <div ref={experienceSectionRef} id="experience">
            <Experience />
          </div>
          <div ref={footerSectionRef} id="footer">
            <Footer />
          </div>
        </>
      )}
    </>
  );
}