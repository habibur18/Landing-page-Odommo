import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export default function ServiceTile({ title, button }) {
  return (
    <section className=" bg-[#F5F5F5] ">
      <div className={`max-w-[1350px] ${title ? "pt-[81px] pb-[75px]" : "pt-[173px] pb-[75px]"}  px-10 lg:px-[172px]  md:px-10 2xl:px-0 mx-auto space-y-10`}>
        {title && (
          <div className="text-center mb-10">
            <motion.h1 initial={{ y: 70, opacity: 0, scale: 0 }} whileInView={{ y: 0, opacity: 1, scale: 1 }} transition={{ delay: 0.3, type: "spring", stiffness: 60, ease: "easeIn", duration: 1, opacity: { duration: 0.5 } }} className="text-4xl font-bold pb-10">
              {title}
            </motion.h1>
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-[49px] text-justify">
          {/* <motion.div initial={{ y: 270 }} whileInView={{ y: 0 }} whileHover={{ scale: 1.1, transition: { duration: 0.1 } }} transition={{ delay: 0.2, y: { type: "spring", stiffness: 60 }, ease: "easeIn", duration: 1 }} className="max-w-[540px] 2xl:max-w-full rounded-md space-y-5 text-center bg-[#fff] p-[25px] shadow-lg">
            <motion.div initial={{ y: 170, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, y: { type: "spring", stiffness: 60 }, ease: "easeIn", duration: 1 }} className="w-full flex justify-center z-20">
              <img className="w-[70px]" src="https://i.ibb.co/85yNXcZ/website-design.png" alt="" />
            </motion.div>
            <motion.h3 initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, y: { type: "spring", stiffness: 60 }, ease: "easeIn", duration: 1 }} className="text-2xl font-bold">
              Website Design
            </motion.h3>
            <motion.p initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, y: { type: "spring", stiffness: 60 }, ease: "easeIn", duration: 1 }} className="">
              We design & develop smarter websites that reach your target audience, increase sales and customer retention rate. Our highly-innovative and responsive web designs have 70% more engagement rate than our competitors. We have hands-on experience in WordPress, Joomla, Drupal and Magento web design and development.
            </motion.p>
            <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, y: { type: "spring", stiffness: 60 }, ease: "easeIn", duration: 1 }} className="my-10">
              <Link to="/#" className="group  font-medium inline-block">
                Learn More <span className="transform -rotate-45 inline-block translate-x-0 group-hover:translate-x-2 duration-300">→</span>
              </Link>
            </motion.div>
          </motion.div> */}
          {Array.from({ length: 4 }).map((_, index) => (
            <motion.div key={index} initial={{ y: 170 }} whileInView={{ y: 0 }} transition={{ delay: 0.2, y: { type: "spring", stiffness: 60 }, ease: "easeIn", duration: 1 }} className="max-w-[540px] 2xl:max-w-full rounded-md space-y-5 text-center bg-[#fff] p-[25px] shadow-lg">
              <motion.div initial={{ y: -170 }} whileInView={{ y: 0 }} transition={{ delay: 0.2, y: { type: "spring", stiffness: 60 }, ease: "easeIn", duration: 1 }} className="w-full flex justify-center z-20">
                <motion.img initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }} className="w-[70px]" src="https://i.ibb.co/85yNXcZ/website-design.png" alt="" />
              </motion.div>
              <motion.h3 initial={{ y: 100 }} whileInView={{ y: 0 }} transition={{ delay: 0.2, y: { type: "spring", stiffness: 60 }, ease: "easeIn", duration: 1 }} className="text-2xl font-bold">
                Website Design
              </motion.h3>
              <motion.p initial={{ y: 100 }} whileInView={{ y: 0 }} transition={{ delay: 0.2, y: { type: "spring", stiffness: 60 }, ease: "easeIn", duration: 1 }} className="">
                We design & develop smarter websites that reach your target audience, increase sales and customer retention rate. Our highly-innovative and responsive web designs have 70% more engagement rate than our competitors. We have hands-on experience in WordPress, Joomla, Drupal and Magento web design and development.
              </motion.p>
              <motion.div initial={{ y: 100 }} whileInView={{ y: 0 }} transition={{ delay: 0.2, y: { type: "spring", stiffness: 60 }, ease: "easeIn", duration: 1 }} className="my-10">
                <Link to="/#" className="group font-medium inline-block">
                  Learn More <span className="transform -rotate-45 inline-block translate-x-0 group-hover:translate-x-2 duration-300">→</span>
                </Link>
              </motion.div>
            </motion.div>
          ))}

          {/* <div className="max-w-[540px] 2xl:max-w-full rounded-md space-y-5 text-center bg-[#fff] p-[25px] shadow-lg">
            <div className="w-full flex justify-center">
              <img className="w-[70px]" src="https://i.ibb.co/WH8bfxT/UI-UX.png" alt="" />
            </div>
            <h3 className="text-2xl font-bold">UI UX Design</h3>
            <p className="">We design & develop smarter websites that reach your target audience, increase sales and customer retention rate. Our highly-innovative and responsive web designs have 70% more engagement rate than our competitors. We have hands-on experience in WordPress, Joomla, Drupal and Magento web design and development.</p>
            <Link to="/#" className="group  font-medium inline-block">
              Learn More <span className="transform -rotate-45 inline-block translate-x-0 group-hover:translate-x-2 duration-300">→</span>
            </Link>
          </div>
          <div className="max-w-[540px] 2xl:max-w-full rounded-md space-y-5 text-center bg-[#ffffff] p-[25px] shadow-lg">
            <div className="w-full flex justify-center">
              <img className="w-[70px]" src="https://i.ibb.co/89VGWzc/digital-marketing.png" alt="" />
            </div>
            <h3 className="text-2xl font-bold">Digital Marketing</h3>
            <p className="">We design & develop smarter websites that reach your target audience, increase sales and customer retention rate. Our highly-innovative and responsive web designs have 70% more engagement rate than our competitors. We have hands-on experience in WordPress, Joomla, Drupal and Magento web design and development.</p>
            <Link to="/#" className="group  font-medium inline-block">
              Learn More <span className="transform -rotate-45 inline-block translate-x-0 group-hover:translate-x-2 duration-300">→</span>
            </Link>
          </div>
          <div className="max-w-[540px] 2xl:max-w-full rounded-md space-y-5 text-center bg-[#ffffff] p-[25px] shadow-lg">
            <div className="w-full flex justify-center">
              <img className="w-[70px]" src="https://i.ibb.co/s2Qg2Zs/web-dev.png" alt="" />
            </div>
            <h3 className="text-2xl font-bold">Web Development</h3>
            <p className="">We design & develop smarter websites that reach your target audience, increase sales and customer retention rate. Our highly-innovative and responsive web designs have 70% more engagement rate than our competitors. We have hands-on experience in WordPress, Joomla, Drupal and Magento web design and development.</p>
            <Link to="/#" className="group  font-medium inline-block">
              Learn More <span className="transform -rotate-45 inline-block translate-x-0 group-hover:translate-x-2 duration-300">→</span>
            </Link>
          </div> */}
        </div>
        {button && (
          <div className="text-center pt-5">
            <Link onClick={() => window.scrollTo(0, 0)} to="/services" className="group bg-[#0198FE] text-white px-3 py-3 sm:px-5 sm:py-4 rounded-[36px] flex justify-center gap-2 hover:bg-white hover:text-[#0198FE] hover:ring-2 hover:ring-[#0198FE] duration-300 group max-w-[200px] mx-auto uppercase">
              More Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
