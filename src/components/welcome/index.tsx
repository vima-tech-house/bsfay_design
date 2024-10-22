import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "common/Button";
import { Roboto } from "@next/font/google";

import { IoArrowForwardSharp } from "react-icons/io5";
import Modal from "common/Modal/modal";

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
        className={`relative w-full bg-[#383836] py-24 overflow-hidden ${className}`}
      >
        <div className='container mx-auto px-4 relative'>
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
              <motion.div
                className='absolute inset-0 bg-[#AEA797]/10 xl:max-w-md max-w-xl -top-7 lg:h-3/4 lg:left-[30%] left-20'
                variants={decorativeVariants}
              />
              <motion.div
                className='absolute inset-0 bg-[#AEA797]/10 w-full lg:max-w-md max-w-xl lg:top-[30%] top-7 lg:h-3/4 h-full xl:-left-8  -left-20 md:-left-7'
                variants={decorativeVariants}
              />
              <div className='relative aspect-square w-full max-w-xl'>
                <motion.div
                  className='relative h-full w-full overflow-hidden'
                  whileHover='hover'
                  initial='initial'
                >
                  <motion.div
                    // variants={hoverZoomVariants}
                    transition={{ type: "tween", duration: 0.3 }}
                  >
                    <Image
                      src='/images/wlcm.svg'
                      alt='Interior design showcase with artistic wall painting'
                      fill
                      className='object-cover object-center'
                      sizes='(max-width: 768px) 100vw, 50vw'
                      priority
                    />
                  </motion.div>
                </motion.div>
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
                  width={200}
                  height={100}
                  className='object-cover w-full object-center'
                />
              </div>

              <p
                className='text-neutral-200 sm:text-xl xl:text-2xl font-light max-w-lg leading-relaxed'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                Welcome to Bi.SFay Studio Ltd, where design meets purpose and
                creativity brings visions to life.
              </p>

              <p
                className='text-neutral-200 leading-relaxed sm:text-xl max-w-lg xl:text-2xl'
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
