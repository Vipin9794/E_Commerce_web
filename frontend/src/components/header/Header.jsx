import React from "react";
import "./header.css";
import GroupIcon from "../../assets/Group.svg";
import logo from "../../assets/logo.svg";
import Sidebar from "../sidebar/Sidebar";
export default function Header() {
  return (
    <>
      <section className=" header-container   sm:p-3 md:p-2 lg:p-4  flex justify-between items-center">
        <div className="flex items-center  justify-between gap-10 ">
          <div className="tabView">
            <Sidebar/>
          </div>
          <div className="  flex items-center gap-2  ps-6 sm:ps-1 md:ps-3 ">
            <div className=" desktop-view logo p-2 rounded-full bg-linear-to-r from-[#FFF5CD] to-[#FEB00280] ">
              <img src={logo} alt="" />
            </div>
            <div className=" desktop-view logo-image">
              <img src={GroupIcon} alt="" />
            </div>
          </div>
          <div className="desktop-view">
            <div className="  flex gap-4 md:gap-4 lg:gap-6">
              <a href="/" className="text-base sm:text-sm lg:text-base font-semibold text-gray-600">
                Home{" "}
              </a>
              <a href="/" className="text-base sm:text-sm lg:text-base font-semibold text-gray-600">
                Showcase{" "}
              </a>
              <a href="/" className="text-base sm:text-sm lg:text-base font-semibold text-gray-600">
                About Us{" "}
              </a>
              <a href="/" className="text-base sm:text-sm lg:text-base font-semibold text-gray-600">
                Case Studies{" "}
              </a>
              <a href="/" className="text-base sm:text-sm lg:text-base font-semibold text-gray-600">
                Blog{" "}
              </a>
              <a href="/" className="text-base sm:text-sm lg:text-base font-semibold text-gray-600">
                Contact{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="text-lg  pe-6 flex gap-8">
          <a href="/login" className="text-md  font-semibold text-gray-600 pt-1 cursor-pointer ">Login</a>
          <div className="text-md bg-[#FDE105]  font-semibold text-gray-600 pe-2 ps-2 pt-1 pb-1 rounded-sm cursor-pointer">
            Get a Demo
          </div>
        </div>
      </section>
    </>
  );
}
