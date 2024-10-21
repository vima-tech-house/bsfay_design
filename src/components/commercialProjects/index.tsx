import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowUpRight } from "react-icons/fi";
import { Roboto } from "next/font/google";

const acumin_pro = Roboto({
  weight: "400",
  subsets: ["latin"]
});

const projects: Project[] = [
  {
    title: "Kivu Noir",
    description:
      "Inspired by the clients love of a Mediterranean vacation, the concept is a combination of modern Greek",
    image: "/images/kivu_noir.svg"
  },
  {
    title: "Restaurant",
    description:
      "Inspired by the clients love of a Mediterranean vacation, the concept is a combination of modern Greek",
    image: "/images/resto.svg"
  },
  {
    title: "Kisima Apartments",
    description:
      "A modern take on African furniture and decor. Our goal was to design prototypes that would suit any",
    image: "/images/girls.svg"
  }
];

const CommercialProjects: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section className='bg-[#E7E7E7] text-[#6D6E72] py-16 px-4 sm:px-6 lg:px-8 w-full'>
      <div className='max-w-7xl mx-auto md:px-12 px-2'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-left xl:text-3xl md:text-2xl sm:text-xl text-xl font-bold mb-4  ${acumin_pro.className}`}
          data-aos='fade-up'
        >
          Commercial projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-[#818286] mb-12 max-w-2xl'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          We believe in being present and thoughtful in everything we do. By
          respecting ourselves, our clients, and the environments we work.
        </motion.p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className=' overflow-hidden  transition-shadow duration-500'
              data-aos='fade-up'
              data-aos-delay={index * 100}
            >
              <div className='relative h-64'>
                <Image
                  src={project.image}
                  alt={project.title}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='py-6'>
                <div className='flex items-center justify-between w-full '>
                  <h3
                    className={`text-left text-xl font-semibold mb-2  ${acumin_pro.className}`}
                  >
                    {project.title}
                  </h3>
                  <button className=' font-medium flex items-center text-black  transition-colors duration-300'>
                    <FiArrowUpRight className=' text-2xl' />
                  </button>
                </div>

                <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommercialProjects;
