import React from "react";

export default function StationeryDistribution() {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-800 mb-6">
          Bringing Smiles: Stationery Distribution at MCD Schools
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We successfully completed a heartwarming project to distribute
          stationery to children in MCD schools, aiming to support their
          education and bring joy to their learning journey. Our team visited
          the schools and handed out essential items such as notebooks, pencils,
          erasers, and crayons.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          This initiative not only provided the students with the tools they
          need for their studies but also encouraged them to pursue education
          with greater enthusiasm. Through this project, we aimed to make a
          small yet significant difference in their academic lives, fostering
          hope and determination for a brighter future.
        </p>
        <div className="flex justify-center">
          <img
            src="/images/stationery-distribution.jpg"
            alt="Stationery Distribution"
            className="rounded-xl shadow-lg max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
}
