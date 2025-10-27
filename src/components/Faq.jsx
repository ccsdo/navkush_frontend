import React, { useState } from 'react';

// Updated FAQ data, organized into sections, including Programs FAQs.
const faqData = {
  general: {
    title: "General Information",
    questions: [
      {
        question: "What is Navvkhush Helping Foundation?",
        answer:
          "Navvkhush Helping Foundation is a non-profit organization working to provide quality education and holistic learning opportunities for underprivileged children in India.",
      },
      {
        question: "When was your NGO established?",
        answer:
          "Navvkhush Helping Foundation was established in 2023 with the mission to provide quality education and equal opportunities for underprivileged children.",
      },
      {
        question: "What is your main mission?",
        answer:
          "Our mission is to ensure that every child, regardless of their background, gets the right to education, practical learning, and life skills to build a brighter future.",
      },
      {
        question: "Where are you located?",
        answer:
          "Our head office is located at:<br/>Building No A1, 3rd Floor, Acharya Niketan Market, Mayur Vihar Phase -1, Delhi - 110091<br/>We operate in Delhi-NCR, Uttar Pradesh, and surrounding areas.",
      },
      {
        question: "What kind of work do you do?",
        answer:
          "We run free learning programs, provide school supplies, conduct workshops, and focus on activity-based education. Our work includes literacy, digital learning, creative skills, and awareness programs for parents.",
      },
      {
        question: "Can individuals join or volunteer?",
        answer:
          "Yes. Anyone passionate about child education can join as a volunteer, mentor, or supporter. Volunteers play a key role in teaching, mentoring, and spreading awareness.",
      },
      {
        question: "How can companies or CSR partners collaborate?",
        answer:
          "Currently, we are not registered for CSR funding. However, organizations, schools, and institutions can collaborate with us through school partnerships, institutional support, and joint initiatives to expand our education programs and reach more children in need.",
      },
      {
        question: "How are your funds utilized?",
        answer:
          "Funds are used for providing books, stationery, uniforms, digital tools, setting up learning spaces, and running educational workshops for children. Transparency and accountability are maintained at every step.",
      },
      {
        question: "Do you provide project reports to donors?",
        answer:
          "Yes. We share regular reports, updates, and success stories with our donors and partners to ensure complete transparency about the impact of their contributions.",
      },
      {
        question: "How can I contact your team?",
        answer:
          "You can contact us through the official website, email, or visit our office. Our team is always ready to connect with donors, volunteers, and partners.",
      },
    ],
  },
  donation: {
    title: "Donation Information",
    questions: [
      {
        question: "How can I donate to Navvkhush Helping Foundation?",
        answer:
          "You can donate through our official website, bank transfer, UPI, or by contacting us directly for offline contributions.",
      },
      {
        question: "Are donations tax-deductible?",
        answer:
          "Currently, we are in the process of applying for 80G/12A certification. Once approved, we will provide tax exemption benefits for donors.",
      },
      {
        question: "Can I donate in-kind items instead of money?",
        answer:
          "Yes! We accept useful in-kind donations such as books, stationery, toys, clothes, or educational materials for children.",
      },
      {
        question: "Will I get a receipt for my donation?",
        answer:
          "Yes, we provide an acknowledgment receipt for every donation, whether monetary or in-kind.",
      },
      {
        question: "How will my donation be used?",
        answer:
          "All donations go directly towards our child education programs, including school kits, awareness workshops, first-aid seva, and other initiatives to support underprivileged children.",
      },
      {
        question: "Can I sponsor a child’s education?",
        answer:
          "Yes, we offer child sponsorship programs where you can directly support a child’s educational needs. Please contact us for details.",
      },
      {
        question: "Can I donate monthly or set up recurring contributions?",
        answer:
          "Yes, we encourage monthly giving as it helps us plan long-term educational initiatives more effectively.",
      },
      {
        question: "Do you accept international donations?",
        answer:
          "At present, we are only able to accept donations within India. We will expand to international contributions once our FCRA approval is in place.",
      },
      {
        question: "Can I see the impact of my donation?",
        answer:
          "Absolutely! We share updates, photos, and reports with our donors, so you know how your contribution is creating real change in children’s lives.",
      },
    ],
  },
  volunteer: {
    title: "Volunteer Information",
    questions: [
      {
        question: "How can I volunteer with Navvkhush Helping Foundation?",
        answer:
          "You can apply through our website’s volunteer section or contact us directly. Once you share your interest, our team will connect with you for the next steps.",
      },
      {
        question: "What kind of volunteer opportunities are available?",
        answer:
          "We offer various opportunities including teaching support, event management, content creation, social media promotion, fundraising, and community outreach.",
      },
      {
        question: "Do I need to be from an educational background to volunteer?",
        answer:
          "No, anyone with a passion for helping children and supporting education can volunteer. We provide guidance and assign roles based on your skills and interest.",
      },
      {
        question: "Is there a minimum time commitment required?",
        answer:
          "We encourage volunteers to dedicate at least a few hours a week or support during special campaigns. Flexible options are available based on your availability.",
      },
      {
        question: "Can students volunteer?",
        answer:
          "Yes, students are welcome to volunteer with us. Volunteering with Navvkhush Helping Foundation also helps in gaining valuable experience, certificates, and community exposure.",
      },
      {
        question: "Will I receive a certificate for volunteering?",
        answer:
          "Yes, all active volunteers are provided with a certificate recognizing their contribution.",
      },
      {
        question: "Can I volunteer online/remotely?",
        answer:
          "Yes, you can support us through online volunteering such as creating awareness, designing content, handling social media, or helping with research and fundraising.",
      },
      {
        question: "Do you accept corporate volunteering?",
        answer:
          "Yes, we welcome corporate teams and groups to collaborate in our initiatives, school programs, and awareness campaigns.",
      },
      {
        question: "How do I know about upcoming volunteering opportunities?",
        answer:
          "We update our website and social media regularly with new volunteering opportunities. Registered volunteers also receive email/WhatsApp updates.",
      },
      {
        question: "Can I suggest new ideas or activities as a volunteer?",
        answer:
          "Absolutely! We encourage creative suggestions and welcome innovative ways to make education more engaging for children.",
      },
    ],
  },
  programs: {
    title: "Programs Information",
    questions: [
      {
        question: "What kind of programs does Navvkhush Helping Foundation run?",
        answer:
          "We run child education programs including basic literacy, digital learning, extracurricular activities, awareness workshops, and skill-based initiatives to support holistic child development.",
      },
      {
        question: "Who can participate in these programs?",
        answer:
          "Our programs are primarily designed for underprivileged children between the ages of 5 to 15 years. However, some awareness programs also include parents, teachers, and community members.",
      },
      {
        question: "Are the programs free of cost for children?",
        answer:
          "Yes. Most of our child education and awareness programs are 100% free for the public, especially for underprivileged children and communities. However, some special skill-based trainings or workshops may include a small registration fee to cover basic costs.",
      },
      {
        question: "Where are the programs conducted?",
        answer:
          "Our programs are conducted in schools, community centers, slum areas, and other child-friendly spaces. We also organize online sessions when required.",
      },
      {
        question: "How do you decide which programs to run?",
        answer:
          "We assess community needs, interact with children and families, and design programs that best address the gaps in education and overall development.",
      },
      {
        question: "Do you provide digital learning opportunities?",
        answer:
          "Yes, we promote digital education through e-learning resources, computer awareness sessions, and interactive activities.",
      },
      {
        question: "Can parents be involved in these programs?",
        answer:
          "Yes, we involve parents through awareness sessions on health, education, and child rights to ensure they actively support their child’s learning journey.",
      },
      {
        question: "Do you focus only on academics?",
        answer:
          "No, along with academics we emphasize creativity, extracurricular activities, awareness about hygiene, life skills, and value-based learning.",
      },
      {
        question: "Are there special programs for girls?",
        answer:
          "Yes, we focus on empowering girls through education, skill-building, and awareness programs on health, safety, and rights.",
      },
      {
        question: "How can someone support these programs?",
        answer:
          "You can support our programs by volunteering your time, donating educational materials, sponsoring a child’s education, or contributing financially.",
      },
    ],
  },
};

