import React from "react";
import shooseImg from "../../assets/Bags.png";
import "./style.css";
export default function Bags() {
  return (
    <section className=" hero-container   bg-[#F5F5F7]">
      <div className=" sub-container">
        <div className=" ">
          <div className="custProd  ">
            <img src={shooseImg} alt="" height={2000} width={2000} />
          </div>
        </div>
        <div className=" contentcontainer   ">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-center md:text-left font-semibold text-[#15202E] leading-snug md:leading-[50px]">
            Why Custom Product Building Matters Today
          </div>
         <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#20282C] text-center md:text-left pt-4 leading-relaxed">
            Shopping isn't what it used to be. Picking from a basic list bores
            most people. You want something customized, whether you're in Texas
            or Toronto. You wish to alter colors and textures live on screen.
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#20282C] text-center md:text-left pt-4 leading-relaxed">
            Giving people that control is a total game-changer. If a shopper
            can't make a product fit their own style, they’ll just head to a
            different site. This is exactly why custom builders are such a big
            deal now. With KR Customizer, you're turning a dull product page
            into a fun, hands-on experience. It makes people feel sure about
            what they’re buying because there's no guessing involved. It’s
            simple, it looks great, and it’s how you actually stand out today.
          </div>
          <div className="flex pt-8 gap-10">
            <div className="w-full sm:w-auto text-center text-base sm:text-lg bg-[#FDE105] text-black-700 font-semibold px-6 py-3 rounded-md cursor-pointer">
              Get Started Free
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
