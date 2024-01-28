import React from "react";

export default function ServiceHighlights() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <div className="w-3/4">
            <h2 className="max-w-[300px] text-4xl font-semibold ">
              WHY CHOOSE <span className="text-[#3B82F6]">ODOMMO XYZ</span>{" "}
            </h2>
          </div>
          <div className="w-full">
            <p>Discover the difference with IT Web Logic. Experience our data-driven decisions and proven track record of success. Choose us for uniquely crafted web solutions.</p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-20 my-10 ">
          <div>
            <div>
              <img className="w-full" src="https://i.ibb.co/Tg9mgLM/main.png" alt="" />
            </div>
          </div>
          <div>
            <div className="flex gap-5 my-5">
              <div>
                <img className="w-[70px] h-[70px]" src="https://i.ibb.co/TcH6p2p/security.png" alt="" />
              </div>
              <div>
                <h3 className="text-[#3B82F6] font-semibold text-xl">COMMITMENT tO SECURITY</h3>
                <p>We don`t compromise on server security, get from highly skilled Engineers to maintain our server.</p>
              </div>
            </div>
            <div className="flex gap-5 my-5">
              <div>
                <img className="w-[70px] h-[70px]" src="https://i.ibb.co/Mc1Sqjp/guarantee.png" alt="" />
              </div>
              <div>
                <h3 className="text-[#3B82F6] font-semibold text-xl">99.99% UPTIME GUARANTEE</h3>
                <p>We give you guarantee about our service so you don`t have to worry after buying us any service.</p>
              </div>
            </div>
            <div className="flex gap-5 my-5">
              <div>
                <img className="w-[70px] h-[70px]" src="https://i.ibb.co/7twdCZH/support.png" alt="" />
              </div>
              <div>
                <h3 className="text-[#3B82F6] font-semibold text-xl">24/7 PREMIUM SUPPORT</h3>
                <p>Push boundaries for visually stunning websites and captivating experiences.</p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <div>
                <img className="w-[70px] h-[70px]" src="https://i.ibb.co/Gxk7Gdx/reliability.png" alt="" />
              </div>
              <div>
                <h3 className="text-[#3B82F6] font-semibold text-xl">RELIABILITY</h3>
                <p>Success depends on strong honest relationships that involve having a strong bond with our customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
