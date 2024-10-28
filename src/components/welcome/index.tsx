import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Roboto } from "@next/font/google";

import { IoArrowForwardSharp } from "react-icons/io5";
import Button from "@/src/common/Button";
import Modal from "@/src/common/Modal/modal";

interface WelcomeSectionProps {
  className?: string;
}

const acumin_pro = Roboto({
  weight: "400",
  subsets: ["latin"]
});

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ className = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 100
    });
  }, []);

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  };

  const decorativeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -8
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const hoverZoomVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 }
  };

  return (
    <>
      <section
        id='about'
        className={`relative w-full bg-[#383836] py-24 overflow-hidden ${className}`}
      >
        <div className='container mx-auto max-w-6xl px-4 relative'>
          <h2
            className={`pb-20 text-left text-4xl font-bold text-[#AEA797] sm:text-5xl md:text-7xl ${acumin_pro.className}`}
            data-aos='fade-down'
            data-aos-delay='100'
          >
            About us
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className='absolute md:top-10 top-6  xl:left-1/4 left-1/2 md:left-1/3 w-full h-px bg-[#AEA797]'
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className='absolute top-10 -left-1/2 w-1/2 h-px bg-[#AEA797]'
          />

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              className='relative'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: "-100px" }}
              variants={imageVariants}
            >
              <div className='relative w-[500px] h-[564px]'>
                <motion.div
                  className='relative left-0 top-0 bg-white/20 w-[500px] h-[564px] z-10'
                  whileHover='hover'
                  initial='initial'
                >
                  <motion.div
                    transition={{ type: "tween", duration: 0.3 }}
                    className='w-[500px] h-[564px] '
                  >
                    <Image
                      src='/images/wlcm.svg'
                      alt='Interior design showcase with artistic wall painting'
                      fill
                      className='object-cover object-center w-[500px] h-[564px]'
                      priority
                    />
                  </motion.div>
                </motion.div>
                <motion.div
                  className='z-0 absolute bg-[#AEA797]/10 w-[500px] h-[564px] -top-8 -right-8'
                  variants={decorativeVariants}
                />

                <motion.div
                  className='z-0 absolute bg-[#AEA797]/10 w-[500px] h-[564px] -bottom-8 -left-8'
                  variants={decorativeVariants}
                />
              </div>
            </motion.div>

            <div className='space-y-8'>
              <div
                className='relative w-1/2 h-auto'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <Image
                  src='/images/white.svg'
                  alt='Bi.SFay Studio Logo'
                  width={140}
                  height={80}
                  className='object-cover w-40 object-center'
                />
              </div>

              <p
                className='text-neutral-200 sm:text-xl xl:text-2xl font-extralight max-w-lg leading-relaxed'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                Welcome to Bi.SFay Studio Ltd, where design meets purpose and
                creativity brings visions to life.
              </p>

              <p
                className='text-neutral-200 sm:text-xl xl:text-2xl font-extralight max-w-lg leading-relaxed'
                data-aos='fade-up'
                data-aos-delay='400'
              >
                As a premier interior architecture studio, we specialize in
                transforming both residential and commercial spaces into
                environments that resonate with the individuality and
                aspirations of our clients.
              </p>

              <div data-aos='fade-up' data-aos-delay='500'>
                <Button
                  text='READ MORE'
                  icon={IoArrowForwardSharp}
                  onClick={() => setIsModalOpen(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title='About Us'
      >
        <p
          data-aos='fade-up'
          data-aos-delay='200'
          className='text-lg leading-relaxed'
        >
          Welcome to Bi.SFay Studio Ltd, where design meets purpose and
          creativity brings visions to life.
        </p>

        <p
          data-aos='fade-up'
          data-aos-delay='300'
          className='text-lg leading-relaxed'
        >
          As a premier interior architecture studio, we specialize in
          transforming both residential and commercial spaces into environments
          that resonate with the individuality and aspirations of our clients.
        </p>

        <p
          data-aos='fade-up'
          data-aos-delay='300'
          className='text-lg leading-relaxed'
        >
          As a premier interior architecture studio, we specialize in
          transforming both residential and commerciTal spaces into environments
          that resonate with the individuality and aspirations of our clients.
        </p>

        <p
          data-aos='fade-up'
          data-aos-delay='400'
          className='text-lg leading-relaxed'
        >
          As a premier interior architecture studio, we specialize in
          transforming both residential and commerciTal spaces into environments
          that resonate with the individuality and aspirations of our clients.
        </p>
      </Modal>
    </>
  );
};

export default WelcomeSection;
