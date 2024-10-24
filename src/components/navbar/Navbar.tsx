import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useLenis } from "@studio-freight/react-lenis";

import Button from "common/Button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHeroSection, setIsHeroSection] = useState<boolean>(true);
  const lenis = useLenis();
  const NAVBAR_HEIGHT = 80;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const heroSection = document.getElementById("home");
    const heroSectionHeight = heroSection?.offsetHeight ?? 0;
    setIsHeroSection(scrollPosition < heroSectionHeight - 50);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const targetSection = document.querySelector(sectionId);
    if (!targetSection) return;
    const rect = targetSection.getBoundingClientRect();
    const offset = rect.top + window.scrollY - NAVBAR_HEIGHT;

    lenis?.scrollTo(offset, {
      duration: 2.5,
      easing: (t: number) => {
        const t1 = Math.sin(t * Math.PI * 0.5);
        const t2 = 1 - Math.pow(1 - t, 4);
        return (t1 + t2) / 2;
      },
      lerp: 0.05
    });

    if (isOpen) toggleMenu();
  };

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 2.5,
      easing: (t) => {
        const t1 = Math.sin(t * Math.PI * 0.5);
        const t2 = 1 - Math.pow(1 - t, 4);
        return (t1 + t2) / 2;
      },
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      lerp: 0.05,
      touchMultiplier: 1.5,
      infinite: false
    });

    const raf = (time: number) => {
      lenisInstance.raf(time);
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
      lenisInstance.destroy();
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
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5
      }
    }
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#featured_work" }
  ];

  const mobileNavItems = [
    { name: "Home", href: "#Home" },
    { name: "About us", href: "#AboutUs" },
    { name: "Projects", href: "#Projects" },
    { name: "Team", href: "#Team" },
    { name: "Solutions", href: "#Solutions" },
    { name: "Hire us", href: "#HireUs" }
  ];

  return (
    <nav className='fixed left-0 right-0 top-0 z-50 transition-all duration-300'>
      <motion.div
        initial='hidden'
        animate='visible'
        exit='hidden'
        variants={navbarContentVariants}
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
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    className='text-white font-normal cursor-pointer'
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9, y: 0 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              <div className='hidden md:block'>
                <Button
                  text='LET US TALK'
                  icon={IoArrowForwardSharp}
                  href='#contact'
                  onClick={() => scrollToSection("#contact")}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className='absolute left-0 top-0 z-50 h-full w-64 bg-[#2D2D2D] text-white md:hidden lg:hidden rounded-br-xl'
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
          {mobileNavItems.map((item, index) => (
            <motion.a
              key={index}
              onClick={() => scrollToSection(item.href)}
              className={`mb-4 p-3 cursor-pointer ${
                item.name === "Hire us" ? "bg-[#D3CFC4] w-auto text-black" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
