import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ExperienceAnimationProps = {
  section: HTMLElement | null;
  left: HTMLDivElement | null;
  stats: HTMLDivElement | null;
};

export function animateExperience({
  section,
  left,
  stats,
}: ExperienceAnimationProps) {
  if (!section || !left) return;

  // left animation
  gsap.fromTo(
    left,
    {
      opacity: 0,
      y: 80,
      filter: "blur(20px)",
    },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Stats
  if (stats) {
    gsap.fromTo(
      stats,
      {
        opacity: 0,
        y: 80,
        filter: "blur(20px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stats,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const counters = gsap.utils.toArray<HTMLElement>(
      stats.querySelectorAll("[data-counter]")
    );

    counters.forEach((counter) => {
      const original = counter.textContent ?? "";

      if (!/^\d/.test(original)) return;

      counter.dataset.target = original;

      const suffix = original.replace(/[0-9]/g, "");

      counter.textContent = `0${suffix}`;
    });

    ScrollTrigger.create({
      trigger: stats,
      start: "top 85%",
      once: true,

      onEnter: () => {
        gsap.delayedCall(1.3, () => {
          counters.forEach((counter) => {
            const original = counter.dataset.target;

            if (!original) return;

            const target = Number(original.replace(/\D/g, ""));
            const suffix = original.replace(/[0-9]/g, "");

            const value = { current: 0 };

            gsap.to(value, {
              current: target,
              duration: 1.5,
              ease: "power3.out",
              snap: { current: 1 },

              onUpdate: () => {
                counter.textContent = `${value.current}${suffix}`;
              },
            });
          });
        });
      },
    });
  }

  // experience
  const stack = section.querySelector<HTMLElement>("[data-stack]");

  const items = gsap.utils.toArray<HTMLElement>(
    section.querySelectorAll("[data-item-wrapper]")
  );
  const cards = gsap.utils.toArray<HTMLElement>(
    section.querySelectorAll("[data-card]")
  );
  const bodies = gsap.utils.toArray<HTMLElement>(
    section.querySelectorAll("[data-body]")
  );

  const mm = gsap.matchMedia();
  mm.add("(min-width: 992px)", () => {

    if (stack) {
      gsap.fromTo(
        stack,
        {
          opacity: 0,
          y: 80,
          filter: "blur(20px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          delay: 0.15, // small offset so it follows the left column in
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
    // Reserve fixed space per item ONCE — sized for the fully-expanded state.
    // This box height is never animated, so nothing below it ever reflows.
    items.forEach((wrapper, index) => {
      const card = cards[index];
      const body = bodies[index];
      const header = card.querySelector<HTMLElement>("[data-header]");

      const expandedCardHeight = (header?.offsetHeight ?? 0) + body.scrollHeight;

      wrapper.style.height = `${expandedCardHeight + window.innerHeight * 0.3}px`;
      card.style.setProperty("--body-height", `${body.scrollHeight}px`);
    });

    const activate = (active: number) => {
      cards.forEach((card, index) => {
        const body = bodies[index];
        const open = index === active;

        card.dataset.expanded = String(open);
        gsap.killTweensOf([card, body]);

        gsap.to(body, {
          maxHeight: open ? body.scrollHeight : 0,
          opacity: open ? 1 : 0,
          duration: 0.45,
          ease: "power3.inOut",
          overwrite: true,
        });

        gsap.to(card, {
          opacity: open ? 1 : 0.45,
          filter: open ? "blur(0px)" : "blur(3px)",
          duration: 0.45,
          overwrite: true,
        });

        // Fixed: was `.cardContent` (literal class), now uses the data attribute
        const content = card.querySelector<HTMLElement>("[data-card-content]");
        if (content) {
          gsap.to(content, {
            y: open ? 0 : 24,
            duration: 0.45,
            ease: "power3.out",
            overwrite: true,
          });
        }

        const arrow = card.querySelector("button");
        if (arrow) {
          gsap.to(arrow, {
            rotate: open ? 180 : 0,
            duration: 0.35,
            ease: "power2.out",
          });
        }
      });
    };

    activate(0);

    // Click-to-expand
    cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        const wrapper = items[index];
        wrapper.scrollIntoView({ behavior: "smooth", block: "start" });
        activate(index);
      });
    });

    // Scroll-to-expand — trigger against the WRAPPER, not the card.
    items.forEach((wrapper, index) => {
      ScrollTrigger.create({
        trigger: wrapper,
        start: "top 30%",
        end: "bottom 30%",
        onEnter: () => activate(index),
        onEnterBack: () => activate(index),
      });
    });
  });
  mm.add("(max-width: 991px)", () => {
  items.forEach((wrapper) => {
    gsap.from(wrapper, {
      opacity: 0,
      y: 80,
      filter: "blur(20px)",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: wrapper,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });
});
}