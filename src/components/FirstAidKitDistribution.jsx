import React, { useState } from "react";

export default function FirstAidDistribution() {
  // Add 7 images to the gallery
  const images = [
    "/image/firstaid1.jpg",
    "/image/firstaid2.jpg",
    "/image/firstaid3.jpg",
    "/image/firstaid4.jpg",
    "/image/firstaid5.jpg",
    "/image/firstaid6.jpg",
    "/image/firstaid7.jpg",
  ];

  const [viewImage, setViewImage] = useState(null);

  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="bg-[#11616f] py-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Content For Website: First Aid Kit Distribution In MCD Schools
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-5xl mx-auto px-4 py-10 text-lg leading-relaxed space-y-6">
        <p>
          We are proud to announce the successful completion of our First Aid Kit Distribution Project in MCD schools. This initiative is part of our ongoing efforts to promote health and safety among children and provide them with essential resources in case of emergencies.
        </p>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">Our Mission</h2>
          <p>
            At the heart of this project is our commitment to ensuring that every child has access to basic first aid facilities, empowering schools to handle minor injuries and medical situations effectively.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">What We Achieved</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Distributed First Aid Kits:</strong> Every classroom was equipped with essential medical supplies.
            </li>
            <li>
              <strong>Enhanced Awareness:</strong> Students and teachers were briefed on the importance of first aid and how to use the kits.
            </li>
            <li>
              <strong>Safe School Environments:</strong> Contributed to a safer learning environment for all children.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">Why This Project Matters</h2>
          <p>
            Children’s health and safety are of utmost importance. With first aid kits readily available, schools can address minor injuries immediately, ensuring students receive timely care and continue learning in a safe environment.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">Thank You To Our Supporters</h2>
          <p>
            This project would not have been possible without the generous contributions and unwavering support of our donors and volunteers.
            <br />
            We invite you to join us in enabling a different impact. Your future initiatives to improve the lives of children can ensure a healthier tomorrow.
            <br />
            Donate Today or Volunteer With Us to help bring more smiles to children in need.
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => setViewImage(src)}
            >
              <img
                src={src}
                alt={`First Aid Distribution ${i + 1}`}
                className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
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
            alt="First Aid Distribution enlarged"
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
