"use client";

import { FaChevronDown } from "react-icons/fa";
import styles from "./Experience.module.scss";

type TimelineItem = {
  year: string;
  duration: string;
  role: string;
  company: string;
  summary: string;
  technologies: string[];
  highlights: string[];
};

type ExperienceStackProps = {
  timeline: TimelineItem[];
};

export default function ExperienceStack({ timeline }: ExperienceStackProps) {
  return (
    <div className={styles.stack} data-stack>
      {timeline.map((item, index) => (
        <div
          key={item.year}
          className={styles.itemWrapper}
          data-item-wrapper
        >
          <article
            className={styles.card}
            data-card
            data-index={index}
            data-year={item.year}
            data-expanded={index === 0}
          >
            <div className={styles.indication}>
              <span className={styles.year}>{item.year}</span>
              <span className={styles.duration}>{item.duration}</span>
            </div>

            <div className={styles.cardContent} data-card-content>
              <header className={styles.header} data-header>
                <div className={styles.title}>
                  <h2 className={styles.role}>{item.role}</h2>
                  <p className={styles.company}>{item.company}</p>
                </div>

                <button
                  className={styles.arrow}
                  type="button"
                  aria-label="Toggle experience details"
                >
                  <FaChevronDown />
                </button>
              </header>

              <div className={styles.body} data-body>
                <div className={styles.bodyInner} data-body-inner>
                  <p className={styles.summary}>{item.summary}</p>

                  <div className={styles.section}>
                    <span className={styles.label}>Technologies</span>
                    <div className={styles.tags}>
                      {item.technologies.map((tech) => (
                        <span key={tech} className={styles.tag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.section}>
                    <span className={styles.label}>Key Contributions</span>
                    <ul className={styles.highlights}>
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}