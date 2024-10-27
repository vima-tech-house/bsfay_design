import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const ImpactSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="Projects"
      className="bg-[#F2F1EF] md:py-32 py-28 w-full text-center md:text-left px-4 flex items-center justify-center"
    >
      <div className="flex gap-12 items-center relative flex-col-reverse md:flex-row mx-auto max-w-4xl">
        <div
          className="md:w-7/12 flex-1  xl:text-xl lg:text-xl text-[#383836] font-light z-10 relative"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>
            Great design is achieved by using our own emotions to tap into the
            minds of our clients and our soul to create the best project that
            changes the life of our clients in a positive way, using a creative
            and human centered approach.
          </p>
          <div
            data-aos="fade-in"
            className="absolute -left-16 -top-12"
            data-aos-delay="400"
          >
            <Image
              src="/images/quotes.svg"
              className="lg:h-36 h-28 lg:w-36 w-28 object-cover object-center"
              alt="Quotes"
              width={144}
              height={144}
            />
          </div>
        </div>

        <div className="w-[340px] h-[340px]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="/images/circle.svg"
              className="h-auto w-full object-cover object-center"
              alt="Rotating circle"
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
