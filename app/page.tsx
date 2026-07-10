import { CATEGORIES } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const categoryDetails: Record<string, { icon: string; description: string }> = {
  Compressor: {
    icon: "⚙️",
    description: "Reliable compressors for AC and refrigeration applications.",
  },
  "AC Gas": {
    icon: "🧊",
    description: "Quality refrigerant gases for cooling and HVAC systems.",
  },
  Oil: {
    icon: "🛢️",
    description: "Premium refrigeration oils for smooth compressor performance.",
  },
  Motors: {
    icon: "🌀",
    description: "Durable replacement motors for AC and appliance repairs.",
  },
  "Other Products": {
    icon: "🔧",
    description: "Additional spare parts and components for HVAC and appliances.",
  },
};

const brands = [
  { name: "Daikin", logo: "/images/brands/daikin.png" },
  { name: "Huayi", logo: "/images/brands/huayi.png" },
  { name: "Carrier", logo: "/images/brands/carrier.png" },
  { name: "Hitachi", logo: "/images/brands/hitachi.png" },
  { name: "LG", logo: "/images/brands/lg.png" },
  { name: "Honeywell", logo: "/images/brands/honeywell.png" },
];

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <section className={`${styles.hero} ${styles.heroBackground}`}>
        <div className={`${styles.glow} ${styles.glowOne}`} />
        <div className={`${styles.glow} ${styles.glowTwo}`} />

        <div className="section">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>
                PREMIUM HVAC PARTS • TRUSTED BRANDS • EXPERT SUPPORT
              </span>

              <h1 className={styles.heroTitle}>
                Premium
                <span>AC & Refrigeration</span>
                Components
              </h1>

              <p className={styles.heroText}>
                Your trusted source for compressors, refrigerants, AC spare
                parts, oils and appliance components. Quality products backed by
                expert support.
              </p>

              <div className={styles.heroButtons}>
                <Link href="/products" className="btn-primary">
                  Browse Products
                </Link>

                <Link href="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className={styles.productShowcase}>
              <div className={styles.slideProduct}>
                <Image
                  src="/images/compressor.png"
                  alt="Compressor"
                  fill
                  priority
                  className={`${styles.productImage} ${styles.slideOne}`}
                />

                <Image
                  src="/images/oil.png"
                  alt="Refrigeration Oil"
                  fill
                  className={`${styles.productImage} ${styles.slideTwo}`}
                />

                <Image
                  src="/images/fan.png"
                  alt="Fan Motor"
                  fill
                  className={`${styles.productImage} ${styles.slideThree}`}
                />
              </div>

              <div className={styles.slideDots}>
                <span className={styles.dotOne}></span>
                <span className={styles.dotTwo}></span>
                <span className={styles.dotThree}></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={styles.sectionHeader}>
          <h2 className="section-title">
            Product <span className={styles.blueText}>Categories</span>
          </h2>

          <p className="section-subtitle">
            Everything you need for HVAC servicing and repairs.
          </p>
        </div>

        <div className={styles.categoryGrid}>
          {CATEGORIES.map((category) => (
            <div key={category} className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                {categoryDetails[category]?.icon ?? "🔧"}
              </div>

              <h3>{category}</h3>
              <p>{categoryDetails[category]?.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.sectionDivider}></div>

      <section className="section">
        <div className={styles.brandVessel}>
          <div className={styles.sectionHeader}>

            <h2 className="section-title">
              Premium <span className={styles.blueText}>Quality • </span> Trusted <span className={styles.blueText}>Brands</span>
            </h2>
          </div>

          <div className={styles.brandGrid}>
            {brands.map((brand) => (
              <div key={brand.name} className={styles.brandCard}>
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={150}
                  height={70}
                  className={styles.brandLogo}
                />
              </div>
            ))}
          </div>
          <p className={styles.brandSubtitle}>
    Partnering with the world's most trusted brands to deliver quality,
    reliability, and performance — all under one roof.
  </p>
        </div>
      </section>
    </div>
  );
}