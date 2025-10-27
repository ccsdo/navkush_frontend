// import { set } from 'mongoose';
import React, { useState, useEffect} from "react";
// import { useEffect } from 'react';

// Main App component for the support page
export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [custome, setcustome] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [formData, setFormData] = useState({});
  // console.log("modalContent", modalContent);
  const [FormType, setFormType] = useState(""); // 'donation', 'volunteer', 'partnership', 'contact'
  const [complete, setcomplete] = useState(false);
// const isFirstRender = useRef(true);
  useEffect(() => {
     
      
    const sendFormData = async (form) => {
      // console.log(form)
      if (form == "donation") form = "donationsupport";
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/v1/v2/vz/api/forms/${form}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        const data = await res.json();

        //  console.log("Response data:", data);

        if (!res.ok) {
          let errorMessage = "Something went wrong";

          if (data?.error?.name === "ZodError" && data?.error?.message) {
            try {
              const parsedErrors = JSON.parse(data.error.message);
              // Extract all Zod messages
              errorMessage = parsedErrors.map((err) => err.message).join("\n");
            } catch (e) {
              errorMessage = data.error.message;
            }
          } else if (data?.message) {
            errorMessage = data.message;
          }

          alert(errorMessage);
          throw new Error(errorMessage);
        }
        setcomplete(true);
        // console.log("Form submitted successfully:", data);
        // setShowModal(true);
      } catch (err) {
        // console.log("catch"+err);
        console.error("Error sending form data:", err);
        alert("Error: " + (err.message || "Unable to process donation"));
      }
    };
    // console.log("formdata", formdata);
    // if(formdata.name && formdata.email && formdata.phone && formdata.panNo && formdata.address && formdata.city && formdata.state && formdata.pincode && formdata.dob)
 if(formData.email) sendFormData(FormType);
  }, [formData]);

  // Styles defined as JavaScript objects for use in JSX
  const styles = {
    gradientBg: {
      background: "linear-gradient(135deg, #11616f 0%, #ff6d4d 100%)",
    },
    supportCardHover: {
      transition: "all 0.3s ease",
    },
    btnPrimary: {
      background: "linear-gradient(to right, #11616f, #ff6d4d)",
      transition: "all 0.3s ease",
    },
    volunteerFormBg: {
      background:
        "linear-gradient(135deg, rgba(17, 97, 111, 0.05) 0%, rgba(255, 109, 77, 0.05) 100%)",
    },
    headingColor: {
      color: "#11616f",
    },
  };

  // Function to show a modal with specific content
  const showForm = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setSubmissionMessage("");
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Generic form submission handler
  const handleFormSubmit = (e, formType) => {
    setFormType(formType);
    e.preventDefault();
    const formData1 = new FormData(e.target);
    const data = Object.fromEntries(formData1.entries());
    
    if(formType === "volunteer"){
      data.age= Number(data.age);
    }
    setFormData(data);
    // sendFormData(formType);
    // console.log(data); 

    let message = "";
    switch (formType) {
      case "donation":
        message = `Thank you, ${data.name}! Your donation request has been received. We'll contact you shortly to complete the donation process.`;
        break;
      case "volunteer":
        message = `Thank you, ${data.name}! Your volunteer application has been submitted. Our team will review it and get back to you within 3-5 business days.`;
        break;
      case "partnership":
        message = `Thank you for your interest in partnering with us! We've received your request from ${data.company} and will contact you within 2-3 business days to discuss opportunities.`;
        break;
      case "contact":
        message = `Thank you, ${data.name}! Your message has been received. We'll respond to your inquiry within 24-48 hours.`;
        break;
      default:
        message = "Form submitted successfully!";
    }

    setSubmissionMessage(message);
    setcustome(false);
    e.target.reset(); // Reset form
  };

  // Form components (could be moved to separate files in a larger app)
  const DonationForm = () => {
    const customehandle = (e) => {
      if (e.target.value === "custom") {
        setcustome(true);
      }
    };
    return (
      <form
        className="space-y-4"
        onSubmit={(e) => handleFormSubmit(e, "donation")}
      >
        {/* Form fields here */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Donation Amount *
            </label>
            <select
              name="amount"
              required
              onChange={customehandle}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Amount</option>
              <option value="500">₹500 - Educate 1 child for 3 months</option>
              <option value="1500">
                ₹1,500 - School supplies for 10 children
              </option>
              <option value="5000">₹5,000 - Community workshop</option>
              <option value="custom">Custom Amount</option>
            </select>
          </div>
        </div>
        {custome && (
          <input
            type="number"
            name="customAmount"
            placeholder="Enter custom amount"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        )}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Message (Optional)
          </label>
          <textarea
            name="message"
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          style={styles.btnPrimary}
          className="text-white px-8 py-3 rounded-full font-semibold w-full"
        >
          Proceed to Donation
        </button>
      </form>
    );
  };

  const VolunteerForm = () => (
    <form
      className="space-y-4"
      onSubmit={(e) => handleFormSubmit(e, "volunteer")}
    >
      {/* Form fields here */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Age *
          </label>
          <input
            type="number"
            name="age"
            min="18"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Areas of Interest *
        </label>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="interests"
              value="teaching"
              className="mr-2"
            />{" "}
            Teaching & Mentoring 
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="interests"
              value="events"
              className="mr-2"
            />{" "}
            Event Organization 
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="interests"
              value="marketing"
              className="mr-2"
            />{" "}
            Social Media & Marketing
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="interests"
              value="fieldwork"
              className="mr-2"
            />{" "}
            Field Work & Surveys
          </label>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Skills & Experience *
        </label>
        <textarea
          name="skills"
          rows="3"
          placeholder="Tell us about your relevant skills and experience..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Availability *
        </label>
        <select
          name="availability"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Availability</option>
          <option value="weekends">Weekends Only</option>
          <option value="weekdays">Weekdays</option>
          <option value="flexible">Flexible</option>
          <option value="events">Events Only</option>
        </select>
      </div>
      <button
        type="submit"
        style={styles.btnPrimary}
        className="text-white px-8 py-3 rounded-full font-semibold w-full"
      >
        Submit Application
      </button>
    </form>
  );

  const PartnershipForm = () => (
    <form
      className="space-y-4"
      onSubmit={(e) => handleFormSubmit(e, "partnership")}
    >
      {/* Form fields here */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            name="company"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Contact Person *
          </label>
          <input
            type="text"
            name="contact_person"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Partnership Interest *
        </label>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="partnership_type"
              value="employee_volunteer"
              className="mr-2"
            />{" "}
            Employee Volunteer Programs
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="partnership_type"
              value="skill_based"
              className="mr-2"
            />{" "}
            Skill-based Partnerships
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="partnership_type"
              value="funding"
              className="mr-2"
            />{" "}
            Project Funding
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="partnership_type"
              value="long_term"
              className="mr-2"
            />{" "}
            Long-term Collaboration
          </label>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Company Size
        </label>
        <select
          name="company_size"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Company Size</option>
          <option value="startup">Startup (1-50 employees)</option>
          <option value="medium">Medium (51-500 employees)</option>
          <option value="large">Large (500+ employees)</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows="4"
          placeholder="Tell us about your CSR goals and how you'd like to partner with us..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        style={styles.btnPrimary}
        className="text-white px-8 py-3 rounded-full font-semibold w-full"
      >
        Submit Partnership Request
      </button>
    </form>
  );

  const ContactForm = () => (
    <form
      className="space-y-4"
      onSubmit={(e) => handleFormSubmit(e, "contact")}
    >
      {/* Form fields here */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Subject *
        </label>
        <select
          name="subject"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Subject</option>
          <option value="general">General Inquiry</option>
          <option value="volunteer">Volunteer Opportunities</option>
          <option value="donation">Donation Information</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          name="message"
          rows="4"
          required
          placeholder="How can we help you?"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        style={styles.btnPrimary}
        className="text-white px-8 py-3 rounded-full font-semibold w-full"
      >
        Send Message
      </button>
    </form>
  );

  // Conditional rendering for the modal content
  const renderModalContent = () => {
    if (submissionMessage && complete) {
      // console.log("complete", complete);
      return (
        <div className="text-center p-8">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">
            {modalTitle}
          </h4>
          <p className="text-lg text-gray-600 mb-6">{submissionMessage}</p>
          <button
            onClick={closeModal}
            className="btn-primary text-white px-8 py-3 rounded-full font-semibold"
            style={styles.btnPrimary}
          >
            Close
          </button>
        </div>
      );
    }
    switch (modalTitle) {
      case "Make a Donation":
        return <DonationForm />;
      case "Join as Volunteer":
        return <VolunteerForm />;
      case "Corporate Partnership":
        return <PartnershipForm />;
      case "Get in Touch":
        return <ContactForm />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header Section */}
      <section className="text-white py-16" style={styles.gradientBg}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Support Our Work</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us in creating lasting change. Every contribution, big or
            small, helps us build a safer, empowered, and sustainable society.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              {/* Note: The original HTML used a CSS animation for this counter. */}
              {/* In a real React app, you might use a library like react-spring or Framer Motion for animations. */}
              <div className="text-4xl font-bold impact-counter">2,500+</div>
              <p className="text-lg">Children Educated</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold impact-counter">50+</div>
              <p className="text-lg">Communities Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold impact-counter">4</div>
              <p className="text-lg">Years of Impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Ways to Support
            </h2>
            <p className="text-xl text-gray-600">
              Choose how you'd like to make a difference
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Donate Money Card */}
            <div className="support-card bg-white rounded-2xl p-8 shadow-lg text-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={styles.gradientBg}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={styles.headingColor}
              >
                Donate Money
              </h3>
              <p className="text-gray-600 mb-6">
                Your financial contribution directly supports our education
                programs, community initiatives, and sustainable development
                projects.
              </p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li>• ₹500 - Educates 1 child for 3 months</li>
                <li>• ₹1,500 - Provides school supplies for 10 children</li>
                <li>• ₹5,000 - Supports a community workshop</li>
              </ul>
              <button
                className="text-white px-8 py-3 rounded-full font-semibold w-full transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                style={styles.btnPrimary}
                onClick={() => showForm("Make a Donation", <DonationForm />)}
              >
                Donate Now
              </button>
            </div>
            {/* Volunteer Card */}
            <div className="support-card bg-white rounded-2xl p-8 shadow-lg text-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={styles.gradientBg}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 14.5V22h2v-6h2l2-6 2 6h2v6h4z" />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={styles.headingColor}
              >
                Volunteer
              </h3>
              <p className="text-gray-600 mb-6">
                Share your time, skills, and passion. Join our team of dedicated
                volunteers making a direct impact in communities.
              </p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li>• Teaching and mentoring</li>
                <li>• Event organization</li>
                <li>• Social media and marketing</li>
                <li>• Field work and surveys</li>
              </ul>
              <button
                className="text-white px-8 py-3 rounded-full font-semibold w-full transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                style={styles.btnPrimary}
                onClick={() => showForm("Join as Volunteer", <VolunteerForm />)}
              >
                Join as Volunteer
              </button>
            </div>
            {/* Corporate Partnership Card */}
            <div className="support-card bg-white rounded-2xl p-8 shadow-lg text-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={styles.gradientBg}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={styles.headingColor}
              >
                Corporate Partnership
              </h3>
              <p className="text-gray-600 mb-6">
                Partner with us for CSR initiatives. Create meaningful impact
                while fulfilling your corporate social responsibility goals.
              </p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li>• Employee volunteer programs</li>
                <li>• Skill-based partnerships</li>
                <li>• Funding specific projects</li>
                <li>• Long-term collaborations</li>
              </ul>
              <button
                className="text-white px-8 py-3 rounded-full font-semibold w-full transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                style={styles.btnPrimary}
                onClick={() =>
                  showForm("Corporate Partnership", <PartnershipForm />)
                }
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Other Ways to Help
            </h2>
            <p className="text-xl text-gray-600">
              Every action counts in creating positive change
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Share Our Story Card */}
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Share Our Story</h4>
              <p className="text-sm text-gray-600">
                Spread awareness about our work on social media and with friends
              </p>
            </div>
            {/* Attend Events Card */}
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H18V1h-2v1H8V1H6v1H4.5C3.67 2 3 2.67 3 3.5v15C3 19.33 3.67 20 4.5 20h15c.83 0 1.5-.67 1.5-1.5v-15C21 2.67 20.33 2 19.5 2z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Attend Events</h4>
              <p className="text-sm text-gray-600">
                Join our fundraising events, workshops, and community gatherings
              </p>
            </div>
            {/* Skill Donation Card */}
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Skill Donation</h4>
              <p className="text-sm text-gray-600">
                Offer professional services like design, legal advice, or
                consulting
              </p>
            </div>
            {/* Monthly Giving Card */}
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Monthly Giving</h4>
              <p className="text-sm text-gray-600">
                Set up recurring donations for sustained impact over time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us to learn more about how you can support our mission and
            create lasting change in communities.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div
                className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={styles.gradientBg}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="text-gray-600">info@navvkhush.org</p>
            </div>
            <div className="text-center">
              <div
                className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={styles.gradientBg}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
            <div className="text-center">
              <div
                className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={styles.gradientBg}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Visit Us</h4>
              <p className="text-gray-600">New Delhi, India</p>
            </div>
          </div>
          <button
            className="text-white px-8 py-4 rounded-full font-semibold text-lg transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            style={styles.btnPrimary}
            onClick={() => showForm("Get in Touch", <ContactForm />)}
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* Modal Overlay and Content */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold" style={styles.headingColor}>
                  {modalTitle}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                </button>
              </div>
              <div>{renderModalContent()}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// NOTE: Add this to your index.js or main entry point
// import ReactDOM from 'react-dom/client';
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
