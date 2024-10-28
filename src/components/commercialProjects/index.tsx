import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowUpRight } from "react-icons/fi";
import { Roboto } from "next/font/google";
import ProjectModal from "common/Modal/projectModal";

const acumin_pro = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const projects: FeaturedWork[] = [
  {
    title: "Kivu Noir",
    description:
      "We design a coffee shop that reflected the customers brand essence, through modern furniture and a touch of a rustic unrefined material, that lets each material shine in its own way.",
    image: "/images/kivu_noir.svg",
    style: "modern/ afrocentric",
  },
  {
    title: "Restaurant",
    description:
      "The project required us to design 3 prototypes for 2 apartments and 1 loft, which would have been used throughout the project, which is composed of 8 apartments.",
    image: "/images/resto.svg",
    style: "modern/ afrocentric",
  },
  {
    title: "Kisima Apartments",
    description: `The project required us to design 3 prototypes for 2 apartments and 1 loft, which would have
been used throughout the project, which is composed of 8 apartments. 
We wanted a modern Afrocentric approach to the design. The living spaces are characterized
by a neutral color palette with modern furniture and accent Afrocentric decor unique to every
apartment and loft.`,
    image: "/images/girls.svg",
    style: "modern/ afrocentric",
  },
];

const CommercialProjects: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [selectedProject, setSelectedProject] = useState<FeaturedWork | any>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: FeaturedWork) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-[#E7E7E7] text-[#6D6E72] py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto md:px-12 px-2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-left xl:text-3xl md:text-2xl sm:text-xl text-xl font-bold mb-4  ${acumin_pro.className}`}
          data-aos="fade-up"
        >
          Commercial projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#818286] mb-12 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We believe in being present and thoughtful in everything we do. By
          respecting ourselves, our clients, and the environments we work.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              // key={project.title}
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.5, delay: index * 0.1 }}
              // className=" overflow-hidden  transition-shadow duration-500"
              // data-aos="fade-up"
              // data-aos-delay={index * 100}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              onClick={() => openModal(project)}
            >
              <div className="relative h-80 md:h-72 lg:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="py-6">
                <div className="flex items-center justify-between w-full ">
                  <h3
                    className={`text-left text-xl font-semibold mb-2  ${acumin_pro.className}`}
                  >
                    {project.title}
                  </h3>
                  <button className=" font-medium flex items-center text-black  transition-colors duration-300">
                    <FiArrowUpRight className=" text-2xl" />
                  </button>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          project={selectedProject}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default CommercialProjects;
