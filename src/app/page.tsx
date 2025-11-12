import {
  ReactNode,
  Fragment
} from "react";

import Header from "./components/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import ServicesInfo from "./sections/ServicesInfo";
import ServiceContact from "./sections/ServicesContact";
import Footer from "./sections/Footer";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Header
      key="main"
      whichPage="home"
      className="absolute top-0 left-0 lg:bg-transparent"
      />
      <Services />
      <ServicesInfo />
      <ServiceContact />
      <Footer />
    </Fragment>
  );
};

export default Home;