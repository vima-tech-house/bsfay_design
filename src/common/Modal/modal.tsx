import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import AOS from "aos";
import { useLenis } from "@studio-freight/react-lenis";
import { Roboto } from "@next/font/google";
import { AiOutlineClose } from "react-icons/ai";

const acumin_pro = Roboto({
  weight: "400",
  subsets: ["latin"]
});

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const lenis = useLenis();

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      AOS.refresh();
    } else {
      lenis?.start();
    }

    return () => {
      lenis?.start();
    };
  }, [isOpen, lenis]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='fixed inset-0 bg-black/50 z-50 backdrop-blur-sm '
          />
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className='fixed top-[20%] left-[26%] -translate-x-1/2 w-full max-w-2xl bg-[#383836] z-50 rounded-sm shadow-xl'
          >
            <div className='p-12 relative'>
              <button
                onClick={onClose}
                className='absolute right-4 top-4 text-[#AEA797] border p-2 rounded-full text-xl border-white/10 hover:text-white transition-colors'
              >
                <AiOutlineClose size={20} />
              </button>

              <h2
                className={`pb-12 text-left text-2xl font-bold text-[#AEA797] sm:text-4xl ${acumin_pro.className}`}
                data-aos='fade-down'
                data-aos-delay='100'
              >
                {title}
              </h2>

              <div className='text-neutral-200 space-y-4'>{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
