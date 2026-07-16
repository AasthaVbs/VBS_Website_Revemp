"use client";

/** Figma 1438:21511 — sidebar newsletter card */
export function BlogDetailNewsletterForm() {
  return (
    <div className="vbs-blog-detail__newsletter">
      <div className="flex flex-col gap-4">
        <h3 className="vbs-blog-detail__newsletter-heading">Subscribe to Our Newsletter</h3>
        <p className="vbs-blog-detail__newsletter-desc">
          We&apos;ll send you a nice letter once per month. No spam.
        </p>
      </div>
      <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
        <label className="vbs-blog-detail__newsletter-field">
          <span className="vbs-blog-detail__newsletter-label">
            Email ID<span className="vbs-blog-detail__newsletter-required">*</span>
          </span>
          <input
            type="email"
            placeholder="Enter Email ID"
            className="vbs-blog-detail__newsletter-input"
          />
        </label>
        <button type="submit" className="vbs-blog-detail__submit-btn">
          Submit Now
        </button>
      </form>
    </div>
  );
}
