// import  from "react";
import React, { useMemo } from "react";
import parrot from "../../assets/parrot.png";
import rectangl from "../../assets/rectangl.png";
import newimg from "../../assets/new.png";
import "./style.css";
export default function KRProd() {
  const list = useMemo(
    () => [
      {
        image: parrot,
        title: "Let AI Do the Work",
        content: "Whether your shop is in Texas or Toronto, our AI product customizer is like hiring a pro designer for every customer. Shoppers just type a simple idea, and the tool builds it.",
      },
      {
        image: rectangl,
        title: "Built for Real People",
        content: "You shouldn't need a tech degree to use an online product configurator. Our plug-and-play for Shopify and WooCommerce. Store setup is easy using a drag-and-drop editor. Designed for busy owners who want to sell, not spend hours on code.",
      },
      {
        image: newimg,
        title: "Built for Real People",
        content: "You shouldn't need a tech degree to use an online product configurator. Our plug-and-play for Shopify and WooCommerce. Store setup is easy using a drag-and-drop editor. Designed for busy owners who want to sell, not spend hours on code.",
      },
    ],
    [],
  );
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
      <div className="flex gap-10 ">
        <div className=" prod-container1 ">
          {list.map((item, index) => (
            <div key={index} className="cardNew bg-white    rounded-md">
              <div className=" imageCont w-full h-full">
                <img src={item.image} alt="" />
                <div className="p-5">
                  <div className="text-[24px] font-semibold text-center md:text-left ">{item.title}</div>
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#20282C] text-center md:text-left pt-2 leading-relaxed ">{item.content}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
