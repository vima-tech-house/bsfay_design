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

export default function Home() {
  const [active, setActive] = useState([false, false, false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false, false])
      : setActive([true, true, true, true, true, true]);
  };
  return (
    <main className='box-border flex min-h-screen bg-[#191B20] w-full flex-col items-center overflow-hidden'>
      <Navbar />
      <Hero />
      <Projects />
      <Team />
      <FromIdea />
      <Faqs
        handleClick={handleClick}
        isSomeActive={isSomeActive}
        data={faqs}
        turn={active}
        setTurn={setActive}
      />
      <Testimonial />
      <HireUs />
      <Footer />
    </main>
  );
}
