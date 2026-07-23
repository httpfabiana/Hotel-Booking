import React from "react";
import Hero from "../../components/Hero/Hero";
import FeaturedDestination from "../../components/FeaturedDestination/FeaturedDestination";
import ExclusiveOffers from "../../components/ExclusiveOffers/ExclusiveOffers";
import Testimonial from "../../components/Testimonial/Testimonial";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedDestination/>
      <ExclusiveOffers/>
      <Testimonial/>
      <NewsLetter/>
    </div>
  )
}

export default Home;