'use client';

import styles from "../styles";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  planetVariants,
  textContainer,
} from "../utils/motion";
import { NewFeatures } from "../components";
import { newFeatures } from "../constants";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`} id="WhatsNew">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amout: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 2)}
        className="flex-[0.75] flex justify-center flex-col "
      >
        <motion.p
          variants={textContainer}
          className="font-normal text-[14px]
      text-secondary-white"
        >
          | Yechimlar
        </motion.p>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px ] font-bold md:text-[54px]  text-[40px]
           text-[#fff]  "
        >
          Biz sizga yordam beramiz
          
        </motion.p>
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px] ">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter} `}
      >
        <img
          src="/whu.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain "
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
