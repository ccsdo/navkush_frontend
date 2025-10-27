import React, { useState } from 'react';

// The main App component that renders the entire website.
const App = () => {
  return (
    <div className="bg-gray-100 font-sans text-gray-800">
      <header className="bg-[#11616f] py-6 text-center">
        <h1 className="text-4xl font-medium text-white">
          Delhi Government Digital Literacy Awareness Program
        </h1>
      </header>
      <main>
        <HeroSection />
        <ImageGallery />
      </main>
    </div>
  );
};

// Hero section containing the main program title and description.
const HeroSection = () => (
  <section className="bg-white p-8 md:p-12">
    <div className="container mx-auto">
      <p className="text-gray-600 mb-4 text-lg">
        The Delhi Government’s Digital Literacy Awareness Program is a transformative initiative aimed at overcoming the digital divide of North and East Delhi. By equipping them with essential digital skills, this program is being rolled out across 50 government schools, engaging students from the 9th and 10th grades. In an era where technology is a fundamental driver of change, our mission is to empower students, ensuring they are not left behind in the digital revolution.
      </p>
      <p className="text-gray-600 mb-4 text-lg">
        This program is designed to provide students with the knowledge and skills necessary to navigate the digital landscape safely and confidently. We cover topics like:
      </p>
      <ul className="list-disc list-inside text-gray-600 ml-4 mb-4 text-lg">
        <li>Digital literacy</li>
        <li>Online safety</li>
        <li>Critical thinking in the digital space</li>
        <li>Applications of technology to real-world scenarios</li>
      </ul>
      <p className="text-gray-600 text-lg">
        By imparting these skills, the initiative aims to ensure that students not only are consumers of technology but also creative thinkers, innovators, and problem solvers.
      </p>
    </div>
  </section>
);

// Image popup modal component
const ImageModal = ({ url, alt, onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
    onClick={onClose}
    aria-modal="true"
    role="dialog"
  >
    <div
      className="relative max-w-3xl w-full mx-4"
      onClick={e => e.stopPropagation()}
    >
      <button
        className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-200 transition"
        onClick={onClose}
        aria-label="Close"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>
      <img
        src={url}
        alt={alt}
        className="w-full h-auto rounded-lg shadow-lg max-h-[80vh] object-contain bg-white"
      />
    </div>
  </div>
);

// Component to display the grid of images with popup view.
const ImageGallery = () => {
  const images = [
    "/image/Digital Literacy.jpg",
    "/image/Digital Literacy 1.jpg",
    "/image/Digital Literacy 2.jpg",
    "/image/Digital Literacy 3.jpg",
    "/image/Digital Literacy 4.jpg",
    "/image/Digital Literacy 5.jpg",
    "/image/Digital Literacy 6.jpg",
    "/image/Digital Literacy 7.jpg",
    "/image/Digital Literacy 8.jpg",
    "/image/Digital Literacy 9.jpg",
  ];

  const [viewImage, setViewImage] = useState(null);

  return (
    <section className="bg-gray-100 p-8 md:p-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Program Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((url, index) => (
            <button
              key={index}
              type="button"
              className="block rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 focus:outline-none"
              onClick={() => setViewImage({ url, alt: `Gallery image ${index + 1}` })}
              tabIndex={0}
            >
              <img src={url} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        {viewImage && (
          <ImageModal
            url={viewImage.url}
            alt={viewImage.alt}
            onClose={() => setViewImage(null)}
          />
        )}
      </div>
    </section>
  );
};

export default App;
