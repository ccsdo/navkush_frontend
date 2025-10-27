import React from "react";
import Hero from "./Hero";
import Getinvolved from "./Getinvolved";
import Ourimpact from "./Ourimpact";
// import Ourwork from "./Ourwork";
// import NewsEventsPage from "./NewsEvents";
// import Founder from "./Founder";
import Educationchild from "./Educationchild";
import Donationform from "./Donationform";
import Presence from "./Presence";
import StoriesCarousel from "./StoriesCarousel";

const Home = () => {
  return (
    <div>
      <Hero />
      <Donationform />
      <Educationchild />
      <Getinvolved />
      <Ourimpact />
      <StoriesCarousel />
      <Presence />
      {/* <Ourwork /> */}
      {/* <Founder /> */}
      {/* <NewsEventsPage /> */}
      {/* You can add more sections/components for the Home page here */}
    </div>
  );
};

export default Home;
