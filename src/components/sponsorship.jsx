import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function SponsorshipForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // your existing fields
    fullName: "",
    email: "",
    contact: "",
    emergencyContact: "",
    // new fields
    organizationName: "",
    contactPerson: "",
    address: "",
    cityStateZip: "",
    contactNumber: "",
    website: "",
    areas: [],
    areasOther: "",
    sponsorshipAmount: "",
    duration: "",
    preferredPaymentMode: "",
    acknowledge: "",
    preferredNameForAck: "",
    declaration: false,
    confirmInfo: false,
    signature: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "declaration") {
      setFormData((prev) => ({ ...prev, declaration: checked }));
    } else if (type === "checkbox" && name === "confirmInfo") {
      setFormData((prev) => ({ ...prev, confirmInfo: checked }));
    } else if (type === "checkbox" && name === "areas") {
      setFormData((prev) => ({
        ...prev,
        areas: checked
          ? [...(prev.areas || []), value]
          : prev.areas.filter((a) => a !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/v1/v2/vz/api/forms/sponsorship`,
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

          // alert(errorMessage);
          throw new Error(errorMessage);
        }
        // setcomplete(true);
        navigate("/donate")
        // console.log("Form submitted successfully:", data);
        // setShowModal(true);
      } catch (err) {
        // console.log("catch"+err);
        console.error("Error sending form data:", err);
        alert("Error: " + (err.message || "Unable to process donation"));
      }
    // fetch(`${import.meta.env.VITE_API_URL}/v1/v2/vz/api/forms/sponsorship`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //         navigate("/donate");
    //     // Optionally reset the form or show a success message
    //   })
    //   .catch((error) => {
    //     alert("try again")
    //     console.error("Error:", error);
    //     // Optionally show an error message
    //   });

    // alert("Form submitted!");
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: "url('/image/volenterfrom.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 max-w-3xl w-full space-y-4"
      >
        {/* Main heading */}
        <h1 className="text-2xl font-bold text-center" style={{ color: "#11616f" }}>
          Navvkhush Helping Foundation – Sponsorship Form
        </h1>

        {/* === Personal / Organization Details === */}
        <h3 className="text-xl font-semibold mt-6" style={{ color: "#11616f" }}>
          Personal / Organization Details
        </h3>

        <label>Name of Individual / Organization</label>
        <input
          type="text"
          name="organizationName"
          value={formData.organizationName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <label>Contact Person (if organization)</label>
        <input
          type="text"
          name="contactPerson"
          value={formData.contactPerson}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <label>City/State/ZIP</label>
        <input
          type="text"
          name="cityStateZip"
          value={formData.cityStateZip}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <label>Contact Number</label>
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <label>Email ID</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <label>Website (if any)</label>
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        {/* === Sponsorship Details === */}
        <h3 className="text-xl font-semibold mt-6" style={{ color: "#11616f" }}>
          Sponsorship Details
        </h3>

        <label>Area you would like to sponsor</label>
        <div className="space-y-1">
          {[
            "Child Education",
            "Health & Hygiene",
            "First Aid Kits / Supplies",
            "Events / Workshops",
            "General Donation / Support",
          ].map((item) => (
            <div key={item} className="flex items-center">
              <input
                type="checkbox"
                name="areas"
                value={item}
                checked={formData.areas.includes(item)}
                onChange={handleChange}
                className="mr-2"
              />
              <span>{item}</span>
            </div>
          ))}
          <input
            type="text"
            name="areasOther"
            value={formData.areasOther}
            onChange={handleChange}
            placeholder="Other (specify)"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <label>Sponsorship Amount</label>
        <input
          type="text"
          name="sponsorshipAmount"
          value={formData.sponsorshipAmount}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <label>Duration of Sponsorship (if recurring)</label>
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <label>Preferred Mode of Payment</label>
        <select
          name="preferredPaymentMode"
          value={formData.preferredPaymentMode}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select</option>
          <option value="Bank Transfer">Bank Transfer</option>
          <option value="Cheque">Cheque</option>
          {/* <option value="Online Payment">Online Payment</option> */}
          {/* <option value="Other">Other</option> */}
        </select>

        {/* === Acknowledgement Preferences === */}
        <h3 className="text-xl font-semibold mt-6" style={{ color: "#11616f" }}>
          Acknowledgement Preferences
        </h3>

        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="acknowledge"
              value="Yes"
              checked={formData.acknowledge === "Yes"}
              onChange={handleChange}
              className="mr-1"
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="acknowledge"
              value="No"
              checked={formData.acknowledge === "No"}
              onChange={handleChange}
              className="mr-1"
            />
            No
          </label>
        </div>

        <label>Preferred Name / Organization Name for Acknowledgement</label>
        <input
          type="text"
          name="preferredNameForAck"
          value={formData.preferredNameForAck}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        {/* === Declaration === */}
        <h3 className="text-xl font-semibold mt-6" style={{ color: "#11616f" }}>
          Declaration
        </h3>

        <label className="flex items-center">
          <input
            type="checkbox"
            name="declaration"
            checked={formData.declaration}
            onChange={handleChange}
            className="mr-2"
          />
          I/We agree to sponsor Navvkhush Helping Foundation for the above-selected purpose.
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="confirmInfo"
            checked={formData.confirmInfo}
            onChange={handleChange}
            className="mr-2"
          />
          I/We confirm that the information provided is correct to the best of my/our knowledge.
        </label>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            name="signature"
            value={formData.signature}
            onChange={handleChange}
            placeholder="Signature"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
      
        <button
        to="/donate"
          type="submit"
          className="w-full mt-6 px-4 py-2 rounded-md text-white font-semibold"
          style={{ backgroundColor: "#11616f" }}
        >
          Submit
        </button>
        
      </form>
    </div>
  );
}

export default SponsorshipForm;
