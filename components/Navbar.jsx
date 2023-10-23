"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import newVariants  from "../utils/motion";
import { Navbars } from "../constants";

const Navbar = () => {
 

  return (
    <motion.nav
      variants={newVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[20%] inset-0 gradient-01" />
      <div className={`mx-auto items-center w-full flex justify-between `}>
        <h1 className='font-extrabold sticky items-start flex text-[26px] py-1 leading-[30px] text-[#fff]'>
          D-w
        </h1>
      
        <ul className={`flex ulNone  gap-3 items-center text-white `}>
          {Navbars.map((idc) => (
            <li className=" hover:text-[#00ddff] menu-item" key={idc.title}>
              <a href={idc.href}>{idc.title}</a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={`flex items-center py-2 px-6 bg-[#25618b] rounded-[32px]  `}
        >
          <a href="tel: +998941940745" className="font-normal text-[16px] text-[#fff] ">
            +998 (94) 194-07-45
          </a>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
