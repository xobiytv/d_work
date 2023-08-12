'use client';


import styles from "../styles";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  textContainer,
} from "../utils/motion";
// import { NewFeatures, StartSteps,  } from "../components";
import { InsightCard } from "../components";
import {insights} from '../constants'

const Insightsa = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amout: 0.25 }}
      // className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <motion.p
        variants={textContainer}
        className="font-normal text-[14px]
      text-secondary-white"
      >
        | Insight
      </motion.p>
      {/* <TypingText title="| About Metaversus" textStyles="text-center" /> */}

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-bold md:text-[54px]  text-[40px]
          text-center text-[#fff]  "
      >
        Insight about metaverse
      </motion.p>

      <div className="mt-[50px] flex flex-col    gap-[30px] ">
        {insights.map((insight, index) => (
          <InsightCard 
          key={`insight-${index}`} 
          {...insight} 
          index={index + 1} />
        ))}
      </div>


    </motion.div>
  </section>
);

export default Insightsa;
