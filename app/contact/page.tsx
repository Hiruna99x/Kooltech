import ContactForm from "@/components/ContactForm";
import "./Contact.css";

export const metadata = {
  title: "Contact — KoolTech",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="section contact-grid">
        <div className="contact-form-card">
          <div className="card-header">
            <h2>Send Us a Message</h2>
            <p>
              Fill out the form below and our team will get back to you as soon
              as possible.
            </p>
          </div>

          <ContactForm />
        </div>

        <div className="contact-info-card">
          <h2>Visit Our Store</h2>

          <p className="info-text">
            Visit KoolTech for reliable spare
            parts from trusted brands.
          </p>

          <div className="info-list">
            <div className="info-item">
              <div>
                <h4>Address</h4>
                <p>Kooltech Electricals, 18B Cross St, Kandy 20000</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kooltech+Electricals,+18B+Cross+St,+Kandy+20000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="info-item">
              <div>
                <h4>Phone</h4>
                <a href="tel:0812228666">0812 228 666</a>
              </div>
            </div>

            <div className="info-item">
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Saturday
                  <br/>8:30 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="map-card">
            <iframe
              title="KoolTech Electricals Location"
              src="https://www.google.com/maps?q=Kooltech+Electricals,+18B+Cross+St,+Kandy+20000&output=embed"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="contact-highlight">
          Trusted supplier of AC parts, compressors, refrigeration oils, gases,
          fan motors, and appliance spare parts.
        </div>
      </section>
    </main>
  );
}