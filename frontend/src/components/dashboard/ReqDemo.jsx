import React from "react";

export default function ReqDemo() {
  return (
    <section className="bg-white p-8 md:p-12 lg:p-18 flex items-center justify-center">
      <div className="border border-[#793AAF]  max-w-[700px] bg-gradient-to-r from-[#F8F7FE] to-[#E7DCF9] rounded-lg p-8">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[30px] text-center  font-semibold text-[#15202E] leading-snug md:leading-[50px]">
            Start Offering Customized Apparel Today
          </h1>
          <p className=" text-sm sm:text-base md:text-lg lg:text-xl text-center pt-3">
            Turn standard fashion products into high-value personalized
            experiences without operational complexity.
          </p>
        </div>
        <div className="flex items-center justify-center pt-8">
          <div className="bg-[#3559C7] text-lg text-white p-2 ps-4 pe-4 rounded-lg ">
            Request a Demo
          </div>
        </div>
      </div>
    </section>
  );
}
