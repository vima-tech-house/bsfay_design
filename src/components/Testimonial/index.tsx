import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Bebas_Neue } from "@next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"]
});

const testimonials: Testimonial[] = [
  {
    quote:
      "Thanks to VTG's support, we've been able to scale our educational platform across East Africa. Their guidance and resources have been invaluable.",
    author: "Aisha Tumusiime",
    position: "CEO",
    company: "EduTech Solutions"
  },
  {
    quote:
      "VTG's innovative approach has transformed our energy consumption patterns. We've seen significant cost savings and improved efficiency.",
    author: "Kwame Osei",
    position: "COO",
    company: "GreenTech Innovations"
  },
  {
    quote:
      "The partnership with VTG has been a game-changer for our sustainability initiatives. Their expertise is unmatched in the industry.",
    author: "Zainab Mohamed",
    position: "Sustainability Director",
    company: "EcoSolutions Africa"
  }
];

const CustomPrevArrow = (props: any) => (
  <button
    onClick={props.onClick}
    className='absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-2 rounded-r transition-colors'
    aria-label='Previous testimonial'
  >
    <FaChevronLeft size={24} />
  </button>
);

const CustomNextArrow = (props: any) => (
  <button
    onClick={props.onClick}
    className='absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-2 rounded-l transition-colors'
    aria-label='Next testimonial'
  >
    <FaChevronRight size={24} />
  </button>
);

const TestimonialCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className='bg-[#23263B] w-full mx-auto text-white py-16 px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto'>
        <h2 className={`mb-8 text-4xl text-center font-bold leading-tight md:text-6xl ${bebasNeue.className}`}>
          WHAT OUR CUSTOMERS SAY
        </h2>
        <p className='text-center text-gray-400 mb-12'>
          Thousands of happy customers that changed their energy use
        </p>
        <div className='max-w-4xl mx-auto'>
          <div className='relative'>
            <div className='absolute inset-0 left-4 top-4'>
              <div className='bg-[#A4A3F440] rounded-3xl h-full w-full'></div>
            </div>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className='focus:outline-none px-4'>
                  <div className='bg-white text-[#1F2937] rounded-lg p-6 md:p-8 shadow-lg relative z-10'>
                    <div className='flex justify-center mb-4'>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className='w-5 h-5 text-[#615FEB] fill-current'
                          viewBox='0 0 20 20'
                        >
                          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                        </svg>
                      ))}
                    </div>
                    <blockquote className='text-center text-lg mb-4'>
                      "{testimonial.quote}"
                    </blockquote>
                    <div className='text-center'>
                      <cite className='font-semibold not-italic'>
                        {testimonial.author}/</cite>
                      
                      <p className='text-sm text-gray-600 mt-1'>
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;