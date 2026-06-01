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
        autoResize: true,
        anchors: {
          duration: 0.9,
          easing: (time) => Math.min(1, 1.001 - 2 ** (-10 * time)),
        },
        gestureOrientation: "vertical",
        lerp: 0.1,
        wheelMultiplier: 1.26,
        touchMultiplier: 1.08,
        smoothWheel: true,
        syncTouch: false,
        overscroll: false,
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
