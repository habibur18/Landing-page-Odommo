import React from "react";
import Marquee from "react-fast-marquee";

export default function PartnersMarquee() {
  return (
    <section className="my-20">
      <div className="relative max-w-[1350px] 2xl:px-0 mx-auto">
        <article>
          <Marquee gradient={false} speed={50} play={true} pauseOnHover={true} direction="left" gradientWidth={200}>
            <figure className="px-5 w-full">
              <img className="w-full h-[70px]" src="https://i.ibb.co/pw9VVTV/acquia.png" alt="" />
            </figure>
            <figure className="px-5 w-full">
              <img className="w-full h-[70px]" src="https://i.ibb.co/GPjz7DZ/albion.png" alt="" />
            </figure>
            <figure className="px-5 w-full">
              <img className="w-full h-[70px]" src="https://i.ibb.co/W0FKppj/aws.png" alt="" />
            </figure>
            <figure className="px-5 w-full">
              <img className="w-full h-[70px]" src="https://i.ibb.co/HpWxS5p/ict.png" alt="" />
            </figure>
            <figure className="px-5 w-full">
              <img className="w-full h-[70px]" src="https://i.ibb.co/W0FKppj/aws.png" alt="" />
            </figure>
            <figure className="px-5 w-full">
              <img className="w-full h-[70px]" src="https://i.ibb.co/58cdW7c/wpengine.png" alt="" />
            </figure>
            {/* 2nd */}
            <figure className="px-5 w-full">
              <img className="w-full h-[70px]" src="https://i.ibb.co/pw9VVTV/acquia.png" alt="" />
            </figure>
            <figure className="px-5 w-full">
              <img className="w-full h-[70px]" src="https://i.ibb.co/GPjz7DZ/albion.png" alt="" />
            </figure>
            <figure className="px-5 w-full">
              <img className="w-full h-[70px]" src="https://i.ibb.co/W0FKppj/aws.png" alt="" />
            </figure>
            <figure className="px-5 w-full">
              <img className="w-full h-[70px]" src="https://i.ibb.co/HpWxS5p/ict.png" alt="" />
            </figure>
            <figure className="px-5 w-full">
              <img className="w-full h-[70px]" src="https://i.ibb.co/W0FKppj/aws.png" alt="" />
            </figure>
            <figure className="px-5 w-full">
              <img className="w-full h-[70px]" src="https://i.ibb.co/58cdW7c/wpengine.png" alt="" />
            </figure>
          </Marquee>
        </article>
        <div className="absolute top-0 left-0 lg:-left-2 right-0 shadow-2xl shadow-sky-400 z-50 w-14 rounded-2xl h-20 bg-gray-300 blur-[15px]"></div>
        <div className="absolute top-0 right-0 lg:-right-2 shadow-2xl shadow-sky-400 z-50 w-14 rounded-2xl h-20 bg-gray-300 blur-[15px]"></div>
      </div>
    </section>
  );
}
