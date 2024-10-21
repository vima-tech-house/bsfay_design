import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const socialIcons = [
    { Icon: FaFacebookF, href: "#" },
    { Icon: FaTwitter, href: "#" },
    { Icon: FaYoutube, href: "#" },
    { Icon: FaLinkedinIn, href: "#" }
  ];

  return (
    <footer className='w-full bg-[#1E2024] text-white'>
      <div className='mx-auto w-full max-w-6xl py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <Image
          width={160}
          height={40}
          src='/logo.svg'
          className='mb-4'
          alt='VIMA logo'
        />
        <p className='text-center mb-4 max-w-md'>
          Find a job, home, or the perfect item. Discover, Connect, and Grow
          with VIMA.
        </p>
        <p className='text-center mb-4'>We're social. Connect with us on</p>
        <div className='flex space-x-4 mb-4'>
          {socialIcons.map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              className='bg-white text-gray-900 rounded-full p-2 hover:bg-[#615FEB] hover:text-[#fff] transition-colors duration-200'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <p className='text-sm text-gray-400 pt-6'>
          © 2024 VIMA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
