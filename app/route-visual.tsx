"use client";

import { usePathname } from "next/navigation";

const visualRoutes: Record<string, string> = {
  "/": "home",
  "/ecosystem": "ecosystem",
  "/etas": "etas",
  "/about": "about",
};

export default function RouteVisual() {
  const pathname = usePathname();
  const visual = visualRoutes[pathname];

  if (!visual) return null;

  return <span className={`route-marker route-${visual}`} aria-hidden="true" />;
}
