import React, { useState } from "react";

const jobList = [
  {
    title: "Program Coordinator",
    location: "Gurugram, Haryana",
    description:
      "Coordinate and implement educational and skill development programs, manage volunteers, and ensure smooth execution of field activities.",
    requirements: [
      "Graduate degree in Social Work/Education or related field",
      "Excellent communication and organizational skills",
      "Passion for social impact",
    ],
    mailSubject: "Application for Program Coordinator",
  },
  {
    title: "Fundraising & Partnerships Manager",
    location: "Remote/Hybrid",
    description:
      "Lead fundraising initiatives, build partnerships with corporates and donors, and drive resource mobilization for our programs.",
    requirements: [
      "2+ years experience in fundraising or partnerships",
      "Strong networking and communication skills",
      "Self-motivated and target-driven",
    ],
    mailSubject: "Application for Fundraising Manager",
  },
];

const Career = () => {

  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowForm(true);
    setFormSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      resume: null,
    });
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedJob(null);
    setFormSubmitted(false);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
     const form = new FormData();

      // Append normal text fields
      Object.entries(formData).forEach(([key, value]) => {
        // console.log(form)
        form.append(key, value);
      });
    try{
  const res = await fetch(
        `${import.meta.env.VITE_API_URL}/v1/v2/vz/api/forms/career`,
        {
          method: "POST",
          body: form,
        }
      );
      
      const data = await res.json();
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
      console.log(formData)
      // console.log("Response:", data);
      alert("Form submitted successfully!");
      // console.log(form);
    }catch (error) {
      console.error(error);
      alert("Error submitting form");
      return;
    } 

    setFormSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen font-inter">
      <section className="relative py-20 bg-gradient-to-r from-[#11616f] to-[#ff6d4d] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 font-bigshouldersdisplay">
            Careers at NavvKhush Helping Foundation
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join our mission to empower women and children through education, healthcare, and skill development. Be a part of a passionate team making a real difference in communities across India.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#11616f]">Current Openings</h2>
          <p className="text-lg text-[#11616f]">
            We are always looking for dedicated individuals who want to create positive change. Explore our current opportunities below.
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-8">
          {jobList.map((job, idx) => (
            <div
              key={job.title}
              className="bg-[#f8fafc] rounded-xl shadow-md p-8 border-l-4 border-[#ff6d4d]"
            >
              <h3 className="text-2xl font-semibold text-[#11616f] mb-2">{job.title}</h3>
              <p className="text-[#11616f] mb-2">
                <span className="font-semibold">Location:</span> {job.location}
              </p>
              <p className="mb-4 text-[#11616f]">
                <span className="font-semibold">About the Role:</span> {job.description}
              </p>
              <ul className="list-disc pl-6 text-[#11616f] mb-4">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
              <button
                className="inline-block bg-[#ff6d4d] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#11616f] transition-colors"
                onClick={() => handleApplyClick(job)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* General Application */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#11616f] mb-2">Didn't find a suitable role?</h3>
          <p className="text-[#11616f] mb-4">
            We welcome passionate individuals to send their CVs for future opportunities.
          </p>
          <button
            onClick={()=>handleApplyClick("general")}
            className="inline-block bg-[#11616f] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#ff6d4d] transition-colors"
          >
            Send Your CV
          </button>
        </div>
      </section>

 {/* {general && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fade-in">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-[#ff6d4d] text-2xl font-bold"
              onClick={handleCloseForm}
              aria-label="Close"
            >
              &times;
            </button>
            {!formSubmitted ? (
              <>
                <h2 className="text-2xl font-bold mb-2 text-[#11616f]">
                  Send Us Your Resume
                </h2>
                <p className="mb-4 text-[#11616f]">{selectedJob?.location}</p>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[#11616f] font-semibold mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff6d4d]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#11616f] font-semibold mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff6d4d]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#11616f] font-semibold mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff6d4d]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#11616f] font-semibold mb-1">
                      Why do you want to join us?
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff6d4d]"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-[#11616f] font-semibold mb-1">
                      Upload Resume
                    </label>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleInputChange}
                      className="w-28 border cursor-pointer h-8"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#ff6d4d] text-white py-2 rounded-full font-semibold hover:bg-[#11616f] transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="flex justify-center mb-4">
                  <svg className="w-16 h-16 text-[#ff6d4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#11616f]">Thank You!</h3>
                <p className="text-[#11616f] mb-6">
                  Your application for <span className="font-semibold">{selectedJob?.title}</span> has been received.<br />
                  Our team will contact you soon.
                </p>
                <button
                  className="bg-[#ff6d4d] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#11616f] transition-colors"
                  onClick={handleCloseForm}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )} */}


      {/* Popup Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fade-in">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-[#ff6d4d] text-2xl font-bold"
              onClick={handleCloseForm}
              aria-label="Close"
            >
              &times;
            </button>
            {!formSubmitted ? (
              <>
                <h2 className="text-2xl font-bold mb-2 text-[#11616f]">
                  Apply for {selectedJob?.title}
                </h2>
                <p className="mb-4 text-[#11616f]">{selectedJob?.location}</p>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[#11616f] font-semibold mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff6d4d]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#11616f] font-semibold mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff6d4d]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#11616f] font-semibold mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff6d4d]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#11616f] font-semibold mb-1">
                      Why do you want to join us?
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff6d4d]"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-[#11616f] font-semibold mb-1">
                      Upload Resume
                    </label>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleInputChange}
                      className="w-28 border cursor-pointer h-8"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#ff6d4d] text-white py-2 rounded-full font-semibold hover:bg-[#11616f] transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="flex justify-center mb-4">
                  <svg className="w-16 h-16 text-[#ff6d4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#11616f]">Thank You!</h3>
                <p className="text-[#11616f] mb-6">
                  Your application for <span className="font-semibold">{selectedJob?.title}</span> has been received.<br />
                  Our team will contact you soon.
                </p>
                <button
                  className="bg-[#ff6d4d] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#11616f] transition-colors"
                  onClick={handleCloseForm}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;


