"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { Bebas_Neue } from "@next/font/google";
import { motion, useInView, useAnimation } from "framer-motion";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"]
});

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Pascal Kabika",
      role: "Engineering",
      image: "/images/pascal.svg"
    },
    {
      name: "Anicet Murhula",
      role: "Engineering",
      image: "/images/anicet.svg"
    },
    {
      name: "Kandy Peter",
      role: "Engineering",
      image: "/images/kandy.svg"
    },
    {
      name: "Roland Mweze",
      role: "Engineering",
      image: "/images/roland.svg"
    },
    {
      name: "Gilles Kagarama",
      role: "Design & User Experience",
      image: "/images/gilles.svg"
    },
    {
      name: "Shema Ken",
      role: "Creative Design",
      image: "/images/ken.JPG"
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0.8 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section id='Team' className='h-auto w-full overflow-hidden'>
      <motion.div
        ref={ref}
        className='relative p-4 lg:p-20 md:p-20 text-white'
        initial='hidden'
        animate={controls}
        variants={backgroundVariants}
      >
        <motion.div
          className='absolute inset-0 z-0'
          style={{
            backgroundImage: `url('/images/teamBg.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
          variants={backgroundVariants}
        />

        <div className='relative z-10 md:px-24 lg:px-24'>
          <motion.div variants={itemVariants} className='my-4 flex flex-col'>
            <div className='flex items-center gap-6 sm:text-xl font-normal'>
              <motion.div whileHover={{ scale: 1.2, rotate: 90 }}>
                <Image
                  src='/images/Dot.svg'
                  alt='VTG HUB'
                  width={10}
                  height={10}
                />
              </motion.div>
              <div>
                <p>TEAM BEHIND THE MAGIC</p>
              </div>
            </div>
            <motion.div
              className='mt-5 h-[1px] w-full bg-[#d9d9d9a8]'
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div variants={itemVariants} className='mb-12'>
            <h1
              className={`mb-4 sm:text-6xl text-4xl font-bold ${bebasNeue.className}`}
            >
              MEET OUR TEAM
            </h1>
            <p className=' text-gray-400'>
              Our experts boast top deals, driving innovative solution
              development.
            </p>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'
            variants={containerVariants}
            initial='hidden'
            animate={controls}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05
                }}
                className='border-2 border-gray-700 bg-gray-900 p-6 text-center backdrop-blur-3xl transition-shadow duration-300'
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    className='mx-auto mb-4 h-28 w-28 rounded-full object-cover object-top'
                    width={128}
                    height={128}
                  />
                </motion.div>
                <h3 className='mb-2 text-xl font-normal'>{member.name}</h3>
                <p className=' text-gray-400'>{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default TeamSection;