const tabOrder = [
  { key: 'general', label: 'General FAQs' },
  { key: 'donation', label: 'Donation FAQs' },
  { key: 'volunteer', label: 'Volunteer FAQs' },
  { key: 'programs', label: 'Programs FAQs' },
];

const PRIMARY_COLOR = "#11616f";
const ACCENT_COLOR = "#ff6d4d";

const Faq = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('general');
  // State to manage which FAQ item is expanded in each section
  const [activeFaq, setActiveFaq] = useState({});

  // Function to handle tab changes
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Reset the active FAQ state when switching tabs
    setActiveFaq({});
  };

  // Function to handle FAQ item clicks (accordion toggle)
  const handleFaqClick = (index) => {
    setActiveFaq((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
      <style>{`
        body { font-family: 'Inter', sans-serif; }
        .gradient-bg { background: linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${ACCENT_COLOR} 100%); }
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
        .faq-item { transition: all 0.3s ease; }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
        .faq-item.active .faq-answer { max-height: 500px; }
        .faq-item.active .rotate-icon { transform: rotate(180deg); }
        .rotate-icon { transition: transform 0.3s ease; }
        .tab-btn.active, .tab-btn:focus { outline: none; }
        .tab-btn.active {
          background: ${PRIMARY_COLOR};
          color: #fff;
        }
        .tab-btn:not(.active):hover {
          background: #f3f4f6;
          color: ${PRIMARY_COLOR};
        }
        .faq-item .faq-question {
          color: ${PRIMARY_COLOR};
        }
        .faq-item.active .faq-question {
          color: ${ACCENT_COLOR};
        }
        .faq-item .rotate-icon {
          color: ${PRIMARY_COLOR};
        }
        .faq-item.active .rotate-icon {
          color: ${ACCENT_COLOR};
        }
        .faq-item .faq-answer p {
          color: #374151;
        }
        /* Make tab button size bigger */
        .tab-btn {
          padding-left: 1.25rem !important;   /* px-5 */
          padding-right: 1.25rem !important;
          padding-top: 0.6rem !important;     /* py-2.5 */
          padding-bottom: 0.6rem !important;
          font-size: 1.05rem !important;
          margin-right: 0.6rem !important;   /* Add horizontal gap between buttons */
          margin-bottom: 0.6rem !important;  /* Add vertical gap for mobile */
          min-height: 2.5rem !important;
          min-width: 4.5rem !important;
        }
        .tab-btn:last-child {
          margin-right: 0 !important;
        }
        @media (min-width: 640px) {
          /* On sm and up, remove vertical gap and use only horizontal gap */
          .tab-btn {
            margin-bottom: 0 !important;
          }
        }
        /* On mobile, stack buttons and add vertical gap */
        @media (max-width: 639px) {
          .faq-tabs-flex {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .tab-btn {
            width: 100% !important;
            margin-right: 0 !important;
          }
        }
      `}</style>
      <div className="bg-gray-50 min-h-screen">
        {/* Header Section */}
        <header className="gradient-bg text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Find answers to common questions about Navvkhush Helping Foundation
            </p>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center py-4 faq-tabs-flex">
              {tabOrder.map((tab, idx) => (
                <button
                  key={tab.key}
                  onClick={() => handleTabClick(tab.key)}
                  className={`tab-btn rounded-lg font-medium transition-all ${
                    activeTab === tab.key
                      ? 'active'
                      : ''
                  }`}
                  style={
                    activeTab === tab.key
                      ? {
                          background: PRIMARY_COLOR,
                          color: "#fff",
                        }
                      : {
                          color: PRIMARY_COLOR,
                          border: `1px solid ${PRIMARY_COLOR}`,
                          background: "#fff",
                        }
                  }
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 card-hover">
              {/* Display section title based on active tab */}
              <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: PRIMARY_COLOR }}>
                {faqData[activeTab].title}
              </h2>
              <div className="space-y-4">
                {/* Dynamically render FAQ items for the active tab */}
                {faqData[activeTab].questions.map((faq, index) => (
                  <div
                    key={index}
                    className={`faq-item border-b border-gray-200 pb-4 ${
                      activeFaq[index] ? 'active' : ''
                    }`}
                  >
                    <button
                      onClick={() => handleFaqClick(index)}
                      className="w-full text-left flex justify-between items-center py-4 focus:outline-none"
                    >
                      <h3
                        className="text-lg font-semibold faq-question"
                      >
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-5 h-5 rotate-icon ${
                          activeFaq[index] ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    {/* The dangerouslySetInnerHTML is used to render the HTML from the data object. */}
                    <div className="faq-answer">
                      <p
                        className="pb-4"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      ></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
