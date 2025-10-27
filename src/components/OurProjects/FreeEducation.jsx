// App.js
import React from 'react';

// The main App component that renders the entire website.
const App = () => {
  return (
    <div className="bg-gray-100 font-sans text-gray-800">
      {/* Header component has been removed as per request */}
      <header className="bg-[#11616f] py-6 text-center">
        <h1 className="text-3xl font-medium text-white">
        Our School’s Initiative: Free Education for 100 Children in 2023-2024
        </h1>
      </header>
      <main>
        <MainContent />
        <ImageGallery />
      </main>
      {/* Footer component has been removed as per request */}
    </div>
  );
};

// Main content section with the updated text from the new image.
const MainContent = () => (
  <section className="bg-white p-8 md:p-12">
    <div className="container mx-auto">
      <p className="text-gray-600 mb-4 text-lg">
        In the year 2023-2024, we took a significant step towards empowering children by opening a school dedicated to providing free education. Our school welcomed children from diverse backgrounds, offering them a nurturing environment to learn and grow. We understood that to truly empower them, we needed to go beyond providing a classroom and just education, but also ensuring that children had the necessary tools to succeed. To make this possible, we provided free school kits to all students, which included books, stationery, and uniforms. These kits were not just educational supplies; they were a symbol of our commitment to ensuring every child was equally ready to begin on their journey. Throughout the year, we successfully educated 100 children, providing them with the knowledge, care, and support they needed to thrive. Our efforts were a testament to our belief that every child, regardless of their circumstances, deserves access to quality education. We are confident that by investing in the education of our young generation, we will pave the way for a brighter future for all.
      </p>
    </div>
  </section>
);

// Component to display the grid of image, mimicking the layout of the new image.
const ImageGallery = () => {
  const image = [
    '/image/freeeducation 1.jpg',
    '/image/freeeducation 2.jpg',
    '/image/freeeducation 3.jpg',
    '/image/freeeducation 4.jpg',
    '/image/freeeducation 5.jpg',
    '/image/freeeducation 6.jpg',
    '/image/freeeducation 7.jpg',
    '/image/freeeducation 8.jpg',
    '/image/freeeducation 9.jpg',
    '/image/freeeducation 11.jpg',
    '/image/freeeducation 12.jpg',
    '/image/freeeducation 13.jpg',
    '/image/freeeducation 14.jpg',
    '/image/freeeducation 15.jpg',
    '/image/freeeducation 16.jpg',
    '/image/freeeducation 17.jpg',
    '/image/freeeducation 18.jpg',
    '/image/freeeducation 19.jpg',
    '/image/freeeducation 20.jpg',
    '/image/freeeducation 21.jpg',
    '/image/freeeducation 22.jpg',
    '/image/freeeducation 23.jpg',
    '/image/freeeducation 24.jpg',
    '/image/freeeducation 25.jpg',
    '/image/freeeducation 26.jpg',
    '/image/freeeducation 27.jpg',
    '/image/freeeducation 28.jpg',
  ];

  return (
    <section className="bg-white p-8 md:p-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="col-span-2 row-span-2 rounded-lg overflow-hidden shadow-lg">
            <img src={image[0]} alt="Event highlight 1" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 row-span-2 rounded-lg overflow-hidden shadow-lg">
            <img src={image[1]} alt="Event highlight 2" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 rounded-lg overflow-hidden shadow-lg">
            <img src={image[2]} alt="Event highlight 3" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={image[3]} alt="Event highlight 4" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={image[4]} alt="Event highlight 5" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={image[5]} alt="Event highlight 6" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={image[6]} alt="Event highlight 7" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={image[7]} alt="Event highlight 8" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={image[8]} alt="Event highlight 9" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={image[9]} alt="Event highlight 10" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={image[10]} alt="Event highlight 11" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={image[11]} alt="Event highlight 12" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={image[12]} alt="Event highlight 13" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={image[13]} alt="Event highlight 14" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={image[14]} alt="Event highlight 15" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={image[15]} alt="Event highlight 16" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};


export default App;
