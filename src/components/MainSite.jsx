import React, { useState } from "react";
import clientReviewImage from "../../Client Review.png";
import peopleOpsCoreLogo from "../../poc-logo.png";

const navItems = [
  { id: "services", label: "Services" },
  { id: "aptelnow", label: "AptelNow" },
  { id: "proof", label: "Proof" },
  { id: "products", label: "Products" },
  { id: "ai", label: "AI" },
  { id: "contact", label: "Contact" },
];

const services = [
  {
    title: "Mail Server Builds",
    eyebrow: "Self owned",
    icon: "Mail",
    desc: "Business email on your own domain with admin control, spam protection, backups, logs, and secure access.",
    points: ["SMTP, IMAP, webmail", "Domain and DNS setup", "User, quota, and policy control"],
  },
  {
    title: "HR Systems",
    eyebrow: "Operations",
    icon: "HR",
    desc: "Employee management tools for attendance, payroll workflows, documents, approvals, and reporting.",
    points: ["Employee records", "Leave and attendance", "Role based dashboards"],
  },
  {
    title: "End to End Applications",
    eyebrow: "Custom build",
    icon: "App",
    desc: "From idea and UI to backend, database, deployment, and support. We build complete systems that businesses can run daily.",
    points: ["Web and mobile friendly", "Secure backend APIs", "Cloud or private hosting"],
  },
  {
    title: "Own SaaS Products",
    eyebrow: "No lock-in",
    icon: "SaaS",
    desc: "Do not depend forever on subscriptions. Build your own SaaS platform with your workflows, your branding, and your data.",
    points: ["Subscription style product", "Admin and tenant control", "Scalable product architecture"],
  },
];

const products = [
  {
    name: "PeopleOpsCore",
    eyebrow: "Own SaaS product",
    url: "https://peopleopscore.com",
    logo: peopleOpsCoreLogo,
    logoAlt: "PeopleOpsCore logo",
    desc: "PeopleOpsCore is KSBAA's own multi-tenant HR SaaS for companies that want a monthly subscription HR system without building from scratch.",
    points: [
      "Onboarding",
      "Attendance",
      "Notice period",
      "Documents",
      "Trainings",
      "Reviews",
      "Logs",
      "Role based access",
    ],
  },
  {
    name: "AptelNow.com",
    eyebrow: "KSBAA platform",
    url: "https://aptelnow.com",
    desc: "Telugu news, education, business, entertainment, local games, weather, government jobs, weekly astrology, dummy trading, trading basics, and pre owned item videos.",
    points: ["Telugu media", "Local discovery", "Video commerce"],
  },
  {
    name: "Custom HR portals",
    eyebrow: "Client systems",
    desc: "Tailored HR portals for teams that need attendance, payroll workflows, approvals, reports, and admin control.",
    points: ["Employee records", "Approvals", "Reports"],
  },
  {
    name: "Private mail server packages",
    eyebrow: "Infrastructure",
    desc: "Domain email systems for companies that want admin control, secure access, spam protection, backups, and ownership.",
    points: ["Domain email", "Admin control", "Backups"],
  },
];

const aptelCategories = [
  ["News", "Telugu news"],
  ["Edu", "Education"],
  ["Biz", "Business"],
  ["Fun", "Comedy"],
  ["Show", "Entertainment"],
  ["Game", "Local games"],
  ["Cook", "Cooking"],
  ["Sport", "Sports"],
  ["Sky", "Weather"],
  ["Jobs", "AP & Telangana govt jobs"],
  ["Star", "Weekly astrology"],
  ["Trade", "Dummy trading"],
  ["Learn", "Trading basics unlock"],
  ["Sell", "Pre owned item videos"],
];

const process = [
  ["01", "Understand", "We study your workflow, users, reports, and data before writing code."],
  ["02", "Build", "We design the UI, backend, database, security, and deployment as one working product."],
  ["03", "Operate", "We support launch, migrations, improvements, monitoring, and real user feedback."],
];

const socialLinks = [
  {
    label: "X",
    value: "@taskmaster999",
    href: "https://x.com/taskmaster999",
    icon: "x",
  },
  {
    label: "WhatsApp",
    value: "+91 79952 46347",
    href: "https://wa.me/917995246347",
    icon: "whatsapp",
  },
  {
    label: "Email",
    value: "taskmasterpro99@gmail.com",
    href: "mailto:taskmasterpro99@gmail.com",
    icon: "mail",
  },
  {
    label: "PeopleOpsCore",
    value: "peopleopscore.com",
    href: "https://peopleopscore.com",
    icon: "link",
  },
  {
    label: "AptelNow",
    value: "aptelnow.com",
    href: "https://www.aptelnow.com",
    icon: "link",
  },
];

