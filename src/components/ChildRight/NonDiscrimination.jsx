import React from "react";

export default function AccessToEducationSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-cyan-100 to-teal-100" />

      {/* Subtle education pattern (SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-20" aria-hidden="true">
        <defs>
          <pattern id="edu" width="140" height="140" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="#0f172a" strokeWidth="1.2" opacity="0.25">
              <rect x="12" y="18" width="24" height="28" rx="3" />
              <path d="M80 28l28 10-28 10-28-10 28-10zm0 21v20" />
              <path d="M40 94h38m-38 8h28" />
              <circle cx="102" cy="102" r="10" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#edu)" />
      </svg>

      {/* Decorative image overlay */}
      <img
        src="/image/AccesstoEducation.png"
        alt="Decorative education background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        aria-hidden="true"
        loading="lazy"
      />

      {/* Centered Container */}
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-6 lg:py-8 bg-white/95 backdrop-blur rounded-3xl shadow-2xl border border-slate-200 flex flex-col items-center text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Right to Equality & Non-Discrimination
        </h2>

        {/* Bullet Points */}
        <ul className="mt-10 space-y-6 text-slate-800 text-lg w-full max-w-3xl">
          {[
            "Every child is equal, regardless of their gender, caste, religion, physical ability, or social background.",
            "The right to equality ensures that no child faces discrimination or unfair treatment. Each child deserves equal opportunities to learn, play, grow, and succeed.",
            "Embracing equality creates a society where children are valued for who they are, not where they come from.",
            
        
          ].map((item) => (
            <li key={item} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <span
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white shadow"
                aria-hidden
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
