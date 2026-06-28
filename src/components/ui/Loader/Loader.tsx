"use client";
import { useEffect, useRef } from "react";
import styles from "./Loader.module.scss";

type LoaderProps = {
  start: boolean;
  onFinish: () => void;
};

function Loader({ start, onFinish }: LoaderProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hasFinishedRef = useRef(false); // guards against double-calling onFinish

  useEffect(() => {
    if (!start || hasFinishedRef.current) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.classList.add(styles.start);

    const line = wrapper.querySelector(`.${styles.line}`);
    if (!line) return;

    let timeoutId: number;

    const handleLineEnd = () => {
      if (hasFinishedRef.current) return;

      wrapper.classList.add(styles.wipe);
      timeoutId = window.setTimeout(() => {
        if (!hasFinishedRef.current) {
          hasFinishedRef.current = true;
          onFinish();
        }
      }, 800);
    };

    line.addEventListener("transitionend", handleLineEnd, { once: true });

    return () => {
      line.removeEventListener("transitionend", handleLineEnd);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [start, onFinish]);

  return (
    <div
      ref={wrapperRef}
      className={`relative flex items-center justify-center min-h-screen bg-black text-white ${styles.loaderWrapper}`}
    >
      <div className={styles.title}>Sri Balaji</div>
      <div className={styles.line} />
    </div>
  );
}

export default Loader;