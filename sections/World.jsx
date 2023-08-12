'use client';


import styles from "../styles";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  planetVariants,
  textContainer,
} from "../utils/motion";
import { NewFeatures, StartSteps, TitleText, TypingText } from "../components";
import { newFeatures, startingFeatures } from "../constants";


const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amout: 0.25 }}
      // className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <motion.p
        variants={textContainer}
        className="font-normal text-[14px]
      text-secondary-white"
      >
        | People on the World
      </motion.p>
      {/* <TypingText title="| About Metaversus" textStyles="text-center" /> */}

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px ] font-bold md:text-[54px]  text-[40px]
          text-center text-[#fff]  "
      >
        Track friends around you and invite them to play together in the same
        world
      </motion.p>

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h0 "
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]  ">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute left-20 top-10 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]  ">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute  top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]  ">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>

    </motion.div>
  </section>
);

export default World;
