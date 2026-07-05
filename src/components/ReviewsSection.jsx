import React, { useMemo, useState } from "react";

const initialReviews = [
  {
    id: 1,
    businessName: "Sri Lakshmi Super Market",
    ownerName: "Ramesh",
    city: "Hyderabad",
    rating: 5,
    comment: "Fast billing, easy to use, and support is very responsive.",
    createdAt: "2026-02-01",
    status: "approved",
  },
  {
    id: 2,
    businessName: "MediCare Pharmacy",
    ownerName: "Srinivas",
    city: "Vijayawada",
    rating: 4,
    comment: "Good UI and reports. Waiting for more features.",
    createdAt: "2026-02-04",
    status: "approved",
  },
];

function RatingStars({ rating }) {
  return (
    <div className="rating-stars" aria-label={`${rating} out of 5 rating`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? "star-on" : ""}>
          *
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-head">
        <div>
          <h3>{review.businessName}</h3>
          <p>
            {review.ownerName} / {review.city}
          </p>
        </div>
        <RatingStars rating={review.rating} />
      </div>
      <p className="review-comment">{review.comment}</p>
      <span className="review-date">{review.createdAt}</span>
    </article>
  );
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(initialReviews);
  const [form, setForm] = useState({
    businessName: "",
    ownerName: "",
    city: "",
    rating: 5,
    comment: "",
  });
  const [statusMsg, setStatusMsg] = useState("");

  const approvedReviews = useMemo(
    () => reviews.filter((review) => review.status === "approved"),
    [reviews]
  );

  const pendingCount = useMemo(
    () => reviews.filter((review) => review.status === "pending").length,
    [reviews]
  );

  const canSubmit =
    form.businessName.trim().length >= 2 &&
    form.ownerName.trim().length >= 2 &&
    form.city.trim().length >= 2 &&
    form.comment.trim().length >= 10 &&
    Number(form.rating) >= 1;

  function updateField(key, value) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!canSubmit) {
      setStatusMsg("Please complete every field. Comment needs at least 10 characters.");
      return;
    }

    setReviews((current) => [
      {
        id: Date.now(),
        ...form,
        businessName: form.businessName.trim(),
        ownerName: form.ownerName.trim(),
        city: form.city.trim(),
        comment: form.comment.trim(),
        rating: Number(form.rating),
        createdAt: new Date().toISOString().slice(0, 10),
        status: "pending",
      },
      ...current,
    ]);

    setForm({
      businessName: "",
      ownerName: "",
      city: "",
      rating: 5,
      comment: "",
    });
    setStatusMsg("Submitted. Your review will appear after admin approval.");
  }

  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-copy">
        <span>Customer voice</span>
        <h2>Reviews from business users.</h2>
        <p>
          Feedback is collected locally on this page for now. Once the backend is
          connected, new reviews can go through admin approval.
        </p>
        {pendingCount > 0 ? (
          <div className="pending-note">{pendingCount} review pending approval.</div>
        ) : null}

        <div className="reviews-list">
          {approvedReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>

      <form className="review-form" onSubmit={handleSubmit}>
        <h3>Add a Review</h3>
        <label>
          Business Name
          <input
            value={form.businessName}
            onChange={(event) => updateField("businessName", event.target.value)}
            placeholder="Ex: Sri Lakshmi Super Market"
          />
        </label>
        <label>
          Owner Name
          <input
            value={form.ownerName}
            onChange={(event) => updateField("ownerName", event.target.value)}
            placeholder="Ex: Kolla"
          />
        </label>
        <label>
          City
          <input
            value={form.city}
            onChange={(event) => updateField("city", event.target.value)}
            placeholder="Ex: Hyderabad"
          />
        </label>
        <label>
          Rating
          <select
            value={form.rating}
            onChange={(event) => updateField("rating", event.target.value)}
          >
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Very good</option>
            <option value="3">3 - Good</option>
            <option value="2">2 - Needs work</option>
            <option value="1">1 - Poor</option>
          </select>
        </label>
        <label>
          Comment
          <textarea
            rows={4}
            value={form.comment}
            onChange={(event) => updateField("comment", event.target.value)}
            placeholder="Write your experience with KSBAA."
          />
        </label>

        <button type="submit" disabled={!canSubmit}>
          Submit Review
        </button>
        {statusMsg ? <p className="form-status">{statusMsg}</p> : null}
      </form>
    </section>
  );
}
