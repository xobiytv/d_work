'use client';

import styles from '../styles';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick, url, logo }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10] ' : 'lg:flex-[1] flex-[5]'
      } flex items-center justify-center w-[170px] h-[700px] transition-[flex]
     duration-[0.7s] ease-out-flex cursor-pointer
    `}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className='absolute w-full h-full object-cover rounded-[24px]'
    />
    {active !== id ? (
      <h4
        className='font-semibold sm:text-[26px] text-[16px] text-[#0049b7] absolute z-0
      lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0, 0]'
      >
        {title}
      </h4>
    ) : (
      <div className='absolute bottom-0 p-8 justify-start w-full bg-[rgba(0,0,0, 0.5)] rounded-b-[24px]'>
        <div
          className={`${styles.flexCenter}
          w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <a href={url}>
            <img
              src={logo}
              alt='headset'
              className='min-w-1/2 min-h-1/2 object-contain'
            />
          </a>
        </div>
        <h3 className='mt-[24px] font-bold sm:text-[24px] text-[24px] text-[#0049b7]'>
          {title}
        </h3>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
