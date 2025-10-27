import React, { useState } from "react";

export default function StationeryDistribution() {
  const images = [
    "/image/stationery-distribution-1.png",
    "/image/stationery-distribution-2.jpg",
    "/image/stationery-distribution-3.jpg",
    "/image/stationery-distribution-4.jpg",
    "/image/stationery-distribution-5.jpg",
    "/image/stationery-distribution-6.jpg",
    "/image/stationery-distribution-7.jpg",
    "/image/stationery-distribution-8.jpg",
    "/image/stationery-distribution-9.jpg",
    "/image/stationery-distribution-10.jpg",
    "/image/stationery-distribution-11.jpg",
    "/image/stationery-distribution-12.jpg",
    "/image/stationery-distribution-13.jpg",
    "/image/stationery-distribution-14.jpg",
    "/image/stationery-distribution-15.jpg",
    "/image/stationery-distribution-16.jpg",
  ];

  const [viewImage, setViewImage] = useState(null);

  return (
    <div className="bg-white text-gray-900">
      {/* Heading Section */}
      <div className="text-center py-6 bg-[#11616f]">
        <h2 className="text-3xl font-bold text-white mb-6">
          Bringing Smiles: Stationery Distribution at MCD Schools
        </h2>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
          We successfully completed a heartwarming project to distribute
          stationery to children in MCD schools, aiming to support their
          education and bring joy to their learning journey. Our team visited
          the schools and handed out essential items such as notebooks, pencils,
          erasers, and crayons.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
          This initiative not only provided the students with the tools they
          need for their studies but also encouraged them to pursue education
          with greater enthusiasm. Through this project, we aimed to make a
          small yet significant difference in their academic lives, fostering
          hope and determination for a brighter future.
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => setViewImage(src)}
            >
              <img
                src={src}
                alt={`Stationery distribution ${index + 1}`}
                className="w-full h-56 object-cover transform hover:scale-105 transition duration-300"
                style={{ background: "transparent" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image View Modal */}
      {viewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setViewImage(null)}
        >
          <button
            className="absolute top-4 right-6 text-white text-3xl bg-black bg-opacity-50 rounded-full px-4 py-2 hover:bg-opacity-80"
            onClick={() => setViewImage(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={viewImage}
            alt="Stationery distribution enlarged"
            className="max-w-full max-h-full object-cover"
            style={{
              boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
              borderRadius: "0.5rem",
              background: "transparent",
            }}
          />
        </div>
      )}
    </div>
  );
}
