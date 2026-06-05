import React from "react";
import man2 from "../../assets/man2.png";
import "./style.css";
export default function ProductWork() {
  return (
    <section className=" hero-container    bg-[#EAEAEA]">
      <div className="titleContainer">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-center  font-semibold text-[#15202E] leading-snug md:leading-[50px]">
          Why Shoppers Love Using a KR <br /> Customizer Custom Product Builder
        </div>
        <div className="text-base sm:text-lg md:text-xl font-semibold text-center text-[#180F4F] pt-4 pb-6 md:pb-12 max-w-3xl mx-auto px-4">
          Shoppers are tired of the same old stuff. Using a product customizer
          like KR Customizer makes them feel special and sure they aren't
          wasting money.
        </div>
      </div>
      <div className="flex gap-10 flex-wrap xl:flex-nowrap   ">
        <div className=" prod-container ">
          <div className="flex flex-col md:flex-row bg-white w-full rounded-md items-center">
            <div className="w-full md:flex-[42%] text-center md:text-left pt-6 pb-4 px-6 md:ps-8 md:pe-8">
              <div className="text-2xl sm:text-3xl font-semibold text-[#180F4F] leading-[34px] md:leading-[42px]">
                It’s All About Them
              </div>
              <div className="text-base sm:text-lg md:text-xl pt-4 md:pt-8">
                Whether someone is in Texas or Toronto, they want to stand out.
                An online product configurator lets them put a personal spin on
                your gear. It stops being a random item and becomes "theirs."
                That emotional connection is a massive sales driver.
              </div>
            </div>

            <div className="w-full md:flex-[36%] imageCont flex justify-center items-center  md:p-0">
              <img
                src={man2}
                alt=""
                className="w-full max-w-[350px] md:max-w-none h-auto object-contain"
              />
            </div>
          </div>
        </div>
        <div className="bg-white text-center md:text-left  p-8 w-full rounded-md">
           <div className="text-2xl  sm:text-3xl font-semibold text-[#180F4F] leading-[34px] md:leading-[42px]">
            Seeing is Believing
          </div>
           <div className="text-base  sm:text-lg md:text-xl pt-4 md:pt-8">
            Shopping online can feel a bit soulless. It’s usually just clicking
            a button and hoping for the best. But imagine a customer in Texas or
            Toronto actually building their own gear. A product builder makes
            that happen.
          </div>
        </div>
      </div>
    </section>
  );
}
