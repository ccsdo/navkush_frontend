import React from "react";

export default function DigitalLiteracyProgram() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-[#11616f] py-8 text-center">
        <h1 className="text-2xl font-bold text-white">
          Digital Literacy Awareness Program In Delhi For 137+ Government Schools
        </h1>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        {/* First Image */}
        <div className="mb-8">
          <img
            src="/image/our work 1.jpg"
            alt="Digital Literacy Awareness Program"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Program Overview */}
        <h2 className="text-xl font-bold mb-2">Program Overview:</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          At Navvkhush Helping Foundation, we are proud to have collaborated with the Delhi Government to implement
          the Digital Literacy Awareness Program across 137+ Government Schools in North East Delhi. Our mission is
          to empower students from these schools with essential digital skills, enabling them with equal opportunities
          for their academic and personal growth. The program targets students enrolled across 5th to 10th classes and
          is designed to build practical digital skills and encourage students with the knowledge and skills necessary
          to thrive in today’s digital age.
        </p>

        {/* Key Focus Areas */}
        <h2 className="text-xl font-bold mb-2">Key Focus Areas:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Basic computer skills</li>
          <li>Internet navigation and safety</li>
          <li>Digital communication</li>
          <li>Information literacy</li>
          <li>Cybersecurity awareness</li>
        </ul>

        {/* Benefits */}
        <h2 className="text-xl font-bold mb-2">Benefits for Students:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <strong>Empowerment:</strong> By acquiring digital literacy skills, students gain the confidence and
            capability to navigate the digital landscape effectively.
          </li>
          <li>
            <strong>Enhanced Learning:</strong> Digital literacy enhances academic learning by providing access to a
            wide array of educational resources and tools.
          </li>
        </ul>

        {/* Second Image */}
        <div className="mb-8">
          <img
            src="/image/our work 12.jpg"
            alt="Students showing digital literacy work"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Implementation */}
        <h2 className="text-xl font-bold mb-2">Implementation:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <strong>Collaboration with Schools:</strong> The program is implemented in collaboration with 137+
            Government Schools in North East Delhi, ensuring widespread access to digital literacy education.
          </li>
          <li>
            <strong>Curriculum Integration:</strong> Digital literacy modules are integrated into the academic
            curriculum, supplementing traditional learning.
          </li>
          <li>
            <strong>Expert Instructors:</strong> The program is facilitated by qualified instructors with expertise in
            digital literacy education, ensuring high-quality instruction.
          </li>
        </ul>

        {/* Our Impact */}
        <h2 className="text-xl font-bold mb-2">Our Impact:</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The Digital Literacy Awareness Program has made a significant impact in the lives of students in North East
          Delhi by providing access to quality digital education. Students have showcased improved digital literacy,
          critical thinking, and problem-solving skills, which have enhanced their academic performance and opened
          opportunities for future success. The initiative has also strengthened communication and collaboration among
          teachers, students, and stakeholders.
        </p>
      </section>
    </div>
  );
}
