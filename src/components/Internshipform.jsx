import React, { useState, useEffect } from "react";

const InternshipForm = () => {
  const [formData, setFormData] = useState({});
  const [datafinal, setDataFinal] = useState({});
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
if (name === "volunteerAreas") {
  setFormData((prev) => {
    const areas = prev.volunteerAreas || [];

    if (type === "checkbox") {
      // Handle check/uncheck
      return {
        ...prev,
        volunteerAreas: checked
          ? [...areas, value] // add if checked
          : areas.filter((a) => a !== value), // remove if unchecked
      };
    }

    if (type === "text") {
      // Handle free-text input
      return {
        ...prev,
        volunteerAreas: value ? [...areas, value] : areas,
      };
    }

    return prev;
  });
} else {
  setFormData((prev) => ({ ...prev, [name]: value }));
}

  };

  let formattedData = {};
  let allFilled = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    allFilled = Object.entries(formData).every(([key, val]) => {
      if (Array.isArray(val)) return val.length > 0;
      return Boolean(val);
    });
    console.log(allFilled);
    formattedData = {
      ...formData,
      // volunteerAreas: formData.volunteerAreas.join(","),
    };
    setDataFinal(formattedData);
  };

  useEffect(() => {
    // console.log("useEffect triggered with formData:", formData, allFilled);
    const sendData = async (data) => {
      try {
        console.log("Sending data:", data);
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/v1/v2/vz/api/forms/internshipform`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const responseData = await response.json();
        if (!response.ok) {
          let errorMessage = "Something went wrong";

          if (
            responseData?.error?.name === "ZodError" &&
            responseData?.error?.message
          ) {
            try {
              const parsedErrors = JSON.parse(responseData.error.message);
              // Extract all Zod messages
              errorMessage = parsedErrors.map((err) => err.message).join("\n");
            } catch (e) {
              errorMessage = responseData.error.message;
            }
          } else if (responseData?.message) {
            errorMessage = responseData.message;
          }

          // alert(errorMessage);
          throw new Error(errorMessage);
        }

        // const result = await response.json();
        // console.log("Data submitted successfully:", responseData);
        alert("Form submitted successfully!");
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    };
    console.log("allFilled:", allFilled);
    if (
      formData.dob &&
      formData.fullName &&
      formData.address &&
      formData.cityState &&
      formData.contactNumber &&
      formData.email &&
      formData.gender &&
      formData.preferredHours &&
      formData.previousExperience &&
      formData.qualification &&
      formData.skills &&
      formData.internshipAreas
    ) {
      sendData(formData);
    }
  }, [datafinal]);

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: "url('/image/volenterfrom.jpg')", // ✅ remove 'public/'
        backgroundSize: "cover", // ✅ full cover
        backgroundPosition: "center", // ✅ center align
        backgroundRepeat: "no-repeat", // ✅ no repeat
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white/95 backdrop-blur-md p-10 rounded-3xl shadow-2xl flex flex-col space-y-8 w-full max-w-3xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-teal-700 text-center mb-4">
          Fill Personal Information
        </h3>

        {/* === Personal Information === */}
        <h4 className="text-xl font-semibold text-gray-800 border-b pb-2"></h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Full Name
            </label>
            <input
              name="fullName"
              type="text"
              className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 text-gray-800 focus:ring-teal-500"
              placeholder="Enter your full name"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Date of Birth
            </label>
            <input
              name="dob"
              type="date"
              className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500 text-gray-800"
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1">Gender</label>
          <div className="flex flex-wrap items-center gap-6 text-gray-700">
            {["Male", "Female", "Other"].map((g) => (
              <label key={g} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  onChange={handleChange}
                />{" "}
                {g}
              </label>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Address
            </label>
            <input
              name="address"
              type="text"
              className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500 text-gray-800"
              placeholder="Enter address"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              City/State
            </label>
            <input
              name="cityState"
              type="text"
              className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500 text-gray-800"
              placeholder="Enter city/state"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium mb-1 ">
              Contact Number
            </label>
            <input
              name="contactNumber"
              type="tel"
              className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500 text-gray-800"
              placeholder="Enter contact number"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Email ID
            </label>
            <input
              name="email"
              type="email"
              className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500 text-gray-800"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* === Educational/Professional === */}
        <h4 className="text-xl font-semibold text-gray-800 border-b pb-2">
          Educational Details
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Educational Qualification
            </label>
            <input
              name="qualification"
              type="text"
              className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500 text-gray-800"
              placeholder="Your qualification"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Skills or Areas of Expertise
            </label>
            <input
              name="skills"
              type="text"
              className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500 text-gray-800"
              placeholder="List your skills"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* === Internship Preferences === */}
        <h4 className="text-xl font-semibold text-gray-800 border-b pb-2">
          Internship Preferences
        </h4>
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Areas you’d like in internship:
          </label>
          <div className="grid md:grid-cols-3 gap-3 text-gray-700">
            {[
              "Child Education",
              "Health & Hygiene",
              "Fundraising",
              "Event Management",
              "Social Media/Content Creation",
              "Field Work",
            ].map((area) => (
              <label
                key={area}
                className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200"
              >
                <input
                  name="volunteerAreas"
                  type="checkbox"
                  value={area}
                  onChange={handleChange}
                />{" "}
                {area}
              </label>
            ))}
            <label className="flex items-center gap-2 md:col-span-3 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
              <input
                type="text"
                name="volunteerAreas"
                placeholder="Other (please specify)"
              />{" "}
              Other (please specify)
            </label>
          </div>
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Preferred Days/Hours for internship
          </label>
          <input
            name="preferredHours"
            type="text"
            className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500 text-gray-800"
            placeholder="e.g. Weekends, evenings"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Previous internship Experience (if any)
          </label>
          <textarea
            name="previousExperience"
            className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500 text-gray-800"
            rows={3}
            placeholder="Describe your experience"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* === Declaration === */}
        <h4 className="text-xl font-semibold text-gray-800 border-b pb-2">
          Declaration
        </h4>
        <div className="space-y-3 text-gray-700">
          <label className="flex items-start gap-3">
            <input type="checkbox" required className="mt-1" />{" "}
            <span>
              I agree to abide by the values and code of conduct of Navvkhush
              Helping Foundation.
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" required className="mt-1" />{" "}
            <span>
              The information provided by me is true to the best of my
              knowledge.
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-teal-600 text-white px-8 py-3 rounded-xl hover:bg-teal-700 transition font-semibold shadow-md"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default InternshipForm;
