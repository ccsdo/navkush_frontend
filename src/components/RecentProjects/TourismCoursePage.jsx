import React from "react";

const TourismCoursePage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-96">
        <img
          src="/images/tourism-course.jpg"
          alt="Tourism Course"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            EaseMyTrip: Free Foundation Course in Tourism
          </h1>
          <p className="text-lg max-w-2xl">
            Empowering futures with free training and 100% job placement guarantee.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto p-6 space-y-8">
        <p>
          At Navvkhush Helping, in collaboration with EaseMyTrip, we are dedicated to
          creating opportunities that transform lives. We are thrilled to announce
          our latest initiative—a completely free Foundation Course in Tourism
          designed for individuals aged 18 and above who have completed their 12th
          grade. This course is set to commence this month and will run for six
          months, providing not only comprehensive education but also guaranteed job
          placement upon completion.
        </p>

        <h2 className="text-2xl font-semibold">Why Tourism?</h2>
        <p>
          Tourism is one of the most dynamic and growing industries in the world,
          offering diverse career opportunities ranging from travel consultancy and
          hospitality management to tour operations and event planning.
        </p>

        <h2 className="text-2xl font-semibold">Course Highlights</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Duration: 6 months</li>
          <li>Eligibility: 18+ years old, completed 12th grade</li>
          <li>Cost: Free</li>
          <li>Job Placement: 100% guaranteed upon successful completion</li>
        </ul>

        <h2 className="text-2xl font-semibold">Curriculum Includes</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Introduction to the Tourism Industry</li>
          <li>Tourism Marketing and Management</li>
          <li>Customer Service Excellence</li>
          <li>Tour Operations and Travel Planning</li>
          <li>Sustainable Tourism Practices</li>
        </ul>

        <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
        <p>
          Expert-led training, comprehensive curriculum, guaranteed job placement,
          and a supportive learning environment.
        </p>

        <h2 className="text-2xl font-semibold">How to Enroll</h2>
        <p>
          Email: <a href="mailto:info@navvkhushhelping.org" className="text-blue-600 underline">info@navvkhushhelping.org</a><br />
          Contact: Contact Page on our website.
        </p>

        <p className="font-semibold text-center">
          Join us in empowering futures. Enroll today!
        </p>
      </section>
    </div>
  );
};

export default TourismCoursePage;
