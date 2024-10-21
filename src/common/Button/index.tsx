import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  icon?: IconType;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon: Icon, href }) => {
  return (
    <Link href={href}>
      <button className='flex items-center justify-center bg-[#D3CFC4] px-6 py-2 text-[#383836] transition-colors hover:bg-[#D3CFC4]/80'>
        {text}
        {Icon && <Icon className='ml-2' />}
      </button>
    </Link>
  );
};

export default Button;
