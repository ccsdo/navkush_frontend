import React from 'react';

export default function DigitalLiteracyProgram() {
  return (
    <div className="font-sans">

      {/* Header Section */}
      <div className="bg-yellow-400 text-center py-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          Digital Literacy Awareness Program In Delhi For 137+ Government Schools
        </h1>
      </div>

      {/* Program Overview */}
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        <img src="/images/digital-literacy-1.jpg" alt="Classroom" className="w-full rounded shadow" />
        <div>
          <h2 className="text-lg font-semibold">Program Overview:</h2>
          <p className="mt-2 text-gray-700">
            At Navvkhush Helping Foundation, we are proud to have collaborated with the Delhi Government to implement the Digital Literacy Awareness Program across 137+ Government Schools in North East Delhi. Our mission is to empower students from these schools with crucial digital skills, enabling them to stay equipped for the modern world.
          </p>
        </div>

        {/* Key Focus Areas */}
        <div>
          <h3 className="text-lg font-semibold">Key Focus Areas:</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Basic computer skills</li>
            <li>Internet navigation and online safety</li>
            <li>Digital communication</li>
            <li>Information literacy</li>
            <li>Cybersecurity awareness</li>
          </ul>
        </div>

        {/* Benefits */}
        <div>
          <h3 className="text-lg font-semibold">Benefits for Students:</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li><strong>Empowerment:</strong> Students gain confidence and capability to navigate the digital landscape effectively.</li>
            <li><strong>Enhanced Learning:</strong> Access to a wide array of educational resources and tools.</li>
          </ul>
        </div>

        {/* Second Image */}
        <img src="/images/digital-literacy-2.jpg" alt="Students holding posters" className="w-full rounded shadow" />

        {/* Implementation */}
        <div>
          <h3 className="text-lg font-semibold">Implementation:</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li><strong>Collaboration with Schools:</strong> Implemented with 137+ Government Schools ensuring wide access.</li>
            <li><strong>Curriculum Integration:</strong> Digital literacy modules added to the academic curriculum.</li>
            <li><strong>Qualified Instructors:</strong> Led by experts in digital literacy education.</li>
          </ul>
        </div>

        {/* Our Impact */}
        <div>
          <h3 className="text-lg font-semibold">Our Impact:</h3>
          <p className="text-gray-700 mt-2">
            The program has significantly impacted the lives of students in North East Delhi, enhancing academic performance, boosting confidence, and promoting collaboration among schools, parents, and stakeholders.
          </p>
        </div>
      </div>
    </div>
  );
}
