import React from "react";
import Image from "next/image";
import { Bebas_Neue } from "@next/font/google";
import { motion } from "framer-motion";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"]
});

const ImpactSection = () => {
  return (
    <section
      id='Projects'
      className=' bg-gradient-to-r from-[#16181d]  via-[#1f1f2e] to-[#16181d] p-8 text-white'
    >
      <div className='mx-auto xl:mx-40 sm:mx-12'>
        {/* Projects section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className='my-4 flex flex-col '>
            <div className='flex items-center gap-6 sm:text-xl font-normal'>
              <div>
                <Image
                  src='/images/Dot.svg'
                  alt='VTG HUB'
                  width={10}
                  height={10}
                />
              </div>
              <div>
                <h2>PROJECTS</h2>
              </div>
            </div>
            <div className='mt-5 h-[1px] w-full bg-[#d9d9d9a8]'></div>
          </div>

          <h1
            className={`mb-4 sm:text-6xl text-4xl font-bold leading-tight ${bebasNeue.className}`}
          >
            OUR IMPACT ACROSS INDUSTRIES
          </h1>

          <p className='mb-12 max-w-3xl text-gray-400'>
            From supporting founders Project developing cutting-edge products,
            our work is driving progress and solving critical challenges across
            the continent.
          </p>
        </motion.div>

        {/* Projects Cards */}
        <motion.div
          className='mb-20 flex flex-col items-center justify-between md:flex-row lg:flex-row'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            {
              name: "VIMA-Virtual Market",
              image: "/images/vimaLogo.svg",
              description:
                "Job board platform connecting companies with top talent. Employers post jobs, manage applicants, and streamline hiring.  while job seekers find and apply for their next career move easily."
            },
            {
              name: "Fitness Management System",
              image: "/images/fitness.png",
              description:
                "A fitness management app tailored for merchants, corporate companies, and individuals, integrating local payment options, class scheduling, membership management, and performance tracking for comprehensive fitness and wellness solutions."
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              className='flex w-full flex-col items-center justify-center py-4 md:w-[48%] md:items-start md:justify-start md:py-0 lg:w-[48%] lg:items-start lg:justify-start lg:py-0'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className='mb-4 flex h-28 w-full items-start justify-start overflow-hidden   '>
                <Image
                  src={project.image}
                  alt={project.name}
                  className='h-full w-1/2 object-contain'
                  width={120}
                  height={120}
                />
              </div>
              <h3 className='mb-2 sm:text-2xl text-lg font-normal flex justify-start w-full text-left'>
                {project.name}
              </h3>
              <p className='text-sm text-gray-400'>{project.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* "We're Awesome" Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2
            className={`mb-4 text-4xl capitalize sm:text-6xl font-bold ${bebasNeue.className}`}
          >
            Your Success, Our Mission
          </h2>

          <p className='mb-8 max-w-3xl text-gray-400'>
            "We're focused on your success, building solutions that shape the
            future of tech in Africa.
          </p>
        </motion.div>

        {/* Cards with icons */}
        <motion.div
          className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Tailored Solutions",
              description:
                "We craft custom digital experiences designed specifically to meet your business goals, ensuring that every project is a perfect fit.",
              icon: "/images/markup-line.svg"
            },
            {
              title: "Expert Team",
              description:
                "Our team of developers and designers bring years of experience and expertise, delivering high-quality products on time, every time.",
              icon: "/images/palette.svg"
            },
            {
              title: "Proven Results",
              description:
                "We focus on measurable outcomes, helping you increase engagement, streamline processes, and achieve success through our innovative solutions.",
              icon: "/images/numbers-line.svg"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className='border-2 border-[#615FEB]/35 bg-[#23263B] p-6'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className='mb-4 text-2xl'>
                <Image
                  src={item.icon}
                  alt={item.title}
                  className='h-12 w-12'
                  width={48}
                  height={48}
                />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>{item.title}</h3>
              <p className='text-sm text-gray-400'>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
