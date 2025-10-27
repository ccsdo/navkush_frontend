import React from "react";

export default function SponsoredEducation() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-[#11616f] py-8 text-center">
        <h1 className="text-2xl md:text-3xl font-medium text-white">
          Sponsored The Education Of 87 Underprivileged Children
        </h1>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <p className="text-[#11616f] leading-relaxed mb-6">
          We are proud to announce that we have sponsored the education of 87 underprivileged children, providing
          them with the opportunity to access quality education and unlock their full potential. Through this
          sponsorship, these children now have the chance to pursue their dreams, overcome barriers, and build a
          brighter future for themselves.
        </p>

        <p className="text-[#11616f] leading-relaxed mb-6">
          Education is a powerful tool for breaking the cycle of poverty, and it firmly believes that it is key to
          empowering individuals and transforming communities. By supporting these children in their educational
          journey, we are giving them the opportunity to acquire the knowledge and skills they need to thrive and
          succeed in life.
        </p>

        <p className="text-[#11616f] leading-relaxed mb-6">
          Our commitment to sponsoring education is not just about funding fees—it’s about creating lasting
          change. Through this initiative, we are not only making a meaningful difference in the lives of these
          young learners but also contributing to the development of more educated, confident, and capable
          individuals, who can become active contributors to their communities and our broader society.
        </p>
        <p className="text-[#11616f] leading-relaxed mb-6">
          The education of 87 underprivileged children, who are determined to rise beyond their circumstances,
          represents the core essentials of capacity and opens opportunities for a better life. This project is a
          testament to the power of education in transforming lives and fostering hope for a brighter tomorrow. We
          remain committed to making a positive impact and ensuring every child has the chance to achieve their
          full potential.
        </p>
        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <img src="/image/sponsored 1.jpg" alt="Sponsored child 1" className="rounded-lg shadow-md w-full border-2 border-[#11616f]" />
          <img src="/image/sponsored 2.jpg" alt="Sponsored child 2" className="rounded-lg shadow-md w-full border-2 border-[#11616f]" />
          <img src="/image/sponsored 3.jpg" alt="Sponsored child 3" className="rounded-lg shadow-md w-full border-2 border-[#11616f]" />
          <img src="/image/sponsored 4.jpg" alt="Sponsored child 4" className="rounded-lg shadow-md w-full border-2 border-[#11616f]" />
          <img src="/image/sponsored 5.jpg" alt="Sponsored child 5" className="rounded-lg shadow-md w-full border-2 border-[#11616f]" />
          <img src="/image/sponsored 6.jpg" alt="Sponsored child 6" className="rounded-lg shadow-md w-full border-2 border-[#11616f]" />
          <img src="/image/sponsored 7.jpg" alt="Sponsored child 7" className="rounded-lg shadow-md w-full border-2 border-[#11616f]" />
          <img src="/image/sponsored 8.jpg" alt="Sponsored child 8" className="rounded-lg shadow-md w-full border-2 border-[#11616f]" />
          <img src="/image/sponsored 9.jpg" alt="Sponsored child 9" className="rounded-lg shadow-md w-full border-2 border-[#11616f]" />
        </div>
      </section>
    </div>
  );
}
