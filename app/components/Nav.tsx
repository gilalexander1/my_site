"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import * as React from "react";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [visible, setVisible] = React.useState(true);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    if (isHome) return; // no floating nav on homepage
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      setVisible(!(goingDown && y > 50));
      lastY.current = y;
    };
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(() => { onScroll(); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [isHome]);

  if (isHome) return null;

  return (
    <nav
      className={`nav-shell ${visible ? "nav-show" : "nav-hide"}`}
      style={{ zIndex: 9999 }}
    >
      {/* Home (house icon) */}
      <Link href="/" className="home-link" aria-label="Home">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          className="house-glow"
          aria-hidden="true"
        >
          <path
            d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      <Link className="nav-link" href="/projects">Projects</Link>
      <Link className="nav-link" href="/blog">Blog</Link>
      <Link className="nav-link" href="/contact">Contact</Link>
      <Link className="nav-link" href="/private">Private</Link>
    </nav>
  );
}
