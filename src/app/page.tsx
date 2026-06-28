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
      sessionStorage.setItem("hasVisited", "true");

      requestAnimationFrame(() => {
        setShowLoader(true);

        requestAnimationFrame(() => {
          setLoaderStart(true);
        });
      });
    }
  }, []);

  // refs for sections - section animation
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const footerSectionRef = useRef<HTMLDivElement>(null);
  
 useGSAP(() => {
  let raf1 = 0;
  let raf2 = 0;

  raf1 = requestAnimationFrame(() => {
    raf2 = requestAnimationFrame(() => {
      animateSectionTransition({
        from: heroSectionRef.current,
        to: aboutSectionRef.current,
      });
    });
  });

  return () => {
    cancelAnimationFrame(raf1);
    cancelAnimationFrame(raf2);
  };
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
          <div ref={footerSectionRef} id="contact">
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
