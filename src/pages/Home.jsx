import React from "react";
import Banner from "../layouts/Banner";
import Policy from "../layouts/Policy";
import Ads from "../layouts/Ads";
import NewArrivals from "../layouts/NewArrivals";
import BestSellers from "../layouts/BestSellers";
import SpecialOffers from "../layouts/SpecialOffers";
import PhoneOfTheYear from "../layouts/PhoneOfTheYear";

const Home = () => {
  return (
    <>
      <Banner />
      <Policy />
      <Ads />
      <NewArrivals />
      <BestSellers />
      <PhoneOfTheYear />
      <SpecialOffers />
    </>
  );
};

export default Home;
