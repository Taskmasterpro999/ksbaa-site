import React, { useEffect, useState } from "react";
import clientReviewImage from "../../Client Review.png";
import peopleOpsCoreLogo from "../../poc-logo.png";

const services = [
  ["01", "Product engineering", "From the first screen to production infrastructure, we turn complex workflows into calm, dependable software."],
  ["02", "Business platforms", "HR systems, operations portals and subscription products shaped around the way your team actually works."],
  ["03", "Private AI", "Search, assistants and automations grounded in your company knowledge, with ownership and control designed in."],
  ["04", "Digital infrastructure", "Private mail servers, secure deployment, monitoring and the technical foundation that keeps business moving."],
];

const capabilities = ["Web applications", "SaaS products", "HR technology", "Private AI", "Mail infrastructure", "Product design"];

const socialLinks = [
  ["LinkedIn", "https://www.linkedin.com/in/himabindu-karumanchi-56b86b367"],
  ["Instagram", "https://www.instagram.com/taskmasterpro99"],
  ["YouTube", "https://www.youtube.com/@Taskmasterpro-l1s6q"],
  ["X", "https://x.com/taskmaster999"],
];

function Arrow({ down = false }) {
  return <span aria-hidden="true">{down ? "↓" : "↗"}</span>;
}

function Reveal({ as = "div", className = "", children, ...props }) {
  return React.createElement(as, { className: `reveal ${className}`, ...props }, children);
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="topbar">
      <a className="wordmark" href="#home" aria-label="KSBAA home">
        <span className="wordmark-k">K</span>
        <span><strong>KSBAA</strong><small>Gaming & IT Solutions</small></span>
      </a>
      <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="primary-nav">
        {open ? "Close" : "Menu"}
      </button>
      <nav id="primary-nav" className={open ? "nav-open" : ""} aria-label="Primary navigation">
        <a href="#expertise" onClick={() => setOpen(false)}>Expertise</a>
        <a href="#ventures" onClick={() => setOpen(false)}>Ventures</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Start a project <Arrow /></a>
      </nav>
    </header>
  );
}

