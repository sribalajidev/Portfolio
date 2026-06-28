"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Footer.module.scss";

import { useGSAP } from "@gsap/react";
import { animateFooter } from "@/components/animations/footer";

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formSubmitted = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    document.body.style.overflow = isContactOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isContactOpen]);

  const handleIframeLoad = () => {
    if (!formSubmitted.current) return;

    setSubmitted(true);
    formSubmitted.current = false;
    formRef.current?.reset();
  };

  const handleNewResponse = () => {
    setSubmitted(false);
  };

  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    animateFooter({
      section: sectionRef.current,
    });
  });
  return (
    <>
      <section ref={sectionRef} className={styles.footerWrapper} data-contact>
        <div className={styles.footerContent} data-contact-content>
          <h2 className={styles.title}>
            Got a Vision? Let&apos;s Bring It to Life!
          </h2>

          <p className={styles.description}>
            I&apos;m always excited to collaborate on new and innovative
            projects. Whether you&apos;re starting from scratch or refining an
            existing idea.
          </p>

          <button
            type="button"
            className={styles.footerBtn}
            onClick={() => setIsContactOpen(true)}
          >
            Say Hello
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Overlay */}

      <div
        className={`${styles.contactOverlay} ${
          isContactOpen ? styles.open : ""
        }`}
        onClick={() => setIsContactOpen(false)}
      />

      {/* Panel */}

      <aside
        className={`${styles.contactPanel} ${
          isContactOpen ? styles.open : ""
        }`}
      >
        <div className={styles.formHeader}>
          <h4>Let&apos;s Create Something Great Together</h4>

          <button
            type="button"
            className={styles.close}
            onClick={() => setIsContactOpen(false)}
            aria-label="Close"
          >
            <span />
            <span />
          </button>
        </div>

        <div className={styles.formWrapper}>
          <iframe
            name="hidden_iframe"
            title="hidden_iframe"
            style={{ display: "none" }}
            onLoad={handleIframeLoad}
          />

          {!submitted ? (
            <form
              ref={formRef}
              className={styles.form}
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe5t3_1Dit_cD1yjJVX5WCwPmsZ7p6SitMro4ncLQXboKBr3A/formResponse"
              method="POST"
              target="hidden_iframe"
              onSubmit={() => {
                formSubmitted.current = true;
              }}
            >
              <p>
                Hi, my name is
                <input
                  type="text"
                  name="entry.352013793"
                  placeholder="Your name"
                  required
                />
                You can reach me at
                <input
                  type="email"
                  name="entry.1258670128"
                  placeholder="email@example.com"
                  required
                />
              </p>

              <p>
                I&apos;m reaching out regarding
                <input
                  type="text"
                  name="entry.457346516"
                  placeholder="Job opportunity, collaboration, or just saying hi"
                  required
                />
              </p>

              <p>
                Here&apos;s a bit more about it
                <input
                  type="text"
                  name="entry.576254416"
                  placeholder="Tell me about your idea..."
                  required
                />
              </p>

              <button
                type="submit"
                className={styles.submitButton}
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className={styles.success}>
              <div className={styles.successContent}>
                <h3>Thank you for your submission!</h3>

                <button
                  type="button"
                  className={styles.resubmit}
                  onClick={handleNewResponse}
                >
                  Submit another response
                </button>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}