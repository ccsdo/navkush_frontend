



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from './pages/Admin.jsx';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './components/Home';
import About from './components/About';
import OurRecentWork from './components/Recent-Work';
import Blog from './components/Blog';
import Donate from './components/Donate';
import Sponsorship from './components/Sponsorship';
import OurProjects from './components/Our-Projects';
import Contact from './components/Contact';
import Support from './components/Support';
import Getinvolved from './components/Getinvolved';
import Ourimpact from './components/Ourimpact';
import Ourwork from './components/Ourwork';

// News & Events page
import NewsEventsPage from './components/NewsEvents';

// Profile pages
import BinduNarulaPage from './components/Profiles/BinduNarulaPage';
import RaviSinhaProfile from './components/Profiles/RaviSinha';
import ParulKumarProfile from './components/Profiles/ParulKumar';
import SandeepBhargavaProfile from './components/Profiles/SandeepBhargava';
import VijaySharmaProfile from './components/Profiles/VijaySharma';
import PrahladKumarGodaraProfile from './components/Profiles/PrahladKumarGodara';

// RecentProjects pages
import DigitalLiteracyProgram from './components/DigitalLiteracyProgram';
import CareerCounseling from './components/CareerCounseling';
import EyeCampInitiative from './components/EyeCampInitiative';
import ParentTeacherMeetings from './components/ParentTeacherMeetings';
import PlantingInitiative from './components/PlantingInitiative';
import StationeryDistribution from './components/StationeryDistribution';
import FirstAidKitDistribution from './components/FirstAidKitDistribution';
import TourismCoursePage from './components/TourismCoursePage';
import WomenAchieversAward2024 from './components/WomenAchieversAward';
import ChildDevelopment from './components/ChildDevelopment';
import FoodEssential from "./components/FoodEssential";

// Our Project All (detailed project pages)
import NayiRoshni from './components/OurProjects/NayiRoshni';
import CareerCounsellingProject from './components/OurProjects/CareerCounseling';
import EaseMyTripPage from './components/OurProjects/EaseMyTrip';
import FreeEducation from './components/OurProjects/FreeEducation';
import DigitalLiteracyAwareness from './components/OurProjects/DigitalLiteracy';
import UnderprivilegedChildren from './components/OurProjects/UnderprivilegedChildren';

// Blog detail pages (corrected imports)
import Blog1AIEducation from './components/blog/AIEducation';
import Blog2StudentsScore from './components/blog/StudentsScore';
import Blog3IndianClassrooms from './components/blog/IndianClassrooms';
import Blog4MentalHealth from './components/blog/Mental';
import Blog5ChildrenKnow from './components/blog/childrenknow';

// Founder page import
import Founder from './components/Founder';

// Educationchild page import
import Educationchild from './components/Educationchild';

// Donationform import
import Donationform from './components/Donationform';

// SocietyChangeMaker import 
import SocietyChangeMaker from './components/SocietyChangeMaker';

// Presence import
import Presence from './components/Presence';

// StoriesCarousel import
import StoriesCarousel from './components/StoriesCarousel';
//policy import
import Policy from './components/Addpolicy/Policy';


//ChildRight imports
import ChildRight from './components/ChildRight/ChildRight';
import RightToSurvival from './components/ChildRight/RighttoSurvival';
import RighttoEduction from './components/ChildRight/RighttoEduction';
import RiProtection from './components/ChildRight/RiProtection';
import RiParticipation from './components/ChildRight/RiParticipation';
import Healthnutrition from './components/ChildRight/HealthNutrition';
import Nondiscrimination from './components/ChildRight/NonDiscrimination';
import Riidentity from './components/ChildRight/RiIdentity';

// Wedo page imports
// Wedo page imports
import AccessToEducation from './components/Wedo/Access';
import QualityOfEducation from './components/Wedo/QualityOfEducation';
import EarlyChildhoodEducation from './components/Wedo/Early';
import DigitalEducation from './components/Wedo/Digitals';

import SkillBasedLearning from './components/Wedo/Learning';
import EducationalRightsAwareness from './components/Wedo/RightsAwareness';
import NutritionEducationLink from './components/Wedo/Nutrition';


// FAQ import
import Faq from './components/Faq';

