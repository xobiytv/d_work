'use client';

import { motion } from 'framer-motion';

import { textContainer, textVariant2 } from '../utils/motion';

export const CustomTexts = ({ title }) => (
  <motion.p
    variants={textContainer}
    className='font-normal text-[14px] text-secondary-white'
  >
    {Array.from(title).map((Letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {Letter === ' ' ? '\u00A0' : Letter}
      </motion.span>
    ))}
  </motion.p>
);
