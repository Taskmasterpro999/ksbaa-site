import React, { useMemo, useState } from "react";
import ReviewsSection from "./ReviewsSection.jsx";


function Badge({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 12px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.22)",
        background: "rgba(255,255,255,0.10)",
        color: "rgba(255,255,255,0.92)",
        fontSize: 12,
        fontWeight: 700,
      }}
    >
      {children}
    </span>
  );
}

function Card({ title, desc, bullets, tag }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.96)",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 20,
        padding: 18,
        boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div>
          <div style={{ fontWeight: 900, fontSize: 16, color: "#0b1b3a" }}>
            {title}
          </div>
          <div style={{ color: "#334", marginTop: 6, lineHeight: 1.55 }}>
            {desc}
          </div>
        </div>
        {tag ? (
          <div
            style={{
              whiteSpace: "nowrap",
              fontSize: 12,
              fontWeight: 800,
              padding: "6px 10px",
              borderRadius: 999,
              border: "1px solid rgba(0,0,0,0.10)",
              background: "rgba(255,153,51,0.18)",
              color: "#6a3b00",
              height: "fit-content",
            }}
          >
            {tag}
          </div>
        ) : null}
      </div>

      {bullets?.length ? (
        <ul style={{ margin: "12px 0 0", paddingLeft: 18, color: "#223" }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ marginBottom: 6, lineHeight: 1.5 }}>
              {b}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function TopNav() {
  const items = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "products", label: "Products" },
      { id: "pos", label: "KSBAA POS" },
      { id: "reviews", label: "Reviews" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
        background: "rgba(9, 17, 36, 0.72)",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <div
        style={{
          maxWidth: 1150,
          margin: "0 auto",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 12,
              display: "grid",
              placeItems: "center",
              fontWeight: 900,
              background: "linear-gradient(135deg,#ff7a00,#ffb300)",
              color: "#151515",
            }}
          >
            K
          </div>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontWeight: 900, color: "#fff" }}>KSBAA</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)" }}>
              Gaming & IT Solutions Pvt Ltd
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              style={{
                color: "rgba(255,255,255,0.88)",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 13,
                padding: "8px 10px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {it.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function CTAButtons() {
  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
      <a
        href="#pos"
        style={{
          textDecoration: "none",
          fontWeight: 900,
          padding: "12px 16px",
          borderRadius: 14,
          background: "linear-gradient(90deg,#ff7a00,#ffb300)",
          color: "#1b1b1b",
          boxShadow: "0 12px 30px rgba(255, 153, 51, 0.25)",
        }}
      >
        Explore KSBAA POS →
      </a>
      <a
        href="#contact"
        style={{
          textDecoration: "none",
          fontWeight: 900,
          padding: "12px 16px",
          borderRadius: 14,
          border: "1px solid rgba(255,255,255,0.22)",
          color: "rgba(255,255,255,0.92)",
          background: "rgba(255,255,255,0.08)",
        }}
      >
        Contact Us
      </a>
    </div>
  );
}

