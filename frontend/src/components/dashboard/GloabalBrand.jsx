import React from "react";
import prodImg from "../../assets/prod.png";
import "./style.css";
export default function GloabalBrand() {
  return (
    <section className=" hero-container   bg-[#FFF7FF]">
      <div className="prod-container3 ">
        <div className=" ">
          <div className="custProd pt-4">
            <img src={prodImg} alt="" />
          </div>
        </div>
        <div className=" pt-1 ">
           <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-center md:text-left font-semibold text-[#15202E] leading-snug md:leading-[50px]">
            Location-Friendly Custom Product Builder for Global Brands
          </div>
             <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#20282C] text-center md:text-left pt-4 leading-relaxed">
            You don't need to live in a big city to sell like a pro.
             Even if you're in a quiet spot in Ontario or a studio in Toronto,
              the whole world is your market. Your location doesn't hold you back anymore.

          </div>
             <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#20282C] text-center md:text-left pt-4 leading-relaxed">
           A customer down in Texas can design their own gear just as fast
            as someone in Ohio or Missouri. Since KR Customizer is a web-based product customizer, it just works. It’s like having a storefront that never closes. You reach people across the globe without leaving your house. 
           It makes your brand feel local to everyone, everywhere.
          </div>
          
        </div>
      </div>
    </section>
  );
}
