import React, { useMemo, useState } from "react";

const mockReviews = [
  {
    id: 1,
    shopName: "Sri Lakshmi Super Market",
    ownerName: "Ramesh",
    city: "Hyderabad",
    rating: 5,
    comment: "Fast billing, easy to use, and support is very responsive.",
    createdAt: "2026-02-01",
    status: "approved",
  },
  {
    id: 2,
    shopName: "MediCare Pharmacy",
    ownerName: "Srinivas",
    city: "Vijayawada",
    rating: 4,
    comment: "Good UI and reports. Waiting for more features.",
    createdAt: "2026-02-04",
    status: "approved",
  },
];

function Star({ filled, onClick, title }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      style={{
        appearance: "none",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontSize: 22,
        lineHeight: 1,
        padding: 2,
      }}
      aria-label={title}
    >
      {filled ? "⭐" : "☆"}
    </button>
  );
}

function RatingPicker({ value, onChange }) {
  return (
    <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          filled={n <= value}
          onClick={() => onChange(n)}
          title={`${n} star`}
        />
      ))}
      <span style={{ marginLeft: 8, color: "#444", fontSize: 13 }}>
        {value ? `${value}/5` : "Select rating"}
      </span>
    </div>
  );
}

function ReviewCard({ r }) {
  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 16,
        padding: 16,
        background: "white",
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 800, fontSize: 16, color: "#111" }}>
            {r.shopName}
          </div>
          <div style={{ color: "#555", fontSize: 13, marginTop: 2 }}>
            {r.ownerName} • {r.city}
          </div>
        </div>
        <div style={{ whiteSpace: "nowrap", color: "#111" }}>
          {"⭐".repeat(r.rating)}
          <span style={{ color: "#bbb" }}>
            {"☆".repeat(Math.max(0, 5 - r.rating))}
          </span>
        </div>
      </div>

      <p style={{ margin: "12px 0 0", color: "#333", lineHeight: 1.5 }}>
        {r.comment}
      </p>

      <div style={{ marginTop: 12, color: "#777", fontSize: 12 }}>
        {r.createdAt}
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(mockReviews);

  // UI-only: we add to a "pending" list locally
  const [form, setForm] = useState({
    shopName: "",
    ownerName: "",
    city: "",
    rating: 5,
    comment: "",
  });
  const [statusMsg, setStatusMsg] = useState("");

  const approvedReviews = useMemo(
    () => reviews.filter((r) => r.status === "approved"),
    [reviews]
  );

  const pendingReviews = useMemo(
    () => reviews.filter((r) => r.status === "pending"),
    [reviews]
  );

  const canSubmit =
    form.shopName.trim().length >= 2 &&
    form.ownerName.trim().length >= 2 &&
    form.city.trim().length >= 2 &&
    form.comment.trim().length >= 10 &&
    form.rating >= 1 &&
    form.rating <= 5;

  function updateField(key, value) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatusMsg("");

    if (!canSubmit) {
      setStatusMsg("⚠️ Please fill all fields (comment minimum 10 chars).");
      return;
    }

    const newItem = {
      id: Date.now(),
      shopName: form.shopName.trim(),
      ownerName: form.ownerName.trim(),
      city: form.city.trim(),
      rating: Number(form.rating),
      comment: form.comment.trim(),
      createdAt: new Date().toISOString().slice(0, 10),
      status: "pending", // UI-only now
    };

    setReviews((prev) => [newItem, ...prev]);

    setForm({
      shopName: "",
      ownerName: "",
      city: "",
      rating: 5,
      comment: "",
    });

    setStatusMsg("✅ Submitted! Your review is pending approval.");
  }

  return (
    <section
      style={{
        padding: "56px 18px",
        background:
          "linear-gradient(135deg, rgba(255,153,51,0.14), rgba(0,102,255,0.10))",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 18,
            alignItems: "start",
          }}
        >
          {/* LEFT: reviews list */}
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <h2
                style={{
                  margin: 0,
                  fontSize: 28,
                  fontWeight: 900,
                  color: "#0b1b3a",
                }}
              >
                Customer Reviews
              </h2>
              <span
                style={{
                  fontSize: 13,
                  color: "#2b3a55",
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  padding: "6px 10px",
                  borderRadius: 999,
                }}
              >
                KSBAA POS
              </span>
            </div>

            <p style={{ color: "#2b3a55", marginTop: 10, lineHeight: 1.6 }}>
              Real shop owners share their experience. Reviews are moderated to
              prevent spam.
            </p>

            {pendingReviews.length > 0 && (
              <div
                style={{
                  marginTop: 14,
                  padding: 12,
                  borderRadius: 14,
                  background: "rgba(255, 193, 7, 0.12)",
                  border: "1px solid rgba(255, 193, 7, 0.35)",
                  color: "#5a4300",
                  fontSize: 13,
                }}
              >
                ⏳ Pending reviews (UI-only): {pendingReviews.length} — these
                will be shown after admin approval once backend is connected.
              </div>
            )}

            <div
              style={{
                marginTop: 18,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 12,
              }}
            >
              {approvedReviews.map((r) => (
                <ReviewCard key={r.id} r={r} />
              ))}
              {approvedReviews.length === 0 && (
                <div
                  style={{
                    padding: 16,
                    borderRadius: 16,
                    background: "rgba(255,255,255,0.7)",
                    border: "1px dashed rgba(0,0,0,0.18)",
                    color: "#444",
                  }}
                >
                  No approved reviews yet. Be the first to share your feedback!
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: form */}
          <div
            style={{
              background: "white",
              borderRadius: 18,
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
              padding: 18,
              position: "sticky",
              top: 16,
            }}
          >
            <div style={{ fontWeight: 900, fontSize: 18, color: "#0b1b3a" }}>
              Add a Review
            </div>
            <div style={{ color: "#556", marginTop: 6, fontSize: 13 }}>
              (UI-only now. Backend integration next.)
            </div>

            <form onSubmit={handleSubmit} style={{ marginTop: 14 }}>
              <label style={{ display: "block", fontSize: 12, color: "#444" }}>
                Shop Name
              </label>
              <input
                value={form.shopName}
                onChange={(e) => updateField("shopName", e.target.value)}
                placeholder="Ex: Sri Lakshmi Super Market"
                style={inputStyle}
              />

              <label style={{ display: "block", fontSize: 12, color: "#444" }}>
                Owner Name
              </label>
              <input
                value={form.ownerName}
                onChange={(e) => updateField("ownerName", e.target.value)}
                placeholder="Ex: Sairam"
                style={inputStyle}
              />

              <label style={{ display: "block", fontSize: 12, color: "#444" }}>
                City
              </label>
              <input
                value={form.city}
                onChange={(e) => updateField("city", e.target.value)}
                placeholder="Ex: Hyderabad"
                style={inputStyle}
              />

              <label style={{ display: "block", fontSize: 12, color: "#444" }}>
                Rating
              </label>
              <div style={{ marginTop: 6, marginBottom: 10 }}>
                <RatingPicker
                  value={form.rating}
                  onChange={(n) => updateField("rating", n)}
                />
              </div>

              <label style={{ display: "block", fontSize: 12, color: "#444" }}>
                Comment
              </label>
              <textarea
                value={form.comment}
                onChange={(e) => updateField("comment", e.target.value)}
                placeholder="Write your experience with KSBAA POS (minimum 10 characters)..."
                rows={4}
                style={{ ...inputStyle, resize: "vertical" }}
              />

              <button
                type="submit"
                disabled={!canSubmit}
                style={{
                  width: "100%",
                  marginTop: 12,
                  padding: "12px 14px",
                  borderRadius: 14,
                  border: "none",
                  fontWeight: 800,
                  cursor: canSubmit ? "pointer" : "not-allowed",
                  background: canSubmit
                    ? "linear-gradient(90deg, #ff7a00, #ffb300)"
                    : "rgba(0,0,0,0.12)",
                  color: canSubmit ? "#1b1b1b" : "#666",
                }}
              >
                Submit Review
              </button>

              {statusMsg && (
                <div
                  style={{
                    marginTop: 10,
                    fontSize: 13,
                    color: statusMsg.startsWith("✅") ? "#106b21" : "#8a2a00",
                    background: "rgba(0,0,0,0.04)",
                    padding: 10,
                    borderRadius: 12,
                  }}
                >
                  {statusMsg}
                </div>
              )}

              <div style={{ marginTop: 12, fontSize: 12, color: "#666" }}>
                Note: Reviews may be displayed after admin approval.
              </div>
            </form>
          </div>
        </div>

        <div
          style={{
            marginTop: 22,
            textAlign: "center",
            color: "#556",
            fontSize: 12,
          }}
        >
          © {new Date().getFullYear()} KSBAA Gaming & IT Solutions Pvt Ltd
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  marginTop: 6,
  marginBottom: 12,
  padding: "11px 12px",
  borderRadius: 14,
  border: "1px solid rgba(0,0,0,0.14)",
  outline: "none",
  fontSize: 14,
  background: "rgba(255,255,255,0.98)",
};
