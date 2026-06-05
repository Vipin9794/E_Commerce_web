import React from "react";
import man from "../../assets/man.png";
import "./style.css";
export default function ProductBuilder() {
  return (
    <section className=" hero-container    bg-[#FFF7FF]">
      <div className=" prod-container ">
        
        <div className=" bg-white p-8 w-full rounded-md">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-center md:text-left font-semibold text-[#15202E] leading-snug md:leading-[50px]">
            What is a Custom Product Builder?
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#20282C] text-center md:text-left pt-4 leading-relaxed">
            Shopping online can feel a bit soulless. It’s usually just clicking a button and hoping for the best.
             But imagine a customer in Texas or Toronto actually building their own gear.
              A product builder makes that happen.
          </div>
         <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#20282C] text-center md:text-left pt-4 leading-relaxed">
            It’s like a digital workshop. Your shoppers in Ohio can swap colors or change fabrics with a tap.
             The image updates instantly, so they know exactly what they’re getting.
              KR Customizer handles the tech, so you can just focus on selling. 
            It turns a boring transaction into something personal.
          </div>
          <div className="flex pt-12 gap-10">
             <div className="w-full sm:w-auto text-center text-base sm:text-lg bg-[#FDE105] text-black-700 font-semibold px-6 py-3 rounded-md cursor-pointer">
         
              Get Started Free
            </div>
          </div>
        </div>
        <div className=" ">
          <div className=" ">
            <img src={man} alt="" width={550} height={550} />
          </div>
        </div>
      </div>
    </section>
  );
}
