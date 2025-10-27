import React from "react";
import { motion } from "framer-motion";
import InternshipForm from "./internshipform";

export default function InternshipPage() {
  return (
    <div className="bg-gray-50 text-gray-800 font-['Inter',sans-serif]">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/image/internshipbanner.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white max-w-3xl px-4"
        >
          <h1 className="text-5xl font-bold mb-4">Intern, Inspire, Impact.</h1>
          <p className="text-lg">
            At Navvkhush Helping Foundation, our internship program is designed to give students and young professionals an opportunity to learn, contribute, and create real social impact. If you are passionate about child education and social development, this is the place for you.
          </p>
        </motion.div>
      </section>

      {/* Why Intern With Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-10 text-teal-700"
        >
          Why Intern With Us?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "🌱", text: "Gain practical experience in the NGO sector" },
            { icon: "💡", text: "Work on real projects related to child education, digital literacy, and awareness campaigns" },
            { icon: "🤝", text: "Improve your leadership, teamwork, and communication skills" },
            { icon: "🎓", text: "Receive mentorship from experienced social workers and educators" },
            { icon: "📜", text: "Certificate of Internship on successful completion" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg flex items-start space-x-4"
            >
              <span className="text-3xl">{item.icon}</span>
              <p className="text-lg font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Internship Areas */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-10 text-teal-700"
          >
            Internship Areas
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Education Support Intern",
                desc: "Assist in bridge courses, evening classes, and digital learning",
                img: "/image/intern1.png",
              },
              {
                title: "Research & Documentation Intern",
                desc: "Collect data, prepare reports, document stories of impact",
                img: "/image/intern2.png",
              },
              {
                title: "Design & Social Media Intern",
                desc: "Create awareness campaigns and manage NGO outreach",
                img: "/image/intern3.png",
              },
              {
                title: "Event & Fundraising Intern",
                desc: "Support in donor engagement and organizing events",
                img: "/image/intern4.png",
              },
              {
                title: "Community Development Intern",
                desc: "Work with parents, teachers, and local communities",
                img: "/image/intern5.png",
              },
            ].map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl flex flex-col"
              >
                <img
                  src={area.img}
                  alt={area.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-teal-700 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-600">{area.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Duration & Mode */}
      <section className="py-12 px-6 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold text-teal-700 mb-6"
        >
          Duration &amp; Mode
        </motion.h2>
        <ul className="text-lg space-y-3 mb-8">
          <li>
            <span className="font-semibold">• Short-term (1–2 months)</span> &amp; <span className="font-semibold">Long-term (3–6 months)</span>
          </li>
          <li>
            <span className="font-semibold">• Online/Offline</span> (depending on role and location)
          </li>
        </ul>
        <div className="text-center">
          <span className="text-2xl mr-2">👉</span>
          <span className="font-semibold text-gray-800">Step into the world of social change.</span>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-4"
        >
          Apply for Internship – Start Your Journey
        </motion.h2>
        <InternshipForm/>
      </section>
    </div>
  );
}

