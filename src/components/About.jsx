import React from "react";
import { useNavigate } from "react-router-dom";

// Advisory board members data in detailed format (description removed)
const advisoryBoardMembers = [
  {
    key: "bindu",
    name: "Dr. Bindu Narula",
    image: "/image/Bindu Narula.png",
    profileLink: "/profiles/bindu-narula",
  },
  {
    key: "ravi",
    name: "Mr. Ravi Sinha",
    designation: "Strategic HR Leader Global Expertise",
    image: "/image/Ravi Sinha.png",
    profileLink: "/profiles/ravi-sinha",
  },
  {
    key: "parul",
    name: "Dr. Parul Kumar",
    image: "/image/Parul Kumar.png",
    profileLink: "/profiles/parul-kumar",
  },
  {
    key: "sandeep",
    name: "Mr. Sandeep Bhargava",
    designation: "Global Corporate Affairs & Policy Expert",
    image: "/image/Sandeep Bhargava.png",
    profileLink: "/profiles/sandeep-bhargava",
  },
  {
    key: "vijay",
    name: "Mr. Vijay Sharma",
    image: "/image/Vijay Sharma.png",
    profileLink: "/profiles/vijay-sharma",
  },
  {
    key: "prahlad",
    name: "Mr. Prahlad Kumar Godara",
    designation: "Veteran HR Leader Hero MotoCorp",
    image: "/image/Prahlad Kumar Godara.png",
    profileLink: "/profiles/prahlad-kumar-godara",
  },
  {
    key: "sruthi",
    name: "Ms. Sruthi Iyer",
    designation: "Social Impact Consultant",
    image: "/image/Sruthi Iyer.jpg",
    profileLink: "/profiles/sruthi-iyer",
  },
];

