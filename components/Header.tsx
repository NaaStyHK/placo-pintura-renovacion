"use client";

import { useEffect, useState } from "react";
import fr from "@/content/fr";

export default function Header() {
  const { site, nav } = fr;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#top" className="logo">
          {site.name}
        </a>

        <nav className="nav-links">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              {item.label}
            </a>
          ))}

          <a className="btn btn-primary call-btn" href={`tel:${site.phone}`}>
            Contacter
          </a>
        </nav>
      </div>
    </header>
  );
}
