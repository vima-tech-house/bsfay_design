import React, { useEffect } from "react";
import AOS from "aos";

import Image from "next/image";
import { Bebas_Neue } from "@next/font/google";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"]
});

const ImpactSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
      easing: "ease-in-out"
    });
  }, []);

  return (
    <section
      id='Projects'
      className='bg-[#F2F1EF] md:py-32 py-28 max-w-7xl text-center md:text-left px-4 flex items-center justify-center'
    >
      <div className='flex gap-8 items-center relative flex-col-reverse md:flex-row justify-center mx-auto'>
        <div
          className='md:w-1/2 xl:text-2xl lg:text-xl text-[#383836] font-normal z-10'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          <p>
            Great design is achieved by using our own emotions to tap into the
            minds of our clients and our soul to create the best project that
            changes the life of our clients in a positive way, using a creative
            and human centered approach.
          </p>
        </div>
        <div
          className='absolute lg:left-20 md:left-10 lg:top-6 md:top-4 top-[74%]'
          data-aos='fade-in'
          data-aos-delay='400'
        >
          <Image
            src='/images/quotes.svg'
            className='lg:h-36 h-28 lg:w-36 w-28 object-cover object-center'
            alt='Quotes'
            width={144}
            height={144}
          />
        </div>

        <div className='md:w-1/4'>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src='/images/circle.svg'
              className='h-auto w-full object-cover object-center'
              alt='Rotating circle'
              width={300}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
