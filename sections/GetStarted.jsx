"use client";

import styles from "../styles";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  planetVariants,
  textContainer,
} from "../utils/motion";
import { StartSteps, TitleText, TypingText } from "../components";
import { startingFeatures } from "../constants";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amout: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter} `}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain "
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 2)}
        className="flex-[0.75] flex justify-center flex-col "
      >
        <motion.p
          variants={textContainer}
          className="font-normal text-[14px]
      text-secondary-white"
        >
          | How Metaversus Works
        </motion.p>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px ] font-bold md:text-[54px]  text-[40px]
           text-[#fff]  "
        >
          Get started with just a few clicks
        </motion.p>
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] ">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
