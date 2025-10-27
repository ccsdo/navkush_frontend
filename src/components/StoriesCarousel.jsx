import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StoriesCarousel() {
  return (
    <section className="bg-[#fffdf8] py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-center text-2xl font-semibold mb-10">
          <span className="text-[#11616f]">Our</span> Stories
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="bg-white shadow-md rounded-lg p-6 max-w-lg">
            <h3 className="text-xl font-semibold mb-3">
              Meet Malini – a doctor in the making!
            </h3>
            <p className="text-gray-600">
              Malini, from a remote village in Tamil Nadu, overcame hurdles to
              continue her education and crack NEET. Now, at Tirunelveli Medical
              College, she’s set to be the first woman doctor in her village.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/images/malini-story.jpg"
              alt="Malini story"
              className="rounded-lg shadow-md w-[500px] h-auto object-cover"
            />

            {/* Carousel Controls */}
            <div className="absolute inset-y-1/2 -left-6 flex items-center">
              <button className="bg-white rounded-full shadow-md p-2 hover:bg-gray-100">
                <ChevronLeft size={22} />
              </button>
            </div>
            <div className="absolute inset-y-1/2 -right-6 flex items-center">
              <button className="bg-white rounded-full shadow-md p-2 hover:bg-gray-100">
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
