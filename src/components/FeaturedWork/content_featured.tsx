"use client";

import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Roboto } from "next/font/google";
import Image from "next/image";
import ProjectModal from "common/Modal/projectModal";

const acumin_pro = Roboto({
  weight: "400",
  subsets: ["latin"]
});

const featuredWorks: FeaturedWork[] = [
  {
    title: "Kivu Noir",
    description:
      "We took a modern take through out the house with a touch of contemporary, minimal and artistic decor/ furniture. This 2 storey home is composed of 1 living room, an open plan kitchen, 1 home office, 1 dining room, 1 master bedroom, 1 guest room, a game room and a cinema room.",
    image: "/images/kivu_noir.svg",
    location: "US, Houston",
    style: "contemporary/ modern"
  },
  {
    title: "Restaurant",
    description:
      "Inspired by the client's love of a Mediterranean vacation, the concept is a combination of modern Greek and Italian design elements.",
    image: "/images/resto.svg",
    location: "Italy, Rome",
    style: "Mediterranean"
  }
];

const residentialWork: FeaturedWork[] = [
  {
    title: "Family Home",
    description:
      "A cozy family home designed with functionality and warmth in mind, incorporating modern amenities with traditional comfort.",
    image: "/images/home.svg",
    location: "UK, London",
    style: "Modern Traditional"
  },
  {
    title: "Girls Room",
    description:
      "A vibrant and playful girls' room designed to inspire creativity and provide a comfortable space for rest and play.",
    image: "/images/girls.svg",
    location: "Canada, Toronto",
    style: "Playful Contemporary"
  }
];

function ContentFeature() {
  const sliderRef = useRef<Slider | null>(null);
  const [selectedProject, setSelectedProject] = useState<FeaturedWork | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

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

  const openModal = (project: FeaturedWork) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className='relative min-h-screen w-full bg-[#191B20] py-16 bg-cover bg-center text-white'>
      <Image
        src='/images/portfolio.svg'
        alt='Background'
        layout='fill'
        objectFit='cover'
        priority
        className='object-cover object-top bg-no-repeat w-full'
      />
      <div className='max-w-7xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='py-8 mb-16 flex justify-between bg-[#F2F1EF] relative border-r-2 border-[#AEA797]/30  flex-col md:flex-row items-center max-w-5xl mx-auto'
        >
          <h1
            className={`text-left text-4xl font-bold text-[#6D6E72] sm:text-5xl md:text-6xl ${acumin_pro.className}`}
            data-aos='fade-up'
            data-aos-delay='200'
          >
            Featured works
          </h1>
          <p
            className='text-gray-600 max-w-md font-light'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            Guided by thoughtful attention to detail, we create designs with
            intention and purpose. We approach each project with curiosity and
            dedication, ensuring every space is a reflection of innovation and
            authenticity.
          </p>
        </motion.div>

        <div className='flex flex-col md:flex-row items-center max-w-5xl mx-auto  relative'>
          <div
            className='w-full md:w-1/3 lg:w-1/3  top-8  mx-auto pl-4 '
            data-aos='fade-up'
          >
            <h2 className='text-2xl text-[#6D6E72] font-medium mb-6'>
              Commercial projects
            </h2>
            <p className='text-gray-600 font-light'>
              We believe in being present and thoughtful in everything we do. By
              respecting ourselves, our clients, and the environments we work.
            </p>
          </div>

          <div className='w-full md:w-2/3 lg:w-2/3'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='slider-container '
            >
              <Slider
                ref={sliderRef}
                {...sliderSettings}
                className='featured-works-slider '
              >
                {featuredWorks.map((work, index) => (
                  <div key={index} className=''>
                    <div
                      className='overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]'
                      data-aos='fade-up'
                      data-aos-delay={index * 100}
                      onClick={() => openModal(work)}
                    >
                      <div className='relative lg:aspect-[3/4] aspect-[4/3]'>
                        <Image
                          src={work.image}
                          alt={work.title}
                          className='w-full h-full object-cover'
                          width={600}
                          height={800}
                        />
                      </div>
                      <div className='pt-4'>
                        <h3 className='text-xl text-[#6D6E72] font-medium mb-2'>
                          {work.title}
                        </h3>
                        <p className='text-gray-600 text-sm font-light'>
                          {work.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </motion.div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center max-w-5xl mx-auto mt-12 relative'>
          <div
            className='w-full md:w-1/3 lg:w-1/3  top-8  mx-auto pl-4 '
            data-aos='fade-up'
          >
            <h2 className='text-2xl text-[#6D6E72] font-medium mb-6'>
              Residential projects
            </h2>
            <p className='text-gray-600 font-light'>
              We believe in being present and thoughtful in everything we do. By
              respecting ourselves, our clients, and the environments we work.
            </p>
          </div>

          <div className='w-full md:w-2/3 lg:w-2/3'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='slider-container '
            >
              <Slider
                ref={sliderRef}
                {...sliderSettings}
                className='featured-works-slider '
              >
                {residentialWork.map((work, index) => (
                  <div key={index} className=''>
                    <div
                      className='overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]'
                      data-aos='fade-up'
                      data-aos-delay={index * 100}
                      onClick={() => openModal(work)}
                    >
                      <div className='relative lg:aspect-[3/4] aspect-[4/3]'>
                        <Image
                          src={work.image}
                          alt={work.title}
                          className='w-full h-full object-cover'
                          width={600}
                          height={800}
                        />
                      </div>
                      <div className='pt-4'>
                        <h3 className='text-xl text-[#6D6E72] font-medium mb-2'>
                          {work.title}
                        </h3>
                        <p className='text-gray-600 text-sm font-light'>
                          {work.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </motion.div>
          </div>
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </section>
  );
}

export default ContentFeature;
