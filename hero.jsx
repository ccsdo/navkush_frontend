import React from "react";

export default function Hero() {
  // Scroll to next section (yellow section) on click
  const handleScrollDown = () => {
    const yellowSection = document.querySelector(".bg-yellow-400");
    if (yellowSection) {
      yellowSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Parallax effect for hero content
  React.useEffect(() => {
    const onScroll = () => {
      const scrolled = window.pageYOffset;
      const heroContent = document.querySelector(".relative.z-10.text-center");
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg- text-white overflow-x-hidden">
      {/* Video Background with Fallback */}
      <div className="absolute top-0 left-0 w-full h-full video-fallback">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          poster=""
          style={{ objectFit: "cover" }}
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>

        {/* Fallback content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-8 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse-slow">
              <svg
                className="w-16 h-16 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <p className="text-white text-lg opacity-75">
              Empowering Communities Through Action
            </p>
          </div>
        </div>
      </div>

      {/* Hero Overlay */}
      <div className="absolute top-0 left-0 w-full h-full hero-overlay z-5"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-2xl animate-float"
          style={{ fontFamily: "'Anton', 'Roboto', sans-serif" }}
        >
          Empowering Women and Children for a <br />
          <span className="text-yellow-400">Brighter Future</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 drop-shadow-lg">
          Join us in creating lasting change through education, healthcare, and
          community development
        </p>
        <button
          className="mt-4 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          onClick={() =>
            alert(
              "Thank you for your interest in supporting our cause! 🙏\n\nSupport functionality would be integrated in a real implementation."
            )
          }
        >
          Support Our Work
        </button>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-32 left-8 right-8 z-10 hidden md:flex justify-center space-x-12">
        <div className="text-center bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-4">
          <div className="text-3xl font-bold text-yellow-400">10K+</div>
          <div className="text-sm opacity-75">Lives Impacted</div>
        </div>
        <div className="text-center bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-4">
          <div className="text-3xl font-bold text-yellow-400">50+</div>
          <div className="text-sm opacity-75">Communities Served</div>
        </div>
        <div className="text-center bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-4">
          <div className="text-3xl font-bold text-yellow-400">500+</div>
          <div className="text-sm opacity-75">Active Volunteers</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        onClick={handleScrollDown}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start animate-pulse">
          <div className="w-1 h-2 bg-white animate-bounce mt-2 rounded-full"></div>
        </div>
        <p className="text-xs text-white text-center mt-2 opacity-75">
          Scroll Down
        </p>
      </div>

      {/* Yellow Section (Footer start) */}
      <div className="w-full h-20 bg-yellow-400 flex items-center justify-center absolute bottom-0 left-0">
        <p className="text-black font-bold text-lg">
          Ready to Make a Difference? Join Our Mission Today!
        </p>
      </div>

      {/* Custom styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Roboto:wght@400;700&display=swap');
        body, .font-roboto {
          font-family: 'Roboto', sans-serif;
        }
        .hero-overlay {
          background: linear-gradient(45deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2));
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        .video-fallback {
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%);
        }
        .social-icon {
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          transform: scale(1.2);
          filter: brightness(1.2);
        }
      `}</style>
    </section>
  );
}
