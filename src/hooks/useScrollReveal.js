import { useEffect } from "react";

export default function useScrollReveal(sectionId, selector = "[data-reveal]", options = {}) {
    useEffect(() => {
        const section = document.getElementById(sectionId);
        if (!section) {
            return undefined;
        }

        const elements = section.querySelectorAll(selector);
        if (!elements.length) {
            return undefined;
        }

        if (!("IntersectionObserver" in window)) {
            elements.forEach((element) => element.classList.add("is-visible"));
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        return;
                    }

                    entry.target.classList.remove("is-visible");
                });
            },
            {
                threshold: options.threshold ?? 0.2,
                rootMargin: options.rootMargin ?? "0px 0px -8% 0px",
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [sectionId, selector, options.threshold, options.rootMargin]);
}
