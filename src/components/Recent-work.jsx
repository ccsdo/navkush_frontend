import React from "react";
import { Link } from "react-router-dom";

export default function RecentProjects() {
  const projects = [
    {
      title: "Digital Literacy Awareness Program in Delhi for 137+ Government Schools",
      description: "At Navvkhush Helping Foundation, we are proud to have collaborated with the Delhi government to promote digital literacy in over 137 schools, empowering students with essential digital skills.",
      image: "/image/our work 1.jpg",
      link: "/digital-literacy-program",
    },
    {
      title: "Empowering Future Leaders: Career Counseling Project for Students in Delhi Government Schools",
      description: "At our NGO, we are committed to empowering young minds and helping them shape a successful future through career counseling and guidance.",
      image: "/image/our work 2.jpg",
      link: "/career-counseling",
    },
    {
      title: "Empowering Children Through Education and Health: Eye Camp Initiative in Yamuna Khadar",
      description: "We believe in empowering children through education and holistic support. Our mission is to provide health checkups and eye care to underprivileged children.",
      image: "/image/our work 4.png",
      link: "/eye-camp-initiative",
    },
    {
      title: "Strengthening Community Engagement: Organizing Parent-Teacher Meetings in Yamuna Khadar",
      description: "We are committed to making education accessible to every child, regardless of their financial background, by fostering strong parent-teacher relationships.",
      image: "/image/our work 5.jpg",
      link: "/parent-teacher-meetings",
    },
    {
      title: "Transforming Spaces: Planting Initiative at MCD Schools",
      description: "We successfully completed a green initiative at MCD schools, bringing a fresh and vibrant environment to the school premises through plantation drives.",
      image: "/image/our work 6.jpg",
      link: "/planting-initiative",
    },
    {
      title: "Bringing Smiles: Stationery Distribution at MCD Schools",
      description: "We successfully completed a heartwarming project to distribute stationery to children in MCD schools, supporting their educational journey.",
      image: "/image/our work 6.jpg",
      link: "/stationery-distribution",
    },
    {
      title: "Content for Website: First Aid Kit Distribution in MCD Schools",
      description: "We are proud to announce the successful completion of our First Aid Kit Distribution Project in MCD schools, ensuring safety and preparedness.",
      image: "/image/our work 7.jpg",
      link: "/first-aid-kit-distribution",
    },
    {
      title: "EaseMyTrip: Launching Our Free Foundation Course in Tourism - May 2024",
      description: "At Navvkhush Helping, in collaboration with EaseMyTrip, we are dedicated to creating opportunities that open new career paths for youth in tourism.",
      image: "/image/our work 8.jpg",
      link: "/tourism-course",
    },
    {
      title: "Celebrating Women Empowerment: Kavita Ravat of Navvkhush Helping Foundation Receives Women Achievers Award 2024",
      description: "In a world where women are breaking barriers and shattering glass ceilings, it is imperative to recognize and celebrate their achievements.",
      image: "/image/our work 10.jpg",
      link: "/women-achievers-award",
    },
    {
      title: "Investing in the Future: Navvkhush Helping Foundation's Commitment to Child Development",
      description: "Navvkhush Helping Foundation’s commitment to child development is unwavering, focusing on holistic growth and nurturing young minds.",
      image: "/image/our work 11.jpg",
      link: "/child-development",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-start mb-12">
        <h6
          className="uppercase tracking-wider mb-2 font-big shoulders display"
          style={{ color: "#11616f" }}
        >
          Our Recent Projects
        </h6>
        <h2
          className="text-2xl md:text-3xl font-medium uppercase"
          style={{ color: "#11616f" }}
        >
          Our Organization is Involved in Numerous Projects
        </h2>
        <hr
          className="my-6"
          style={{
            borderColor: "#11616f",
            borderWidth: "2px",
            opacity: 1,
          }}
        />
        <div className="flex justify-center mt-4"></div>
      </div>

      <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col"
            style={{
              border: "1.5px solid #11616f",
              boxShadow: "0 2px 12px 0 rgba(17,97,111,0.08)",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-52 w-full object-cover"
              style={{
                borderBottom: "3px solid #ff6d4d",
              }}
            />
            <div className="p-6 flex flex-col flex-1">
              <h5
                className="text-lg font-semibold mb-3"
                style={{ color: "#11616f" }}
              >
                {project.title}
              </h5>
              <p className="mb-4 flex-1" style={{ color: "#444" }}>
                {project.description}
              </p>
              <Link
                to={project.link}
                className="inline-block px-3 py-1 rounded text-sm transition w-24 min-w-0 font-semibold"
                style={{
                  background: "linear-gradient(90deg, #11616f 0%, #ff6d4d 100%)",
                  color: "#fff",
                  border: "none",
                  boxShadow: "0 2px 8px 0 rgba(255,109,77,0.10)",
                }}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
