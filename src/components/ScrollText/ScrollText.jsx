import { useEffect, useRef } from "react";
import "./ScrollText.scss";
import { pageContent } from "../../utils/pageContent";

function ScrollText() {
  const { categories } = pageContent.skills;

  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    let row1Width = 0;
    let row2Width = 0;

    // Measure widths AFTER render
    requestAnimationFrame(() => {
      row1Width = row1Ref.current.scrollWidth / 2;
      row2Width = row2Ref.current.scrollWidth / 2;
    });

    const onScroll = () => {
      const scroll = window.scrollY * 0.3;

      const x1 = scroll % row1Width - 600;
      const x2 = scroll % row2Width;

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