export default function MainSite() {
  const [reviewOpen, setReviewOpen] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll", max > 0 ? window.scrollY / max : 0);
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <main className="site-shell">
      <Header />

      <section id="home" className="hero">
        <div className="hero-watermark" aria-hidden="true">KSBAA</div>
        <Reveal className="hero-copy">
          <p className="eyebrow">Technology, built with intent.</p>
          <div className="hero-heading-row">
            <h1>We engineer<br /><span>what’s next.</span></h1>
            <div className="hero-support">
              <p className="hero-intro">KSBAA Gaming & IT Solutions builds ambitious digital products, private systems and intelligent platforms for businesses ready to move forward.</p>
              <a className="text-link" href="#expertise">Explore our work <Arrow down /></a>
            </div>
          </div>
        </Reveal>

        <div className="hero-art" aria-label="KSBAA brand film">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/ksbaa-hero-mark.png"
            aria-hidden="true"
          >
            <source src="/ksbaa-brand-hero-10s.mp4" type="video/mp4" />
          </video>
          <div className="hero-note"><span>Independent technology company</span><strong>India / Global</strong></div>
        </div>

        <a className="scroll-cue" href="#statement" aria-label="Scroll to discover"><span>Scroll</span><i /></a>
      </section>

      <section id="statement" className="statement">
        <Reveal>
          <p className="section-index">01 / Perspective</p>
          <h2>Technology should feel less like a tool—and more like an advantage.</h2>
        </Reveal>
        <Reveal className="statement-side">
          <p>We combine product thinking, software engineering and long-term support to build systems people can trust every day.</p>
          <a className="circle-link" href="#contact" aria-label="Talk to KSBAA"><Arrow /></a>
        </Reveal>
        <div className="drop-path" aria-hidden="true"><span /></div>
      </section>

      <section id="expertise" className="expertise">
        <Reveal className="section-heading">
          <p className="section-index">02 / Expertise</p>
          <h2>Built end to end.<br />Owned by you.</h2>
          <p>Strategy to shipping, infrastructure to iteration. One focused technology partner across the full product lifecycle.</p>
        </Reveal>

        <div className="service-list">
          {services.map(([number, title, copy]) => (
            <Reveal as="article" className="service-row" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p><Arrow />
            </Reveal>
          ))}
        </div>

        <div className="capability-marquee" aria-label="Capabilities">
          <div>{[...capabilities, ...capabilities].map((item, index) => <span key={`${item}-${index}`}>{item}<i>✦</i></span>)}</div>
        </div>
      </section>

      <section id="ventures" className="ventures">
        <Reveal className="ventures-title">
          <p className="section-index">03 / Our ventures</p>
          <h2>We don’t just build for others.<br />We build what we believe in.</h2>
        </Reveal>

        <Reveal as="article" className="venture-card aptel-card">
          <div className="venture-meta"><span>01</span><span>Jobs platform</span></div>
          <div className="venture-copy">
            <p className="venture-label">A KSBAA venture</p>
            <h3>Aptel<span>Now</span></h3>
            <p className="venture-tagline">The next opportunity,<br />closer to home.</p>
            <p>A Telugu-first jobs destination focused on making opportunities easier to discover across Andhra Pradesh, Telangana and beyond.</p>
            <a href="https://aptelnow.com" target="_blank" rel="noreferrer">Visit AptelNow <Arrow /></a>
          </div>
          <div className="jobs-visual" aria-label="Stylized AptelNow jobs interface">
            <div className="jobs-top"><strong>AN</strong><span>Find your next role</span></div>
            <div className="job-search"><span>Search jobs, skills or company</span><b>→</b></div>
            {["Government & Public Sector", "Technology & Product", "Operations & Support"].map((job, index) => (
              <div className="job-row" key={job}><span>0{index + 1}</span><strong>{job}</strong><i>↗</i></div>
            ))}
            <div className="jobs-ticker">Fresh opportunities • Telugu-first discovery • Career updates</div>
          </div>
        </Reveal>

        <Reveal as="article" className="venture-card people-card">
          <div className="venture-meta"><span>02</span><span>People platform</span></div>
          <a
            className="people-identity"
            href="https://peopleopscore.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit PeopleOpsCore"
          >
            <img className="people-desktop-logo" src={peopleOpsCoreLogo} alt="PeopleOpsCore" />
            <div className="people-mobile-lockup" aria-label="PeopleOpsCore">
              <strong>PeopleOps<span>Core</span></strong>
            </div>
          </a>
          <div className="venture-copy">
            <p className="venture-label">KSBAA product</p>
            <h3>PeopleOpsCore</h3>
            <p>A multi-tenant HR platform for onboarding, attendance, documents, reviews and role-based operations.</p>
            <a href="https://peopleopscore.com" target="_blank" rel="noreferrer">Discover the platform <Arrow /></a>
          </div>
        </Reveal>
      </section>

      <section id="about" className="proof">
        <Reveal className="proof-copy">
          <p className="section-index">04 / Proof in practice</p>
          <h2>Software is only successful when people can rely on it.</h2>
          <p>KSBAA delivered an HR application for Smavy Academy and supported the team through go-live, onboarding and post-deployment.</p>
          <button type="button" onClick={() => setReviewOpen(true)}>Read client appreciation <Arrow /></button>
        </Reveal>
        <Reveal className="proof-image">
          <button type="button" onClick={() => setReviewOpen(true)} aria-label="Open full client appreciation letter">
            <img src={clientReviewImage} alt="Client appreciation for KSBAA HR application delivery" />
          </button>
          <span>Client note / Smavy Academy</span>
        </Reveal>
      </section>

      <section id="contact" className="contact">
        <Reveal>
          <p className="section-index">05 / Let’s build</p>
          <h2>Have an idea that<br />deserves to exist?</h2>
          <a className="contact-email" href="mailto:taskmasterpro99@gmail.com">taskmasterpro99@gmail.com <Arrow /></a>
        </Reveal>
        <div className="contact-bottom">
          <a href="https://wa.me/917995246347" target="_blank" rel="noreferrer">WhatsApp<br /><strong>+91 79952 46347</strong></a>
          <div className="socials">{socialLinks.map(([label, url]) => <a href={url} target="_blank" rel="noreferrer" key={label}>{label}</a>)}</div>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} KSBAA Gaming & IT Solutions Pvt Ltd</span>
        <a href="/privacy-policy/">Privacy</a>
        <a href="#home">Back to top ↑</a>
      </footer>

      {reviewOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Client appreciation letter" onClick={() => setReviewOpen(false)}>
          <button type="button" onClick={() => setReviewOpen(false)}>Close ×</button>
          <img src={clientReviewImage} alt="Full client appreciation letter" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
