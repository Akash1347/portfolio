import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const children = el.querySelectorAll(".animate-on-scroll");
    children.forEach((child, i) => {
      (child as HTMLElement).style.transitionDelay = `${i * 80}ms`;
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