export default function FounderPage() {
  const navigate = useNavigate();

  const handleReadMore = (link) => {
    navigate(link);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative py-24"
        style={{
          background: "linear-gradient(to right, #11616f, #ff6d4d)",
          color: "#fff",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.6),rgba(0,0,0,0.3))]"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 font-big shoulders display">
            NAVVKHUSH HELPING FOUNDATION
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            "From Classrooms to Careers – We Stand With Every Child."
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: "#11616f" }}>
          About Us – NavvKhush Helping Foundation
        </h2>
        <div className="text-lg space-y-4" style={{ color: "#11616f" }}>
          <p>
            At NavvKhush Helping Foundation, we believe that education is the strongest weapon to bring lasting change. Our commitment is clear and unwavering – we stand with every child, because every child deserves the right to learn, grow, and dream.
          </p>
          <p>
            We are proudly aligned with the United Nations Sustainable Development Goal 4 (Quality Education), which ensures inclusive and equitable education for all. For us, this is not just a goal, it is a lifelong mission.
          </p>
          <p>
            Children are not only the future – they are our present. If we nurture their present with learning, values, and opportunities, only then can we shape a brighter tomorrow. That is why our foundation is dedicated to providing access to quality education for as many children as possible, especially those who are marginalized, underprivileged, or deprived of learning opportunities.
          </p>
          <p>
            Through our efforts, we aim to:
          </p>
          <ul className="list-disc pl-6">
            <li>Reach every child who has dropped out or never attended school.</li>
            <li>Bridge the gap between education and opportunity.</li>
            <li>Empower communities by empowering their youngest members.</li>
          </ul>
          <p>
            At NavvKhush Helping Foundation, we do not just teach children; we build dreams, instill hope, and create pathways for a better society. Because when every child learns, the whole nation moves forward.
          </p>
        </div>
      </section>

      {/* Child Education & SDG 4 Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold mb-4" style={{ color: "#ff6d4d" }}>
          Child Education & SDG 4 – Quality Education
        </h3>
        <div className="text-lg space-y-4" style={{ color: "#11616f" }}>
          <p>
            Our NGO’s child education initiatives are directly aligned with the United Nations Sustainable Development Goal 4 (Quality Education), which aims to:
          </p>
          <blockquote className="italic border-l-4 pl-4" style={{ borderColor: "#ff6d4d" }}>
            “Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.”
          </blockquote>
          <h4 className="font-bold mt-4 mb-2" style={{ color: "#11616f" }}>
            How Our Project Contributes to SDG 4:
          </h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <span className="font-semibold">Access to Education (SDG 4.1 & 4.2):</span>
              <ul className="list-disc pl-6">
                <li>Providing school access, mobile schools, and libraries for children aged 5–15 who are dropouts or never enrolled.</li>
                <li>Supporting early childhood and primary education.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Equity & Inclusion (SDG 4.5):</span>
              <ul className="list-disc pl-6">
                <li>Ensuring that both boys and girls from marginalized communities receive equal opportunities to learn.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Quality Learning (SDG 4.6 & 4.7):</span>
              <ul className="list-disc pl-6">
                <li>Offering life skills, literacy, and numeracy education.</li>
                <li>Promoting values of equality, sustainability, and responsible citizenship.</li>
              </ul>
            </li>
          </ol>
          <h4 className="font-bold mt-4 mb-2" style={{ color: "#11616f" }}>
            Broader Impact:
          </h4>
          <p>
            By empowering children with education, we are not only fulfilling SDG 4 but also contributing indirectly to other goals like SDG 1 (No Poverty), SDG 5 (Gender Equality), and SDG 8 (Decent Work & Economic Growth).
          </p>
        </div>
      </section>

      {/* Our Founder's Journey */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: "#11616f" }}>
          “Our Founder’s Journey”
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#ff6d4d" }}>
              The Vision Behind Navv Khush Helping Foundation
            </h3>
            <div className="text-lg space-y-4" style={{ color: "#11616f" }}>
              <p>
                Kavita Rawat, the Founder of Navv Khush Helping Foundation, has been passionately working for society since 2005 in various fields of social development. With every step of her journey, she realized one truth very deeply – education is the most powerful tool to change lives and build a safe society.
              </p>
              <p>
                Her social work journey formally began in 2020, when she registered her first NGO – Crime Control & Social Development Organisation (CCSDO). The core idea was clear: unless society is developed socially, crime can never truly be reduced. But as her work expanded, one realization stood out – lack of education is the root cause of many social issues and even crimes.
              </p>
              <p>
                This strong belief gave birth to Navv Khush Helping Foundation, registered in 2023 as a Section 8 Company. Today, the foundation is 2 years old, built on her vision that “Education secures both our present and our future.”
              </p>
              <p>
                Kavita Rawat has always wanted to dedicate her life to society’s welfare. Navv Khush Helping Foundation is her way of turning that lifelong dream into reality – by ensuring every child gets the right to quality education and by empowering communities through learning.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8 md:mt-0">
            <div
              className="rounded-lg shadow-lg flex flex-col items-center justify-center animate-float"
              style={{
                background: "linear-gradient(135deg, #11616f22 0%, #ff6d4d22 100%)",
              }}
            >
              <img
                src="/image/About.jpg"
                alt="NavKhush Helping Foundation"
                className="w-100 h-100 object-cover rounded-lg mb-4 shadow-md"
              />
              <div className="text-center" style={{ color: "#11616f" }}>
                <p className="text-2xl font-bold mb-4" style={{ color: "#11616f" }}>
                  KAVITA RAWAT
                </p>
                <p className="font-semibold mb-4" style={{ color: "#ff6d4d" }}>
                  Founder & Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold mb-4" style={{ color: "#ff6d4d" }}>
          Vision – NavvKhush Helping Foundation
        </h3>
        <div className="text-lg space-y-4" style={{ color: "#11616f" }}>
          <p>
            At Navv Khush Helping Foundation, our vision is simple yet powerful –
          </p>
          <blockquote className="italic border-l-4 pl-4" style={{ borderColor: "#ff6d4d" }}>
            “Education for Every Child, Dreams Fulfilled for Every Parent.”
          </blockquote>
          <p>
            We believe that if a child is deprived of education, then a parent’s dream not only remains unfulfilled but also unseen. Education is the strongest right of every child – recognized by our government, protected by law, and essential for life. Yet, millions still remain without access.
          </p>
          <p>
            Our mission is to change this reality. We are committed to creating a society where no one can ever say, “I was denied education.” We dream of a nation where every child learns, every family flourishes, and every dream finds its wings.
          </p>
          <p>
            Navv Khush Helping Foundation is driving a movement to make India a land where education is universal, inclusive, and free – because only through education can we truly call our nation developed, empowered, and just.
          </p>
        </div>
      </section>

      {/* Partners */}
      {/* <section style={{ background: "#f0f8fa" }} className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-start mb-6 uppercase">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "#11616f" }}>
              Our Partners
            </h2>
          </div>
          <br />
          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex gap-8">
              <img src="/image/Munjal-Showa-Limited.jpg" alt="Munjal Showa" className="h-12" />
              <img src="/image/Honda.png" alt="Honda" className="h-12" />
            </div>
            <div className="flex gap-8">
              <img src="/image/jsl.png" alt="jsl" className="h-8" />
              <img src="/image/hero.svg" alt="hero" className="h-12" />
            </div>
            <div className="flex gap-8">
              <img src="/image/shivam.jpg" alt="Shivam Autotech" className="h-12" />
              <img src="/image/ag-indus-logo.png" alt="AG Industries" className="h-10" />
            </div>
          </div>
        </div>
      </section> */}

      {/* Advisory Board Members */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-start mb-6 uppercase">
          <h2 className="text-3xl font-bold mb-3" style={{ color: "#11616f" }}>
            Advisory Board Members
          </h2>
        </div>
        <br />
        <div className="grid md:grid-cols-3 gap-6">
          {advisoryBoardMembers.map((member) => (
            <div
              key={member.key}
              className="bg-white p-6 shadow rounded-lg text-center"
              style={{ border: "1px solid #11616f22" }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto object-cover mb-2"
                style={{ background: "#f3f4f6" }}
              />
              <h4 className="mt-4 font-bold" style={{ color: "#11616f" }}>
                {member.name}
              </h4>
              <p className="text-sm mt-2 mb-2" style={{ color: "#ff6d4d" }}>
                {member.designation}
              </p>
              <button
                className="mt-2 inline-block px-2 py-1 rounded-sm transition-colors"
                style={{
                  background: "#11616f",
                  color: "#fff",
                  border: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => handleReadMore(member.profileLink)}
                type="button"
                onMouseOver={e => (e.currentTarget.style.background = "#ff6d4d")}
                onMouseOut={e => (e.currentTarget.style.background = "#11616f")}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
