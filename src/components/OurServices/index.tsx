"use client";

import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import AOS from "aos";
import { useLenis } from "@studio-freight/react-lenis";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Roboto } from "next/font/google";
import Image from "next/image";
import formatDescription from "helpers/textFormater";

interface OurServiceCards {
  title: string;
  description: string;
}

const acumin_pro = Roboto({
  weight: "400",
  subsets: ["latin"]
});

const values: OurServiceCards[] = [
  {
    title: "Client Consultation",
    description:
      "We believe in being present and thoughtful in everything we do. By respecting ourselves, our clients, and the environments we work in, we create spaces that are not only beautiful but also meaningful and impactful."
  },
  {
    title: "Concept Development",
    description:
      "Every project is a canvas, and every client is an inspiration. We approach each design with fresh eyes, ensuring that our creativity is fueled by the uniqueness of our clients and their vision."
  },
  {
    title: "Design Development",
    description:
      "We embrace every new opportunity with an open heart and mind. Whether it's exploring bold new concepts or adapting to our clients' evolving needs, we thrive on being flexible, curious, and ready to push boundaries."
  },
  {
    title: "Creative Development",
    description:
      "Our passion is the foundation of every project we undertake. We are deeply driven by the purpose and meaning behind our work, striving to deliver designs that not only meet our clients' needs but exceed their expectations."
  }
];

function OurServicesSection() {
  const sliderRef = useRef<Slider | null>(null);
  useLenis();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ],
    dotsClass: "slick-dots custom-dots",
    customPaging: (i: number) => <div className='custom-dot'></div>
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section className='relative min-h-screen w-full lg:flex justify-start py-16 items-center bg-cover bg-center text-white'>
      <Image
        src='/images/portfolio2.svg'
        alt='Background'
        layout='fill'
        objectFit='cover'
        priority
        className='object-cover object-top bg-no-repeat w-full'
      />

      <div className='max-w-7xl mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='py-8 mb-16 flex justify-between bg-transparent relative border-r-2 border-[#AEA797]/30 flex-col md:flex-row items-center max-w-5xl mx-auto p-8'
        >
          <h1
            className={`text-left text-4xl font-bold text-[#fff] sm:text-5xl md:text-6xl ${acumin_pro.className}`}
            data-aos='fade-up'
            data-aos-delay='200'
          >
            Our services
          </h1>
          <p
            className='text-white/70 max-w-md font-light mt-4 md:mt-0'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            Guided by thoughtful attention to detail, we create designs with
            intention and purpose. We approach each project with curiosity and
            dedication, ensuring every space is a reflection of innovation and
            authenticity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className=' max-w-5xl mx-auto '
        >
          <Slider
            ref={sliderRef}
            {...sliderSettings}
            className='services-slider'
          >
            {values.map((service, index) => (
              <div key={index} className='px-2'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className='bg-black/10 border border-white/10 backdrop-blur-sm p-8 h-full'
                  data-aos='fade-up'
                  data-aos-delay={index * 100}
                >
                  <div className='flex items-start flex-col mb-4'>
                    <h3
                      className={`lg:text-3xl text-2xl w-12 mt-4 font-semibold text-white ${acumin_pro.className}`}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p className='text-white leading-relaxed text-sm'>
                    {formatDescription(service.description)}
                  </p>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}

export default OurServicesSection;
