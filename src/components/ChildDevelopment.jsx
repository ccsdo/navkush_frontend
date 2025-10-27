import React from "react";

export default function ChildDevelopment() {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="bg-[#11616f] py-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Investing in the Future: Navvkhush Helping Foundation’s Commitment to Child Development
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-10 text-lg leading-relaxed space-y-6">
        <p>
          Navvkhush Helping Foundation is dedicated to nurturing the potential of underprivileged children and ensuring their access to quality education. We are proud to sponsor the education of 87 deserving children as part of our ongoing initiative at the Angan Path Center.
        </p>

        <img
          src="/image/child-development-group.jpg"
          alt="Child Development Group"
          className="w-full rounded-lg shadow-md my-6"
        />

        <h2 className="text-xl font-semibold mt-6 mb-2">About the Project</h2>
        <p>
          Through our sponsorship program, we provide comprehensive support to underprivileged children, including access to education, school supplies, uniforms, and extracurricular activities. Our aim is to create a nurturing environment where children can thrive academically, socially, and emotionally, regardless of their background or circumstances.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Impact and Outcomes</h2>
        <p>
          By sponsoring the education of 87 underprivileged children, we are making a tangible difference in their lives and encouraging them to break the cycle of poverty. Through access to education, these children have the opportunity to build a brighter future for themselves and their families.
        </p>

        <img
          src="/image/child-development-classroom.jpg"
          alt="Classroom"
          className="w-full rounded-lg shadow-md my-6"
        />

        <h2 className="text-xl font-semibold mt-6 mb-2">How You Can Help</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Donating to our sponsorship program to help cover the costs of education, school supplies, and other essential needs.
          </li>
          <li>
            Volunteering your time to mentor, tutor, or engage with the children in educational and recreational activities.
          </li>
          <li>
            Spreading awareness about the importance of education and advocating for the rights of underprivileged children in your community.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Join Us in Making a Difference:</h2>
        <p>
          At Navvkhush Helping Foundation, we believe that every child deserves the opportunity to reach their full potential and achieve their dreams. Join us in our commitment to investing in the future of underprivileged children and building a more equitable world.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Get Involved:</h2>
        <p>If you are passionate about child development and education, there are various ways to get involved with Navvkhush Helping Foundation’s sponsorship program. Together, we can make a meaningful impact in the lives of underprivileged children and create a brighter future for generations to come.</p>
      </div>
    </div>
  );
}
