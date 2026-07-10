"use client";

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

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="nav-logo">
            <span className="logo-white">Kool</span>
            <span className="logo-blue">Tech</span>
          </Link>

          <div className="nav-menu">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${
                  pathname === link.href ? "active" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link href="/contact" className="nav-cta">
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}