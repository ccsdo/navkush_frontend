import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#11616f] p-4 font-['Inter']">
      {/* Container for the whole card */}
      <div className="flex flex-col md:flex-row max-w-6xl w-full p-8 md:p-12 gap-8 md:gap-16">
        {/* Left section for text */}
        <div className="flex flex-col justify-center flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#ff6d4d]">
            KAVITA RAWAT
          </h1>
          <p className="text-sm md:text-base text-white leading-relaxed">
            "Kavita Rawat is a remarkable individual and a dedicated Trustee of Navkhush Helping Foundation, a non-governmental organization (NGO) that she initiated with a vision to make a positive impact in the lives of women and children. Her journey to establishing the NGO is deeply rooted in her own life struggles, which served as the driving force behind her commitment to bring about change in the lives of those in need"
          </p>
        </div>
        
        {/* Right section for the image */}
        <div className="flex-1 flex justify-center items-center relative">
          {/* Main image with border effect */}
          <div className="w-full max-w-lg md:max-w-none border-8 border-dashed border-[#ff6d4d] p-2 rounded-3xl overflow-hidden">
            <img 
              src="/image/About.jpg" 
              alt="Kavita Rawat" 
              className="w-full h-full object-cover rounded-2xl"
              // Fallback for image loading
              onError={(e) => {
                e.target.src = "https://placehold.co/600x600/ff6d4d/11616f?text=Image+Not+Found";
                e.target.alt = "Image not found";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
