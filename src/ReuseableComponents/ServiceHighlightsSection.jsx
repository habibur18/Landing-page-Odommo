import React from "react";

export default function ServiceHighlightsSection() {
  return (
    <section>
      <div className="max-w-[1350px] px-10 lg:px-[92px] 2xl:px-0 mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
          <div className="w-3/4">
            <h2 className=" lg:max-w-[12ch] text-4xl font-bold ">
              <span className="">Why Choose</span> <span className="text-[#3B82F6]">ODOMMO XYZ</span>{" "}
            </h2>
          </div>
          <div className="lg:w-[70%] 2xl:w-[80%] md:ml-14">
            <p>Discover the difference with IT Web Logic. Experience our data-driven decisions and proven track record of success. Choose us for uniquely crafted web solutions.</p>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center lg:flex-row  gap-14 2xl:gap-20 mt-10 ">
          <div>
            <div>
              <img className="w-full" src="https://i.ibb.co/Tg9mgLM/main.png" alt="" />
            </div>
          </div>
          <div className="lg:w-3/6  space-y-5 lg:space-y-[35px]">
            <div>
              <div className="flex items-center gap-[22px]">
                <img className="size-[50px] -mt-[0.80rem] sm:size-[60px]" src="https://i.ibb.co/TcH6p2p/security.png" alt="" />
                <div className="w-full 2xl:w-[60%]">
                  <h3 className="text-[#3B82F6] font-semibold lg:text-xl my-3">COMMITMENT TO SECURITY</h3>
                  <p>We don`t compromise on server security, get from highly skilled Engineers to maintain our server.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-[22px]">
                <img className="size-[50px] -mt-[0.80rem]  sm:size-[60px]" src="https://i.ibb.co/Mc1Sqjp/guarantee.png" alt="" />
                <div className="w-full 2xl:w-[60%]">
                  <h3 className="text-[#3B82F6] font-semibold lg:text-xl my-3">99.99% UPTIME GUARANTEE</h3>
                  <p>We give you guarantee about our service so you don`t have to worry after buying us any service.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-[22px]">
                <img className="size-[50px] -mt-[0.80rem]  sm:size-[60px]" src="https://i.ibb.co/Gxk7Gdx/reliability.png" alt="" />
                <div className="w-full 2xl:w-[60%]">
                  <h3 className="text-[#3B82F6] font-semibold lg:text-xl my-3">RELIABILITY</h3>
                  <p>Success depends on strong honest relationships that involve having a strong bond with our customers</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center  gap-[22px]">
                <img className="size-[50px] -mt-[0.80rem]  sm:size-[60px]" src="https://i.ibb.co/7twdCZH/support.png" alt="" />
                <div className="w-full 2xl:w-[60%]">
                  <h3 className="text-[#3B82F6] font-semibold lg:text-xl my-3">24/7 PREMIUM SUPPORT</h3>
                  <p>Push boundaries for visually stunning websites and captivating experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
