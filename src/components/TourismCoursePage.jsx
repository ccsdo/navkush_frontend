import React  from "react";
import { useNavigate } from "react-router-dom";
export default function TourismCourse() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="bg-[#11616f] py-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          EaseMyTrip: Launching Our Free Foundation Course In Tourism – May 2024
        </h1>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto px-4 py-10 text-lg leading-relaxed space-y-6">
        <p>
          At Navvkhush Helping, in collaboration with EaseMyTrip, we are
          dedicated to creating opportunities that transform lives. We are
          thrilled to announce our latest initiative – a completely free
          Foundation Course in Tourism designed for individuals aged 18 and
          above who have completed 12th grade. The course is set to commence
          this month and will run for six months, providing not only
          comprehensive education but also guaranteed job placement upon
          completion.
        </p>
          <img
            src="/image/tourism-main.jpg"
            alt="Foundation Course in Tourism"
            className="w-full rounded-lg shadow-md my-6"
          />

        <h2 className="text-xl font-semibold mt-6 mb-2">Why Tourism?</h2>
        <p>
          Tourism is one of the most dynamic and growing industries in the
          world, offering diverse career opportunities ranging from travel
          consultancy and hospitality management to tour operations and event
          planning. Recognizing the potential of this industry for youth
          empowerment, we have tailored this course to equip students with the
          skills and knowledge required to thrive in various careers within the
          tourism sector.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Course Highlights</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Duration:</strong> 6 months</li>
          <li><strong>Eligibility:</strong> 18+ years old, completed 12th grade</li>
          <li><strong>Cost:</strong> Free</li>
          <li><strong>Job Placement:</strong> 100% guaranteed upon successful completion</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Our curriculum covers essential topics including:
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Introduction to the Tourism Industry</li>
          <li>Tourism Marketing and Management</li>
          <li>Customer Service Excellence</li>
          <li>Tour Operations and Travel Planning</li>
          <li>Sustainable Tourism Practices</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Why Choose Navvkhush Helping and EaseMyTrip?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Expert-Led Training:</strong> Our course is designed and
            delivered by industry experts with extensive experience in tourism
            and hospitality.
          </li>
          <li>
            <strong>Comprehensive Curriculum:</strong> We offer a balanced mix
            of theoretical knowledge and practical skills, ensuring our
            students are well-prepared for the job market.
          </li>
          <li>
            <strong>100% Job Placement Guarantee:</strong> We have partnered with
            EaseMyTrip and other leading companies in the tourism sector to
            ensure every student secures a job upon completion.
          </li>
          <li>
            <strong>Supportive Learning Environment:</strong> Our dedicated team
            provides continuous support throughout the course, ensuring every
            student has the resources they need to succeed.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Success Stories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-4">
            <img
              src="/image/Success Story 1.jpg"
              alt="Success Story 1"
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/image/Success Story 2.jpg"
              alt="Success Story 2"
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/image/Success Story 3.jpg"
              alt="Success Story 3"
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/image/Success Story 4.jpg"
              alt="Success Story 4"
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/image/Success Story 5.jpg"
              alt="Success Story 5"
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/image/Success Story 6.jpg"
              alt="Success Story 6"
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-2">How to Enroll</h2>
        <p>
          Interested students are encouraged to reach out to us for more
          details. Here’s how you can get in touch:
        </p>
        <p>
          <strong>Email:</strong> info@navvkhushhelping.org
          <br />
          <strong>Contact:</strong> <button className="text-blue-600 underline cursor-pointer" onClick={handleClick}>Contact Form</button> 
          <br />
          Alternatively, visit our website at <strong>navvkhushhelping.org</strong> to learn
          more about the course and fill out the enrollment form.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-6">
            <img
              src="/image/tourism-extra1.jpg"
              alt="Tourism Course 1"
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/image/tourism-extra2.jpg"
              alt="Tourism Course 2"
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/image/tourism-extra3.jpg"
              alt="Tourism Course 3"
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/image/tourism-extra4.jpg"
              alt="Tourism Course 4"
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/image/tourism-extra5.jpg"
              alt="Tourism Course 5"
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Join Us in Empowering Futures
        </h2>
        <p>
          We believe education is the key to unlocking potential and creating a
          brighter future. Our Foundation Course in Tourism is more than just a
          learning opportunity; it’s a stepping stone to a successful career. We
          invite all eligible individuals to take advantage of this fantastic
          opportunity and embark on a journey toward a fulfilling career in
          tourism.
        </p>
      </div>
    </div>
  );
}
