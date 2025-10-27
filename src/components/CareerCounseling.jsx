// File: src/components/RecentProjects/CareerCounseling.jsx
import React, { useState } from "react";

const PRIMARY_COLOR = "#0e4a5a"; // replaces #11616f
const ACCENT_COLOR = "#ff884d";  // replaces #ff6d4d

const images = [
  {
    src: "/image/career 1.jpg",
    alt: "Students attending session",
  },
  {
    src: "/image/career 2.jpg",
    alt: "Counseling session",
  },
  {
    src: "/image/career 3.jpg",
    alt: "Interactive discussion",
  },
  {
    src: "/image/career 4.jpg",
    alt: "Career talk",
  },
  {
    src: "/image/career 5.jpg",
    alt: "Career talk",
  },
  {
    src: "/image/career 6.jpg",
    alt: "Career talk",
  },
];

export default function CareerCounseling() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const openModal = (img) => {
    setModalImg(img);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="font-sans">
      <header
        className="text-center py-6 bg-[#11616f]"
      >
        <h1 className="text-2xl font-bold text-white">
          Empowering Future Leaders: Career Counseling Project for Students in Delhi Government Schools
        </h1>
      </header>

      <section className="max-w-6xl mx-auto p-6 space-y-4">
        <h2
          className="text-lg font-bold"
          style={{ color: PRIMARY_COLOR }}
        >
          Project Overview:
        </h2>
        <p>
          At our NGO, we are committed to empowering young minds and helping them shape a successful future. To achieve this, we are launching a comprehensive <strong>Career Counseling Project</strong> aimed at guiding students from classes 8th to 12th in Delhi’s government schools. Our goal is to provide these students with the tools, resources, and knowledge to make informed decisions about their career paths, enabling them to pursue opportunities that match their interests, strengths, and aspirations.
        </p>

        <h2
          className="text-lg font-bold"
          style={{ color: PRIMARY_COLOR }}
        >
          Need for the Project:
        </h2>
        <p>
          In many government schools, students often lack the guidance and exposure needed to explore different career options. This lack of career awareness can limit their potential and cause them to make choices based on limited information. With the world rapidly changing and new professions emerging, it is critical for students to have access to career counseling that helps them understand their options and plan their future.
        </p>
        <p>
          The Career Counseling Project is designed to bridge this gap by providing free and accessible counseling sessions to students in government schools across Delhi. By offering expert advice, career assessments, and information about various career paths, we aim to inspire students to pursue fields that align with their skills and passions, regardless of their socio-economic background.
        </p>

        <h2
          className="text-lg font-bold"
          style={{ color: PRIMARY_COLOR }}
        >
          Key Objectives:
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Career Awareness:</strong> Introducing students to diverse career fields, including traditional professions and emerging sectors like technology, arts, sports, and entrepreneurship.
          </li>
          <li>
            <strong>Individual Career Guidance:</strong> Personalized counseling sessions to assess strengths, interests, and provide tailored advice.
          </li>
          <li>
            <strong>Skill Development:</strong> Guidance on essential skills like communication, leadership, and encouraging extracurricular activities and internships.
          </li>
          <li>
            <strong>Educational Pathways:</strong> Explaining qualifications, courses, and institutions for different professions.
          </li>
          <li>
            <strong>Building Confidence:</strong> Motivating students to overcome self-doubt and believe in their potential.
          </li>
        </ul>

        <h2
          className="text-lg font-bold"
          style={{ color: PRIMARY_COLOR }}
        >
          Execution Plan:
        </h2>
        <p>
          The project will be rolled out across multiple Delhi government schools, starting with a pilot program in select schools. We will organize workshops, group sessions, and one-on-one counseling with trained career counselors, covering topics such as career exploration, personality assessments, decision-making skills, and pathways to success.
        </p>

        <h2
          className="text-lg font-bold"
          style={{ color: PRIMARY_COLOR }}
        >
          Expected Outcomes:
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Increased awareness among students about diverse career options</li>
          <li>Enhanced decision-making skills</li>
          <li>Empowered students confident to pursue their dreams</li>
          <li>Improved academic and extracurricular engagement</li>
          <li>Creation of a motivated and informed student network</li>
        </ul>

        <h2
          className="text-lg font-bold"
          style={{ color: PRIMARY_COLOR }}
        >
          Conclusion:
        </h2>
        <p>
          The Career Counseling Project is a step towards ensuring that every student in Delhi’s government schools has the opportunity to explore, understand, and pursue the career of their dreams. With personalized guidance, skill development, and educational resources, we aim to equip students with the knowledge and confidence to succeed in an ever-evolving world.
        </p>
      </section>

      <section className="max-w-6xl mx-auto p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <button
            key={img.src}
            className="focus:outline-none"
            onClick={() => openModal(img)}
            type="button"
            aria-label={`View ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 object-cover rounded shadow transition-transform duration-200 hover:scale-105"
              style={{
                borderBottom: `3px solid ${ACCENT_COLOR}`,
              }}
              loading="lazy"
            />
          </button>
        ))}
      </section>

      {/* Modal for image view */}
      {modalOpen && modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full mx-4"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-700 bg-gray-200 rounded-full p-2 hover:bg-gray-300 focus:outline-none"
              onClick={closeModal}
              aria-label="Close image"
              type="button"
              style={{
                border: `2px solid ${PRIMARY_COLOR}`,
                color: PRIMARY_COLOR,
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={modalImg.src}
              alt={modalImg.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              loading="eager"
              style={{
                border: `2px solid ${ACCENT_COLOR}`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
