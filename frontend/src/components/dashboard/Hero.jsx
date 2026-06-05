import React from "react";
import shooseImg from "../../assets/shoose.png";
import "./style.css";
export default function Hero() {
  return (
    <section className=" hero-container   bg-[#FFF7FF]">
      <div className="sub-container ">
        <div className="  ">
         <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#15202E] leading-snug md:leading-[50px] text-center md:text-left">
            Custom Product Builder That Lets Customers Create, Not Just Click – KR Customizer
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#20282C] pt-4 leading-relaxed text-center md:text-left">
            Ever wonder why people leave without buying? Usually, they're just
            unsure. They aren't sure if the color is right or if the parts fit.
            A Texas custom product builder fixes that instantly. When someone
            sees their creation change on the screen, that doubt goes away. It's
            not just a fancy tool; it's a confidence builder for Toronto or
            Ontario users. Using something like KR Customizer lets them play
            with options and feel good about their choice. That’s how you turn a
            window shopper into a paying customer.
          </div>
          <div className="flex flex-col sm:flex-row pt-6 sm:pt-8 gap-4 sm:gap-10 items-center sm:items-start">
            <div className="w-full sm:w-auto text-center text-base sm:text-lg bg-[#FDE105] text-black-700 font-semibold px-6 py-3 rounded-md cursor-pointer">
              Get Started Free
            </div>
            <div className="w-full sm:w-auto text-center text-base sm:text-lg border-[#FDE105] border font-semibold text-black-700 px-6 py-3 rounded-md cursor-pointer">
              Book Free Demo
            </div>
          </div>
         
        </div>

        <div className=" ">
          <div className=" shooseImg   pt-4">
            <img src={shooseImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
