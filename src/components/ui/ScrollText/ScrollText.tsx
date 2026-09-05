"use client";
import { useEffect, useRef } from "react";
import styles from "./ScrollText.module.scss";

// sanity types
import { Skills } from "@/sanity/types/skills";

type ScrollTextProps = {
  data: Skills;
};

export default function ScrollText({
  data,
}: ScrollTextProps) {
  const { rows } = data;

  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row1WidthRef = { current: 0 };
    const row2WidthRef = { current: 0 };

    requestAnimationFrame(() => {
      if (!row1Ref.current || !row2Ref.current) return;

      row1WidthRef.current =
        row1Ref.current.scrollWidth / 2;

      row2WidthRef.current =
        row2Ref.current.scrollWidth / 2;
    });

    const onScroll = () => {
      if (!row1Ref.current || !row2Ref.current) return;

      const scroll = window.scrollY * 0.3;

      const x1 =
        (scroll % row1WidthRef.current) - 1200;

      const x2 =
        scroll % row2WidthRef.current;

      row1Ref.current.style.transform =
        `translateX(${x1}px)`;

      row2Ref.current.style.transform =
        `translateX(-${x2}px)`;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );
    };
  }, []);

  return (
    <section className={styles.scrolltextWrapper}>
      <div
        ref={row1Ref}
        className={`${styles.skillsRow} ${styles.row1}`}
      >
        {[
          ...rows[0].skills,
          ...rows[0].skills,
        ].map((skill, index) => (
          <span key={`row1-${index}`}>
            {skill}
          </span>
        ))}
      </div>

      <div
        ref={row2Ref}
        className={`${styles.skillsRow} ${styles.row2}`}
      >
        {[
          ...rows[1].skills,
          ...rows[1].skills,
        ].map((skill, index) => (
          <span key={`row2-${index}`}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}