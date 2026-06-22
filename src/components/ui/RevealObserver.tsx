"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      document
        .querySelectorAll<HTMLElement>(".reveal")
        .forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const observeReveals = (root: ParentNode) => {
      root
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((element) => observer.observe(element));
    };

    observeReveals(document);

    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches(".reveal:not(.is-visible)")) observer.observe(node);
          observeReveals(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });
    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
