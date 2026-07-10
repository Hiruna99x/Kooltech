import "./About.css";

export const metadata = {
  title: "About — KoolTech",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="section about-hero">

        <h1>
          Reliable <span> HVAC & Refrigeration Parts</span> Supplier in{" "}
          <span>Kandy</span>
        </h1>

        <p>
          KoolTech supplies premium AC parts, compressors, refrigerants,
          refrigeration components, AC oils, and washing machine parts from
          trusted brands. Our focus is quality, reliability, and responsive
          service for technicians, businesses, and service providers.
        </p>
      </section>

      <section className="section about-grid">
        <div className="about-card">
          <h2>Who We Are</h2>
          <p>
            We support HVAC professionals and customers with reliable spare
            parts and practical product guidance for repairs, maintenance, and
            system servicing.
          </p>
        </div>

        <div className="about-card">
          <h2>What We Provide</h2>
          <p>
            From compressors and refrigerants to appliance spares, KoolTech
            brings essential cooling and repair components under one roof.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Choose Us</h2>
          <p>
            We work with trusted brands and focus on product availability,
            dependable quality, and customer-first support.
          </p>
        </div>
      </section>

     <section className="section trust-section">
  <div className="trust-header">

<div className="section-divider"></div>

    <h2>
      Everything You Need <span>Under One Roof</span>
    </h2>

    <p>
      We bring together trusted brands, quality components and dependable
      customer support to help technicians and businesses find the right
      solution quickly and efficiently.
    </p>
  </div>

  <div className="trust-grid">
    <div className="trust-item">
      <h3>Trusted Brands</h3>
      <p>Products sourced from reliable global manufacturers.</p>
    </div>

    <div className="trust-item">
      <h3>Premium Quality</h3>
      <p>Durable components designed for long-term performance.</p>
    </div>

    <div className="trust-item">
      <h3>Wide Product Range</h3>
      <p>AC parts, refrigeration parts, oils, gases and more.</p>
    </div>

    <div className="trust-item">
      <h3>Customer Support</h3>
      <p>Friendly service and assistance for every requirement.</p>
    </div>
  </div>
</section>

    </main>
  );
}