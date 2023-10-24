'use client';

import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn, staggerContainer, textContainer } from '../utils/motion';
import { product } from '../constants';


const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`} id='Feedback'>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` mx-auto ${styles.flexCenter} flex-col mb-4`}
    >
      <motion.p
        variants={textContainer}
        className="font-normal text-[14px]
      text-secondary-white"
      >
        | Qo'shimcha qiymat
      </motion.p>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-bold md:text-[54px]  text-[40px]
          text-center text-[#fff]  "
      >
        Biznesizni qisqa marketing analiz qilib beramiz.
      </motion.p>
    </motion.div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amout: 0.25 }}
      className={` mx-auto justify-around  flex lg:flex-row flex-col gap-6`}
    >


      {product.map((produc, id) => (
        <motion.div key={id}
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex items-center justify-start flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] "
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[22px] sm:leading-[40px] leading-[36px] text-[#fff] ">
              {produc.title}
            </h4>

          </div>

          <p className="mt-[24px] font-normal sm:text-[20px] text-[18px] sm:leading-[45px] leading-[25px] text-[#fff] ">
            “ {produc.text} ”
          </p>
        </motion.div>
      ))}




    </motion.div>
  </section>
);

export default Feedback;
