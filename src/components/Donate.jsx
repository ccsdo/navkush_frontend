import React from "react";

const Donate = () => {
  const openRazorpay = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      amount: 50000, // amount in paise (₹500)
      currency: "INR",
      name: "NavvKhush Helping Foundation",
      description: "Online Donation",
      image: "/image/logo.png",
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#11616f", // changed to match brand color
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="font-sans antialiased text-[#11616f] bg-[#ff6d4d]/10 min-h-screen">
      {/* Header Section */}
      <section className="py-6 text-center bg-[#11616f] p-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-Medium text-white capitalize text-4xl">
            Donate
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto p-4 md:p-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Bank Account Details */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-xl border border-[#11616f]/20">
            <h2 className="text-2xl font-bold text-center mb-6 text-[#11616f] uppercase">
              Donate By Bank Account
            </h2>
            <div className="space-y-4 mb-8">
              <input
                type="text"
                value="NavvKhush Helping Foundation"
                disabled
                className="w-full p-3 rounded-md bg-[#ff6d4d]/10 border border-[#11616f]/30 cursor-not-allowed text-[#11616f]"
              />
              <input
                type="text"
                value="50200082246309"
                disabled
                className="w-full p-3 rounded-md bg-[#ff6d4d]/10 border border-[#11616f]/30 cursor-not-allowed text-[#11616f]"
              />
              <input
                type="text"
                value="HDFC0000329"
                disabled
                className="w-full p-3 rounded-md bg-[#ff6d4d]/10 border border-[#11616f]/30 cursor-not-allowed text-[#11616f]"
              />
              <input
                type="text"
                value="Vasundhara Enclave, Delhi 110096"
                disabled
                className="w-full p-3 rounded-md bg-[#ff6d4d]/10 border border-[#11616f]/30 cursor-not-allowed text-[#11616f]"
              />
            </div>

            <h2 className="text-2xl font-bold text-center mb-6 text-[#11616f] uppercase">
              Donate By Bank Cheque
            </h2>
            <div className="flex justify-center">
              <img
                src="/image/bcheck.jpg"
                alt="Sample Cheque"
                className="w-full max-w-md p-6 rounded-lg border-2 border-dashed border-[#ff6d4d]"
              />
            </div>
          </div>

          {/* QR Code Donation */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-xl border border-[#11616f]/20">
            <h2 className="text-2xl font-bold text-center mb-6 text-[#ff6d4d] uppercase">
              Donate By QR Code
            </h2>
            <div className="flex flex-col items-center text-center space-y-4">
              <div
                className="bg-gradient-to-br from-[#ff6d4d]/10 to-[#11616f]/10 p-6 rounded-lg shadow-inner cursor-pointer"
                onClick={() => window.open('/image/bank.jpeg', '_blank')}
              >
                <img
                  src="/image/bank.jpeg"
                  alt="QR Code"
                  width={500}
                  height={500}
                  className="border border-[#11616f]/20 rounded hover:scale-105 transition-transform duration-300"
                />
                <p className="text-sm font-semibold text-[#11616f] mt-2">
                  📱 Click to view in full size
                </p>
              </div>
              <div className="bg-[#ff6d4d]/10 border border-[#ff6d4d]/30 rounded-lg p-4 max-w-sm">
                <p className="text-sm text-[#ff6d4d] font-medium">
                  अगर QR कोड साफ़ नहीं दिख रहा है, <strong>इमेज को टैप/क्लिक करके सेव करें और UPI ऐप में स्कैन करें</strong>
                </p>
              </div>
              {/* Payment Apps */}
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <span className="bg-[#11616f]/10 px-3 py-2 rounded-lg text-xs font-medium text-[#11616f]">Paytm</span>
                <span className="bg-[#ff6d4d]/10 px-3 py-2 rounded-lg text-xs font-medium text-[#ff6d4d]">GPay</span>
                <span className="bg-[#11616f]/10 px-3 py-2 rounded-lg text-xs font-medium text-[#11616f]">PhonePe</span>
              </div>
              {/* Razorpay Button */}
              <button
                onClick={openRazorpay}
                className="mt-6 bg-[#11616f] hover:bg-[#0d4953] text-white px-6 py-3 rounded-lg shadow-md transition"
              >
                Donate Online via Razorpay
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Donate;
