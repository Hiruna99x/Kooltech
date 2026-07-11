"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
            <span className="logo-white">Ever</span>
            <span className="logo-blue">Cool</span>
          </Link>

          <button
            type="button"
            className={`nav-toggle ${open ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-collapse ${open ? "open" : ""}`}>
            <div className="nav-menu">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${
                    pathname === link.href ? "active" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className="nav-cta"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}