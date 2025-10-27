import React, {useState,useEffect}from "react";
import { motion } from "framer-motion";
function VolunteerForm() {

  const [formData, setFormData] = useState({});
const[datafinal,setDataFinal]=useState({})
   const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkboxes (multiple volunteerAreas)
    if (name === "volunteerAreas") {
      setFormData((prev) => {
        const areas = prev.volunteerAreas || [];
        return {
          ...prev,
          volunteerAreas: checked
            ? [...areas, value]
            : areas.filter((a) => a !== value),
        };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };


let formattedData={}
let allFilled=false



 const handleSubmit = (e) => {
   e.preventDefault();
   allFilled = Object.entries(formData).every(([key, val]) => {
      if (Array.isArray(val)) return val.length > 0;
      return Boolean(val);
    });
    console.log(allFilled)
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
    const response = await fetch( `${import.meta.env.VITE_API_URL}/v1/v2/vz/api/forms/volunteerform`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    if (!response.ok) {
          let errorMessage = "Something went wrong";

          if (responseData?.error?.name === "ZodError" && responseData?.error?.message) {
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
};console.log("allFilled:", allFilled);
  if (formData.dob && formData.fullName && formData.address && formData.cityState && formData.contactNumber && formData.email && formData.emergencyContactName && formData.emergencyContactNumber && formData.emergencyContactRelationship && formData.gender && formData.occupation && formData.preferredHours && formData.previousExperience && formData.qualification && formData.skills && formData.volunteerAreas) {
    sendData(formData);
  }
}, [datafinal]);


  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: "url('/image/volenterfrom.jpg')", // ✅ remove 'public/'
    backgroundSize: "cover",      // ✅ full cover
    backgroundPosition: "center", // ✅ center align
    backgroundRepeat: "no-repeat" // ✅ no repeat
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
      <h4 className="text-xl font-semibold text-gray-800 border-b pb-2">
      </h4>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Full Name
          </label>
          <input
          name="fullName"
            type="text"
            className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
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
            className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500 text-black"
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
              <input type="radio" name="gender" value={g}    onChange={handleChange}/> {g}
            </label>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-600 font-medium mb-1">Address</label>
          <input
          name="address"
            type="text"
            className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
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
            className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
            placeholder="Enter city/state"
               onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Contact Number
          </label>
          <input
          name="contactNumber"
            type="tel"
            className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
            placeholder="Enter contact number"
               onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1">Email ID</label>
          <input
          name="email"
            type="email"
            className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
            placeholder="Enter email"
               onChange={handleChange}
          />
        </div>
      </div>

      {/* === Educational/Professional === */}
      <h4 className="text-xl font-semibold text-gray-800 border-b pb-2">
        Educational / Professional Details
      </h4>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Occupation/Profession
          </label>
          <input
            name="occupation"
            type="text"
            className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
            placeholder="Your profession"
               onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Educational Qualification
          </label>
          <input
          name="qualification"
            type="text"
            className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
            placeholder="Your qualification"
               onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-600 font-medium mb-1">
          Skills or Areas of Expertise
        </label>
        <input
        name="skills"
          type="text"
          className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
          placeholder="List your skills"
             onChange={handleChange}
        />
      </div>

      {/* === Volunteer Preferences === */}
      <h4 className="text-xl font-semibold text-gray-800 border-b pb-2">
        Volunteer Preferences
      </h4>
      <div>
        <label className="block text-gray-600 font-medium mb-1">
          Areas you’d like to volunteer in:
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
            <label key={area} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
              <input name="volunteerAreas" type="checkbox" value={area}    onChange={handleChange}/> {area}
            </label>
          ))}
          <label className="flex items-center gap-2 md:col-span-3 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
            <input type="text" name="volunteerAreas" placeholder="Other (please specify)" /> Other (please specify)
          </label>
        </div>
      </div>

      <div>
        <label className="block text-gray-600 font-medium mb-1">
          Preferred Days/Hours for Volunteering
        </label>
        <input
        name="preferredHours"
          type="text"
          className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
          placeholder="e.g. Weekends, evenings"
             onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-gray-600 font-medium mb-1">
          Previous Volunteering Experience (if any)
        </label>
        <textarea
        name="previousExperience"
          className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
          rows={3}
          placeholder="Describe your experience"
             onChange={handleChange}
        ></textarea>
      </div>

      {/* === Emergency Contact === */}
      <h4 className="text-xl font-semibold text-gray-800 border-b pb-2">
        Emergency Contact
      </h4>
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-gray-600 font-medium mb-1">Name</label>
          <input
          name="emergencyContactName"
            type="text"
            className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
            placeholder="Emergency contact name"
               onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Contact Number
          </label>
          <input
          name="emergencyContactNumber"
            type="tel"
            className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
            placeholder="Emergency number"
               onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Relationship
          </label>
          <input
          name="emergencyContactRelationship"
            type="text"
            className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
            placeholder="Relationship"
               onChange={handleChange}
          />
        </div>
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
            The information provided by me is true to the best of my knowledge.
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
}

export default function VolunteerPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/image/volunteerbanner.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white max-w-3xl px-4"
        >
          <h1 className="text-5xl font-bold mb-4">Be the Change. Volunteer with Us.</h1>
          <p className="text-lg">
            At Navvkhush Helping Foundation, we believe every child deserves the gift of education. With your time, skills, and compassion, you can bring real change.
          </p>
        </motion.div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-10 text-teal-700"
        >
          Volunteer Registration From
        </motion.h2>

        {/* Only one centered card (the form) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <VolunteerForm />
        </motion.div>
      </section>

      {/* Opportunities Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-10 text-teal-700"
          >
            Volunteer Opportunities
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Teaching & Mentoring",
                desc: "Help kids with studies and life skills",
                img: "/image/volunteer1.png",
              },
              {
                title: "Community Outreach",
                desc: "Spread awareness about education and RTE Act",
                img: "/image/volunteer2.png",
              },
              {
                title: "Events & Campaigns",
                desc: "Support awareness drives and fundraising events",
                img: "/image/volunteer3.png",
              },
              {
                title: "Creative Contribution",
                desc: "Photography, content writing, social media support",
                img: "/image/volunteer4.png",
              },
              {
                title: "Health & Nutrition Drives",
                desc: "Assist in school health check-ups and nutrition programs",
                img: "/image/volunteer5.png",
              },
            ].map((opportunity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl"
              >
                <img
                  src={opportunity.img}
                  alt={opportunity.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-2">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600">{opportunity.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-4"
        >
          👉 Join hands with us and make a difference!
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-300"
          onClick={() => {
            document
              .querySelector("form")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Become a Volunteer – Apply Now
        </motion.button>
      </section>
    </div>
  );
}
