import React from "react";
import { Link } from "react-router-dom";

export default function SocietyChangemaker() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative text-center py-20 bg-gradient-to-r from-gray-800 to-gray-400"
        style={{
          backgroundImage: "url('/image/volunteerbanner1.png')",
          backgroundSize: "fit",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            TOGETHER WE RISE
          </h1>
          <a
            href="https://forms.gle/EM26xbbwDoVA8eQM7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0e7490] hover:bg-[#f97316] text-white px-6 py-3 rounded-full inline-block"
          >
            VOLUNTEER REGISTRATION
          </a>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white rounded-xl shadow-md p-6 space-y-8">
          {/* Who are Society Changemakers */}
          <div>
            <h2 className="text-lg font-semibold text-[#11616f] flex items-center">
              <span className="mr-2" role="img" aria-label="globe">🌍</span> WHO ARE THE SOCIETY CHANGEMAKERS?
            </h2>
            <p className="mt-2 text-gray-700">
              <strong>Society Changemakers</strong> is an inspiring youth-driven volunteer network initiated by <b>NavvKhush Helping Foundation</b>, working with the vision of empowering individuals to become active contributors to social change.<br />
              We work at the grassroots level across education.<br />
              Whether you are a student, homemaker, working professional, or simply passionate about making a difference — you can be a Society Changemaker!
            </p>
          </div>

          {/* Powered by NavvKhush Helping Foundation */}
          <div>
            <h2 className="text-lg font-semibold text-[#11616f] flex items-center">
              <span className="mr-2" role="img" aria-label="handshake">🤝</span> POWERED BY NAVVKHUSH HELPING FOUNDATION
            </h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>
                <span className="mr-2" role="img" aria-label="diamond">🔸</span>
                <b>NavvKhush Helping Foundation</b> – Established in October 2023, focusing on child education, skill-building, and ESG (Environment, Social & Governance) projects.
              </li>
            </ul>
            <Link
              to="https://crimecontrol.in/"
              className="text-[#11616f] mt-2 block underline"
            >
              👉 Click here to learn more about Crime control & Social Development Organisation
            </Link>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-lg font-semibold text-[#11616f] flex items-center">
              <span className="mr-2" role="img" aria-label="gift">🎁</span> BENEFITS OF BECOMING A SOCIETY CHANGEMAKER
            </h2>
            <ul className="list-none mt-2 text-gray-700 space-y-1">
              <li><span role="img" aria-label="certificate">📜</span> Certificate of Participation / Appreciation</li>
              <li><span role="img" aria-label="graduation cap">🎓</span> Opportunity to lead social campaigns & projects</li>
              <li><span role="img" aria-label="brain">🧠</span> Personal development through trainings & workshops</li>
              <li><span role="img" aria-label="globe">🌍</span> Networking with like-minded changemakers</li>
              <li><span role="img" aria-label="trophy">🏆</span> Exclusive recognition for top performers</li>
              <li><span role="img" aria-label="writing hand">✍</span> Internship opportunities with recommendation letters (for eligible candidates)</li>
            </ul>
          </div>

          {/* Terms & Conditions */}
          <div>
            <h2 className="text-lg font-semibold text-[#11616f] flex items-center">
              <span className="mr-2" role="img" aria-label="clipboard">📋</span> TERMS & CONDITIONS
            </h2>
            <ul className="list-none mt-2 text-gray-700 space-y-1">
              <li><span role="img" aria-label="check">✔</span> Volunteers must commit to a minimum of 2 activities or campaigns per month.</li>
              <li><span role="img" aria-label="check">✔</span> All work must be authentic, ethical, and respectful to community guidelines.</li>
              <li><span role="img" aria-label="check">✔</span> A monthly impact report or activity log must be submitted.</li>
              <li><span role="img" aria-label="check">✔</span> Certificates will be issued only to those completing the minimum contribution.</li>
              <li><span role="img" aria-label="check">✔</span> The organization reserves the right to verify and validate all submitted work.</li>
              <li><span role="img" aria-label="check">✔</span> Misuse of the name or branding of NavvKhush Helping Foundation will lead to termination.</li>
            </ul>
          </div>

          {/* Join CTA */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3 flex items-center justify-center text-[#11616f]">
              <span className="mr-2" role="img" aria-label="memo">📝</span> READY TO JOIN?
            </h3>
            <p className="mb-4 text-gray-700">
              Become a part of the Society Changemakers Network today and start your journey of impact with NavvKhush!
            </p>
            <a
              href="https://forms.gle/EM26xbbwDoVA8eQM7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#11616f] hover:bg-[#ff6d4d] text-white px-6 py-3 rounded-lg inline-block font-semibold"
            >
              👉 CLICK HERE TO BECOME A SOCIETY CHANGEMAKER
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
