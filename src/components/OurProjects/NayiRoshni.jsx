import React, { useState } from "react";

// Main App component (navbar, footer removed)
const App = () => {
  return (
    <div className="bg-gradient-to-br from-[#f8e55e] via-[#f3f4f6] to-[#e0f7fa] min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header className="bg-[#11616f] py-6 text-center">
        <h1 className="text-3xl font-bold text-white">
        Nayi Roshni Lighting Up The Future
        </h1>
      </header>

      {/* Education Provided */}
      <section className="bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
        <p className="mb-4">
          At Nayi Roshni, we are embarking on a journey to uplift the lives of underprivileged children in rural areas by providing them with education and personal grooming opportunities. We visit villages and take responsibility for shaping the future of these children, guiding them toward a brighter tomorrow through education, values, and essential life skills.
        </p>
        <p className="mb-4">
          However, we can’t do this alone – we need your support to bring this dream to life.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">How Can You Help?</h2>
        <p className="mb-2">
          By sponsoring a child, you can directly contribute to their education and personal development. You can choose from the following sponsorship options:
        </p>
        <ul className="list-disc pl-6 my-4">
          <li>₹1000: Support a child for 1 month</li>
          <li>₹3,000: Support a child for 3 months</li>
          <li>₹6,000: Support a child for 6 months</li>
          <li>₹12,000: Support a child for 1 year</li>
        </ul>
        <p className="mb-4">
          Your sponsorship will ensure the child receives access to quality education and essential grooming, helping them develop into confident, empowered individuals.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-6">What Do You Get in Return?</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <span className="font-semibold">Regular Updates:</span> You will receive regular updates on the child’s progress, achievements, and overall development.
          </li>
          <li>
            <span className="font-semibold">Visits:</span> You are welcome to visit the village and meet the child you are sponsoring, experiencing firsthand the impact of your contribution.
          </li>
        </ul>
        <p>
          Together, we can make a meaningful difference in the lives of these children and pave the way for a brighter future. With your help, we can empower the next generation.
        </p>
        <p className="mb-4">
          Nayi Roshni is a project run by the Navvkhush Helping Foundation, aimed at providing education and basic resources to underprivileged children in the Yamuna Khadar area. In this region, many children come from families who are struggling with poverty and lack of access to essential services. The project serves around 200 children, providing them with not only education but also the necessary tools and support to help them build a better future.
        </p>
        <p className="mb-4">
          Through this initiative, the Navvkhush Helping Foundation hopes to make a positive impact by ensuring that these children have the opportunity to learn and grow, despite the hardships they face. The name <span className="font-semibold">Nayi Roshni</span> means <span className="italic">New Light</span>, symbolizing the hope and opportunities that education can bring to these children’s lives. Our focus is to empower these children with knowledge and skills that will help them break the cycle of poverty and lead them to a brighter and more successful future.
        </p>
         {/* Objectives */}
        <h2 className="text-2xl font-bold mb-4">Objectives of the Nayi Roshni Project</h2>
        <p className="mb-4">
          The primary objective of the Nayi Roshni project is to provide underprivileged children with access to education, resources, and a supportive environment that allows them to develop their full potential. The project focuses on the following:
        </p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>
            <span className="font-semibold">Providing Quality Education:</span> Education is the key to a better future, and we want to make sure these children get a chance to learn. We offer basic education that covers important subjects like reading, writing, and arithmetic. This education will give them the skills they need to succeed in life and have better opportunities.
          </li>
          <li>
            <span className="font-semibold">Offering Basic Necessities:</span> Many of these children lack the basic items needed for school and daily life. The project provides essential items like stationery, shoes, and clothing, which are necessary for their education and well-being. This ensures that the children can focus on learning without being distracted by the lack of basic resources.
          </li>
          <li>
            <span className="font-semibold">Encouraging Holistic Development:</span> The Nayi Roshni project does not only focus on academics but also on the overall development of the children. We provide a balanced approach that includes emotional, mental, and physical growth. This approach helps the children to become confident, happy, and well-rounded individuals.
          </li>
          <li>
            <span className="font-semibold">Creating Better Opportunities for the Future:</span> The ultimate aim of the project is to equip these children with the skills and resources they need to create a better future for themselves and their families. We want to ensure that they can access opportunities in education, jobs, and life that will allow them to escape poverty and lead successful, fulfilling lives.
          </li>
        </ol>
          <h2 className="text-2xl font-bold mb-4">Education Provided to the Children</h2>
          <p className="mb-4">
            At the core of the Nayi Roshni project is the education we provide to the children. We understand that education is the key to improving the quality of life, so we focus on delivering a curriculum that helps the children learn in the best possible way. The education is designed to be simple, engaging, and accessible, keeping in mind the children’s varying levels of understanding and their individual learning needs.
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>
              <span className="font-semibold">Basic Literacy and Numeracy:</span> The first step in the education process is to teach the children essential skills in reading, writing, and mathematics. These subjects form the foundation for all future learning. We work with the children at their own pace to ensure they understand and can apply these basic skills effectively.
            </li>
            <li>
              <span className="font-semibold">Life Skills:</span> We also teach important life skills, such as discipline, respect, responsibility, and teamwork. These skills are vital for the children’s personal development and help them navigate challenges in life. We want them to be not just good students but also responsible citizens who contribute positively to society.
            </li>
            <li>
              <span className="font-semibold">Creative and Critical Thinking:</span> The Nayi Roshni project encourages creativity and critical thinking through activities such as art, music, and problem-solving exercises. These activities help the children develop a curious mindset and become more confident in their abilities. We believe that fostering creativity helps children think outside the box and prepare for future challenges.
            </li>
            <li>
              <span className="font-semibold">Health and Hygiene Education:</span> Many children in underprivileged areas lack awareness about personal hygiene and health. We include lessons on basic health and hygiene practices, such as washing hands, maintaining cleanliness, and staying healthy. This helps the children take care of themselves and live healthier lives.
            </li>
          </ol>
          <p className="mb-4">
          Apart from education, the Nayi Roshni project focuses on providing basic resources that the children need for their everyday lives. These resources ensure that the children can focus on their studies and personal growth without being held back by lack of essentials.
        </p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>
            <span className="font-semibold">Stationery and School Supplies:</span> The children receive stationery such as notebooks, pencils, pens, and erasers. These items are crucial for their learning, and providing them ensures that they can participate fully in their education without worrying about where to get these basic supplies.
          </li>
          <li>
            <span className="font-semibold">Clothing and Shoes:</span> Many children in this area do not have access to proper clothing or footwear. To help them feel confident and comfortable, the Nayi Roshni project provides school uniforms, shoes, and other necessary clothing. This also helps them avoid feeling embarrassed or left out compared to other children who may have better access to such items.
          </li>
          <li>
            <span className="font-semibold">Nutrition and Healthy Meals:</span> Proper nutrition is important for children’s growth and development. We provide nutritious meals to the children, ensuring they have the energy and strength to learn and grow. This support helps them stay healthy and focused in school, and it addresses some of the nutritional gaps they may face due to limited access to food at home.
          </li>
          <li>
            <span className="font-semibold">Books and Learning Materials:</span> In addition to basic stationery, we provide the children with books that supplement their education. These books help expand their knowledge, improve their reading skills, and make learning more enjoyable. We ensure that the books are age-appropriate and relevant to their curriculum.
          </li>
        </ol>
        {/* Conclusion */}
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="mb-4">
          The Nayi Roshni project, run by the Navvkhush Helping Foundation, is dedicated to providing education and essential resources to underprivileged children in the Yamuna Khadar area. By offering these children quality education, basic necessities like stationery, shoes, and clothing, and fostering their overall development, we aim to give them the tools they need to build a better future.
        </p>
        <p className="mb-4">
          Through this initiative, we are not just teaching academic subjects but also life skills, creativity, and the importance of health and hygiene. By empowering these children with the knowledge and support they need, we are helping them break free from the cycle of poverty and build a better life for themselves and their families.
        </p>
        <p>
          We hope that with continued support, the Nayi Roshni project can reach even more children and bring about long-lasting change in their lives. Education is the key to a brighter future, and through this project, we are lighting the way for these children to achieve their dreams.
        </p>
        </div>
      </section>

      <main>
        {/* MainContent removed as per instructions */}
        <ContactForm />
        <ImageGallery />
      </main>
    </div>
  );
};

const ContactForm = () => {
  return (
    <section className="bg-gradient-to-br from-[#e0f7fa] via-white to-[#f8e55e]/30 py-12 px-4" id="donate">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/90 rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-[#1a2d48] mb-2">Sponsor a Child Today!</h2>
          <p className="text-center text-gray-600 mb-8">
            Fill out the form below to become a part of this life-changing initiative.
          </p>
          <form className="space-y-6">
            <FloatingInput label="Full Name" id="name" type="text" />
            <FloatingInput label="Email" id="email" type="email" />
            <FloatingInput label="Phone Number" id="phone" type="tel" />
            <div className="relative">
              <select
                id="sponsorshipAmount"
                name="sponsorshipAmount"
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#0c594c] appearance-none"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select Sponsorship Amount
                </option>
                <option value="1000">₹1000 (1 month)</option>
                <option value="3000">₹3,000 (3 months)</option>
                <option value="6000">₹6,000 (6 months)</option>
                <option value="12000">₹12,000 (1 year)</option>
              </select>
              <label
                htmlFor="sponsorshipAmount"
                className="absolute left-4 top-0 text-gray-500 text-xs bg-white px-1 transform -translate-y-1/2 pointer-events-none"
              >
                Sponsorship Amount
              </label>
            </div>
            <FloatingInput label="Prefers village" id="prefersVillage" type="text" placeholder="e.g., Anantapur" />
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#0c594c] resize-none"
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-0 text-gray-500 text-xs bg-white px-1 transform -translate-y-1/2 pointer-events-none"
              >
                Your Message
              </label>
            </div>
            <div className="text-center pt-2">
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-[#1a2d48] to-[#0c594c] hover:from-[#0c594c] hover:to-[#1a2d48] text-white font-bold py-3 px-10 rounded-full shadow-lg transition-all duration-200 border-2 border-transparent hover:border-[#f8e55e] focus:outline-none focus:ring-2 focus:ring-[#f8e55e]"
              >
                DONATE NOW
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// Floating label input component
const FloatingInput = ({ label, id, type, placeholder }) => (
  <div className="relative">
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder || " "}
      className="peer w-full px-4 py-3 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#0c594c] placeholder-transparent"
      required
    />
    <label
      htmlFor={id}
      className="absolute left-4 top-0 text-gray-500 text-xs bg-white px-1 transform -translate-y-1/2 pointer-events-none transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#0c594c]"
    >
      {label}
    </label>
  </div>
);

// MediaModal with slide functionality
const MediaModal = ({ open, onClose, items, currentIndex, setCurrentIndex }) => {
  if (!open) return null;
  const current = items[currentIndex];
  const isVideo = current.type === "video";

  // Slide navigation handlers
  const prev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!open) return;
      if (e.key === "ArrowLeft") prev(e);
      if (e.key === "ArrowRight") next(e);
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line
  }, [open, items.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.7)" }}
      onClick={onClose}
    >
      <div
        className="relative rounded-2xl shadow-2xl max-w-3xl w-full mx-4 flex items-center justify-center"
        style={{ background: "none" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close icon on right side */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-[#0c594c] rounded-full p-2 shadow flex items-center justify-center"
          aria-label="Close"
        >
          <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="17" fill="#fff" stroke="#0c594c" strokeWidth="2"/>
            <path d="M12 12l12 12M12 24L24 12" stroke="#0c594c" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </button>
        {/* Prev button */}
        {items.length > 1 && (
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#0c594c] rounded-full p-2 shadow flex items-center justify-center"
            aria-label="Previous"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#fff" stroke="#0c594c" strokeWidth="2"/>
              <path d="M19 10l-6 6 6 6" stroke="#0c594c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        {/* Next button */}
        {items.length > 1 && (
          <button
            onClick={next}
            className="absolute right-16 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#0c594c] rounded-full p-2 shadow flex items-center justify-center"
            aria-label="Next"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#fff" stroke="#0c594c" strokeWidth="2"/>
              <path d="M13 10l6 6-6 6" stroke="#0c594c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        {isVideo ? (
          <video
            controls
            autoPlay
            poster={current.poster}
            className="w-full h-[40vw] max-h-[70vh] object-contain rounded-2xl"
            style={{ background: "none" }}
            preload="auto"
            playsInline
          >
            <source src={current.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={current.src}
            alt={current.alt || "Gallery image"}
            className="w-full h-[40vw] max-h-[70vh] object-contain rounded-2xl"
            style={{ background: "none" }}
          />
        )}
      </div>
    </div>
  );
};

// Image gallery with hover effects and masonry layout, with popup for both images and video, and slide on view
const ImageGallery = () => {
  const [mediaOpen, setMediaOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // All gallery items (images and video as objects)
  const galleryItems = [
    {
      type: "image",
      src: "/image/naviroshni.jpg",
      alt: "Event highlight 1"
    },
    {
      type: "video",
      src: "/image/nayi-video1.mp4",
      poster: "/image/naviroshni.jpg",
      alt: "Event video"
    },
    // The rest are images
    ...[
      "/image/naviroshni 1.jpg",
      "/image/naviroshni 1.jpg",
      "/image/naviroshni 2.jpg",
      "/image/naviroshni 3.jpg",
      "/image/naviroshni 4.jpg",
      "/image/naviroshni 5.jpg",
      "/image/naviroshni 6.jpg",
      "/image/naviroshni 7.jpg",
      "/image/naviroshni 8.jpg",
      "/image/naviroshni 9.jpg",
      "/image/naviroshni 10.jpg",
      "/image/naviroshni 11.jpg",
      "/image/naviroshni 12.jpg",
      "/image/naviroshni 13.jpg",
      "/image/naviroshni 14.jpg",
      "/image/naviroshni 15.jpg",
      "/image/naviroshni 16.jpg",
      "/image/naviroshni 17.jpg",
    ].map((src, i) => ({
      type: "image",
      src,
      alt: `Gallery image ${i + 2}`
    }))
  ];

  // Helper to open modal for image or video
  const openMedia = (index) => {
    setCurrentIndex(index);
    setMediaOpen(true);
  };

  return (
    <section className="bg-gradient-to-br from-[#f8e55e]/10 via-white to-[#e0f7fa]/30 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a2d48] mb-8 text-center drop-shadow-sm">
          Event Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* First image with popup */}
          <div
            className="lg:col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-2xl group relative cursor-pointer"
            onClick={() => openMedia(0)}
            tabIndex={0}
            role="button"
            aria-label="View event image"
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") openMedia(0);
            }}
          >
            <img
              src={galleryItems[0].src}
              alt={galleryItems[0].alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c594c]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          {/* Video thumbnail with popup */}
          <div
            className="lg:col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-2xl group relative flex items-center justify-center bg-black cursor-pointer"
            onClick={() => openMedia(1)}
            tabIndex={0}
            role="button"
            aria-label="Play event video"
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") openMedia(1);
            }}
          >
            <img
              src={galleryItems[1].poster}
              alt="Event video thumbnail"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundColor: "#000" }}
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white/80 rounded-full p-4 shadow-lg transition-transform duration-200 group-hover:scale-110">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="24" fill="#0c594c" fillOpacity="0.85"/>
                  <polygon points="20,16 36,24 20,32" fill="#f8e55e"/>
                </svg>
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#f8e55e]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          {/* Other images with popup */}
          {galleryItems.slice(2).map((item, index) => (
            <div
              key={index + 2}
              className="rounded-2xl overflow-hidden shadow-lg group relative cursor-pointer"
              onClick={() => openMedia(index + 2)}
              tabIndex={0}
              role="button"
              aria-label={`View gallery image ${index + 3}`}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") openMedia(index + 2);
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2d48]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        <MediaModal
          open={mediaOpen}
          onClose={() => setMediaOpen(false)}
          items={galleryItems}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </section>
  );
};

export default App;
