"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider() {
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;
    let bodyObserver: MutationObserver | null = null;

    const syncScrollLock = () => {
      if (!lenis) {
        return;
      }

      if (document.body.style.overflow === "hidden") {
        lenis.stop();
        return;
      }

      lenis.start();
    };

    const destroyLenis = () => {
      bodyObserver?.disconnect();
      bodyObserver = null;
      lenis?.destroy();
      lenis = null;
    };

    const createLenis = () => {
      if (lenis || motionQuery.matches) {
        return;
      }

      lenis = new Lenis({
        autoRaf: true,
        anchors: true,
        lerp: 0.18,
        duration: 0.65,
        wheelMultiplier: 1.22,
        touchMultiplier: 1.08,
        syncTouch: false,
        stopInertiaOnNavigate: true,
        prevent: (node) => node.closest("[data-lenis-prevent]") !== null,
      });

      bodyObserver = new MutationObserver(syncScrollLock);
      bodyObserver.observe(document.body, {
        attributes: true,
        attributeFilter: ["style"],
      });
      syncScrollLock();
    };

    const handleMotionChange = () => {
      if (motionQuery.matches) {
        destroyLenis();
        return;
      }

      createLenis();
    };

    createLenis();
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
      destroyLenis();
    };
  }, []);

  return null;
}
