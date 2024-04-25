import React from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import hero from "../assets/imges/hero.jpg";
import CardsImges from "../components/cards/cards";
import ProductsFeatured from "../components/ProductsFeatured/ProductsFeatured";
import RepairServices from "../components/RepairServices/RepairServices";
import Header from "../components/Header/Header";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import BannerImges from "../components/banner/bannerImges";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <img
        src={hero}
        alt=""
        className="absolute top-0 left-0 w-full h-full -z-10 mt-[70px] shadow-2xl"
      />
      <div className="mt-40">
        <CardsImges />
      </div>
      <ProductsFeatured />
      <RepairServices />
      <NewArrivals />
      <BannerImges />
      <Footer />
    </div>
  );
};

export default Home;
