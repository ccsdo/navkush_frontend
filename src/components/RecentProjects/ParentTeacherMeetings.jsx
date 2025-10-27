// File: src/components/RecentProjects/ParentTeacherMeetings.jsx
import React from "react";

export default function ParentTeacherMeetings() {
  return (
    <div className="font-sans">
      <header className="bg-green-600 text-center py-6">
        <h1 className="text-2xl font-bold text-white">
          Strengthening Community Engagement: Organizing Parent-Teacher Meetings in Yamuna Khadar
        </h1>
      </header>

      <section className="max-w-6xl mx-auto p-6 space-y-4">
        <p>
          At our NGO, we are committed to making education accessible to every child, regardless of their financial background. We are running a dedicated project in the Yamuna Khadar region, near Akshardham, aimed at providing free education to children who are unable to afford schooling. These children, full of potential, deserve the opportunity to learn, grow, and build a brighter future.
        </p>

        <p>
          Our initiative focuses on offering quality educational support to children in need, empowering them with the knowledge and skills necessary for personal development and future success. We provide regular tutoring sessions in subjects like mathematics, science, and language arts, ensuring a strong academic foundation. In addition to academic help, we also focus on life skills, creativity, and confidence-building activities that encourage holistic development.
        </p>

        <p>
          To strengthen our efforts and keep families connected to the learning process, we organize monthly <strong>Parent-Teacher Meetings (PTM)</strong> in the Yamuna Khadar area. These meetings serve as a platform for open communication between parents, teachers, and children, allowing us to track progress, address challenges, and celebrate achievements. Through these gatherings, we ensure that everyone involved in the children’s education is aligned and working towards a common goal of success.
        </p>

        <p>
          Our goal is not only to provide education but also to inspire hope and build a supportive community around these children. We believe that every child deserves the chance to succeed, and with the right guidance and resources, we can help them achieve their dreams.
        </p>

        <p>
          We invite you to support our mission and join us in creating lasting change for the children of Yamuna Khadar. Together, we can make education a reality for every child in need.
        </p>
      </section>

      <section className="max-w-6xl mx-auto p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <img src="/images/ptm1.jpg" alt="Parents and teachers meeting" className="w-full h-auto rounded shadow" />
        <img src="/images/ptm2.jpg" alt="Children with parents" className="w-full h-auto rounded shadow" />
        <img src="/images/ptm3.jpg" alt="Discussion in progress" className="w-full h-auto rounded shadow" />
        <img src="/images/ptm4.jpg" alt="Teacher interacting with family" className="w-full h-auto rounded shadow" />
      </section>
    </div>
  );
}
