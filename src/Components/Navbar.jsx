import { useState } from "react";
import Logo from "../images/logo.svg";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav
        id="navbar"
        className="p-6 flex items-center justify-between  container mx-auto font-bold "
      >
        {/* logo and left menu */}
        <div className="flex items-center space-x-10">
          <img src={Logo} alt="" />
          <div className="hidden lg:flex space-x-5">
            <a href="" className="text-grayishViolet hover:text-veryDarkViolet">
              Features
            </a>
            <a href="" className="text-grayishViolet hover:text-veryDarkViolet">
              Pricing
            </a>
            <a href="" className="text-grayishViolet hover:text-veryDarkViolet">
              Resources
            </a>
          </div>
        </div>
        {/* right menu */}
        <div className="lg:flex items-center space-x-5 hidden">
          <a href="" className="text-grayishViolet hover:text-veryDarkViolet">
            Login
          </a>
          <a
            href=""
            className="px-6 py-2 text-white bg-cyan rounded-3xl hover:opacity-80 duration-100"
          >
            Signup
          </a>
        </div>
        {/* menu button */}
        <button
          id="menu-btn"
          className={`${
            isMenuOpen && `open`
          } absolute right-12 z-10 md:hidden top-6`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="duration-300 block hamburger-top w-8 h-1 bg-black"></span>
          <span className="duration-300 mt-1 block hamburger-middle w-8 h-1 bg-black"></span>
          <span className="duration-300 mt-1 block hamburger-bottom w-8 h-1 bg-black"></span>
        </button>
      </nav>
      <div
        className={`lg:hidden space-y-6 ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col mobile_menu bg-darkViolet fixed  rounded-lg text-center max-w-lg p-6 left-36 `}
      >
        <a href="" className="text-white font-bold w-full px-40">
          Features
        </a>
        <a href="" className="text-white font-bold px-40">
          Pricing
        </a>
        <a href="" className="text-white font-bold  px-40">
          Resources
        </a>
        <div className="w-full h-[1px] bg-gray-500"></div>
        <a href="" className="text-white font-bold  px-20">
          Login
        </a>
        <a
          href=""
          className="text-white font-bold  px-10 bg-cyan rounded-xl py-4"
        >
          Signup
        </a>
      </div>
    </>
  );
}
