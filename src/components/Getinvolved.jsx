import React, { useState, useEffect } from 'react';

const App = () => {
  // State for form data and success message
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    mobile: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  // State for image slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  // Use correct image property for src
  const images = [
    { image: "/image/ng 1.jpg" },
    { image: "/image/ng 2.jpg" },
    { image: "/image/ng 3.jpg" },
    { image: "/image/ng 4.jpg" },
    { image: "/image/ng 5.jpg" },
    { image: "/image/ng 6.jpg" },
    { image: "/image/ng 7.jpg" },
    { image: "/image/ng 8.jpg" },
    { image: "/image/ng 9.jpg" },
    { image: "/image/ng 10.jpeg" },
    { image: "/image/ng 11.jpeg" },
    { image: "/image/ng 12.jpeg" },
    { image: "/image/ng 14.jpeg" },
    { image: "/image/ng 15.jpeg" },
    { image: "/image/ng 16.jpeg" },
    { image: "/image/ng 17.jpeg" },
    { image: "/image/ng 18.jpeg" },
    { image: "/image/ng 19.jpeg" },
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };


useEffect(() => {  
  const sendFormData = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/v1/v2/vz/api/forms/getinvolve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();

    } catch (err) {
      console.error("Error sending form data:", err);
    }
  };
if(formData.name && formData.email && formData.company && formData.mobile && showSuccess)  sendFormData();
}, [showSuccess]);

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  // Handle slide navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  // Autoplay functionality using useEffect
  useEffect(() => {
    let autoplayInterval;
    if (isAutoplay) {
      autoplayInterval = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(autoplayInterval);
  }, [isAutoplay, currentSlide]);

  // Handle mouse events for pausing/resuming autoplay
  const handleMouseEnter = () => {
    setIsAutoplay(false);
  };

  const handleMouseLeave = () => {
    setIsAutoplay(true);
  };

  // JSX structure for the component
  return (
    <div className="bg-white">
      <section className="text-white py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#11616f] p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-extrabold mb-8 text-center">GET INVOLVED</h2>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="name" className="block font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6d4d] transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6d4d] transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="company" className="block font-semibold mb-2">Company Name *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Enter your company name"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6d4d] transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block font-semibold mb-2">Mobile No *</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  required
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6d4d] transition-all duration-200"
                />
              </div>
              <div className="md:col-span-2 text-center mt-8">
                <button
                  type="submit"
                  className="bg-[#ff6d4d] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#e55a42] transition-colors duration-200 transform hover:scale-105"
                >
                  BECOME POSH PARTNER
                </button>
              </div>
            </form>

            {/* Success Message */}
            {showSuccess && (
              <div className="mt-6 p-4 bg-green-500 bg-opacity-20 border border-green-400 rounded-lg text-center">
                <p className="text-green-200 font-semibold">Thank you! Your partnership request has been submitted successfully.</p>
              </div>
            )}

            {/* Image Slider with Thumbnails */}
            <div className="mt-12 w-full max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Gallery</h3>

              {/* Main Slider */}
              <div className="relative slider-container rounded-lg overflow-hidden shadow-lg mb-6 group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img.image}
                      alt={`Gallery Image ${index + 1}`}
                      className="min-w-full object-contain"
                      style={{ backgroundColor: "transparent", maxHeight: "400px", height: "400px" }}
                    />
                  ))}
                </div>

                {/* Left/Previous Button */}
                <button
                  onClick={previousSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                {/* Right/Next Button */}
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
                 {/* Play/Pause Button */}
                <button
                  onClick={() => setIsAutoplay(!isAutoplay)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white p-2 rounded-full bg-[#ff6d4d] bg-opacity-80 hover:bg-opacity-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {isAutoplay ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img.image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`thumbnail w-16 h-16 rounded-lg border-2 border-transparent object-cover cursor-pointer transition-all duration-300 ${currentSlide === index ? 'active border-[#ff6d4d] scale-110' : ''}`}
                    onClick={() => goToSlide(index)}
                    style={{ backgroundColor: "transparent" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
