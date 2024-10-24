import { motion } from "framer-motion";
import Image from "next/image";
import { Roboto } from "@next/font/google";
import { useCallback, useEffect, useState } from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { useLenis } from "@studio-freight/react-lenis";
import Lenis from "@studio-freight/lenis";

import ButtonDown from "common/Button/buttonDown";

const acumin_pro = Roboto({
  weight: "400",
  subsets: ["latin"]
});

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHeroSection, setIsHeroSection] = useState<boolean>(true);

  const lenis = useLenis;
  const NAVBAR_HEIGHT = 80;

  const scrollToSection = (sectionId: string) => {
    const targetSection = document.querySelector(sectionId);
    if (!targetSection) return;
    const rect = targetSection.getBoundingClientRect();
    const offset = rect.top + window.scrollY - NAVBAR_HEIGHT;

    // lenis?.scrollTo(offset, {
    //   duration: 2.5,
    //   easing: (t: number) => {
    //     const t1 = Math.sin(t * Math.PI * 0.5);
    //     const t2 = 1 - Math.pow(1 - t, 4);
    //     return (t1 + t2) / 2;
    //   },
    //   lerp: 0.05
    // });
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const heroSection = document.getElementById("Home");
    const heroSectionHeight = heroSection?.offsetHeight ?? 0;
    setIsHeroSection(scrollPosition < heroSectionHeight - 50);
  }, []);

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

  return (
    <>
      <div
        id='home'
        className='relative min-h-screen w-full bg-[#191B20]  bg-cover bg-center text-white '
      >
        <Image
          src='/bg.svg'
          alt='Background'
          layout='fill'
          objectFit='cover'
          priority
          className='object-cover object-top bg-no-repeat w-full'
        />

        <div className='container relative z-10 mx-auto flex flex-col justify-center px-4 pt-[340px] md:py-8 md:pt-[480px] sm:pt-72'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`mb-4 text-center text-4xl font-bold sm:text-5xl md:text-7xl ${acumin_pro.className}`}
          >
            Interior Architecture Studio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='mb-8 text-center text-lg font-normal'
          >
            we are an interior architecture studio specialized in residential &
            commercial projects
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='flex justify-center'
          >
            <ButtonDown
              text=''
              icon={HiOutlineArrowNarrowDown}
              href=''
              onClick={() => scrollToSection("")}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
