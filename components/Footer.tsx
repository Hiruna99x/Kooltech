import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      {/* Divider Above Footer */}
      <div className="footer-divider"></div>

      <footer className="footer">
        <div className="footer-content section">
          <div className="footer-grid">
            {/* Company Info */}
            <div>
              <div className="footer-logo">
                <span className="footer-logo-white">Ever</span>
                <span className="footer-logo-blue">Cool</span>
              </div>

              <p className="footer-description">
                Premium AC, refrigeration and appliance spare parts from trusted
                brands. Delivering quality components and reliable solutions for
                technicians, businesses and service providers.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="footer-title">Quick Links</h3>

              <ul className="footer-links">
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/products">Products</Link>
                </li>

                <li>
                  <Link href="/about">About Us</Link>
                </li>

                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="footer-title">Contact Information</h3>

              <div className="footer-contact">
                <div>
                  <p className="footer-label">Address</p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Ever+Cool,+396+Kumarathunga+Mw,+Matara"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ever Cool, 396 Kumarathunga Mw, Matara
                  </a>
                </div>

                <div>
                  <p className="footer-label">Phone</p>

                  <a href="tel:0412229733">0412 229 733</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="section footer-bottom-inner">
            <p>
              © {new Date().getFullYear()} Ever Cool. All Rights Reserved.
            </p>

            <p>Premium HVAC & Refrigeration Components</p>
          </div>
        </div>
      </footer>
    </>
  );
}