"use client";
import { useState } from "react";

import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/projects/Projects";
import Footer from "common/Footer";
import LenisProvider from "helpers/lenis-provider";
import AnimatePresenceProvider from "helpers/animate-presence-provider";
import WelcomeSection from "components/welcome";
import ContentFeature from "components/FeaturedWork/content_featured";
import CommercialProjects from "components/commercialProjects";
import InteriorDesignSection from "components/InteriorDesign";
import OurValuesComponent from "components/OurValues";
import OurServicesSection from "components/OurServices";

export default function Home() {
  const [active, setActive] = useState([false, false, false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false, false])
      : setActive([true, true, true, true, true, true]);
  };
  return (
    <LenisProvider>
      <AnimatePresenceProvider>
        <main className='box-border flex min-h-screen bg-[#F2F1EF]  w-full flex-col items-center overflow-hidden'>
          <Navbar />
          <Hero />
          <Projects />
          <WelcomeSection />
          <ContentFeature />
          <CommercialProjects />
          <InteriorDesignSection />
          <OurValuesComponent />
          <OurServicesSection />
          <Footer />
        </main>
      </AnimatePresenceProvider>
    </LenisProvider>
  );
}
