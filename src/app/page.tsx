"use client";
import { useState } from "react";

import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/projects/Projects";
import Team from "../components/team/Team";
import Faqs from "../components/Faqs";
import FromIdea from "../components/FromIdea";
import HireUs from "../components/HireUs";
import Testimonial from "../components/Testimonial";

import { faqs } from "../data/faqs";
import Footer from "common/Footer";
import LenisProvider from "helpers/lenis-provider";
import AnimatePresenceProvider from "helpers/animate-presence-provider";

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
          <Footer />
        </main>
      </AnimatePresenceProvider>
    </LenisProvider>
  );
}
