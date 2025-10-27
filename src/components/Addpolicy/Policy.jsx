import React from "react";
import { Download, Shield } from "lucide-react";

const policies = [
  { name: "Board-Governance", file: "/pdf/BOARD GOVERNANCE POLICY .pdf" },
  { name: "Posh-Policy", file: "/pdf/POSH POLICY .pdf" },
  { name: "Child-Protection-Policy", file: "/pdf/CHILD PROTECTION POLICY  (1).pdf" },
  { name: "Financial-Policy", file: "/pdf/FINANCIAL POLICY .pdf" },
  { name: "Fundraising-Donation", file: "/pdf/FUNDRAISING & DONATION POLICY .pdf" },
  { name: "Hr-Employment", file: "/pdf/HR  EMPLOYMENT POLICY .pdf" },
  { name: "Procurement-Policy", file: "/pdf/PROCUREMENT POLICY .pdf" },
  { name: "Volunteer-Policy", file: "/pdf/VOLUNTEER POLICY .pdf" },

];

const Polici = () => {
  const handleOpenAndDownload = (file) => {
    if (!file) {
      alert("File not available!");
      return;
    }

    // ✅ Step 1: Open PDF in new tab
    window.open(file, "_blank");

    // ✅ Step 2: After 1 second, trigger download
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = file;
      link.setAttribute("download", file.split("/").pop());
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000); // delay for smooth behavior
  };

  return (
  <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10 mt-10 flex flex-col lg:flex-row gap-10 items-start">
    {/* Left Section */}
    <div className="lg:w-1/2 text-left">
      <div className="flex items-center mb-4">
        <Shield className="text-blue-600 w-10 h-10 mr-3" />
        <h1 className="text-3xl font-bold text-gray-800">Our Policy Framework</h1>
      </div>
      <p className="text-gray-600 text-lg mb-6">
        Guiding principles for a secure and productive environment.
        Explore our organizational policies to ensure transparency,
        protection, and compliance across all operations.
      </p>
      <img
        src="/image/policy benar.png"
        alt="Policy Framework"
        className="rounded-2xl shadow-lg"
      />
    </div>

    {/* Right Section */}
    <div className="lg:w-1/2 bg-gray-50 rounded-2xl p-6 shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Download Policy Documents
      </h2>
      <ul className="space-y-4">
        {policies.map((policy, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <span className="text-lg font-medium text-gray-700">{policy.name}</span>
            <button
              onClick={() => handleOpenAndDownload(policy.file)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <Download size={18} />
              Open & Download
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

};

export default Polici;
