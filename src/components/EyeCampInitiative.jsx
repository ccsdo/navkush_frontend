import React, { useState } from "react";

const PRIMARY_COLOR = "#0e4a5a";
const ACCENT_COLOR = "#ff884d";

const images = [
  {
    src: "/image/eye 1.jpg",
    alt: "Optometrist checking child's eyes",
  },
  {
    src: "/image/eye 2.jpg",
    alt: "Children receiving free glasses",
  },
  {
    src: "/image/eye 3.jpg",
    alt: "Volunteers at the eye camp",
  },
  {
    src: "/image/eye 4.jpg",
    alt: "Parents and children at awareness session",
  },
  {
    src: "/image/eye 6.jpg",
    alt: "Child smiling with new glasses",
  },
  {
    src: "/image/eye 7.jpg",
    alt: "Group photo of children at camp",
  },
  {
    src: "/image/eye 8.jpg",
    alt: "Medical team at work",
  },
  {
    src: "/image/eye 9.jpg",
    alt: "Distribution of glasses",
  },
  {
    src: "/image/eye 10.png",
    alt: "Community awareness session",
  },
  {
    src: "/image/eye 11.png",
    alt: "Community awareness session",
  },
];

export default function EyeCampInitiative() {
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
      {/* Header */}
      <header className="text-center py-6 bg-[#11616f]">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Empowering Children Through Education and Health: Eye Camp Initiative in Yamuna Khadar
        </h1>
      </header>

      {/* Project Content */}
      <section className="max-w-6xl mx-auto p-6 space-y-4 text-lg leading-relaxed">
        <p>
          At our NGO, we believe in empowering children through education and holistic support.
          Our mission is to provide opportunities to those who face financial challenges,
          ensuring that they can access the education they deserve.
        </p>
        <p>
          We are currently running a dedicated project in the Yamuna Khadar region, near Akshardham,
          where we focus on providing free education to children who cannot afford school fees.
          These children, despite their potential, are often deprived of the resources and opportunities
          they need to excel academically.
        </p>
        <p>
          In addition to our educational efforts, we recognize the importance of addressing health concerns
          that can impede a child’s learning journey. One of the most common, yet often overlooked, issues
          faced by children in this region is poor vision, which can significantly affect their ability to
          concentrate and learn.
        </p>
        <p>
          To bridge this gap and ensure that the children in our project are not held back by health concerns,
          we recently organized an Eye Camp in the Yamuna Khadar area. The goal of this initiative was simple
          but impactful: to provide free eye check-ups, tests, and glasses to children who needed them.
        </p>
        <p>
          The Eye Camp was conducted by a team of professional optometrists and medical practitioners who
          volunteered their time and expertise. After the initial eye tests, children diagnosed with vision
          problems were provided with free prescription glasses, enabling them to see clearly and fully engage
          in their academic activities.
        </p>
        <p>
          Beyond treating vision problems, the Eye Camp also served as a platform for raising awareness about
          eye health in the community. We educated parents and children about the importance of regular eye
          check-ups and simple steps to protect eyesight.
        </p>
        <p>
          The camp fostered a sense of community, with everyone working together to ensure the well-being of
          the next generation. Education is not just about textbooks; it’s about removing barriers that prevent
          children from achieving their potential.
        </p>
        <p>
          Moving forward, we plan to continue organizing similar health initiatives alongside our educational
          programs. Our aim is to expand these services and ensure that no child is left behind due to vision
          problems or other health challenges.
        </p>
        <p>
          The Eye Camp was a testament to the incredible support we have received from volunteers, medical
          professionals, and local residents. Together, we are making a meaningful difference in the lives
          of children in Yamuna Khadar.
        </p>
      </section>

      {/* Images Section */}
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
