import {
  ReactNode,
  Fragment
} from "react";

import Header from "./components/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Pricing from "./sections/Pricing";
import ServicesInfo from "./sections/ServicesInfo";
import ServiceContact from "./sections/ServicesContact";
import Footer from "./sections/Footer";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Header
      key="main"
      whichPage="domu"
      // className="absolute top-0 left-0 lg:bg-transparent"
      className="absolute top-0 left-0"
      />
      <Services />
      <Pricing />
      <ServicesInfo />
      <ServiceContact />
      <Footer />
    </Fragment>
  );
};

export default Home;