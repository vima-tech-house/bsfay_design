import { useState, useEffect } from "react";
import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { motion } from "framer-motion";
import Button from "common/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const sidebarVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    closed: { x: "-100%", opacity: 0, transition: { duration: 0.5 } }
  };

  return (
    <nav className='fixed left-0 right-0 top-0 z-50 '>
      <div className='container mx-auto flex items-center justify-between sm:px-4 sm:py-4 px-4 py-4'>
        <div className='flex items-center justify-center gap-4 text-white'>
          <Image
            width={160}
            height={40}
            src='/monogram.svg'
            className='w-20 h-20 object-fill object-center'
            alt='BSFAY monogram'
          />
        </div>

        <div className='flex items-center gap-6 '>
          {" "}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-4xl text-white'>
              {isOpen ? <LiaTimesSolid /> : <HiBars3CenterLeft />}
            </button>
          </div>
          <div className='hidden space-x-8 md:flex'>
            {[
              {
                name: "Home",
                href: "#Home"
              },
              {
                name: "About",
                href: "#AboutUs"
              },
              {
                name: "Portfolio",
                href: "#Projects"
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className=' text-white font-normal'
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className='hidden md:block'>
            <Button
              text='LET US TALK'
              icon={IoArrowForwardSharp}
              href='#HireUs'
            />
          </div>
        </div>
      </div>

      <motion.div
        className='absolute left-0 top-0 z-50 h-full w-64 bg-[#2D2D2D] text-white md:hidden lg:hidden rounded-br-xl '
        variants={sidebarVariants}
        animate={isOpen ? "open" : "closed"}
      >
        <div className='flex items-center justify-start px-8 gap-4 text-white pt-6'>
          <Image
            width={160}
            height={40}
            src='/monogram.svg'
            className='w-20 h-20 object-fill object-center'
            alt='BSFAY monogram'
          />
        </div>
        <div className='flex flex-col items-start bg-[#2D2D2D] p-6 pb-40'>
          {[
            {
              name: "Home",
              href: "#Home"
            },
            {
              name: "About us",
              href: "#AboutUs"
            },
            {
              name: "Projects",
              href: "#Projects"
            },
            {
              name: "Team",
              href: "#Team"
            },
            {
              name: "Solutions",
              href: "#Solutions"
            },
            {
              name: "Hire us",
              href: "#HireUs"
            }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`mb-4 p-3 ${
                item.name === "Hire us" ? "bg-[#D3CFC4] w-auto text-black" : ""
              }`}
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