// Lazy load Volunteer, Membership, JoinNgo, Intership, and Career
const Volunteer = React.lazy(() => import('./components/volunteer'));
const Membership = React.lazy(() => import('./components/Membership'));
const JoinNgo = React.lazy(() => import('./components/JoinNgo'));
const Internship = React.lazy(() => import('./components/Internship'));
const Career = React.lazy(() => import('./components/Career'));
import award from "./assets/award.jpg"
import award1 from "./assets/child development.jpg"
export default function App() {
  return (
    <>
   

      <Navbar />

      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recent-work" element={<OurRecentWork />} />
          <Route path="/blog" element={<Blog />} />
          {/* Blog detail routes (corrected) */}
          <Route path="/blog/ai-education" element={<Blog1AIEducation />} />
          <Route path="/blog/students-score" element={<Blog2StudentsScore />} />
          <Route path="/blog/indian-classroom" element={<Blog3IndianClassrooms />} />
          <Route path="/blog/mental" element={<Blog4MentalHealth />} />
          <Route path="/blog/childrenknow" element={<Blog5ChildrenKnow />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donationform" element={<Donationform />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/projects" element={<OurProjects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/getinvolved" element={<Getinvolved />} />
          <Route path="/ourimpact" element={<Ourimpact />} />
          <Route path="/ourwork" element={<Ourwork />} />
          {/* News & Events route */}
          <Route path="/news-events" element={<NewsEventsPage />} />

          {/* Founder route */}
          <Route path="/founder" element={<Founder />} />

          {/* Educationchild route */}
          <Route path="/educationchild" element={<Educationchild />} />

          {/* Presence route */}
          <Route path="/presence" element={<Presence />} />

          {/* StoriesCarousel route */}
          <Route path="/stories" element={<StoriesCarousel />} />

          {/* FAQ route */}
          <Route path="/faq" element={<Faq />} />
          {/* policy routes */}
           <Route path="/policy/policy" element={<Policy/>} />
          {/* ChildRight routes */}
          <Route path="/childright/child-right" element={<ChildRight/>} />
          <Route path="/childright/rightto-survival" element={<RightToSurvival/>} />
           <Route path="/childright/rightto-education" element={<RighttoEduction/>} />
           <Route path="/childright/riprotection" element={<RiProtection/>} />
           <Route path="/childright/riparticipation" element={<RiParticipation/>} />
           <Route path="/childright/healthnutrition" element={<Healthnutrition/>} />
           <Route path="/childright/nondiscrimination" element={<Nondiscrimination/>} />
           <Route path="/childright/riidentity" element={<Riidentity/>} />

          {/* Wedo routes */}
          <Route path="/wedo/access" element={<AccessToEducation />} />
          <Route path="/wedo/quality-of-education" element={<QualityOfEducation />} />
          <Route path="/wedo/early" element={<EarlyChildhoodEducation />} />
          <Route path="/wedo/digitals" element={<DigitalEducation />} />
          <Route path="/wedo/learning" element={<SkillBasedLearning />} />
          <Route path="/wedo/right-awareness" element={<EducationalRightsAwareness />} />
          <Route path="/wedo/nutrition" element={<NutritionEducationLink />} />  

          {/* Our Project All - detailed project routes */}
          <Route path="/projects/nayi-roshni" element={<NayiRoshni />} />
          <Route path="/projects/career-counselling" element={<CareerCounsellingProject />} />
          <Route path="/projects/easemytrip" element={<EaseMyTripPage />} />
          <Route path="/projects/free-education-100" element={<FreeEducation />} />
          <Route path="/projects/digital-literacy-awareness" element={<DigitalLiteracyAwareness />} />
          <Route path="/projects/sponsorship-87" element={<UnderprivilegedChildren />} />

          {/* Profile routes */}
          <Route path="/profiles/bindu-narula" element={<BinduNarulaPage />} />
          <Route path="/profiles/ravi-sinha" element={<RaviSinhaProfile />} />
          <Route path="/profiles/parul-kumar" element={<ParulKumarProfile />} />
          <Route path="/profiles/sandeep-bhargava" element={<SandeepBhargavaProfile />} />
          <Route path="/profiles/vijay-sharma" element={<VijaySharmaProfile />} />
          <Route path="/profiles/prahlad-kumar-godara" element={<PrahladKumarGodaraProfile />} />

          {/* RecentProjects routes */}
          <Route path="/digital-literacy-program" element={<DigitalLiteracyProgram />} />
          <Route path="/career-counseling" element={<CareerCounseling />} />
          <Route path="/eye-camp-initiative" element={<EyeCampInitiative />} />
          <Route path="/parent-teacher-meetings" element={<ParentTeacherMeetings />} />
          <Route path="/planting-initiative" element={<PlantingInitiative />} />
          <Route path="/stationery-distribution" element={<StationeryDistribution />} />
          <Route path="/first-aid-kit-distribution" element={<FirstAidKitDistribution />} />
          <Route path="/tourism-course" element={<TourismCoursePage />} />
          <Route path="/women-achievers-award" element={<WomenAchieversAward2024 />} />
          <Route path="/child-development" element={<ChildDevelopment />} />
          <Route path="/digital-literacy-program" element={<DigitalLiteracyProgram />} />
          <Route path="/food-essential" element={<FoodEssential />} />

          {/* Society Changemaker route */}
          <Route path="/society-changemaker" element={<SocietyChangeMaker />} />

          <Route
            path="/volunteer"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Volunteer />
              </React.Suspense>
            }
          />
          <Route
            path="/membership"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Membership />
              </React.Suspense>
            }
          />
          <Route
            path="/joinngo"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <JoinNgo />
              </React.Suspense>
            }
          />
          <Route
            path="/internship"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Internship />
              </React.Suspense>
            }
          />
          <Route
            path="/career"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Career />
              </React.Suspense>
            }
          />
          <Route path="/12/13/admin" element={<Admin />} />
          <Route path="*" element={<Home />} />
        </Routes>

      <Footer />
    </>
  );
}
