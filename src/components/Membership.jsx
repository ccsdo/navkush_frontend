import React, { useState, useRef, useEffect } from "react";

const initialForm = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  mobile: "",
  address: "",
  city: "",
  state: "",
  country: "India",
  zipCode: "",
  occupation: "",
  briefProfile: "",
  agreement: false,
};

function validateEmail(email) {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateMobile(mobile) {
  // Indian mobile: 10 digits, starts with 6-9
  const clean = mobile.replace(/\D/g, "").slice(-10);
  return /^[6-9]\d{9}$/.test(clean);
}

export default function Membership() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const successRef = useRef(null);
  const [finalform, setFinalform] = useState({});

  // Real-time validation
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Real-time feedback for email/mobile
    if (name === "email") {
      setErrors((err) => ({
        ...err,
        email: value && !validateEmail(value) ? "Invalid email" : undefined,
      }));
    }
    if (name === "mobile") {
      setErrors((err) => ({
        ...err,
        mobile:
          value && !validateMobile(value)
            ? "Invalid mobile number"
            : undefined,
      }));
    }
  };
useEffect(() => {
  const senddata=async(data)=>{
    try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/v1/v2/vz/api/forms/membershipform`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );

         data = await res.json();

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

          // alert(errorMessage);
          throw new Error(errorMessage);
        }
        // console.log("Form submitted successfully:", data);
        // setShowModal(true);
      } catch (err) {
        // console.log("catch"+err);
        console.error("Error sending form data:", err);
        alert("Error: " + (err.message || "Unable to process donation"));
      }

  }
  if(Object.keys(finalform).length>0)
senddata(finalform);

},[finalform]);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate required fields
    let newErrors = {};
    if (!form.fullName) newErrors.fullName = "Required";
    if (!form.email) newErrors.email = "Required";
    if (!form.mobile) newErrors.mobile = "Required";
    if (form.email && !validateEmail(form.email))
      newErrors.email = "Invalid email";
    if (form.mobile && !validateMobile(form.mobile))
      newErrors.mobile = "Invalid mobile number";
    if (!form.agreement)
      newErrors.agreement = "Please agree to the terms and conditions";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Scroll to first error
      const firstError = document.querySelector(
        "[data-error='true']"
      );
      if (firstError) firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setSubmitting(true);
setSubmitting(false);
      setSuccess(true);
      setForm(initialForm);
      setFinalform(form);
      if (successRef.current) {
          successRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    // Simulate async submission
    // setTimeout(() => {
    //   // In real app, send form data to server here
      
    //   setTimeout(() => {
        
    //   }, 100);
    // }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-[#eaf6f8] via-[#fbeeea] to-[#ffe7e0] min-h-screen pb-12">
      {/* Hero Section */}
      <section className="gradient-bg py-8 text-white">
        <div className="max-w-5xl mx-auto px-3 text-center">
          <h1 className="text-3xl font-bold mb-2 slide-in">Navv Khush Helping Organization</h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Information */}
          <div className="space-y-8">
            {/* Hero Image */}
            <div className="card-shadow rounded-2xl overflow-hidden slide-in">
              <img
                src="./image/membership.jpg"
                alt="Community helping session"
                className="w-full h-64 object-cover"
              />
              <div className="p-8 bg-white">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 gradient-bg rounded-full mr-3"></div>
                  <h2 className="text-2xl font-bold text-[#11616f]">
                    Individual Membership Program
                  </h2>
                </div>
                <p className="text-[#11616f] leading-relaxed mb-6">
                  Navv Khush Helping Organization is one of India's leading NGOs dedicated to community development and social welfare. Our individual membership program offers you the opportunity to be part of meaningful change across the nation.
                </p>
                <div className="flex items-center space-x-4 text-sm text-[#11616f]">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-[#11616f]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Tax Deductible
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-[#ff6d4d]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Verified NGO
                  </span>
                </div>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="card-shadow rounded-2xl bg-white p-8 slide-in">
              <h3 className="text-2xl font-bold text-[#11616f] mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-[#ff6d4d]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"></path>
                </svg>
                Eligibility Criteria
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-[#eaf6f8] rounded-lg border-l-4 border-[#11616f]">
                  <div className="w-6 h-6 bg-[#11616f] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#11616f]">Age Requirement</h4>
                    <p className="text-[#11616f] text-sm">Individual aged 18 years and above</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-[#eaf6f8] rounded-lg border-l-4 border-[#11616f]">
                  <div className="w-6 h-6 bg-[#11616f] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#11616f]">Clean Record</h4>
                    <p className="text-[#11616f] text-sm">Person with no criminal background</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-[#eaf6f8] rounded-lg border-l-4 border-[#11616f]">
                  <div className="w-6 h-6 bg-[#11616f] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#11616f]">Social Interest</h4>
                    <p className="text-[#11616f] text-sm">Genuine interest in social and community development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-[#ffe7e0] rounded-lg border-l-4 border-[#ff6d4d]">
                  <div className="w-6 h-6 bg-[#ff6d4d] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#ff6d4d]">Verification Process</h4>
                    <p className="text-[#ff6d4d] text-sm">Willingness to participate in membership verification</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="card-shadow rounded-2xl bg-gradient-to-r from-[#11616f] to-[#ff6d4d] p-8 text-white slide-in">
              <h3 className="text-2xl font-bold mb-6">Membership Benefits</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">🎯</span>
                  </div>
                  <span>Direct community impact</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">📜</span>
                  </div>
                  <span>Tax deduction benefits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">🤝</span>
                  </div>
                  <span>Networking opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">📈</span>
                  </div>
                  <span>Skill development programs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="slide-in">
            <div className="card-shadow rounded-2xl bg-white overflow-hidden">
              <div className="gradient-bg p-6 text-white text-center">
                <h2 className="text-2xl font-bold mb-2">
                  Individual Membership Registration
                </h2>
                <p className="opacity-90">
                  Join our community of changemakers today
                </p>
              </div>
              <div className="p-8">
                {!success ? (
                  <form
                    className="space-y-6"
                    onSubmit={handleSubmit}
                    autoComplete="off"
                  >
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-[#11616f] border-b pb-2">
                        Personal Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div data-error={!!errors.fullName}>
                          <label className="block text-sm font-medium text-[#11616f] mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            className={`form-input w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#ff6d4d] focus:border-transparent ${
                              errors.fullName
                                ? "border-red-500"
                                : form.fullName
                                ? "border-[#11616f]"
                                : "border-gray-300"
                            }`}
                            value={form.fullName}
                            onChange={handleChange}
                            required
                          />
                          {errors.fullName && (
                            <div className="text-xs text-red-500 mt-1">
                              {errors.fullName}
                            </div>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#11616f] mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="companyName"
                            className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6d4d] focus:border-transparent"
                            value={form.companyName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div data-error={!!errors.email}>
                        <label className="block text-sm font-medium text-[#11616f] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          className={`form-input w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#ff6d4d] focus:border-transparent ${
                            errors.email
                              ? "border-red-500"
                              : form.email
                              ? "border-[#11616f]"
                              : "border-gray-300"
                          }`}
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                        {errors.email && (
                          <div className="text-xs text-red-500 mt-1">
                            {errors.email}
                          </div>
                        )}
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[#11616f] mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6d4d] focus:border-transparent"
                            value={form.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div data-error={!!errors.mobile}>
                          <label className="block text-sm font-medium text-[#11616f] mb-2">
                            Mobile Number *
                          </label>
                          <input
                            type="tel"
                            name="mobile"
                            className={`form-input w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#ff6d4d] focus:border-transparent ${
                              errors.mobile
                                ? "border-red-500"
                                : form.mobile
                                ? "border-[#11616f]"
                                : "border-gray-300"
                            }`}
                            value={form.mobile}
                            onChange={handleChange}
                            required
                          />
                          {errors.mobile && (
                            <div className="text-xs text-red-500 mt-1">
                              {errors.mobile}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Address Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-[#11616f] border-b pb-2">
                        Address Information
                      </h3>
                      <div>
                        <label className="block text-sm font-medium text-[#11616f] mb-2">
                          Complete Address
                        </label>
                        <textarea
                          name="address"
                          className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6d4d] focus:border-transparent h-20"
                          placeholder="Street address, area, landmark"
                          value={form.address}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[#11616f] mb-2">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6d4d] focus:border-transparent"
                            value={form.city}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#11616f] mb-2">
                            State
                          </label>
                          <input
                            type="text"
                            name="state"
                            className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6d4d] focus:border-transparent"
                            value={form.state}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[#11616f] mb-2">
                            Country
                          </label>
                          <input
                            type="text"
                            name="country"
                            className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6d4d] focus:border-transparent"
                            value={form.country}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#11616f] mb-2">
                            Zip Code
                          </label>
                          <input
                            type="text"
                            name="zipCode"
                            className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6d4d] focus:border-transparent"
                            value={form.zipCode}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Professional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-[#11616f] border-b pb-2">
                        Professional Information
                      </h3>
                      <div>
                        <label className="block text-sm font-medium text-[#11616f] mb-2">
                          Current Occupation
                        </label>
                        <input
                          type="text"
                          name="occupation"
                          className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6d4d] focus:border-transparent"
                          value={form.occupation}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#11616f] mb-2">
                          Brief Profile
                        </label>
                        <textarea
                          name="briefProfile"
                          className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6d4d] focus:border-transparent h-24"
                          placeholder="Tell us about yourself, your interests in social work, and why you want to join our organization"
                          value={form.briefProfile}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>

                    {/* Agreement */}
                    <div
                      className={`flex items-start space-x-3 p-4 bg-[#eaf6f8] rounded-lg ${
                        errors.agreement ? "border border-red-500" : ""
                      }`}
                      data-error={!!errors.agreement}
                    >
                      <input
                        type="checkbox"
                        name="agreement"
                        className="w-5 h-5 text-[#ff6d4d] border-gray-300 rounded focus:ring-[#ff6d4d] mt-0.5"
                        checked={form.agreement}
                        onChange={handleChange}
                        required
                      />
                      <label className="text-sm text-[#11616f] leading-relaxed">
                        I hereby confirm that all the information provided above is true and accurate to the best of my knowledge. I agree to abide by the terms and conditions of Navv Khush Helping Organization and understand that my membership is subject to verification and approval.
                      </label>
                    </div>
                    {errors.agreement && (
                      <div className="text-xs text-red-500 mb-2">
                        {errors.agreement}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full gradient-bg hover:shadow-lg text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                      disabled={submitting}
                    >
                      {!submitting ? (
                        <span>Submit Registration</span>
                      ) : (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div
                    ref={successRef}
                    className="mt-8 p-6 bg-gradient-to-r from-[#11616f] to-[#ff6d4d] text-white rounded-lg text-center"
                  >
                    <div className="success-checkmark w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Registration Successful! 🎉
                    </h3>
                    <p className="mb-4">
                      Thank you for joining Navv Khush Helping Organization. Your application has been submitted successfully.
                    </p>
                    <div className="text-sm opacity-90">
                      <p>📧 A confirmation email has been sent to your registered email address</p>
                      <p>📞 Our team will contact you within 3-5 business days for verification</p>
                      <p>🎯 You'll receive your membership details once approved</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Custom styles for animation and gradient */}
      <style>{`
        .gradient-bg {
          background: linear-gradient(135deg, #11616f 0%, #ff6d4d 100%);
        }
        .card-shadow {
          box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
        }
        .form-input {
          transition: all 0.3s ease;
        }
        .form-input:focus {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(17,97,111,0.15), 0 0px 0px 0px #fff;
        }
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%,100%{opacity:1;}
          50%{opacity:0.8;}
        }
        .slide-in {
          animation: slideIn 0.6s ease-out;
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .success-checkmark {
          animation: checkmark 0.6s ease-in-out;
        }
        @keyframes checkmark {
          0% { transform: scale(0);}
          50% { transform: scale(1.2);}
          100% { transform: scale(1);}
        }
      `}</style>
    </div>
  );
}
