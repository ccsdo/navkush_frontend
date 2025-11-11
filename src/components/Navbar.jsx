import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const useDelayedHover = (initial = false, delay = 200) => {
  const [open, setOpen] = useState(initial);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, delay);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, delay);
  };

  return {
    open,
    setOpen,
    handleMouseEnter,
    handleMouseLeave,
    handleDropdownMouseEnter,
    handleDropdownMouseLeave,
  };
};


// Desktop dropdowns star
const Navbar = () => {
  // For About Us dropdown
  const aboutDropdown = useDelayedHover(false, 200);
  const childRightDropdown = useDelayedHover(false, 200);
  const policyDropdown = useDelayedHover(false, 200);
  // For We Do nested dropdown
  const weDoDropdown = useDelayedHover(false, 200);
  // For Get Involved dropdown
  const getInvolvedDropdown = useDelayedHover(false, 200);
  // For Contact Me dropdown
  const contactDropdown = useDelayedHover(false, 200);


  // Mobile dropdown start
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileChildRightOpen, setMobileChildRightOpen] = useState(false);
  const [mobileWeDoOpen, setMobileWeDoOpen] = useState(false);
  const [mobileGetInvolvedOpen, setMobileGetInvolvedOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);
  const [mobilePolicyOpen, setMobilePolicyOpen] = useState(false);
  // Classes for Donate Button (fixed vertical)
  const donateBtnClass = "bg-[#11616f] hover:bg-[#F05A28] text-white transition-all duration-200 shadow-lg relative group";
  const navLinkClasses = "font-bold text-lg tracking-wide";

  return (
    <> 
      <nav className="bg-[#f2fbff] shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" aria-label="Home">
                <img
                  className="h-12 w-auto"
                  src="/logo.png"
                  alt="NavvKhush Logo"
                />
              </Link>
            </div>

            {/* Hamburger for mobile */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="bg-[#11616f] text-white focus:outline-none"
                aria-label="Open menu"
              >
                {mobileMenuOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
              </button>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6 items-center">
              {/* About Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={aboutDropdown.handleMouseEnter}
                onMouseLeave={aboutDropdown.handleMouseLeave}
              >
                <Link to="/about" className="flex items-center space-x-1 hover:text-teal-600 text-sm px-2 py-1 ">
                  <span>About Us</span>
                  <ChevronDown size={16} />
                </Link>
                {aboutDropdown.open && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                    onMouseEnter={aboutDropdown.handleDropdownMouseEnter}
                    onMouseLeave={aboutDropdown.handleDropdownMouseLeave}
                  >
                    {/* ✅ Policy start Dropdown */}
                    <div
                      className="relative group"
                      onMouseEnter={policyDropdown.handleMouseEnter}
                      onMouseLeave={policyDropdown.handleMouseLeave}
                    >
                      <button className="w-full text-left px-3 py-1 text-sm flex items-center justify-between hover:bg-gray-100">
                        Policy <ChevronDown size={14} />
                      </button>
                      {policyDropdown.open && (
                        <div
                          className="absolute left-full top-0 mt-0 w-56 bg-white rounded-lg shadow-lg py-2 z-50"
                          onMouseEnter={policyDropdown.handleDropdownMouseEnter}
                          onMouseLeave={policyDropdown.handleDropdownMouseLeave}
                        >
                          <Link to="/policy/policy" className="block px-3 py-1 text-sm hover:bg-gray-100">ALL-Policy</Link>
                          {/* <Link to="/policy/board-governance" className="block px-3 py-1 text-sm hover:bg-gray-100">Governance policy</Link>
                          <Link to="/childright/rightto-education" className="block px-3 py-1 text-sm hover:bg-gray-100">Right to Education</Link>
                          <Link to="/childright/riprotection" className="block px-3 py-1 text-sm hover:bg-gray-100">Right to Protection</Link>
                          <Link to="/childright/riparticipation" className="block px-3 py-1 text-sm hover:bg-gray-100">Right to Participation</Link>
                          <Link to="/childright/healthnutrition" className="block px-3 py-1 text-sm hover:bg-gray-100">Right to Health & Nutrition</Link>
                          <Link to="/childright/nondiscrimination" className="block px-3 py-1 text-sm hover:bg-gray-100">Right to Equality & Non-Discrimination</Link>
                          <Link to="/childright/riidentity" className="block px-3 py-1 text-sm hover:bg-gray-100">Right to Identity</Link>  */}
                        </div> 
                      )}
                    </div>
                    {/* ✅ Policy Dropdown end*/}
                    {/* ChildRight Dropdown start */}
                    <div
                      className="relative group"
                      onMouseEnter={childRightDropdown.handleMouseEnter}
                      onMouseLeave={childRightDropdown.handleMouseLeave}
                    >
                      <button className="w-full text-left px-3 py-1 text-sm flex items-center justify-between hover:bg-gray-100">
                        Child Right <ChevronDown size={14} />
                      </button>
                      {childRightDropdown.open && (
                        <div
                          className="absolute left-full top-0 mt-0 w-56 bg-white rounded-lg shadow-lg py-2 z-50"
                          onMouseEnter={childRightDropdown.handleDropdownMouseEnter}
                          onMouseLeave={childRightDropdown.handleDropdownMouseLeave}
                        >
                          <Link to="/childright/child-right" className="block px-3 py-1 text-sm hover:bg-gray-100">Child Right</Link>
                          <Link to="/childright/rightto-survival" className="block px-3 py-1 text-sm hover:bg-gray-100">Right to survival</Link>
                          <Link to="/childright/rightto-education" className="block px-3 py-1 text-sm hover:bg-gray-100">Right to Education</Link>
                          <Link to="/childright/riprotection" className="block px-3 py-1 text-sm hover:bg-gray-100">Right to Protection</Link>
                          <Link to="/childright/riparticipation" className="block px-3 py-1 text-sm hover:bg-gray-100">Right to Participation</Link>
                          <Link to="/childright/healthnutrition" className="block px-3 py-1 text-sm hover:bg-gray-100">Right to Health & Nutrition</Link>
                          <Link to="/childright/nondiscrimination" className="block px-3 py-1 text-sm hover:bg-gray-100">Right to Equality & Non-Discrimination</Link>
                          <Link to="/childright/riidentity" className="block px-3 py-1 text-sm hover:bg-gray-100">Right to Identity</Link>
                        </div>
                      )}
                    </div>
                    {/* ChildRight Dropdown end */}
                    {/* what we do Dropdown start */}
                    <div
                      className="relative group"
                      onMouseEnter={weDoDropdown.handleMouseEnter}
                      onMouseLeave={weDoDropdown.handleMouseLeave}
                    >
                      <button className="w-full text-left px-3 py-1 text-sm flex items-center justify-between hover:bg-gray-100">
                        What We Do <ChevronDown size={14} />
                      </button>
                      {weDoDropdown.open && (
                        <div
                          className="absolute left-full top-0 mt-0 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                          onMouseEnter={weDoDropdown.handleDropdownMouseEnter}
                          onMouseLeave={weDoDropdown.handleDropdownMouseLeave}
                        >
                          <Link
                            to="/wedo/access"
                            className="block px-3 py-1 text-sm hover:bg-gray-100"
                          >
                            Access to Education
                          </Link>
                          <Link
                            to="/wedo/quality-of-education"
                            className="block px-3 py-1 text-sm hover:bg-gray-100"
                          >
                            Quality of Education
                          </Link>
                          <Link
                            to="/wedo/early"
                            className="block px-3 py-1 text-sm hover:bg-gray-100"
                          >
                            Early Childhood Education
                          </Link>
                          <Link
                            to="/wedo/digitals"
                            className="block px-3 py-1 text-sm hover:bg-gray-100"
                          >
                            Digital Education
                          </Link>
                          <Link
                            to="/wedo/learning"
                            className="block px-3 py-1 text-sm hover:bg-gray-100"
                          >
                            Skill-based Learning
                          </Link>
                          <Link
                            to="/wedo/right-awareness"
                            className="block px-3 py-1 text-sm hover:bg-gray-100"
                          >
                            Educational Rights & Awareness
                          </Link>
                          <Link
                            to="/wedo/nutrition" 
                            className="block px-3 py-1 text-sm hover:bg-gray-100"
                          >
                            Nutrition & Education Link
                          </Link>
                        </div>
                      )}
                    </div>
                    {/* what we do Dropdown end */}
                  </div>
                )}
              </div>

              <Link to="/recent-work" className="hover:text-teal-600 text-sm px-2 py-1">
                Our Recent Work
              </Link>
              <Link to="/blog" className="hover:text-teal-600 text-sm px-2 py-1">
                Blog
              </Link>
              <Link to="/projects" className="hover:text-teal-600 text-sm px-2 py-1">
                Our Project
              </Link>

              {/* Get Involved Dropdown */}
              <div
                className="relative"
                onMouseEnter={getInvolvedDropdown.handleMouseEnter}
                onMouseLeave={getInvolvedDropdown.handleMouseLeave}
              >
                <button className="flex items-center space-x-1 hover:text-teal-600 text-sm px-2 py-1">
                  <span>Get Involved</span>
                  <ChevronDown size={16} />
                </button>
                {getInvolvedDropdown.open && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                    onMouseEnter={getInvolvedDropdown.handleDropdownMouseEnter}
                    onMouseLeave={getInvolvedDropdown.handleDropdownMouseLeave}
                  >
                    <Link
                      to="/volunteer"
                      className="block px-3 py-1 text-sm hover:bg-gray-100"
                    >
                      Volunteer
                    </Link>
                    <Link
                      to="/membership"
                      className="block px-3 py-1 text-sm hover:bg-gray-100"
                    >
                      Membership
                    </Link>
                    <Link
                      to="/internship"
                      className="block px-3 py-1 text-sm hover:bg-gray-100"
                    >
                      Internship
                    </Link>
                    <Link
                      to="/joinngo"
                      className="block px-3 py-1 text-sm hover:bg-gray-100"
                    >
                      Join as an NGO
                    </Link>
                    <Link
                      to="/sponsorship"
                      className="block px-3 py-1 text-sm hover:bg-gray-100"
                    >
                      Sponsorship
                    </Link>
                    <Link
                      to="/career"
                      className="block px-3 py-1 text-sm hover:bg-gray-100"
                    >
                      Career
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact Me Dropdown */}
              <div
                className="relative"
                onMouseEnter={contactDropdown.handleMouseEnter}
                onMouseLeave={contactDropdown.handleMouseLeave}
              >
                <button className="flex items-center space-x-1 hover:text-teal-600 text-sm px-2 py-1">
                  <span>Contact</span>
                  <ChevronDown size={16} />
                </button>
                {contactDropdown.open && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                    onMouseEnter={contactDropdown.handleDropdownMouseEnter}
                    onMouseLeave={contactDropdown.handleDropdownMouseLeave}
                  >
                    <Link
                      to="/contact"
                      className="block px-3 py-1 text-sm hover:bg-gray-100"
                    >
                      Contact
                    </Link>
                    <Link
                      to="/faq"
                      className="block px-3 py-1 text-sm hover:bg-gray-100"
                    >
                      FAQ
                    </Link>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <Link
                to="/society-changemaker"
                className="bg-[#f05a28] text-white px-3 py-1 rounded font-semibold text-sm flex items-center justify-center"
              >
                SOCIETY CHANGEMAKER
              </Link>
              <Link
                to="/donate"
                className="bg-[#0d5c63] text-white px-3 py-1 rounded font-semibold text-sm flex items-center justify-center"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
  
        {/* Mobile Menu section start */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full z-50">
            <div className="flex flex-col px-4 py-4 space-y-2">
              {/* About Us Dropdown */}
              <div>
                <button
                  className="flex items-center w-full justify-between px-2 py-1 text-left font-medium hover:text-teal-600 text-sm"
                  onClick={() => setMobileAboutOpen((v) => !v)}
                >
                  <span>About Us</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileAboutOpen && (
                  <div className="pl-4">

                    <div>

                      {/*  all policy mobile Dropdown Start  */}

                      {/* <div>
                        <button
                          className="flex items-center w-full justify-between px-2 py-1 text-left text-sm hover:text-teal-600"
                          onClick={() => setMobilePolicyOpen((v) => !v)}
                        >
                          <span>All Policy</span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform ${mobilePolicyOpen ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                        {mobilePolicyOpen && (
                          <div className="pl-4">
                            <a
                              href="/pdf/BOARD GOVERNANCE POLICY .pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                            >
                              Board-Governance
                            </a>

                            <a
                              href="/pdf/POSH POLICY .pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                            >
                              Posh-Policy
                            </a>
                            <a
                              href="/pdf/CHILD PROTECTION POLICY  (1).pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                            >
                              Child-Protection-Policy
                            </a>
                            <a
                              href="/pdf/FINANCIAL POLICY .pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                            >
                              Financial-Policy
                            </a>
                            <a
                              href="/pdf/FUNDRAISING & DONATION POLICY .pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                            >
                              Fundraising-Donation
                            </a>
                            <a
                              href="/pdf/HR  EMPLOYMENT POLICY .pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                            >
                              Hr-Employment
                            </a>
                            <a
                              href="/pdf/PROCUREMENT POLICY .pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                            >
                              Procurement-Policy
                            </a>
                            <a
                              href="/pdf/VOLUNTEER POLICY .pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                            >
                              Volunteer-Policy
                            </a>
                          </div>
                        )}
                      </div> */}
                       {/*  all policy mobile Dropdown end */}

                      {/* ✅ ✅ ✅ NEW: Child Right Dropdown Start ✅ ✅ ✅ */}
                      {/* <div>
                        <button
                          className="flex items-center w-full justify-between px-2 py-1 text-left text-sm hover:text-teal-600"
                          onClick={() => setMobileChildRightOpen((v) => !v)}
                        >
                          <span>Child Right</span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform ${mobileChildRightOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {mobileChildRightOpen && (
                          <div className="pl-4">
                            <Link to="/childright/child-right" className="block px-2 py-1 text-sm hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>Child Right</Link>
                            <Link to="/childright/rightto-survival" className="block px-2 py-1 text-sm hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>Right to Survival</Link>
                            <Link to="/childright/rightto-education" className="block px-2 py-1 text-sm hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>Right to Education</Link>
                            <Link to="/childright/riprotection" className="block px-2 py-1 text-sm hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>Right to Protection</Link>
                            <Link to="/childright/riparticipation" className="block px-2 py-1 text-sm hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>Right to Participation</Link>
                            <Link to="/childright/healthnutrition" className="block px-2 py-1 text-sm hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>Health & Nutrition</Link>
                            <Link to="/childright/nondiscrimination" className="block px-2 py-1 text-sm hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>Equality & Non-Discrimination</Link>
                            <Link to="/childright/riidentity" className="block px-2 py-1 text-sm hover:bg-gray-100 rounded" onClick={() => setMobileMenuOpen(false)}>Right to Identity</Link>
                          </div>
                        )}
                      </div> */}
                      {/* ✅ ✅ ✅ NEW: Child Right Dropdown END ✅ ✅ ✅ */}

                      {/*  we DO mobile Dropdown Start  */}
                      <button
                        className="flex items-center w-full justify-between px-2 py-1 text-left text-sm hover:text-teal-600"
                        onClick={() => setMobileWeDoOpen((v) => !v)}
                      >
                        <span>We Do</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${mobileWeDoOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {mobileWeDoOpen && (
                        <div className="pl-4">
                          <Link
                            to="/wedo/access"
                            className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Access to Education
                          </Link>
                          <Link
                            to="/wedo/quality-of-education"
                            className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Quality of Education
                          </Link>
                          <Link
                            to="/wedo/early"
                            className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Early Childhood Education
                          </Link>
                          <Link
                            to="/wedo/digitals"
                            className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Digital Education
                          </Link>
                          {/* <Link
                            to="/wedo/Child-right"
                            className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Child Right
                          </Link> */}
                          <Link
                            to="/wedo/learning"
                            className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Skill-based Learning
                          </Link>
                          <Link
                            to="/wedo/right-awareness"
                            className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Educational Rights & Awareness
                          </Link>
                          <Link
                            to="/wedo/nutrition"
                            className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Nutrition & Education Link
                          </Link>

                        </div>
                      )}
                      {/*  we DO mobile Dropdown Start  */}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/recent-work"
                className="block px-2 py-1 hover:bg-gray-100 rounded text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Recent Work
              </Link>
              <Link
                to="/blog"
                className="block px-2 py-1 hover:bg-gray-100 rounded text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/projects"
                className="block px-2 py-1 hover:bg-gray-100 rounded text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Project
              </Link>

              {/* Get Involved Dropdown */}
              <div>
                <button
                  className="flex items-center w-full justify-between px-2 py-1 text-left font-medium hover:text-teal-600 text-sm"
                  onClick={() => setMobileGetInvolvedOpen((v) => !v)}
                >
                  <span>Get Involved</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${mobileGetInvolvedOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileGetInvolvedOpen && (
                  <div className="pl-4">
                    <Link
                      to="/volunteer"
                      className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Volunteer
                    </Link>
                    <Link
                      to="/membership"
                      className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Membership
                    </Link>
                    <Link
                      to="/internship"
                      className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Internship
                    </Link>
                    <Link
                      to="/joinngo"
                      className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Join as an NGO
                    </Link>
                    <Link
                      to="/sponsorship"
                      className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sponsorship
                    </Link>
                    <Link
                      to="/career"
                      className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Career
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact Me Dropdown */}
              <div>
                <button
                  className="flex items-center w-full justify-between px-2 py-1 text-left font-medium hover:text-teal-600 text-sm"
                  onClick={() => setMobileContactOpen((v) => !v)}
                >
                  <span>Contact</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${mobileContactOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileContactOpen && (
                  <div className="pl-4">
                    <Link
                      to="/contact"
                      className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    <Link
                      to="/faq"
                      className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      FAQ
                    </Link>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <Link
                to="/society-changemaker"
                className="bg-[#f05a28] text-white px-3 py-1 rounded font-semibold mt-2 text-sm flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                SOCIETY CHANGEMAKER
              </Link>
              <Link
                to="/donate"
                className="bg-[#0d5c63] text-white px-3 py-1 rounded font-semibold mt-2 text-sm flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </nav>
      {/* Fixed Vertical Donate Button */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <Link
          to="/donate"
          className={`px-1 py-7 rounded-full flex items-center justify-center ${donateBtnClass} ${navLinkClasses}`}
          style={{ boxShadow: "0 4px 24px 0 rgba(17,97,111,0.15)" }}
        >
          <span className="absolute left-0 top-0 w-full h-full pointer-events-none">
            <span className="block w-1/3 h-full bg-white opacity-20 blur-lg animate-donate-shine group-hover:animate-donate-shine" />
          </span>
          <span className={`transform rotate-0 inline-block whitespace-nowrap relative z-10 ${navLinkClasses}`}>DONATE</span>
        </Link>
      </div>

      {/* Floating Social Media Icons */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 space-y-4 hidden lg:block">
        {/* Facebook */}
        <a href="https://www.facebook.com/share/1CsRf5rAoS/" target="_blank" rel="noopener noreferrer" className="block w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.516c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>

        {/* Reddit / Blog / YouTube */}
        <a href="http://Instagram.com/navv_khush" target="_blank" rel="noopener noreferrer" className="block w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transform hover:scale-110 transition-all duration-300 shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
<path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.5-.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5z"/>
          </svg>
        </a>

        {/* YouTube */}
        <a href="https://www.youtube.com/@Navvkhushhelpingfoundationn" target="_blank" rel="noopener noreferrer" className="block w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transform hover:scale-110 transition-all duration-300 shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/kavita-rawat-914669260" target="_blank" rel="noopener noreferrer" className="block w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transform hover:scale-110 transition-all duration-300 shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default Navbar;
