import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import required modules
export default function ClientsReviews() {
  const [slideCount, setSlideCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlideCount(1);
      } else if (window.innerWidth < 1024) {
        setSlideCount(2);
      } else {
        setSlideCount(3);
      }
    };

    window.addEventListener("resize", handleResize); // Use window instead of document
    handleResize();

    return () => window.removeEventListener("resize", handleResize); // Cleanup the event listener
  }, []); // No need to include slideCount and setSlideCount in the dependency array
  return (
    <section className="my-32">
      <div className="max-w-[1350px] px-10 lg:px-[80px] 2xl:px-0 mx-auto overflow-hidden">
        <h1 className="text-4xl font-bold text-center my-10">What People Are Saying</h1>

        <div>
          <Swiper
            slidesPerView={slideCount}
            spaceBetween={19}
            // navigation={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              // disableOnInteraction: true, // Stop autoplay on interaction
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
            style={{ overflow: "hidden", minHeight: "450px", width: "100%", margin: "0 auto" }}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide key={index}>
                <div style={{ boxShadow: "-2px 4px 13px -1px rgba(0,0,0,0.5)" }} className="cursor-pointer md:max-w-[370px] xl:max-w-[400px] bg-[#CDCECF]/20 p-10 space-y-7 shadow-lg rounded-md mt-5">
                  <div>
                    <img src="https://i.ibb.co/bvWXWbn/comma.png" alt="" />
                  </div>
                  <div>
                    <p className="text-justify">Lorem ipsum dolor sit amet duis consectetur. Nunc potenti pretium duis scelerisque at sed aliquet eget. Commodo vitae dolor sit amet duis.</p>
                    <div>
                      {Array.from({ length: 5 }, (_, i) => (
                        <i key={i} className="fa-solid fa-star text-yellow-500"></i>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img className="border-2 rounded-full border-[#0198FE]" src="https://i.ibb.co/jR8b6cg/people.png" alt="" />
                    <div>
                      <h4 className="text-xl font-bold">Tommie Ewart</h4>
                      <p className="#6A6969">Head of Marketing</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
