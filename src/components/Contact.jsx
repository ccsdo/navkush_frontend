import React, { useState } from "react";

const CONTACT_INFO = {
  name: "Navvkhush helping foundation CCSDO",
  email: "contact@navvkhushfoundation.org",
  email2: "info@navvkhushfoundation.org",
  phone: "+91 11-2345-6789",
  mobile: "+91-9560406279 / +91-8287372178",
  address: "A-1 Building, Market, Pocket 5, Acharya Niketan, Mayur Vihar Phase-1, New Delhi, Delhi, 110091",
  socials: [
    {
      href: "#",
      label: "Facebook",
      icon: (
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      bg: "bg-blue-600 hover:bg-blue-700"
    },
    {
      href: "#",
      label: "Twitter",
      icon: (
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      ),
      bg: "bg-blue-400 hover:bg-blue-500"
    },
    {
      href: "#",
      label: "Instagram",
      icon: (
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      bg: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
    },
    {
      href: "#",
      label: "YouTube",
      icon: (
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      bg: "bg-red-600 hover:bg-red-700"
    }
  ]
};

function Contact() {
  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  // Notification state
  const [notification, setNotification] = useState(null);

  // Handlers
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setFormStatus({ type: "", message: "" });
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setFormStatus({ type: "", message: "" });

    // Validate required fields
    if (!form.name || !form.email || !form.subject || !form.message) {
      setFormStatus({
        type: "error",
        message: "Please fill in all required fields."
      });
      return;
    }
    if (!validateEmail(form.email)) {
      setFormStatus({
        type: "error",
        message: "Please enter a valid email address."
      });
      return;
    }

    setSubmitting(true);

      setFormStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you soon."
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setSubmitting(false);
      // Log form data (simulate API)
      // eslint-disable-next-line no-console
      try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/v1/v2/vz/api/forms/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

     const data = await res.json();

    //  console.log("Response data:", data);

  if (!res.ok) {
    let errorMessage = "Something went wrong";

    if (data?.error?.name === "ZodError" && data?.error?.message) {
      try {
        const parsedErrors = JSON.parse(data.error.message);
        // Extract all Zod messages
        errorMessage = parsedErrors.map(err => err.message).join("\n");
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
      alert('Error: ' + (err.message || 'Unable to process donation'));
    }
      console.log("Form submitted with data:", {
        ...form,
        timestamp: new Date().toISOString()
      });
    
  };

  // Map directions
  const getDirections = () => {
    setNotification("Opening directions to our office...");
    // In real implementation, open Google Maps
    // window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`);
    setTimeout(() => setNotification(null), 2500);
  };

  // Focus transitions (for parent highlight)
  const handleFocus = (e) => {
    e.target.parentElement.classList.add("focused");
  };
  const handleBlur = (e) => {
    e.target.parentElement.classList.remove("focused");
  };

  // Styles for form status
  const statusClass =
    formStatus.type === "success"
      ? "bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded mb-4"
      : formStatus.type === "error"
      ? "bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded mb-4"
      : "";

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-24 bg-[url('/image/contactbg.jpg')] bg-cover bg-center bg-no-repeat"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#11616f]/80 to-[#ff6d4d]/80"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6 font-big shoulders display">
          Contact US
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            "From Classrooms to Careers – We Stand With Every Child."
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#11616f] mb-2">
                Get in Touch
              </h2>
              <p className="text-gray-700">
                We'd love to hear from you! Whether you have a question about our work, want to volunteer, or just want to say hello, our team is ready to answer all your questions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#11616f] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  <span className="text-gray-800">{CONTACT_INFO.name}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#11616f] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <span className="text-gray-800">{CONTACT_INFO.email}</span>
                    <br />
                    <span className="text-gray-600 text-sm">{CONTACT_INFO.email2}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#11616f] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <span className="text-gray-800">{CONTACT_INFO.phone}</span>
                    <br />
                    <span className="text-gray-600 text-sm">{CONTACT_INFO.mobile} (Mobile)</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#11616f] mr-3 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <span className="text-gray-800">{CONTACT_INFO.name}</span>
                    <br />
                    <span className="text-gray-600 text-sm">{CONTACT_INFO.address}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#11616f] mr-3 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4"></path>
                  </svg>
                  <div>
                    <span className="text-gray-800 mb-2 block">Follow Us</span>
                    <div className="flex space-x-3">
                      {CONTACT_INFO.socials.map((s, i) => (
                        <a
                          key={s.label}
                          href={s.href}
                          className={`w-8 h-8 ${s.bg} rounded-full flex items-center justify-center transition`}
                          aria-label={s.label}
                        >
                          {s.icon}
                        </a>
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm mt-2 block">info@navvkhushhelping.org</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-[#11616f] mb-4">
                Send us a Message
              </h3>
              {formStatus.message && (
                <div className={statusClass} role="alert">
                  {formStatus.message}
                </div>
              )}
              <form className="space-y-4" onSubmit={handleSubmit} autoComplete="off">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleInput}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#11616f] focus:border-[#11616f] transition duration-200"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInput}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#11616f] focus:border-[#11616f] transition duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleInput}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#11616f] focus:border-[#11616f] transition duration-200"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleInput}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#11616f] focus:border-[#11616f] transition duration-200"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleInput}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#11616f] focus:border-[#11616f] transition duration-200 resize-vertical"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#11616f] text-white py-3 px-6 rounded-md hover:bg-[#0d4d57] transition duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-[#11616f] focus:ring-offset-2"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-[#11616f] mb-4">
              Find Us
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Visit our office or find us on the map. We're located in the heart of Delhi, easily accessible by public transport.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Container */}
            <div className="lg:col-span-2">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md h-96 relative flex items-center justify-center">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7005.5320632376215!2d77.294082!3d28.606795!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5722f0f3997%3A0x41be4491d260a3ca!2sNavvkhush%20helping%20foundation%20CCSDO!5e0!3m2!1sen!2sin!4v1755688154883!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "24rem", minWidth: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Navvkhush helping foundation CCSDO Location"
                ></iframe>
                {/* Get Directions Button */}
                <div className="absolute bottom-4 left-4">
                  <button
                    onClick={getDirections}
                    className="bg-[#11616f] text-white px-4 py-2 rounded-md hover:bg-[#0d4d57] transition shadow-md text-sm font-medium"
                    type="button"
                  >
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
            {/* Location Details */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#11616f] mb-4">
                  Office Location
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-[#11616f] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Address</p>
                      <p className="text-gray-600 text-sm">
                        {CONTACT_INFO.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-[#11616f] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Office Hours</p>
                      <p className="text-gray-600 text-sm">
                        Monday - Saturday<br />
                        10:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-[#11616f] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-8 0H6a2 2 0 00-2 2v10a2 2 0 002 2h1m5-13v4a2 2 0 002 2h4a2 2 0 002-2V8a2 2 0 00-2-2h-4z"/>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Parking</p>
                      <p className="text-gray-600 text-sm">
                        Free parking available<br />
                        Visitor spots in front
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-[#11616f] mb-2">
                  Public Transport
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>🚇 <strong>Metro:</strong> Geeta Colony (nearest station)</p>
                  <p>🚌 <strong>Bus:</strong> Routes 101, 102, 105</p>
                  <p>🚗 <strong>Taxi:</strong> Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white bg-blue-600 transition-transform duration-300 animate-slide-in">
          {notification}
        </div>
      )}
      <style>{`
        .focused input, .focused select, .focused textarea {
          box-shadow: 0 0 0 2px #11616f33;
        }
        @keyframes slide-in {
          from { transform: translateX(100%);}
          to { transform: translateX(0);}
        }
        .animate-slide-in { animation: slide-in 0.3s cubic-bezier(.4,0,.2,1) both;}
      `}</style>
    </div>
  );
}

export default Contact;