export default function MainSite() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
      <TopNav />

      {/* HERO */}
      <section
        id="home"
        style={{
          background:
            "radial-gradient(900px 400px at 15% 10%, rgba(255,153,51,0.35), transparent 60%), radial-gradient(900px 400px at 85% 20%, rgba(0,102,255,0.30), transparent 60%), linear-gradient(180deg, #091124, #0b1b3a)",
          color: "white",
          padding: "60px 16px",
        }}
      >
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Badge>🚀 Building practical tech for India</Badge>
            <Badge>🧾 Billing • Inventory • Reports</Badge>
            <Badge>🛡️ Security-first products</Badge>
          </div>

          <h1
            style={{
              margin: "18px 0 10px",
              fontSize: 42,
              fontWeight: 950,
              letterSpacing: -0.5,
              lineHeight: 1.05,
            }}
          >
            KSBAA Gaming & IT Solutions Pvt Ltd
          </h1>

          <p
            style={{
              maxWidth: 760,
              fontSize: 16,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.86)",
              margin: 0,
            }}
          >
            We build business software and security solutions that are simple, fast,
            and reliable — designed for real-world usage in shops, startups, and
            growing teams.
          </p>

          <CTAButtons />

          <div
            style={{
              marginTop: 26,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 12,
            }}
          >
            <div style={miniStat}>
              <div style={miniStatTitle}>Focus</div>
              <div style={miniStatValue}>POS • SaaS • Security</div>
            </div>
            <div style={miniStat}>
              <div style={miniStatTitle}>Style</div>
              <div style={miniStatValue}>Clean UI • Fast workflows</div>
            </div>
            <div style={miniStat}>
              <div style={miniStatTitle}>Support</div>
              <div style={miniStatValue}>Migration + 24×7 guidance</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: "56px 16px",
          background:
            "linear-gradient(135deg, rgba(255,153,51,0.12), rgba(0,102,255,0.08))",
        }}
      >
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <h2 style={h2}>About KSBAA</h2>
          <p style={p}>
            KSBAA Gaming & IT Solutions Pvt Ltd is focused on building practical,
            people-friendly technology products. Our goal is to help businesses run
            smoothly with modern software, strong security, and smart automation.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14, marginTop: 16 }}>
            <Card
              title="Our Mission"
              desc="Make powerful tools simple for everyone — from small shops to growing companies."
              bullets={[
                "Reduce daily work stress with clean workflows",
                "Improve billing speed and accuracy",
                "Keep business data safe and controlled",
              ]}
              tag="Mission"
            />
            <Card
              title="Our Approach"
              desc="Build stable foundations first, then expand features step-by-step."
              bullets={[
                "Real-world UI testing (mobile + desktop)",
                "Performance-first (handles large item lists)",
                "Security and role-based access",
              ]}
              tag="Approach"
            />
            <Card
              title="What We Believe"
              desc="Good software should save time, not create confusion."
              bullets={[
                "Simple screens, strong backend",
                "Clear reports and audit logs",
                "Support for migrations and training",
              ]}
              tag="Belief"
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={{ padding: "56px 16px", background: "#f7f8fb" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <h2 style={h2}>Products</h2>
            <button
              onClick={() => setShowComingSoon((v) => !v)}
              style={{
                border: "1px solid rgba(0,0,0,0.12)",
                background: "white",
                padding: "10px 12px",
                borderRadius: 14,
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              {showComingSoon ? "Hide" : "Show"} Roadmap
            </button>
          </div>

          <p style={p}>
            We are building a suite of products under the KSBAA ecosystem. Some are live,
            and some are planned/coming soon.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14, marginTop: 16 }}>
            <Card
              title="KSBAA POS"
              desc="Billing + inventory + GST + reports for shops (grocery, medical, retail)."
              bullets={[
                "Fast billing and clean invoices",
                "Items / stock / customer ledger",
                "Owner + Staff roles, audit-ready logs",
              ]}
              tag="Active"
            />
            <Card
              title="TaskMaster Pro (AI App)"
              desc="AI-powered task management and productivity workflows."
              bullets={[
                "Task creation + smart reminders",
                "Voice input and AI assistance",
                "Designed for daily personal productivity",
              ]}
              tag="Active"
            />
            <Card
              title="KSBAA Mail Server"
              desc="Self-hosted business mailboxes with your domain (like Gmail/Zoho style)."
              bullets={[
                "Multi-user mailboxes",
                "Secure SMTP/IMAP, quotas, logs",
                "Admin controls and domain management",
              ]}
              tag="Active"
            />
            <Card
              title="Kolla Antivirus"
              desc="Security products focused on scanning + monitoring threats (offline-first)."
              bullets={[
                "Rule-based detection + scanning engine",
                "Firewall/monitoring modules",
                "User-controlled quarantine actions",
              ]}
              tag="Active"
            />
          </div>

          {showComingSoon && (
            <div
              style={{
                marginTop: 16,
                padding: 16,
                borderRadius: 18,
                background: "white",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ fontWeight: 950, color: "#0b1b3a" }}>Roadmap (General)</div>
              <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "#223", lineHeight: 1.7 }}>
                <li>Mobile + 15-inch Android POS billing app screens</li>
                <li>Advanced analytics dashboards (sales, profit, inventory)</li>
                <li>Automated migrations and onboarding</li>
                <li>Security hardening across products</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* KSBAA POS DETAILS */}
      <section
        id="pos"
        style={{
          padding: "56px 16px",
          background:
            "linear-gradient(135deg, rgba(0,102,255,0.10), rgba(255,153,51,0.10))",
        }}
      >
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <h2 style={h2}>What is KSBAA POS?</h2>
          <p style={p}>
            KSBAA POS is a complete billing and business management system for shops.
            It is designed to be simple, fast, and reliable — even when you have large
            item lists (10k–40k SKUs).
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14, marginTop: 16 }}>
            <Card
              title="Billing & Invoice"
              desc="Quick billing with professional invoice formats."
              bullets={[
                "GST breakup (CGST/SGST) support",
                "Discounts + 'You Saved' summary",
                "Multiple print formats (A4 / 58mm / 80mm)",
              ]}
              tag="Core"
            />
            <Card
              title="Inventory & Items"
              desc="Manage items, SKUs, barcode/QR, pricing, and stock."
              bullets={[
                "Bulk item handling",
                "Fast search and pagination",
                "Branch-wise stock tracking",
              ]}
              tag="Core"
            />
            <Card
              title="Roles & Control"
              desc="Owner + Staff access with clear control."
              bullets={[
                "Staff billing with logs",
                "Owner dashboard controls",
                "Future: 2FA + feature flags",
              ]}
              tag="Secure"
            />
          </div>

          <div
            style={{
              marginTop: 18,
              padding: 16,
              borderRadius: 18,
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontWeight: 950, color: "#0b1b3a" }}>
              Why shops choose KSBAA POS
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10, marginTop: 12 }}>
              <div style={pill}>⚡ Fast billing workflow</div>
              <div style={pill}>🧾 Clean invoices & reports</div>
              <div style={pill}>🔁 Easy migration support</div>
              <div style={pill}>🛠️ Continuous improvements</div>
              <div style={pill}>🔒 Data control and security</div>
              <div style={pill}>📱 Windows web is ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <div id="reviews">
        <ReviewsSection />
      </div>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "56px 16px", background: "#0b1b3a", color: "white" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <h2 style={{ ...h2, color: "white" }}>Contact</h2>
          <p style={{ ...p, color: "rgba(255,255,255,0.85)" }}>
            Want a demo of KSBAA POS or business software support? Reach out and we’ll help you.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14, marginTop: 16 }}>
            <div style={contactCard}>
              <div style={contactTitle}>📧 Email</div>
              <div style={contactText}>support@ksbaa.com (example)</div>
              <div style={contactHint}>We can replace this with your real email later.</div>
            </div>

            <div style={contactCard}>
              <div style={contactTitle}>📞 Phone / WhatsApp</div>
              <div style={contactText}>+91-XXXXXXXXXX (example)</div>
              <div style={contactHint}>Add your real number later.</div>
            </div>

            <div style={contactCard}>
              <div style={contactTitle}>🌐 Website</div>
              <div style={contactText}>www.ksbaa.com</div>
              <div style={contactHint}>Hosted via GitHub + domain DNS.</div>
            </div>
          </div>

          <div style={{ marginTop: 18, borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 16, fontSize: 12, color: "rgba(255,255,255,0.75)" }}>
            © {new Date().getFullYear()} KSBAA Gaming & IT Solutions Pvt Ltd • Built with React
          </div>
        </div>
      </section>
    </div>
  );
}

const h2 = {
  margin: 0,
  fontSize: 28,
  fontWeight: 950,
  color: "#0b1b3a",
};

const p = {
  marginTop: 10,
  color: "#2b3a55",
  lineHeight: 1.7,
  maxWidth: 900,
};

const miniStat = {
  background: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.16)",
  borderRadius: 18,
  padding: 14,
};

const miniStatTitle = { fontSize: 12, color: "rgba(255,255,255,0.78)", fontWeight: 800 };
const miniStatValue = { marginTop: 6, fontSize: 14, fontWeight: 900, color: "rgba(255,255,255,0.92)" };

const pill = {
  padding: "10px 12px",
  borderRadius: 14,
  background: "rgba(255,255,255,0.75)",
  border: "1px solid rgba(0,0,0,0.08)",
  color: "#1b2740",
  fontWeight: 800,
  fontSize: 13,
};

const contactCard = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: 18,
  padding: 16,
};

const contactTitle = { fontWeight: 950, fontSize: 14 };
const contactText = { marginTop: 8, fontWeight: 800, color: "rgba(255,255,255,0.92)" };
const contactHint = { marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.70)" };
