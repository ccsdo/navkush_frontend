import React from "react";
import { useNavigate } from "react-router-dom";

// Example gallery data (replace with your actual data or props)
const ourWorkGallery = [
    {
        image: "/image/our work 1.jpg",
        title: "Digital Literacy Awareness Program in Delhi for 137+ Government Schools",
        desc: "Program Overview: At Navvkhush Helping Foundation, we are proud...",
        blog: "/digital-literacy-program"
      },
      {
        image: "/image/our work 2.jpg",
        title: "Empowering Future Leaders: Career Counseling Project for Students in Delhi Government Schools",
        desc: "Project Overview: At our NGO, we are committed to empowering...",
        blog: "/career-counseling"
      },
      {
        image: "/image/our work 4.png",
        title: "Empowering Children Through Education and Health: Eye Camp Initiative in Yamuna Khadar Website Content",
        desc: "At our NGO, we believe in empowering children through education...",
        blog: "/eye-camp-initiative"
      },
      {
        image: "/image/our work 5.jpg",
        title: "Strengthening Community Engagement: Organizing Parent-Teacher Meetings in Yamuna Khadar",
        desc: "At our NGO, we are committed to making education accessible to...",
        blog: "/parent-teacher-meetings"
      },
      {
        image: "/image/our work 6.jpg",
        title: "Transforming Spaces: Planting Initiative at MCD Schools",
        desc: "We successfully completed a green initiative at MCD schools,...",
        blog: "/planting-initiative"
      },
      {
        image: "/image/our work 7.jpg",
        title: "Bringing Smiles: Stationery Distribution at MCD Schools",
        desc: "We successfully completed a heartwarming project to distribute...",
        blog: "/stationery-distribution"
      },
      {
        image: "/image/our work 8.jpg",
        title: "Content for Website: First Aid Kit Distribution in MCD Schools",
        desc: "We are proud to announce the successful completion of our First...",
        blog: "/first-aid-kit-distribution"
      },
      {
        image: "/image/our work 9.jpg",
        title: "EaseMyTrip: Launching Our Free Foundation Course in Tourism - May 2024",
        desc: "At Navvkhush Helping, in collaboration with EaseMyTrip, we are...",
        blog: "/tourism-course"
      },
      {
        image: "/image/our work 10.jpg",
        title: "Celebrating Women Empowerment: Kavita Ravat of Navvkhush Helping Foundation Receives Women Achievers Award 2024",
        desc: "In a world where women are breaking barriers and shattering glass...",
        blog: "/women-achievers-award"
      },
      {
        image: "/image/our work 11.jpg",
        title: "Investing in the Future: Navvkhush Helping Foundation's Commitment to Child Development",
        desc: "Investing in the Future: Navvkhush Helping Foundations...",
        blog: "/child-development"
      },
];

function getItemsPerSlide() {
  if (typeof window === "undefined") return 1;
  if (window.innerWidth >= 768) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

const OurWork = () => {
  const navigate = useNavigate();
  const [gallerySlide, setGallerySlide] = React.useState(0);
  const [galleryItemsPerSlide, setGalleryItemsPerSlide] = React.useState(getItemsPerSlide());

  React.useEffect(() => {
    function handleResize() {
      setGalleryItemsPerSlide(getItemsPerSlide());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const galleryTotalSlides = Math.ceil(ourWorkGallery.length / galleryItemsPerSlide);

  return (
    <section className="bg-white py-16 font-inter">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12 font-inter">OUR WORK</h2>
        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Wrapper */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${gallerySlide * 100}%)` }}
            >
              {/* Slides: Show N at a time, slide by N (responsive) */}
              {Array.from({ length: galleryTotalSlides }).map((_, slideIdx) => (
                <div className="w-full flex-shrink-0" key={slideIdx}>
                  <div className={`grid grid-cols-1 ${galleryItemsPerSlide === 2 ? "sm:grid-cols-2" : ""} ${galleryItemsPerSlide === 3 ? "md:grid-cols-3" : ""} gap-8`}>
                    {ourWorkGallery
                      .slice(slideIdx * galleryItemsPerSlide, (slideIdx + 1) * galleryItemsPerSlide)
                      .map((item) => (
                        <div className="gallery-image overflow-hidden rounded-lg shadow-lg flex flex-col font-inter" key={item.title}>
                          {/* Full-width content block for title, desc, image (icon removed) */}
                          <div className="w-full flex flex-col items-center justify-center bg-white p-0">
                            <div className="w-full">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-contain rounded-t-lg"
                                style={{ objectFit: "contain", background: "#f3f4f6" }}
                              />
                            </div>
                            <div className="w-full flex flex-col items-center px-4 py-4">
                              {/* Icon removed */}
                              <h3 className="text-2xl font-bold text-gray-800 mb-1 w-full text-center font-inter">{item.title}</h3>
                              <p className="text-base text-gray-600 mb-0 w-full text-center font-inter">{item.desc}</p>
                            </div>
                          </div>
                          <div className="flex-1 flex items-end justify-center pb-4">
                            <button
                              className="mt-4 bg-[#11616f] text-white px-6 py-2 rounded-full font-semibold text-base hover:bg-[#11616f] transition-colors duration-200 shadow font-inter"
                              onClick={() => navigate(item.blog)}
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#11616f] text-white p-3 rounded-full shadow-lg hover:bg-[#0d4a52] transition-colors duration-300 z-10 font-inter"
            onClick={() => setGallerySlide((gallerySlide - 1 + galleryTotalSlides) % galleryTotalSlides)}
            aria-label="Previous Gallery Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#11616f] text-white p-3 rounded-full shadow-lg hover:bg-[#0d4a52] transition-colors duration-300 z-10 font-inter"
            onClick={() => setGallerySlide((gallerySlide + 1) % galleryTotalSlides)}
            aria-label="Next Gallery Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2 font-inter">
            {Array.from({ length: galleryTotalSlides }).map((_, i) => (
              <button
                key={i}
                className={`carousel-dot w-3 h-3 rounded-full ${gallerySlide === i ? "bg-[#11616f]" : "bg-gray-300 hover:bg-[#11616f]"} transition-colors duration-300`}
                onClick={() => setGallerySlide(i)}
                aria-label={`Go to gallery slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
