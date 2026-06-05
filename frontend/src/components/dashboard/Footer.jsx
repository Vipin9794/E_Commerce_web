import React from "react";

import "./style.css";
import gmail from "../../assets/gmail.svg";
import call from "../../assets/call.svg";
import facebook from "../../assets/face.svg";
import instagram from "../../assets/insta.svg";
import twiter from "../../assets/twiter.svg";
import linkedin from "../../assets/linkdin.svg";

export default function Footer() {
  return (
    <section className=" hero-container   bg-white">
      <div className="prod-container pt-60 ">
        <div className="">
          <h1
            className="
            text-[40px] font-bold text-center md:text-left"
          >
            Customizer
          </h1>
          <p className="text-center md:text-left">Get tips, new features & exclusive deals</p>
        </div>
        <div>
          <h1
            className="
            text-lg font-bold mb-4 "
          >
            Company
          </h1>
          <p className="mb-2">About Us</p>
          <p className="mb-2">Showcase</p>
          <p className="mb-2">Case Studies</p>
          <p className="mb-2">Blog</p>
          <p className="mb-2">Become a partner</p>
        </div>
        <div>
          <h1
            className="
            text-lg font-bold mb-4"
          >
            Customizer
          </h1>
          <p className="mb-2">Bakery </p>
          <p className="mb-2">Fashion & Apparel</p>
          <p className="mb-2">Jewelry & Accessories</p>
          <p className="mb-2">Gifting & Occasion-Based</p>
        </div>
        <div>
          <h1
            className="
            text-lg font-bold mb-4"
          >
            Contact Us
          </h1>

          <div className="flex gap-10 items-center  mb-2">
            <img src={call} alt="" height={12} width={12} />

            <p className="">1-800-259-3265</p>
          </div>
          <div className="flex gap-10 items-center  mb-4">
            <img src={gmail} alt="" height={12} width={12} />
            <p className="">support@kds.com</p>
          </div>

          <h1
            className="
            text-lg font-bold mb-4 "
          >
            Socials
          </h1>
          <div className="flex gap-6">
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={twiter} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
      </div>
      <div className="text-sm pt-4">
        Privacy Policy 
      </div>
    </section>
  );
}
