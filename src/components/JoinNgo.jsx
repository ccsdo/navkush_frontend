import React, { useState } from "react";

// Main App component for the NGO registration form
export default function App() {
  const [formData, setFormData] = useState({
    authorizedPerson: "",
    organizationName: "",
    organizationType: "",
    organizationEmail: "",
    authorizedPersonEmail: "",
    website: "",
    workingArea: "",
    mobile: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    occupation: "",
  });

  const [documents, setDocuments] = useState({
    panCard: null,
    registrationCertificate: null,
    bylaws: null,
    auditReport: null,
    annualReport: null,
    certificate80G: null,
  });

  const [fileNames, setFileNames] = useState({
    panCard: "",
    registrationCertificate: "",
    bylaws: "",
    auditReport: "",
    annualReport: "",
    certificate80G: "",
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle file uploads and validation
  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const maxSize = 5 * 1024 * 1024; // 5MB limit
      const allowedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/jpg",
        "image/png",
      ];

      if (file.size > maxSize) {
        setAlertMessage(`फ़ाइल का आकार 5MB से कम होना चाहिए।`);
        setShowErrorAlert(true);
        e.target.value = ""; // Reset file input
        return;
      }

      if (!allowedTypes.includes(file.type)) {
        setAlertMessage(`कृपया केवल PDF, JPG, या PNG फ़ाइल अपलोड करें।`);
        setShowErrorAlert(true);
        e.target.value = ""; // Reset file input
        return;
      }

      setDocuments((prevDocs) => ({ ...prevDocs, [type]: file }));
      setFileNames((prevNames) => ({ ...prevNames, [type]: file.name }));
    }
  };

  // Function to remove uploaded files
  const removeFile = (type) => {
    setDocuments((prevDocs) => ({ ...prevDocs, [type]: null }));
    setFileNames((prevNames) => ({ ...prevNames, [type]: "" }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();

      // Append normal text fields
      Object.entries(formData).forEach(([key, value]) => {
        // console.log(form)
        form.append(key, value);
      });
      // console.log(documents,formData)
      // Append uploaded files
      Object.entries(documents).forEach(([key, file]) => {
        // console.log(form);
        form.append(key, file);
      });
      // console.log("form is:",form)
      // console.log("form",form)
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/v1/v2/vz/api/forms/joinngo`,
        {
          method: "POST",
          body: form,
        }
      );

      // console.log(documents)
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
      // console.log("Response:", data);
      alert("Form submitted successfully!");
      // console.log(form);
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
      return;
    }
    // In a real application, you would send the formData and documents to a server here.
    // console.log("Form submitted:", formData, documents);
    setAlertMessage(
      `🎉 आपकी आवेदन सफलता पूर्वक सबमिट हो गया है! हम आपके आवेदन की समीक्षा करेंगे और जल्द ही आपसे संपर्क करेंगे।`
    );
    setShowSuccessAlert(true);
    // Reset form after submission
    setFormData({
      authorizedPerson: "",
      organizationName: "",
      organizationType: "",
      organizationEmail: "",
      authorizedPersonEmail: "",
      website: "",
      workingArea: "",
      mobile: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      occupation: "",
    });
    setDocuments({
      panCard: null,
      registrationCertificate: null,
      bylaws: null,
      auditReport: null,
      annualReport: null,
      certificate80G: null,
    });
    setFileNames({
      panCard: "",
      registrationCertificate: "",
      bylaws: "",
      auditReport: "",
      annualReport: "",
      certificate80G: "",
    });
  };

  // Custom Alert component
  const CustomAlert = ({ message, type, onClose }) => {
    // #11616f (teal) for success, #ff6d4d (orange) for error
    const iconColor = type === "success" ? "text-[#11616f]" : "text-[#ff6d4d]";
    const bgColor = type === "success" ? "bg-[#e6f6f8]" : "bg-[#fff0ec]";
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div
          className={`bg-white rounded-lg p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100`}
        >
          <div className="text-center">
            <div
              className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              <svg
                className={`w-8 h-8 ${iconColor}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    type === "success"
                      ? "M5 13l4 4L19 7"
                      : "M6 18L18 6M6 6l12 12"
                  }
                ></path>
              </svg>
            </div>
            <div
              className="text-gray-800 mb-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: message }}
            ></div>
            <button
              onClick={onClose}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                type === "success"
                  ? "bg-[#11616f] text-white hover:bg-[#0d4c57]"
                  : "bg-[#ff6d4d] text-white hover:bg-[#e65c3a]"
              }`}
            >
              {type === "success" ? "बढ़िया!" : "ठीक है"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Tailwind CSS classes are directly used for styling */}
      <div className="bg-gray-100 min-h-screen">
        {/* Header Section */}
        <section className="py-6 text-center bg-[#11616f] p-6">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="font-Medium text-white capitalize text-4xl">
              Focusing On Women Empowerment And Child Education
            </h1>
          </div>
        </section>

        {/* Main Content Section with Two Columns */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Set gap-0 for the two columns */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-0">
              {/* Left Column: Description & Eligibility */}
              <div className="lg:pr-4 space-y-6 mb-8 lg:mb-0">
                <div className="p-0 bg-transparent">
                  <div className="mb-4">
                    <img
                      src="./image/joinngo.jpg"
                      className="rounded-lg w-full h-auto mb-4"
                      alt="Women Empowerment and Child Education"
                    />
                    <section
                      className="py-1 text-center"
                      style={{ backgroundColor: "#e6f6f8" }}
                    >
                      <h2
                        className="mb-1 text-[20px] md:text-[20px] font-roboto"
                        style={{ color: "#11616f" }}
                      >
                        Join as an NGO
                      </h2>
                    </section>
                    &nbsp;
                    <p className="text-sm text-gray-600">
                      Navv Khush Helping Foundation (NKHF) is one of the leading
                      NGOs in India. Navvkhush is an independent organization
                      promoting and protecting children's rights. We provide a
                      platform for volunteers and organizations to work for the
                      underprivileged sections of society. Our vision is to
                      create a society where children are protected, educated,
                      and empowered, and women are given equal opportunities to
                      thrive in the world.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      If you want to help and contribute towards bringing a
                      positive change in society, you can help us by
                      volunteering. By filling out the form on our website or by
                      volunteering as an NGO, you can become involved in various
                      initiatives aimed at improving the lives of women and
                      children in India.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      This is a wonderful opportunity for individuals looking to
                      gain valuable experience, learn new skills, and build
                      lasting relationships with others who share a passion for
                      social change. We offer flexible volunteering options,
                      including short-term projects, long-term programs, and
                      community-wide initiatives. Joining us as a volunteer is a
                      fantastic way to give back to the community and make a
                      real difference.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      If your organization is interested in volunteering for
                      NKHF, please click below to download the NGO collaboration
                      form.
                    </p>
                  </div>

                  <div className="mt-8 border-t pt-4">
                    <section
                      className="py-1 text-center"
                      style={{ backgroundColor: "#e6f6f8" }}
                    >
                      <h3
                        className="mb-1 text-[20px] md:text-[20px] font-roboto"
                        style={{ color: "#11616f" }}
                      >
                        Eligibility Criteria to Join Navv Khush Helping:
                      </h3>
                    </section>
                    &nbsp;
                    <div className="text-sm text-gray-600 space-y-3">
                      <div>– Individuals aged 18 years and above.</div>
                      <div>
                        – Individuals interested in social work and community
                        development.
                      </div>
                      <div>
                        – Navv Khush Helping reserves the right to approve or
                        reject volunteer applications at any time. Additionally,
                        we maintain the right to approve or reject any donation
                        applications as well. Any misuse of the Navv Khush
                        Helping name for personal gain will not be tolerated,
                        and strict action will be taken against any individual
                        found guilty.
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t pt-4">
                    <section
                      className="py-1 text-center"
                      style={{ backgroundColor: "#e6f6f8" }}
                    >
                      <h4
                        className="mb-0 text-[20px] md:text-[20px] font-roboto"
                        style={{ color: "#11616f" }}
                      >
                        Points to Consider
                      </h4>
                    </section>
                    &nbsp;
                    <div className="text-sm text-gray-600 space-y-3">
                      <div>- The organization must be legally registered.</div>
                      <div>
                        - The organization should have relevant experience in
                        social work.
                      </div>
                      <div>
                        - Navv Khush Helping reserves the right to approve or
                        reject volunteer applications at any time.
                      </div>
                      <div>
                        - No misuse of the Navv Khush Helping name will be
                        tolerated.
                      </div>
                      <p>
                        <strong>**Note:**</strong>
                      </p>
                      <div>
                        All details provided in the form must be truthful; false
                        information will not be accepted. All mandatory fields
                        must be filled out accurately with proper
                        documentation/information.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: NGO Registration Form */}
              <div className="p-0 bg-transparent">
                <section
                  className="py-2 text-center"
                  style={{ backgroundColor: "#f2f8f9ff" }}
                >
                  <h4
                    className="mb-1 text-[15px] md:text-[20px] font-roboto"
                    style={{ color: "#11616f" }}
                  >
                    Navv Khush Helping Registration Form For Authorized
                    Organizations
                  </h4>
                </section>
                &nbsp;
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Organization Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Authorized Person
                      </label>
                      <input
                        type="text"
                        name="authorizedPerson"
                        value={formData.authorizedPerson}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#11616f] focus:border-[#11616f] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Organization Name
                      </label>
                      <input
                        type="text"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#11616f] focus:border-[#11616f] transition"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Type of Organization
                      </label>
                      <select
                        name="organizationType"
                        value={formData.organizationType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#11616f] focus:border-[#11616f] transition"
                      >
                        <option value="">Select</option>
                        <option value="NGO">NGO</option>
                        <option value="Trust">Trust</option>
                        <option value="Society">Society</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Organization Email
                      </label>
                      <input
                        type="email"
                        name="organizationEmail"
                        value={formData.organizationEmail}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#11616f] focus:border-[#11616f] transition"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Authorized Person Email
                      </label>
                      <input
                        type="email"
                        name="authorizedPersonEmail"
                        value={formData.authorizedPersonEmail}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#11616f] focus:border-[#11616f] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Website of Organization
                      </label>
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#11616f] focus:border-[#11616f] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Working Area
                    </label>
                    <input
                      type="text"
                      name="workingArea"
                      value={formData.workingArea}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#11616f] focus:border-[#11616f] transition"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Mobile
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#11616f] focus:border-[#11616f] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#11616f] focus:border-[#11616f] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Organization Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#11616f] focus:border-[#11616f] transition"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Organization City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#11616f] focus:border-[#11616f] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Organization State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#11616f] focus:border-[#11616f] transition"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Organization Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#11616f] focus:border-[#11616f] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Organization Zip Code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#11616f] focus:border-[#11616f] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Occupation
                    </label>
                    <input
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#11616f] focus:border-[#11616f] transition"
                    />
                  </div>

                  {/* Documents Upload Section */}
                  <div className="space-y-4 flex flex-col items-center">
                    <h4
                      className="text-lg font-bold mt-6 text-center"
                      style={{ color: "#11616f" }}
                    >
                      Upload Documents
                    </h4>
                    <div className="w-full flex flex-col gap-3 items-center">
                      {[
                        { type: "panCard", label: "Organization PAN Card" },
                        {
                          type: "registrationCertificate",
                          label: "Organization Registration Certificate",
                        },
                        { type: "bylaws", label: "Organization Bylaws" },
                        {
                          type: "auditReport",
                          label: "Organization Audit Report",
                        },
                        {
                          type: "annualReport",
                          label: "Organization Annual Report",
                        },
                        {
                          type: "certificate80G",
                          label: "Organization 80G Certificate",
                        },
                      ].map((doc) => (
                        <div
                          key={doc.type}
                          className="flex flex-col sm:flex-row sm:items-center justify-center w-full max-w-xl p-2 border border-gray-300 rounded-md"
                        >
                          <span className="text-sm text-gray-700 text-center sm:text-left w-full sm:w-1/2">
                            {doc.label}
                          </span>
                          <div className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-1/2 mt-2 sm:mt-0">
                            {fileNames[doc.type] ? (
                              <div className="flex items-center space-x-2">
                                <span
                                  className="text-xs font-medium"
                                  style={{ color: "#11616f" }}
                                >
                                  {fileNames[doc.type]}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => removeFile(doc.type)}
                                  className="text-xs"
                                  style={{
                                    color: "#ff6d4d",
                                    transition: "color 0.2s",
                                  }}
                                  onMouseOver={(e) =>
                                    (e.currentTarget.style.color = "#e65c3a")
                                  }
                                  onMouseOut={(e) =>
                                    (e.currentTarget.style.color = "#ff6d4d")
                                  }
                                >
                                  Remove
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center">
                                <input
                                  type="file"
                                  id={doc.type}
                                  name={doc.type}
                                  accept=".pdf,.jpg,.jpeg,.png"
                                  className="hidden"
                                  onChange={(e) =>
                                    handleFileUpload(e, doc.type)
                                  }
                                />
                                <label
                                  htmlFor={doc.type}
                                  className="cursor-pointer text-white px-3 py-1 rounded-md text-sm"
                                  style={{
                                    backgroundColor: "#11616f",
                                    transition: "background 0.2s",
                                  }}
                                  onMouseOver={(e) =>
                                    (e.currentTarget.style.backgroundColor =
                                      "#0d4c57")
                                  }
                                  onMouseOut={(e) =>
                                    (e.currentTarget.style.backgroundColor =
                                      "#11616f")
                                  }
                                >
                                  File
                                </label>
                                <span className="ml-2 text-xs text-gray-500">
                                  No file chosen
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200"
                      style={{
                        backgroundColor: "#ff6d4d",
                        transition: "background 0.2s",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = "#ff6d4d")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = "#11616f")
                      }
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Conditionally render custom alerts */}
      {showSuccessAlert && (
        <CustomAlert
          message={alertMessage}
          type="success"
          onClose={() => setShowSuccessAlert(false)}
        />
      )}
      {showErrorAlert && (
        <CustomAlert
          message={alertMessage}
          type="error"
          onClose={() => setShowErrorAlert(false)}
        />
      )}
    </>
  );
}
