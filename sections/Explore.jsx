"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExploreCard } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer, textContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";
const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <motion.p
          variants={textContainer}
          className="font-normal text-[14px]
      text-secondary-white"
        >
          | Loyhalar
        </motion.p>
        {/* <TypingText title="| About Metaversus" textStyles="text-center" /> */}

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px ] font-bold md:text-[54px]  text-[40px]
          text-center text-[#fff]  "
        >
          Ishlagan loyohlarim 
        </motion.p>

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 ">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
      {/* Explore section */}
    </section>
  );
};
export default Explore;
