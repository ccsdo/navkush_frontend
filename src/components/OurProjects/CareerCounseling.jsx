import React, { useState } from "react";

const images = [
  "/image/career 1.jpg",
  "/image/career 2.jpg",
  "/image/career 3.jpg",
  "/image/career 4.jpg",
  "/image/career 5.jpg",
  "/image/career 6.jpg",
];

const CareerCounselingPage = () => {
  const [viewImage, setViewImage] = useState(null);

  return (
    <div className="w-full font-sans bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-[#11616f] py-6 text-center">
        <h1 className="text-4xl font-medium text-white">
          Career Counseling Program
        </h1>
      </header>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto p-6 text-gray-800">
        <h2 className="text-2xl font-bold mb-4">
          Career Counseling Program for Govt. Schools and Students Lighting the Path to a Brighter Future.
        </h2>
        <p className="mb-4 text-lg text-gray-600">
          The Career Counseling Program is a comprehensive initiative designed to guide students from government schools toward a clear and fulfilling career path. This program is being rolled out across 50 government schools, engaging students from the 9th and 10th grades. We understand the importance of making informed decisions at a critical stage of life, and our mission is to provide students with the necessary tools, guidance, and support to build a successful future.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-800 mt-8">Why Career Counseling Is Important?</h3>
        <ul className="list-disc list-inside text-gray-600 ml-4 mb-4">
          <li>
            <b>Uncertainty and Lack of Awareness:</b> Many students are unaware of the various career options available to them and the skills required to pursue them.
          </li>
          <li>
            <b>Poor Decision Making Skills:</b> Many students make career choices based on peer pressure, parental expectations, or incomplete information, which can lead to dissatisfaction and unfulfilled potential.
          </li>
          <li>
            <b>Lack of Access to Professionals:</b> Students in underserved communities often have limited access to experienced professionals who can provide valuable career guidance.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 text-gray-800 mt-8">Program Highlights</h3>
        <ul className="list-disc list-inside text-gray-600 ml-4 mb-4">
          <li>
            <b>Interactive Workshops:</b> Hands-on sessions to help students identify their interests, strengths, and career aspirations.
          </li>
          <li>
            <b>Career Exploration:</b> Exposing students to various career fields through guest lectures and industry visits (virtual/physical).
          </li>
          <li>
            <b>Skill Development:</b> Providing training in essential soft skills like communication, leadership, and problem-solving.
          </li>
          <li>
            <b>Mentorship:</b> Connecting students with professionals who can guide them and provide real-world insights.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 text-gray-800 mt-8">What The Program Aims To Do</h3>
        <ul className="list-disc list-inside text-gray-600 ml-4 mb-4">
          <li>
            <b>Empowering Students:</b> Giving them the confidence and knowledge to make informed career decisions.
          </li>
          <li>
            <b>Building a Strong Foundation:</b> Ensuring students are well-prepared to excel in their chosen fields.
          </li>
          <li>
            <b>Connecting with the Community:</b> Creating a network of support for students, including mentors, industry experts, and peers.
          </li>
          <li>
            <b>Creating a Ripple Effect:</b> Inspiring students to become leaders and role models in their communities.
          </li>
        </ul>
      </section>

      {/* Image Gallery with view on click */}
      <section className="max-w-6xl mx-auto p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="cursor-pointer group relative"
            onClick={() => setViewImage(src)}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") setViewImage(src);
            }}
            aria-label={`View image ${index + 1}`}
            role="button"
          >
            <img
              src={src}
              alt={`Career Counseling ${index + 1}`}
              className="w-full h-auto rounded shadow transition-transform duration-200 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </section>

      {/* Modal for viewing image */}
      {viewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setViewImage(null)}
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative max-w-3xl w-full mx-4"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-200 transition"
              onClick={() => setViewImage(null)}
              aria-label="Close image view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={viewImage}
              alt="Career Counseling enlarged"
              className="w-full h-auto rounded-lg shadow-2xl max-h-[80vh] object-contain bg-white"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerCounselingPage;
