'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.paddings} py-8 relative`}
  >
    <div className='footer-gradient' />

    <div className='mx-auto flex flex-col gap-8' id='contact'>
      <div className='flex items-center justify-between flex-wrap gap-5'>
        <h4 className='font-bold md:text-[64px] text-[44px] text-[#fff]'>
          Birgalikda rivojlanamiz
        </h4>
        <button
          type='button'
          className='flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]'
        >
          <img
            src='/headset.svg'
            alt='headset'
            className='w-[24px] h-[24px] object-contain'
          />
          <a href='tel:+998941940745' className='font-normal text-[16px] text-[#fff]'>
            aloqa
          </a>
        </button>
      </div>

      <div className='flex flex-col'>
        <div className='mb-[50px] h-[2px] bg-[#fff] opacity-10' />

        <div className='flex items-center justify-between flex-wrap gap-4'>
          <h4 className='font-extrabold text-[24px] text-[#fff]'>
            D-wORk
          </h4>
          <p className='font-normal text-[14px] text-[#fff] opacity-50'>
            Copyright © 2021 - 2023 D-wORk. All rights reserved.
          </p>

          <motion.div className='flex gap-4'>
            {socials.map((social, index) => (
              <div key={index}>
                <a href={social.link}>
                  <img
                    key={social.name}
                    src={social.url}
                    alt={social.name}
                    className='w-[24px] h-[24px] object-contain cursor-pointer'
                  />
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
