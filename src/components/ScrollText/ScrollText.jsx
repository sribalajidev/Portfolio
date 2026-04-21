import { useEffect, useRef } from "react";
import "./ScrollText.scss";
import { pageContent } from "../../utils/pageContent";

function ScrollText() {
  const { categories } = pageContent.skills;

  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const row1WidthRef = { current: 0 };
    const row2WidthRef = { current: 0 };

    requestAnimationFrame(() => {
      if (!row1Ref.current || !row2Ref.current) return;

      row1WidthRef.current = row1Ref.current.scrollWidth / 2;
      row2WidthRef.current = row2Ref.current.scrollWidth / 2;
    });

    const onScroll = () => {
      if (!row1Ref.current || !row2Ref.current) return;

      const scroll = window.scrollY * 0.3;

      const x1 = scroll % row1WidthRef.current - 1200;
      const x2 = scroll % row2WidthRef.current;

      row1Ref.current.style.transform = `translateX(${x1}px)`;
      row2Ref.current.style.transform = `translateX(-${x2}px)`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="scrolltext-wrapper">
      <div className="skills-row row-1" ref={row1Ref}>
        {[...categories[0], ...categories[0]].map((skill, i) => (
          <span key={`r1-${i}`}>{skill}</span>
        ))}
      </div>

      <div className="skills-row row-2" ref={row2Ref}>
        {[...categories[1], ...categories[1]].map((skill, i) => (
          <span key={`r2-${i}`}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default ScrollText;
