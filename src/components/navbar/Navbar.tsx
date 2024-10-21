import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import Button from "common/Button";
import Lenis from "@studio-freight/lenis";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHeroSection, setIsHeroSection] = useState<boolean>(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const heroSection = document.getElementById("Home");
    const heroSectionHeight = heroSection?.offsetHeight ?? 0;
    setIsHeroSection(scrollPosition < heroSectionHeight - 50);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    window.addEventListener("scroll", handleScroll);

    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, handleScroll]);

  const sidebarVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    closed: { x: "-100%", opacity: 0, transition: { duration: 0.5 } }
  };

  const navbarContentVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <nav className='fixed left-0 right-0 top-0 z-50 transition-all duration-300'>
      <div
        className={`w-full mx-auto flex items-center justify-between lg:px-40 md:px-20 sm:py-4 px-8 py-4 ${
          isHeroSection ? "justify-center" : "bg-[#2D2D2D]"
        }`}
      >
        <div
          className={`flex items-center justify-center gap-4 text-white ${
            isHeroSection
              ? "absolute left-1/2 transform -translate-x-1/2 pt-24"
              : ""
          }`}
        >
          <Image
            width={160}
            height={40}
            src='/monogram.svg'
            className='w-20 h-20 object-fill object-center'
            alt='BSFAY monogram'
          />
        </div>

        <AnimatePresence>
          {!isHeroSection && (
            <motion.div
              className='flex items-center gap-6'
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={navbarContentVariants}
            >
              <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-4xl text-white'>
                  {isOpen ? <LiaTimesSolid /> : <HiBars3CenterLeft />}
                </button>
              </div>
              <div className='hidden space-x-8 md:flex'>
                {[
                  { name: "Home", href: "#Home" },
                  { name: "About", href: "#AboutUs" },
                  { name: "Portfolio", href: "#Projects" }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className='text-white font-normal'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='hidden md:block'>
                <Button
                  text='LET US TALK'
                  icon={IoArrowForwardSharp}
                  href='#HireUs'
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className='absolute left-0 top-0 z-50 h-full w-64 bg-[#2D2D2D] text-white md:hidden lg:hidden rounded-br-xl '
        variants={sidebarVariants}
        animate={isOpen ? "open" : "closed"}
      >
        <div className='flex items-center justify-start px-8 gap-4 text-white pt-6'>
          <Image
            width={160}
            height={40}
            src='/monogram.svg'
            className='w-20 h-20 object-fill object-center'
            alt='BSFAY monogram'
          />
        </div>
        <div className='flex flex-col items-start bg-[#2D2D2D] p-6 pb-40'>
          {[
            { name: "Home", href: "#Home" },
            { name: "About us", href: "#AboutUs" },
            { name: "Projects", href: "#Projects" },
            { name: "Team", href: "#Team" },
            { name: "Solutions", href: "#Solutions" },
            { name: "Hire us", href: "#HireUs" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`mb-4 p-3 ${
                item.name === "Hire us" ? "bg-[#D3CFC4] w-auto text-black" : ""
              }`}
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
