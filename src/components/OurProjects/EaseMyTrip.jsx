import React, { useState } from "react";

const images = [
  "/image/easymytrip.jpg",
  "/image/easymytrip 1.jpg",
  "/image/easymytrip 2.jpg",
  "/image/easymytrip 3.jpg",
  "/image/easymytrip 4.jpg",
  "/image/easymytrip 5.jpg",
  "/image/easymytrip 6.jpg",
  "/image/easymytrip 7.jpg",
  "/image/easymytrip 8.jpg",
  "/image/easymytrip 9.jpg",
  "/image/easymytrip 10.jpg",
];

const EaseMyTripPage = () => {
  const [viewImage, setViewImage] = useState(null);

  return (
    <div className="w-full font-sans">
      {/* Header Section */}
      <header className="bg-[#11616f] py-6 text-center">
        <h1 className="text-4xl font-medium text-white">EaseMyTrip</h1>
      </header>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto p-6 text-gray-800">
        <h2 className="text-2xl font-bold mb-4">EaseMyTrip: A Catalyst for Change</h2>
        <p className="mb-4">
          EaseMyTrip has been an instrumental partner in making this vision a reality. Their commitment to corporate social responsibility goes beyond
          financial support—they have actively participated in shaping the program, providing expert guidance, facilitating industry connections, and more.
        </p>
        <p className="mb-6">
          This collaboration highlights the power of partnerships in addressing critical social issues and creating lasting change.
        </p>

        <h3 className="text-xl font-semibold mb-2">Join Us in Transforming Lives</h3>
        <p className="mb-6">
          The journey doesn’t need to be solo. We believe that sustainable change requires collective effort. By supporting this program, you can play a role
          in transforming the lives of underprivileged children. Whether through donations, sponsorships, or volunteering, every contribution makes a
          difference.
        </p>

        <h3 className="text-xl font-semibold mb-2">Together for a Brighter Tomorrow</h3>
        <p className="mb-6">
          The partnership with EaseMyTrip is a testament to what can be achieved when communities come together for a common goal, empowering children with
          education and skills. We are not just preparing them for jobs but also inspiring them to dream bigger and achieve more.
        </p>
        <p className="mb-6">
          Join us on this journey of hope and transformation. Let’s build a future where every child has the tools and opportunities they deserve.
        </p>
        <p>
          For more information on how you can support or get involved, contact us today. Together, we can make a difference.
        </p>
      </section>

      {/* Image Gallery with view on click */}
      <section className="max-w-6xl mx-auto p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="cursor-pointer group relative"
            onClick={() => setViewImage(src)}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") setViewImage(src);
            }}
            aria-label={`View image ${index + 1}`}
            role="button"
          >
            <img
              src={src}
              alt={`EaseMyTrip ${index + 1}`}
              className="w-full h-auto rounded shadow transition-transform duration-200 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </section>

      {/* Modal for viewing image */}
      {viewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setViewImage(null)}
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative max-w-3xl w-full mx-4"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-200 transition"
              onClick={() => setViewImage(null)}
              aria-label="Close image view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={viewImage}
              alt="EaseMyTrip enlarged"
              className="w-full h-auto rounded-lg shadow-2xl max-h-[80vh] object-contain bg-white"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EaseMyTripPage;
