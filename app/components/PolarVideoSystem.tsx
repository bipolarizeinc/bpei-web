"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const driveVideo = (id: string) => `https://drive.google.com/uc?export=download&id=${id}`;

const VIDEOS = {
  greeting: driveVideo("1VGjcFGsCB7jI7WQ8ZpGRcxt0h-OIRyJ5"),
  products: driveVideo("1-uWcoqrAcbSOielkfCjNHKB1kDv2c-00"),
  blueprint: driveVideo("1auV0meLPspu2w57JFtg6b0oIZ5F72B0T"),
  drdocx: driveVideo("1dHXIMCAAmfyXDNS25NaaaCnm95EKBNWN"),
  nexus: driveVideo("1ZO6BJaUTIETuxuRrUKHTk88gj50ZgBBc"),
  about: driveVideo("1jQ2V1qwEtfJAHq6JOwARGHVTrj1KcsWu"),
  intake: driveVideo("1TRBbCLStOCZlisQaVGMvxLJ98O_BE6QN"),
  idle: driveVideo("1QBKQaTxHdyOaNOJ_nNA0oesoPgI5fAom"),
} as const;

const ROUTE_VIDEOS: Record<string, string> = {
  "/ecosystem": VIDEOS.products,
  "/services": VIDEOS.products,
  "/lender-readiness": VIDEOS.blueprint,
  "/academy": VIDEOS.blueprint,
  "/about": VIDEOS.about,
  "/intake": VIDEOS.intake,
  "/contact": VIDEOS.intake,
};

const INTRO_KEY = "bpei-polar-intro-seen-v2";

export default function PolarVideoSystem() {
  const pathname = usePathname();
  const router = useRouter();
  const [src, setSrc] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const play = useCallback((video: string, href?: string) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (href) router.push(href);
      return;
    }
    setPendingHref(href ?? null);
    setSrc(video);
    setVisible(true);
  }, [router]);

  useEffect(() => {
    if (pathname === "/" && !localStorage.getItem(INTRO_KEY)) {
      play(VIDEOS.greeting);
      localStorage.setItem(INTRO_KEY, "true");
    }
  }, [pathname, play]);

  useEffect(() => {
    const resetIdle = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => play(VIDEOS.idle), 180000);
    };

    const events = ["mousemove", "mousedown", "keydown", "touchstart", "scroll"] as const;
    events.forEach((event) => window.addEventListener(event, resetIdle, { passive: true }));
    resetIdle();

    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      events.forEach((event) => window.removeEventListener(event, resetIdle));
    };
  }, [play]);

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
  }, [pathname, play]);

  const finish = () => {
    setVisible(false);
    setSrc(null);
    const href = pendingHref;
    setPendingHref(null);
    if (href) router.push(href);
  };

  if (!visible || !src) return null;

  return (
    <div className="polar-video-overlay" role="dialog" aria-modal="true" aria-label="P.O.L.A.R. system transition">
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
      <div className="polar-video-status" aria-hidden="true">P.O.L.A.R. OS // MUTED MODE</div>
      <button className="polar-video-skip" type="button" onClick={finish}>
        Skip
      </button>
    </div>
  );
}
