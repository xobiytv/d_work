"use client";

import { motion } from "framer-motion";
// import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer, textContainer } from "../utils/motion";
// import { TypingText } from "../components";
const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-0 " />
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
        | O'zim haqimda
      </motion.p>

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px ] font-normal sm:text-[25px] text-[20px]
          text-secondary-white  "
      >
        - <span className="font-bold text-[#fff]">Diyorbek Normatov </span>
        2005 yil 18-noyabrda Jizzax shahrida tavalud topganman. <br />

        - 2021 yil martidan 2021 yil noyabrigacha <span className="font-bold text-[#fff]">TeamIT Academy</span>da dasturlash bo‘yicha o‘qiganman <br />
        - 2022 yil iyundan  2023 yil yanvargacha <span className="font-bold text-[#fff]">SoffStudy</span>da  React.js developer bo'yicha o‘qidim <br />

        - 2021 yil noyabrdan 2022 yil dekabrgacha <span className="font-bold text-[#fff]">Avlod21 Business Academy</span> da “Biznes boshqarish” kursida
        o'qidim <br />
        - 2022 yil avgustdan 2022 yil dekabrgacha <span className="font-bold text-[#fff]">Spektr LC</span> ni Marketingni yuritganman <br />
        - 2022 yil avgustdan 2022 yil oktyabrigacha <span className="font-bold text-[#fff]">Avlod21 Business Academy</span> da “Ustoz markaz” kursida
        produkt bo‘limida yordamchi sifatida faoliyat yuritdim  <br />

        - 2022 yil oktyabrda 2022 yil dekabrgacha <span className="font-bold text-[#fff]">Avlod21 Business Academy</span> da “Sotuv Menegerlari” kursida
        produkt bo‘limida faoliyat yuritdim bazi bir sabablarga ko‘ra loyiha
        to‘xtatildi  <br />

        - 2022 yil dekabrdan 2023 yil martgacha <span className="font-bold text-[#fff]">Avlod21 Business Academy</span> da Instruktor sifatida faoliyat
        yuritdim  <br />

        - Biznes ko`nikmalarim: <span className="font-bold text-[#fff]">1. Marketing  2. Product</span>
         <br />

        - 2023 yil yanvardat maygacha <span className="font-bold text-[#fff]">DotSoft</span> komandada <span className="font-bold text-[#fff]">InReport Sistem CRM</span>  platformani <span className="font-bold text-[#fff]">3.0V</span> Frontend (React.js) dasturchi bo'lib ishladim <br />

        - 2023 yil maydan  2023 yil oktyabrgacha <span className="font-bold text-[#fff]">Dreams Academy </span> qoshidagi IT kamandada Frontend (React.js) dasturchi va mentorlik qildim

      </motion.p>
      
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        href="#explore"
        className="w-[148px]  h-[28px] object-contain mt-[28px]"
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
