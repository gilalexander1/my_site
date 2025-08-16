"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import * as React from "react";

export default function Nav() {
  const pathname = usePathname();

  // Hide the floating nav on the homepage
  if (pathname === "/") return null;

  const [visible, setVisible] = React.useState(true);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      setVisible(!(goingDown && y > 50));
      lastY.current = y;
    };

    // rAF throttle to avoid flooding updates
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-5 right-5 px-6 py-2 flex gap-6 items-center rounded-full border border-white/10
      bg-[var(--panel)]/40 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out
      ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"} animate-fadeIn`}
      style={{
        boxShadow:
          "0 0 15px rgba(255,255,255,0.05), 0 0 30px rgba(124,255,203,0.15)",
      }}
    >
      {/* Home (house icon) */}
      <Link href="/" className="hover:opacity-80 transition" aria-label="Home">
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

      <Link className="hover:text-accent transition" href="/projects">
        Projects
      </Link>
      <Link className="hover:text-accent transition" href="/blog">
        Blog
      </Link>
      <Link className="hover:text-accent transition" href="/contact">
        Contact
      </Link>
      <Link className="hover:text-accent transition" href="/private">
        Private
      </Link>
    </nav>
  );
}
