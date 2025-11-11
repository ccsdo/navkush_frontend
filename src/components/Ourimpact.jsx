import React from "react";

const impactData = [
  {
    number: "22,63,435",
    text: "children impacted overall",
    icon: "/icons/child-impact.png",
  },
  {
    number: "95%",
    text: "children in Navvkhushhelping project areas, between the ages of 6–18 years, in school\n*In the 15–18 age group, our enrolment and retention rate is 18% better than the all India enrolment status – GER. (based on the UDISE+ 2023-24 report)",
    icon: "/icons/school.png",
  },
  {
    number: "98%",
    text: "children in Navvkhushhelping project areas, under the age of 5 years, protected from undernourishment\n*Only 2% children in Navvkhushhelping project areas are underweight, as compared to 32% all India status as per NFHS 5",
    icon: "/icons/health.png",
  },
  {
    number: "99%",
    text: "of adolescent girls, in CRY project areas, between 11–18 years, protected from child marriage",
    icon: "/icons/child-labour.png",
  },
  {
    number: "85%",
    text: "children, in Navvkhushhelping project areas, between the ages of 6–18 years, protected from child labour",
    icon: "/icons/health.png",
  },
];

export default function ImpactSection() {
  return (
    <section className="bg-[#fffdf8] py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-center text-2xl font-semibold mb-12">
          <span style={{ color: "#11616f" }}>Our</span>{" "}
          <span style={{ color: "#ff6d4d" }}>Impact</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {impactData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 text-center relative"
            >
              {/* Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-100 rounded-full p-3">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* Number */}
              <h3
                className="text-2xl font-bold mt-8"
                style={{ color: "#11616f" }}
              >
                {item.number}
              </h3>
              {/* Text */}
              <p
                className="mt-2 whitespace-pre-line"
                style={{ color: "#6b7280" }} // Tailwind's gray-600
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