function TopNav() {
  return (
    <header className="site-nav">
      <a className="brand" href="#home" aria-label="KSBAA home">
        <span className="brand-mark">K</span>
        <span>
          <strong>K.S.B.A.A</strong>
          <small>Gaming & IT Solutions Pvt Ltd</small>
        </span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function SectionHeader({ kicker, title, children, light = false }) {
  return (
    <div className={`section-header ${light ? "section-header-light" : ""}`}>
      <span>{kicker}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card-head">
        <div className="service-icon">{service.icon}</div>
        <div className="card-topline">
          <span>{service.eyebrow}</span>
        </div>
      </div>
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
      <ul>
        {service.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

function ProductCard({ product }) {
  const content = (
    <>
      <div className="product-card-head">
        {product.logo ? (
          <div className="product-logo-panel">
            <img src={product.logo} alt={product.logoAlt} />
          </div>
        ) : (
          <div className="product-letter-mark">{product.name.slice(0, 1)}</div>
        )}
        <span>{product.eyebrow}</span>
      </div>
      <h3>{product.name}</h3>
      <p>{product.desc}</p>
      <div className="product-points">
        {product.points.map((point) => (
          <span key={point}>{point}</span>
        ))}
      </div>
      {product.url ? <strong className="product-url">{product.url.replace("https://", "")}</strong> : null}
    </>
  );

  if (product.url) {
    return (
      <a className="product-card featured-product-card" href={product.url} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return <article className="product-card">{content}</article>;
}

function SocialIcon({ type }) {
  if (type === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.6 10.2 22.4 1h-1.9l-6.8 8-5.4-8H2l8.2 12.1L2 23h1.9l7.1-8.4 5.7 8.4H23l-8.4-12.8Zm-2.5 2.9-.8-1.2L4.7 2.5h2.7l5.3 7.7.8 1.2 6.9 10.1h-2.7l-5.6-8.4Z" />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a9.9 9.9 0 0 0-8.5 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.8c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5a.5.5 0 0 0 0-.5c-.1-.1-.6-1.4-.8-1.9-.2-.4-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.8 4.8 0 0 0 1 2.5 11 11 0 0 0 4.2 3.8c1.6.7 2.2.7 3 .6a2.5 2.5 0 0 0 1.7-1.2 2 2 0 0 0 .1-1.2c-.1-.1-.2-.1-.4-.2Z" />
      </svg>
    );
  }

  if (type === "mail") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm8 7.4L4.4 7H4v.8l8 5.7 8-5.7V7h-.4L12 12.4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.6 13.4a1 1 0 0 1 0-1.4l3.8-3.8a3 3 0 0 1 4.2 4.2l-2.1 2.1a3 3 0 0 1-3.7.4 1 1 0 1 1 1-1.7 1 1 0 0 0 1.3-.1l2.1-2.1a1 1 0 1 0-1.4-1.4L12 13.4a1 1 0 0 1-1.4 0Zm2.8-2.8a1 1 0 0 1 0 1.4l-3.8 3.8a3 3 0 0 1-4.2-4.2l2.1-2.1a3 3 0 0 1 3.7-.4 1 1 0 1 1-1 1.7 1 1 0 0 0-1.3.1L6.8 13a1 1 0 1 0 1.4 1.4l3.8-3.8a1 1 0 0 1 1.4 0Z" />
    </svg>
  );
}

function SocialLinks({ compact = false }) {
  return (
    <div className={`social-links ${compact ? "social-links-compact" : ""}`}>
      {socialLinks.map((link) => (
        <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} aria-label={`Open ${link.label}`}>
          <span className="social-icon">
            <SocialIcon type={link.icon} />
          </span>
          <span>
            <small>{link.label}</small>
            <strong>{link.value}</strong>
          </span>
        </a>
      ))}
    </div>
  );
}

export default function MainSite() {
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  return (
    <main className="site-shell">
      <TopNav />

      <section id="home" className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span>Private systems</span>
              <span>Custom SaaS</span>
              <span>AI on your data</span>
            </div>
            <div className="hero-title-lockup">
              <span>Gaming & IT Solutions Pvt Ltd</span>
              <h1>K.S.B.A.A</h1>
              <strong>Build. Own. Scale.</strong>
            </div>
            <p>
              We build serious business software, private AI systems, and our
              own digital platforms like AptelNow.com for Telugu people across
              AP, Telangana, and the world.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#contact">
                Start a project
              </a>
              <a className="secondary-btn" href="#services">
                View strengths
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="KSBAA premium technology showcase">
            <div className="watch-stack">
              <div className="smart-watch weather-watch">
                <span>Systems live</span>
                <strong>KSBAA</strong>
                <small>Business software</small>
              </div>
              <div className="smart-watch time-watch">
                <span>Australia</span>
                <strong>Live</strong>
                <small>Australia client</small>
              </div>
            </div>
            <div className="phone-card">
              <div className="phone-notch"></div>
              <div className="phone-outline">K</div>
              <p>
                Purpose-driven innovation lives at the heart of meaningful
                technological progress.
              </p>
            </div>
            <div className="visual-strip">
              <span>Mail servers</span>
              <span>HR systems</span>
              <span>PeopleOpsCore</span>
              <span>Private AI</span>
              <span>AptelNow</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="content-section">
        <SectionHeader
          kicker="Core strengths"
          title="Build what your business owns, controls, and grows."
        >
          KSBAA focuses on practical products that replace messy tools, reduce
          subscription dependency, and keep business data under your control.
        </SectionHeader>

        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section id="aptelnow" className="aptel-section">
        <div className="aptel-glass">
          <div className="aptel-copy">
            <div className="aptel-title-lockup">
              <span>KSBAA Platform</span>
              <h2>
                AptelNow<span>.com</span>
              </h2>
              <strong>Telugu media. Local updates. Video commerce.</strong>
            </div>
            <p>
              AptelNow brings Telugu-focused YouTube embedded content and local
              discovery into one place: news, education, business, comedy,
              entertainment, cooking, sports, weather, AP and Telangana
              government jobs, weekly astrology, local games, dummy trading,
              and trading basics unlock.
            </p>
            <p>
              We also added video based pre owned things selling, so people can
              show products clearly through video and connect with local buyers
              faster.
            </p>
            <a className="secondary-btn aptel-btn" href="https://aptelnow.com">
              Visit AptelNow.com
            </a>
          </div>

          <div className="aptel-showcase" aria-label="AptelNow content categories">
            <div className="aptel-device-stage">
              <div className="aptel-mini-device youtube-device">
                <span>Embedded YouTube</span>
                <strong>Telugu media</strong>
                <small>Local updates</small>
              </div>
              <div className="aptel-mini-device commerce-device">
                <span>Video commerce</span>
                <strong>Pre owned</strong>
                <small>Show and sell</small>
              </div>
              <div className="aptel-phone-device">
                <div className="phone-notch"></div>
                <strong>A</strong>
                <p>News, jobs, learning, entertainment, and local commerce.</p>
              </div>
            </div>
            <div className="aptel-categories">
              {aptelCategories.map(([icon, category]) => (
                <span key={category}>
                  <i>{icon}</i>
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="proof-section">
        <div className="proof-card">
          <div className="proof-copy">
            <SectionHeader
              kicker="Client appreciation"
              title="Real support. Real HR delivery. Real words from a client."
              light
            >
              KSBAA delivered an HR application for Smavy Academy and supported
              the team through go-live, onboarding, and post-deployment.
            </SectionHeader>

            <div className="proof-stats">
              <div>
                <strong>Live</strong>
                <span>Client operations</span>
              </div>
              <div>
                <strong>End to end</strong>
                <span>Design to deployment</span>
              </div>
              <div>
                <strong>Support</strong>
                <span>Go-live and onboarding</span>
              </div>
            </div>
          </div>

          <button
            className="client-review-preview"
            type="button"
            onClick={() => setIsReviewOpen(true)}
            aria-label="Open client appreciation letter full screen"
          >
            <span className="review-preview-badge">Tap to read full letter</span>
            <img
              src={clientReviewImage}
              alt="Client appreciation email for KSBAA HR application delivery and support"
            />
          </button>
        </div>
      </section>

      {isReviewOpen ? (
        <div
          className="review-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Client appreciation letter"
          onClick={() => setIsReviewOpen(false)}
        >
          <button
            className="review-lightbox-close"
            type="button"
            onClick={() => setIsReviewOpen(false)}
            aria-label="Close client appreciation letter"
          >
            Close
          </button>
          <img
            src={clientReviewImage}
            alt="Full client appreciation email for KSBAA HR application delivery and support"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}

      <section id="products" className="content-section split-section">
        <div>
          <SectionHeader kicker="Products" title="Own SaaS products and custom builds." />
          <div className="product-list">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>

        <div className="process-card">
          <h3>How we build</h3>
          {process.map(([num, title, desc]) => (
            <div className="process-step" key={num}>
              <span>{num}</span>
              <div>
                <strong>{title}</strong>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="ai" className="ai-section">
        <div className="ai-copy">
          <SectionHeader
            kicker="Private AI"
            title="AI models based on your own company data."
            light
          >
            Build AI assistants for documents, support, internal search,
            reporting, and workflow automation without exposing your knowledge
            base to random tools.
          </SectionHeader>
          <a className="primary-btn light-btn" href="#contact">
            Discuss AI project
          </a>
        </div>
        <div className="ai-tiles">
          <span>Document Q&A</span>
          <span>Support bot</span>
          <span>Report assistant</span>
          <span>Internal search</span>
          <span>Workflow automation</span>
          <span>Data dashboards</span>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <SectionHeader
            kicker="Contact"
            title="Let us build your next company system."
            light
          >
            Tell us the workflow you want to replace, automate, or scale. KSBAA
            can design, build, deploy, and support it end to end.
          </SectionHeader>
        </div>

        <SocialLinks />
      </section>

      <footer className="site-footer">
        <span>Copyright {new Date().getFullYear()} K.S.B.A.A Gaming & IT Solutions Pvt Ltd</span>
        <span>Mail servers, HR systems, SaaS products, private AI, and end to end apps.</span>
        <SocialLinks compact />
        <a href="/privacy-policy/">Privacy Policy</a>
      </footer>
    </main>
  );
}
