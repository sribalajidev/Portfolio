"use client"; // This file is a client component because it uses state and effects
import { useEffect, useRef } from "react";
import styles from "./Loader.module.scss";

type LoaderProps = {
  start: boolean;
  onFinish: () => void;
};

function Loader({start, onFinish,}: LoaderProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!start) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.classList.add(styles.start);

    const line = wrapper.querySelector(`.${styles.line}`);
    if (!line) return;

    const handleLineEnd = () => {
      wrapper.classList.add(styles.wipe);

      // Wipe transition takes 800ms → Remove loader after that
      setTimeout(onFinish, 800);
    };

    line.addEventListener("transitionend", handleLineEnd, { once: true });

    return () => line.removeEventListener("transitionend", handleLineEnd);
  }, [start, onFinish]);

  return (
    <div ref={wrapperRef} className={`relative flex items-center justify-center min-h-screen bg-black text-white ${styles.loaderWrapper}`}>
      <div className={styles.title}>Sri Balaji</div>
      <div className={styles.line} />
    </div>
  );
}

export default Loader;