// File: src/components/RecentProjects/ParentTeacherMeetings.jsx
import React, { useState } from "react";

const PRIMARY_COLOR = "#0e4a5a";
const ACCENT_COLOR = "#ff884d";

const images = [
  {
    src: "/image/Parent-Teacher 1.jpg",
    alt: "Parents and teachers meeting",
  },
  {
    src: "/image/Parent-Teacher 2.jpg",
    alt: "Children with parents",
  },
  {
    src: "/image/Parent-Teacher 3.jpg",
    alt: "Discussion in progress",
  },
  {
    src: "/image/Parent-Teacher 4.jpg",
    alt: "Teacher interacting with family",
  },
  {
    src: "/image/Parent-Teacher 5.png",
    alt: "Parents listening to teacher",
  },
  {
    src: "/image/Parent-Teacher 6.png",
    alt: "Teacher addressing group",
  },
  {
    src: "/image/Parent-Teacher 7.png",
    alt: "Children participating in PTM",
  },
  {
    src: "/image/Parent-Teacher 8.png",
    alt: "Parents and children together",
  },
  {
    src: "/image/Parent-Teacher 9.png",
    alt: "Teacher giving feedback",
  },
  {
    src: "/image/Parent-Teacher 10.png",
    alt: "Group photo after PTM",
  },
];

export default function ParentTeacherMeetings() {
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
          Strengthening Community Engagement: Organizing Parent-Teacher Meetings in Yamuna Khadar
        </h1>
      </header>

      <section className="max-w-6xl mx-auto p-6 space-y-4">
        <p>
          At our NGO, we are committed to making education accessible to every child, regardless of their financial background. We are running a dedicated project in the Yamuna Khadar region, near Akshardham, aimed at providing free education to children who are unable to afford schooling. These children, full of potential, deserve the opportunity to learn, grow, and build a brighter future.
        </p>

        <p>
          Our initiative focuses on offering quality educational support to children in need, empowering them with the knowledge and skills necessary for personal development and future success. We provide regular tutoring sessions in subjects like mathematics, science, and language arts, ensuring a strong academic foundation. In addition to academic help, we also focus on life skills, creativity, and confidence-building activities that encourage holistic development.
        </p>

        <p>
          To strengthen our efforts and keep families connected to the learning process, we organize monthly <strong>Parent-Teacher Meetings (PTM)</strong> in the Yamuna Khadar area. These meetings serve as a platform for open communication between parents, teachers, and children, allowing us to track progress, address challenges, and celebrate achievements. Through these gatherings, we ensure that everyone involved in the children’s education is aligned and working towards a common goal of success.
        </p>

        <p>
          Our goal is not only to provide education but also to inspire hope and build a supportive community around these children. We believe that every child deserves the chance to succeed, and with the right guidance and resources, we can help them achieve their dreams.
        </p>

        <p>
          We invite you to support our mission and join us in creating lasting change for the children of Yamuna Khadar. Together, we can make education a reality for every child in need.
        </p>
      </section>

      <section className="max-w-6xl mx-auto p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img) => (
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
