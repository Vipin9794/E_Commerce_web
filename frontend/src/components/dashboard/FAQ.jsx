// import  from "react";
import React, { useMemo, useState } from "react";
import barIcon from "../../assets/barIcon.png";
import group from "../../assets/group.png";
import trad from "../../assets/tread.png";
import dropdown from "../../assets/dropDown.svg";
import dropdown1 from "../../assets/dropDown2.svg";
import "./style.css";
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const list = useMemo(
    () => [
      {
        title: "Let AI Do the Work",
        content:
          "Customers are able to modify things online before making a purchase thanks to software that enables product customization. Customers have the ability to add text, upload photographs",
      },
      {
        title: "Built for Real People",
        content:
          "If you hit a snag in Ohio, a real person is here to help. We don't do robot loops. Our team ensures your online product configurator runs perfectly every day.",
      },
      {
        title: "Getting Better Daily",
        content:
          "We never stop updating. Your business in Missouri stays ahead with new features and better tech. We listen to your feedback to keep KR Customizer the best in the game.",
      },
    ],
    [],
  );
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className=" hero-container    bg-[#EAEAEA]">
      <div className="titleContainer">
           <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-center  font-semibold text-[#15202E] leading-snug md:leading-[50px]">
          Why Brands Trust KR Customizer Long-Term
        </div>
        <div className="text-base sm:text-lg md:text-xl font-semibold text-center text-[#180F4F] pt-4 pb-6 md:pb-12 max-w-3xl mx-auto px-4">
          Brands stick with us because we focus on their growth. KR Customizer
          isn't just a tool; it's a long-term partner.
        </div>
      </div>
      <div className="flex gap-10 items-center justify-center">
        <div className="max-w-[950px] w-full">
          {list.map((item, index) => (
            <div
              key={index}
              className="bg-white mb-3 p-1 border border-gray-300 rounded-md"
            >
              <div
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between p-5 cursor-pointer"
              >
                <div className="text-base sm:text-lg md:text-xl font-semibold font-semibold">{item.title}</div>

                <img src={openIndex === index ? dropdown : dropdown1} alt="" />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 border-t border-gray-200">
                  <p className="pt-4  text-sm sm:text-base md:text-lg lg:text-xl">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
