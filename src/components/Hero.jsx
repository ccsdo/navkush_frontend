import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <section
        className="relative flex items-center justify-center min-h-[70vh] md:min-h-[80vh] lg:min-h-screen overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #11616f 0%, #ff6d4d 100%)"
        }}
      >
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          poster="/video/hero-poster.jpg"
        >
          <source src="/image/hero.mp4" type="video/mp4" />
          {/* <source src="/video/hero-bg.webm" type="video/webm" /> */}
          Your browser does not support the video tag.
        </video>

        {/* Background grain effect */}
        <div
          className="absolute inset-0 pointer-events-none z-10 opacity-50"
          style={{
            background:
              'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cdefs%3E%3Cpattern id=\'grain\' width=\'100\' height=\'100\' patternUnits=\'userSpaceOnUse\'%3E%3Ccircle cx=\'25\' cy=\'25\' r=\'1\' fill=\'white\' opacity=\'0.1\'/%3E%3Ccircle cx=\'75\' cy=\'75\' r=\'1\' fill=\'white\' opacity=\'0.1\'/%3E%3Ccircle cx=\'50\' cy=\'10\' r=\'0.5\' fill=\'white\' opacity=\'0.1\'/%3E%3Ccircle cx=\'10\' cy=\'60\' r=\'0.5\' fill=\'white\' opacity=\'0.1\'/%3E%3Ccircle cx=\'90\' cy=\'40\' r=\'0.5\' fill=\'white\' opacity=\'0.1\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100\' height=\'100\' fill=\'url(%23grain)\'/%3E%3C/svg%3E")',
          }}
        ></div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center relative z-20">
          <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
            <h2
              className="hero-title font-medium mb-6 drop-shadow-2xl animate-float text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-tight font-bigshouldersdisplay"
            >
              From Classrooms to Careers – We Stand With Every Child.
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="support-btn mt-4 sm:mt-6 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#11616f] text-white font-bold text-base sm:text-lg rounded-full hover:bg-[#ff6d4d] hover:text-white shadow-xl font-inter transition-colors duration-300"
                onClick={() => navigate('/support')}
              >
                Support Our Work
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        {/* Responsive decorative blobs */}
        <div
          className="hidden md:block absolute top-10 left-10 md:top-20 md:left-20 w-20 h-20 md:w-32 md:h-32 rounded-full blur-xl z-10"
          style={{ background: "#11616f", opacity: 0.12 }}
        ></div>
        <div
          className="hidden md:block absolute bottom-10 right-10 md:bottom-20 md:right-20 w-28 h-28 md:w-48 md:h-48 rounded-full blur-2xl z-10"
          style={{ background: "#ff6d4d", opacity: 0.08 }}
        ></div>
        <div
          className="hidden md:block absolute top-1/2 left-4 md:left-10 w-10 h-10 md:w-16 md:h-16 rounded-full blur-lg z-10"
          style={{ background: "#ff6d4d", opacity: 0.18 }}
        ></div>
      </section>
    </>
  );
};

export default Hero;
