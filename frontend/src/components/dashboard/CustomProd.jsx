import React from "react";
import customImg from "../../assets/custom.png";
import "./style.css";
export default function CustomProd() {
  return (
    <section className=" hero-container   bg-[#FFF7FF]">
      <div className="prod-container3 ">
        <div className=" ">
          <div className=" custProd pt-4">
            <img src={customImg} alt="" />
          </div>
        </div>
        <div className=" pt-4 ">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-center md:text-left font-semibold text-[#15202E] leading-snug md:leading-[50px]">
            Products That Work Best with a Custom Product Builder
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#20282C] text-center md:text-left pt-4 leading-relaxed">
            A product customizer works for almost anything, but it really shines
            with visual items. Imagine a shopper in Texas designing a custom
            hoodie or a leather jacket. They can swap colors or add patches
            instantly. In Toronto, someone might use a 3D product builder to
            pick the perfect wood finish for a new dining table.
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#20282C] text-center md:text-left pt-4 leading-relaxed">
            Even small items like jewelry in Ohio benefit. A customer can
            engrave a necklace and see the font before buying. Whether it’s
            personalized mugs or custom print-on-demand gear, KR Customizer
            makes it real. It turns a basic gift into something one-of-a-kind.
            If the look matters, a custom product builder is your best friend.
          </div>
        </div>
      </div>
    </section>
  );
}
