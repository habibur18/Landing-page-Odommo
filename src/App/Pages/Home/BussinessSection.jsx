import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export default function BussinessSection() {
  return (
    <section>
      <div className="max-w-[1350px]   px-10 lg:px-[98px] 2xl:px-0 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 lg:gap-24">
        <div className="space-y-10 my-10 md:my-0 md:w-5/6">
          <motion.h1 initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 60, ease: "easeIn", duration: 1 }} className="text-4xl font-bold">
            Business & IT Solutions In Bangladesh
          </motion.h1>
          <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, type: "spring", stiffness: 60, ease: "easeIn", duration: 1 }} className="space-y-10">
            <p className="text-justify">Welcome to Odommo XYZ! A growing digital agency founded in 2020. We are a specialized web development, Android app development, graphics design, business solutions, digital marketing, UI/UX designing, and data analysis service provider in Bangladesh. Our team of experts is dedicated to helping your businesses establish a strong online presence and achieve your growth goals. With our use of the latest technologies and knowledge of recent business trends,</p>
            <p>We believe in the power of technology and innovation to drive business success. With years of experience in the industry, our team of skilled professionals is committed to delivering high-quality services that exceed our client`s expectations. We understand that each business</p>
          </motion.div>
          <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, type: "spring", stiffness: 60, ease: "easeIn", duration: 1 }} className="my-10">
            <Link onClick={() => window.scrollTo(0, 0)} to="/#" className="btn">
              Read More
            </Link>
          </motion.div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-2 gap-5 [&>div>img]:rounded-xl">
            <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.1, stiffness: 60, ease: "easeIn", duration: 0.4 }} className="w-full ">
              <img className="w-full" src="https://i.ibb.co/f8KnF7T/1.png" alt="" />
            </motion.div>
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, stiffness: 60, ease: "easeIn", duration: 0.4 }} className="w-full ">
              <img className="w-full" src="https://i.ibb.co/sq0g3Z6/2.png" alt="" />
            </motion.div>
            <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, stiffness: 60, ease: "easeIn", duration: 0.4 }} className="w-full ">
              <img className="w-full" src="https://i.ibb.co/4NFRB3c/3.png" alt="" />
            </motion.div>
            <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, stiffness: 60, ease: "easeIn", duration: 0.4 }} className="w-full ">
              <img className="w-full" src="https://i.ibb.co/2cV7qbz/4.png" alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
