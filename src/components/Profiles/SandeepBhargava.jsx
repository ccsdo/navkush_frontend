import React from "react";

const SandeepBhargavaProfile = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
            <div class="highlight-box rounded-lg px-8 py-6 mb-8 card-shadow text-center bg-[#11616f]">
                <h2 class="text-3xl md:text-4xl font-bold text-white text-shadow">Mr. Sandeep Bhargava</h2>
            </div>

        {/* Bio */}
        <div className="mt-6 text-gray-800 leading-relaxed text-sm md:text-base space-y-4">
          <p>
            BE, MBA, with more than 40 years of National and International
            experience in Corporate Affairs and Public Policy, Government
            Affairs, Enterprise Sales, and Program Management.
          </p>

          <h3 className="font-semibold text-lg">Corporate Career</h3>
          <p>
            Major companies worked in India and Europe include Vodafone Idea
            Limited, Microsoft Corp, Nokia India, Nokia Siemens Networks, and
            Hughes India.
          </p>
          <p>
            Currently serving as Senior Advisor at Telecom and Digital Health
            Companies, and actively involved as an investor and mentor at
            various startups.
          </p>

          <h3 className="font-semibold text-lg">Social Sector Involvement</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              Member, Advisory Board of Sarthak since its inception.
            </li>
            <li>
              Vice President, National Abylimpics Association of India.
            </li>
            <li>
              Advisory Board Member, Aambra Foundation.
            </li>
            <li>
              Advisory Board Member, Samaagra Foundation.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SandeepBhargavaProfile;
