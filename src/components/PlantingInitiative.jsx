import React, { useState } from "react";

export default function PlantingInitiative() {
  const images = [
    "/image/planting 1.jpg",
    "/image/planting 2.jpg",
    "/image/planting 3.jpg",
    "/image/planting 4.jpg",
    "/image/planting 5.jpg",
    "/image/planting 6.jpg",
    "/image/planting 7.jpg",
    "/image/planting 8.jpg",
    "/image/planting 9.jpg",
    "/image/planting 10.jpg",
  ];

  const [viewImage, setViewImage] = useState(null);

  return (
    <div className="bg-white text-gray-900">
      {/* Heading Section */}
      <div className="text-center py-6 bg-[#11616f]">
        <h1 className="text-3xl md:text-3xl font-bold text-white">
          Transforming Spaces: Planting Initiative At MCD Schools
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="text-lg leading-relaxed mb-6">
          We successfully completed a green initiative at MCD schools, bringing a fresh and vibrant environment to their premises. Through this project, we planted a variety of saplings to promote sustainability and create awareness among students about the importance of greenery in urban areas.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Our team collaborated with school staff and local volunteers to ensure the plants were strategically placed to enhance the landscape and foster a healthy learning atmosphere. This project aimed to instill environmental values in young minds, emphasizing the significance of caring for nature.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The initiative not only beautified the school premises but also served as a step toward a greener future for the community.
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => setViewImage(src)}
            >
              <img
                src={src}
                alt={`Planting initiative ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
                style={{ background: "transparent" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image View Modal - No container, just image fullscreen */}
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
            alt="Planting initiative enlarged"
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
