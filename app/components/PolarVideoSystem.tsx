"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const ROUTE_VIDEOS: Record<string, string> = {
  "/ecosystem": "/videos/polar-transition-products-v2-web.mp4",
  "/services": "/videos/polar-transition-products-v2-web.mp4",
  "/lender-readiness": "/videos/polar-transition-blueprint-v2-web.mp4",
  "/academy": "/videos/polar-transition-blueprint-v2-web.mp4",
  "/about": "/videos/polar-transition-about-v2-web.mp4",
  "/intake": "/videos/polar-transition-intake-v2-web.mp4",
};

const INTRO_KEY = "bpei-polar-intro-seen-v2";

export default function PolarVideoSystem() {
  const pathname = usePathname();
  const router = useRouter();
  const [src, setSrc] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const play = (video: string, href?: string) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (href) router.push(href);
      return;
    }
    setPendingHref(href ?? null);
    setSrc(video);
    setVisible(true);
  };

  useEffect(() => {
    if (pathname === "/" && !localStorage.getItem(INTRO_KEY)) {
      play("/videos/polar-greeting-intro-v2-web.mp4");
      localStorage.setItem(INTRO_KEY, "true");
    }
  }, [pathname]);

  useEffect(() => {
    const resetIdle = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        play("/videos/polar-idle-inquiry-v2-web.mp4");
      }, 180000);
    };

    const events = ["mousemove", "mousedown", "keydown", "touchstart", "scroll"] as const;
    events.forEach((event) => window.addEventListener(event, resetIdle, { passive: true }));
    resetIdle();
    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      events.forEach((event) => window.removeEventListener(event, resetIdle));
    };
  }, []);

  useEffect(() => {
    const intercept = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor || anchor.target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === pathname) return;
      const video = ROUTE_VIDEOS[url.pathname];
      if (!video) return;
      event.preventDefault();
      play(video, `${url.pathname}${url.search}${url.hash}`);
    };

    document.addEventListener("click", intercept, true);
    return () => document.removeEventListener("click", intercept, true);
  }, [pathname]);

  const finish = () => {
    setVisible(false);
    setSrc(null);
    const href = pendingHref;
    setPendingHref(null);
    if (href) router.push(href);
  };

  if (!visible || !src) return null;

  return (
    <div className="polar-video-overlay" role="dialog" aria-label="P.O.L.A.R. system transition">
      <video
        key={src}
        className="polar-video"
        src={src}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={finish}
        onError={finish}
      />
      <button className="polar-video-skip" type="button" onClick={finish}>
        Skip
      </button>
    </div>
  );
}
