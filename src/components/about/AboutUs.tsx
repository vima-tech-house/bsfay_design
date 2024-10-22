import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"]
});

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);
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
        staggerChildren: 0.2
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

  const glowVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.3,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <motion.div
      ref={ref}
      id="AboutUs"
      className='h-auto w-full relative p-4 lg:px-12 py-20 verflow-hidden  min-h-screen  md:px-12 text-white'
      // style={{
      //   backgroundImage: `url('/images/cir.svg')`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat"
      // }}
      initial='hidden'
      animate={controls}
      variants={containerVariants}
    >
      <div className='container relative mx-auto px-4'>
        <motion.div
          className='absolute inset-0 flex items-center justify-center'
          variants={glowVariants}
        >
          <div className='absolute h-[600px] w-[600px] rounded-full '></div>
        </motion.div>
        <motion.div
          className='my-4 flex flex-col relative'
          variants={itemVariants}
        >
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
              <p className='sm:text-xl'>ABOUT US</p>
            </div>
          </div>
          <motion.div
            className='mt-5 h-[1px] w-full bg-[#d9d9d9a8]'
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className={`mb-8 text-4xl font-bold leading-tight md:text-6xl ${bebasNeue.className}`}
        >
          COMMITTED TO EMPOWERING
          <br />
          COMPANIES WITH DIGITAL SOLUTIONS
        </motion.h2>

        <motion.div variants={itemVariants} className='mb-8'>
          <p className='mb-4 '>
            VGT Hub is a forward-thinking web and app development studio. We
            specialize in creating bespoke digital solutions that seamlessly
            blend innovative design with cutting-edge technology. Our team of
            skilled professionals is dedicated to bringing our clients' visions
            to life, crafting websites and applications that stand out in the
            digital landscape.
            <button
              onClick={toggleShowMore}
              className=' text-[#615FEB] ml-2 relative hover:text-[#615FEB]/70 cursor-pointer transition-colors duration-200'
            >
              {showMore ? "Show Less" : "Read More..."}
            </button>
          </p>
          {showMore && (
            <>
              <p className='mb-4'>
                We pride ourselves on our ability to understand and elevate each
                client's unique brand identity. From corporate websites to
                mobile apps, we approach every project with creativity and
                precision, ensuring that each digital product not only meets but
                exceeds expectations. Our collaborative process involves working
                closely with clients to translate their stories into compelling
                online experiences.
              </p>
              <p className='mb-4'>
                At VGT Hub, we don't just build websites and apps – we create
                digital ecosystems that drive growth and engagement. Whether
                you're a startup or an established brand, we're committed to
                delivering solutions that propel your business forward in the
                ever-evolving digital world.
              </p>
            </>
          )}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className='relative flex justify-center'
        >
          {/* Glowing background effect for cards */}
          <motion.div
            className='absolute left-1/2 top-1/2 h-[300px] w-[300px]  -translate-x-1/2 -translate-y-1/2 rounded-full  opacity-50 blur-[50px] md:h-[300px] md:w-[600px]'
            variants={glowVariants}
          ></motion.div>

          <div className='relative z-10 grid grid-cols-1 gap-2 py-4 md:grid-cols-3 w-full md:py-20'>
            <Image
              src='/images/cir.svg'
              alt='Background'
              layout='fill'
              objectFit='contain'
              priority
              className='object-contain object-center absolute bg-no-repeat w-[200px] h-1/2'
            />
            {[
              { number: "200", text: "Community of tech-gurus" },
              { number: "28 years", text: "Average age" },
              { number: "53+", text: "Achieved Projects" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='flex h-auto w-full  flex-col relative  justify-start lg:space-y-6 border-2 border-[#615FEB]/25 p-3 sm:p-6 xl:p-8 backdrop-blur-md bg-[#23263B]/40'
              >
                <div className='mx-auto w-full'>
                  <Image
                    src='/images/sun.svg'
                    alt='placeholder'
                    className='sm:h-12 h-8 sm:w-12 w-8 object-cover rounded-lg bg-[#6b5ec39f] sm:p-2 p-1 '
                    width={40}
                    height={40}
                  />
                </div>
                <motion.p
                  className={`text-4xl font-bold xl:text-6xl sm:text-5xl ${bebasNeue.className}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.number}
                </motion.p>
                <motion.p
                  className='text-nowrap sm:text-sm text-xs'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {item.text}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
