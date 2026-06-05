// import  from "react";
import React, { useMemo } from "react";
import barIcon from "../../assets/barIcon.png";
import group from "../../assets/group.png";
import trad from "../../assets/tread.png";
import "./style.css";
export default function TrustKr() {
  const list = useMemo(
    () => [
      {
        image: barIcon,
        title: "Let AI Do the Work",
        content: "Software shouldn't be a headache. Whether you are in Texas or Toronto, our product customizer stays fast and stable. We focus on reliability so your store never misses a sale.",
      },
      {
        image: group,
        title: "Built for Real People",
        content: "If you hit a snag in Ohio, a real person is here to help. We don't do robot loops. Our team ensures your online product configurator runs perfectly every day.",
      },
      {
        image: trad,
        title: "Getting Better Daily",
        content: "We never stop updating. Your business in Missouri stays ahead with new features and better tech. We listen to your feedback to keep KR Customizer the best in the game.",
      },
    ],
    [],
  );
  return (
    <section className=" hero-container    bg-[#EAEAEA]">
      <div className="titleContainer">
         <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-center  font-semibold text-[#15202E] leading-snug md:leading-[50px]">
         Why Brands Trust KR Customizer Long-Term
        </div>
         <div className="text-base sm:text-lg md:text-xl font-semibold text-center text-[#180F4F] pt-4 pb-6 md:pb-12 max-w-3xl mx-auto px-4">
          Brands stick with us because we focus on their growth.
           KR Customizer isn't just a tool; it's a long-term partner.
        </div>
      </div>
      <div className="flex gap-10 ">
        <div className=" prod-container1 ">
          {list.map((item, index) => (
            <div key={index} className="cardNew bg-white  p-6  rounded-md">
              <div className=" imageCont w-full h-full">
                <img src={item.image} alt="" />
                <div className=" pt-3">
                  <div className="text-base sm:text-lg md:text-xl font-semibold">{item.title}</div>
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl pt-2 ">{item.content}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
