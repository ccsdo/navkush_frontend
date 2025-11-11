import React, { useState,useEffect, } from 'react';
import {useNavigate} from "react-router-dom"

// Main App component
export default function App() {
  const navigate = useNavigate()

// State variables for the donation form
const [amount, setAmount] = useState(5000);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [panNo, setPanNo] = useState('');
const [address, setAddress] = useState('');
const [city, setCity] = useState('');
const [state, setState] = useState('');
const [pincode, setPincode] = useState('');
const [dob, setDob] = useState('');

const [showModal, setShowModal] = useState(false);
const [modalMessage, setModalMessage] = useState('');
const [loading, setLoading] = useState(false);

// Select preset amount
const handleSelectAmount = (selectedAmount) => setAmount(selectedAmount);

// Custom amount input
const handleCustomAmountChange = (e) => {
  const value = parseInt(e.target.value) || 0;
  setAmount(value);
};

// Impact text
const getImpactMessage = () => {
  if (amount >= 10000) return 'Provide education support for 20 children for a month';
  if (amount >= 5000) return 'Provide education support for 10 children for a month';
  if (amount >= 2500) return 'Provide nutrition support for 5 children for a month';
  if (amount >= 1000) return 'Provide healthcare support for 2 children for a month';
  return "Every rupee makes a difference in a child's life";
};

// Submit to backend
const sendFormData = async (payload) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/v1/v2/vz/api/forms/donation`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      let errorMessage = data?.message || "Something went wrong";

      if (data?.error?.name === "ZodError") {
        try {
          const parsedErrors = JSON.parse(data.error.message);
          errorMessage = parsedErrors.map(err => err.message).join("\n");
        } catch {
          errorMessage = data.error.message;
        }
      }

      throw new Error(errorMessage);
    }

    return true;
  } catch (err) {
    alert("Error: " + err.message);
    return null;
  }
};

// Handle form submit
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !email || !phone || !panNo || !address || !city || !state || !pincode || !dob) {
    setModalMessage("Please fill in all required fields.");
    setShowModal(true);
    return;
  }

  if (amount < 100) {
    setModalMessage("Minimum donation amount is ₹100.");
    setShowModal(true);
    return;
  }

  const payload = { name, email, phone, panNo, address, city, state, pincode, dob, amount };

  setLoading(true);
  const result = await sendFormData(payload);
  setLoading(false);

  if (!result) return;

  setModalMessage(
    `Thank you ${name}! Your donation of ₹${amount} will make a real difference. A tax receipt will be sent to ${email}.`
  );
  setShowModal(true);

  navigate("/donate");
};


  return (
    <div className="bg-[#fffdf8] min-h-screen font-[Inter]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-8 px-4 md:px-8 lg:px-12">
        {/* Left Content */}
        <div className="w-full md:w-2/3 space-y-8">
          {/* Why Children */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold mb-3">
              Why <span className="text-[#ff6d4d]">Children?</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Millions of children in India still struggle for basic rights—education,
              nutrition, healthcare, and safety. Their dreams are cut short by
              poverty, child labour, and child marriage. But YOU have the power to
              change that.
            </p>
          </section>

          {/* Who We Are */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold mb-3">
              Who We <span className="text-[#ff6d4d]">Are?</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Founded in 2023, Navvkhushhelping is India's leading child rights NGO, dedicated to
              creating meaningful and lasting change in the lives of underprivileged
              children.
            </p>
            <div className="space-y-4 mt-6">
              <div className="border rounded-lg p-4 bg-white shadow-sm">
                <h3 className="font-semibold mb-2 text-[#11616f]">📘 Education</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We conduct awareness drives to highlight the importance of education
                  and ensure that all children are enrolled in school.
                </p>
              </div>
              <div className="border rounded-lg p-4 bg-white shadow-sm">
                <h3 className="font-semibold mb-2 text-[#11616f]">🛡️ Protection</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We prevent child marriage and child labour by creating awareness
                  about the harmful effects of these practices.
                </p>
              </div>
              <div className="border rounded-lg p-4 bg-white shadow-sm">
                <h3 className="font-semibold mb-2 text-[#11616f]">🍎 Health and Nutrition</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We ensure children receive timely vaccinations and sufficient
                  nutrition by connecting them to government healthcare services.
                </p>
              </div>
            </div>
          </section>

          {/* Our Impact */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold mb-3">
              Our <span className="text-[#ff6d4d]">Impact in 2024–25:</span>
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base">
              <li>22,57,372 children impacted overall</li>
              <li>2,29,048 children ensured proper nutrition and healthcare</li>
              <li>1,05,940 children empowered through children's collectives</li>
              <li>64,424 children benefitted from digital learning</li>
              <li>24,216 children protected from child labour/marriage</li>
              <li>8,292 children supported across 12 states</li>
            </ul>
          </section>

          {/* You Can Make A Difference */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold mb-3">
              You <span className="text-[#ff6d4d]">Can Make A Difference!</span>
            </h2>
            <p className="text-gray-600 mb-3 text-sm sm:text-base">
              Every contribution you make, no matter how small, creates a ripple effect of positive change in a child's life.
            </p>
          </section>
        </div>

        {/* Right Donation Form */}
        <div className="w-full md:w-1/3">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
            <h3 className="text-xl font-bold mb-6 text-center text-[#11616f]">Make a Donation</h3>
            
            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Select Amount (₹)</label>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[1000, 2500, 5000, 10000].map((presetAmount) => (
                  <button
                    key={presetAmount}
                    type="button"
                    className={`
                      border-2 border-gray-300 rounded-lg py-3 px-4 text-center font-medium donation-btn
                      transition-all duration-300
                      hover:translate-y-[-2px] hover:shadow-md
                      ${amount === presetAmount ? 'bg-[#ff6d4d] text-white border-[#ff6d4d]' : 'text-gray-700'}
                    `}
                    onClick={() => handleSelectAmount(presetAmount)}
                  >
                    ₹{presetAmount.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                <input
                  type="number"
                  id="customAmount"
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg custom-input focus:outline-none focus:border-[#ff6d4d] focus:ring-2 focus:ring-[#ff6d4d] focus:ring-opacity-10"
                  placeholder="Enter custom amount"
                  value={amount}
                  onChange={handleCustomAmountChange}
                  min="100"
                />
              </div>
            </div>

            {/* Impact Message */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-orange-800">
                <strong>Your ₹{amount.toLocaleString()} can:</strong>
              </p>
              <p className="text-sm text-orange-700 mt-1">
                {getImpactMessage()}
              </p>
            </div>

            {/* Personal Information */}
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg custom-input focus:outline-none focus:border-[#ff6d4d] focus:ring-2 focus:ring-[#ff6d4d] focus:ring-opacity-10"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg custom-input focus:outline-none focus:border-[#ff6d4d] focus:ring-2 focus:ring-[#ff6d4d] focus:ring-opacity-10"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg custom-input focus:outline-none focus:border-[#ff6d4d] focus:ring-2 focus:ring-[#ff6d4d] focus:ring-opacity-10"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                <input
                  type="date"
                  id="dob"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg custom-input focus:outline-none focus:border-[#ff6d4d] focus:ring-2 focus:ring-[#ff6d4d] focus:ring-opacity-10"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="panNo" className="block text-sm font-medium text-gray-700 mb-1">PAN No. *</label>
                <input
                  type="text"
                  id="panNo"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg custom-input focus:outline-none focus:border-[#ff6d4d] focus:ring-2 focus:ring-[#ff6d4d] focus:ring-opacity-10"
                  placeholder="Enter your PAN number"
                  value={panNo}
                  onChange={(e) => setPanNo(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                <input
                  type="text"
                  id="address"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg custom-input focus:outline-none focus:border-[#ff6d4d] focus:ring-2 focus:ring-[#ff6d4d] focus:ring-opacity-10"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                  <input
                    type="text"
                    id="city"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg custom-input focus:outline-none focus:border-[#ff6d4d] focus:ring-2 focus:ring-[#ff6d4d] focus:ring-opacity-10"
                    placeholder="Enter your city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                  <input
                    type="text"
                    id="state"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg custom-input focus:outline-none focus:border-[#ff6d4d] focus:ring-2 focus:ring-[#ff6d4d] focus:ring-opacity-10"
                    placeholder="Enter your state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
                <input
                  type="text"
                  id="pincode"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg custom-input focus:outline-none focus:border-[#ff6d4d] focus:ring-2 focus:ring-[#ff6d4d] focus:ring-opacity-10"
                  placeholder="Enter your pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Tax Benefit Info */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-green-800">
                <strong>💰 Tax Benefit:</strong> Get 50% tax deduction under Section 80G
              </p>
            </div>

            {/* Donate Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-lg font-bold text-white text-lg transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#ff6d4d' }}
            >
              Donate ₹{amount.toLocaleString()} Now
            </button>

            {/* Security Info */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                🔒 Secure payment powered by Razorpay
              </p>
            </div>
          </form>
        </div>
      </div>
      
      {/* Custom Modal for messages */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="relative p-8 bg-white w-96 max-w-sm rounded-lg shadow-xl text-center">
            <h3 className="text-lg font-bold mb-4">Donation Status</h3>
            <p className="text-gray-700 mb-6">{modalMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-[#ff6d4d] text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-80 transition-opacity"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
