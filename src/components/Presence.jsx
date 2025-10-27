import React from "react";
import { Link } from "react-router-dom";

export default function Presence() {
  return (
    <section className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Text Content */}
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our <span className="text-[#11616f] font-handwriting">Presence</span>
        </h2>
        <p className="text-gray-700 mb-6">
          NavvKhush Helping Foundation works with project partners at the grassroots level to create sustainable change for India’s children. We currently have project partners across several states in India that work on various child rights issues.
        </p>
        <Link
          to="/donate"
          className="bg-[#0e7490] hover:bg-[#f97316] text-white px-6 py-3 rounded-full inline-block"
        >
          Donate Now
        </Link>
      </div>

      {/* Right Map Content */}
      <div className="lg:w-1/2 flex justify-center relative">
        <img
          src="/image/map.png"
          alt="India Map"
          className="w-full max-w-lg"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-700 font-semibold">
            We are currently present in <span className="text-yellow-500 text-xl font-bold">multiple</span> states
          </p>
        </div>
      </div>

      <style>{`
        .font-handwriting {
          font-family: 'Comic Sans MS', cursive, sans-serif;
        }
      `}</style>
    </section>
  );
}
