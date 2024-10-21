import React from "react";
import { FaEnvelope, FaHome, FaPhone } from "react-icons/fa";
import { Bebas_Neue } from "@next/font/google";
import Form from "common/Forms";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"]
});

const HireUs = () => {
  return (
    <section
      id='HireUs'
      className='bg-[#1E1E1E] xl:h-screen h-auto py-16 w-full flex items-center text-white px-4'
    >
      <div className='max-w-7xl mx-auto sm:px-8 xl:px-0'>
        <div className='max-w-md' data-aos='fade-up' data-aos-delay='100'>
          <h1
            className={`mb-4 sm:text-6xl text-4xl font-bold ${bebasNeue.className}`}
          >
            {" "}
            HIRE US
          </h1>
          <p className=' text-[#b4b4b4]'>
            Work with most skilled team of experts for connected experience{" "}
          </p>
        </div>

        <div className='flex flex-col lg:flex-row w-full justify-between gap-16 items-center'>
          <div className='lg:w-1/2 w-full'>
            <div className='space-y-8'>
              <ContactItem
                icon={<FaHome className='xl:text-4xl text-2xl' />}
                title='Our Location'
                content='VIRTUAL MARKET LTD, NEXUS Building, KK 623 St, Kigali City, Rwanda.'
                delay={200}
              />
              <ContactItem
                icon={<FaPhone className='xl:text-4xl text-2xl' />}
                title='Phone Number'
                content='+(250) 796 152 273'
                delay={300}
              />
              <ContactItem
                icon={<FaEnvelope className='xl:text-4xl text-2xl' />}
                title='Email Address'
                content='contact@vima.services'
                delay={400}
              />
            </div>
          </div>

          <div className='lg:w-full w-full'>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, content, delay }: any) => (
  <div
    className='flex items-center space-x-4'
    data-aos='fade-up'
    data-aos-delay={delay}
  >
    <div className='bg-[#2A2A2A] p-3 rounded-lg'>{icon}</div>
    <div>
      <p className=' text-lg xl:text-xl'>{title}</p>
      <p className='text-gray-400 '>{content}</p>
    </div>
  </div>
);

export default HireUs;
