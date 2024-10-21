import { motion } from "framer-motion";
import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";
import { Roboto } from "@next/font/google";

import AboutUs from "../about/AboutUs";
import Button from "common/Button";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import ButtonDown from "common/Button/buttonDown";

const acumin_pro = Roboto({
  weight: "400",
  subsets: ["latin"]
});

const HeroSection = () => {
  return (
    <>
      <div
        id='Home'
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

        <div className='container relative z-10 mx-auto flex flex-col justify-center px-4 pt-20 md:py-8 md:mt-[480px] mt-72'>
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
            <ButtonDown text='' icon={HiOutlineArrowNarrowDown} href='#' />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
