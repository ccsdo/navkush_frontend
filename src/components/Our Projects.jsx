import React from "react";
import { Link } from "react-router-dom";

export default function OurProjects() {
  const projects = [
    {
      title: "Nayi Roshni",
      description:
        "At Nayi Roshni, we are embarking on a journey to uplift the lives of underprivileged children in rural areas by providing them with education and personal grooming opportunities. We visit villages and take responsibility for shaping the future of these children, guiding them toward a brighter…",
      image: "/image/our project.jpg",
      link: "/projects/nayi-roshni",
    },
    {
      title: "Career Counselling",
      description:
        "Career choices play a crucial role in shaping the lives of students, especially during their formative years. Understanding the significance of proper guidance, our NGO has initiated a *Career Counseling Program* in Delhi Government Schools, focusing on students from classes 8th to 12th.  ",
      image: "/image/our project 1.jpg",
      link: "/projects/career-counselling",
    },
    {
      title: "EaseMyTrip",
      description:
        "EaseMyTrip has been an instrumental partner in making this vision a reality. Their commitment to corporate social responsibility goes beyond financial support—they have actively participated in shaping the program, providing expert trainers, and facilitating industry connections.",
      image: "/image/our project 2.jpg",
      link: "/projects/easemytrip",
    },
    {
      title: "Our School’s Initiative: Free Education for 100 Children in 2023-2024",
      description:
        "In the year 2023-2024, we took a significant step towards empowering children by opening a school dedicated to providing free education. Our school welcomed young learners from Nursery, LKG, and UKG, where we strived to give them a solid foundation in their early years of education.",
      image: "/image/our project 3.jpg",
      link: "/projects/free-education-100",
    },
    {
      title: "Delhi Govt Digital Literacy Awareness",
      description:
        "The Delhi Government’s Digital Literacy Awareness Program is a transformative initiative aimed at empowering the youth of North East Delhi by equipping them with essential digital skills. This project is being rolled out across 137+ government schools, targeting students from classes 8th to 12th. In an era where technology is rapidly evolving and shaping every aspect of our lives, ensuring digital literacy has become a crucial priority.",
      image: "/image/our project 4.jpg",
      link: "/projects/digital-literacy-awareness",
    },
    {
      title: "Sponsored the Education of 87 Underprivileged Children",
      description:
        "We are proud to announce that we have sponsored the education of 87 underprivileged children, providing them with the opportunity to access quality education and unlock their full potential. Through this sponsorship, these children now have the chance to pursue their dreams, overcome barriers, and build a brighter future for themselves",
      image: "/image/our project 5.jpg",
      link: "/projects/sponsorship-87",
    },
  ];

  return (
    <div className="font-sans bg-gray-200 min-h-screen text-gray-800">
      <section className="py-6 text-center bg-[oklch(90.5%_0.182_98.111)] p-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-bold text-green-800 capitalize text-4xl">
          Our Projects
          </h1>
        </div>
      </section>
      <div className=" container mx-auto px-4">
        <h2 className="text-start mb-6 font-semibold">Projects Year 2024-25</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-yellow-200"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm mb-4">
                  {project.description}
                </p>
                <Link
                  to={project.link}
                  className="inline-block bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
