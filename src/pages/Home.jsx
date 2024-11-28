import React from "react";
import Header from "../layouts/Header";
import Banner from "../layouts/Banner";
import Policy from "../layouts/Policy";
import Ads from "../layouts/Ads";
import NewArrivals from "../layouts/NewArrivals";
import BestSellers from "../layouts/BestSellers";
import SpecialOffers from "../layouts/SpecialOffers";
import PhoneOfTheYear from "../layouts/PhoneOfTheYear";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner/>
      <Policy/>
      <Ads/>
      <NewArrivals/>
      <BestSellers/>
      <PhoneOfTheYear/>
      <SpecialOffers/>
      <Footer/>
    </>
  );
};

export default Home;
