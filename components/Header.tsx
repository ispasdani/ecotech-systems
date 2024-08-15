import { ArrowDown, ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full min-h-[60vh] px-10">
      <div className="w-full flex flex-col md:flex-row justify-between items-start py-5">
        <ul className="w-full flex flex-row md:flex-col flex-wrap justify-evenly items-start">
          <li className="border-b mb-1 text-md cursor-pointer hover:translate-x-2 transition-all duration-300 border-black">
            <Link href={"#about"}>ABOUT</Link>
          </li>
          <li className="border-b mb-1 text-md cursor-pointer hover:translate-x-2 transition-all duration-300 border-black">
            <Link href={"#service"}>SERVICE</Link>
          </li>
          <li className="border-b mb-1 text-md cursor-pointer hover:translate-x-2 transition-all duration-300 border-black">
            <Link href={"#products"}>PRODUCTS</Link>
          </li>
          <li className="border-b mb-1 text-md cursor-pointer hover:translate-x-2 transition-all duration-300 border-black">
            <Link href={"#research"}>RESEARCH</Link>
          </li>
          <li className="border-b mb-1 text-md cursor-pointer hover:translate-x-2 transition-all duration-300 border-black">
            <Link href={"#contact"}>CONTACT US</Link>
          </li>
        </ul>

        <p className="w-full md:max-w-[50%] text-center my-5 md:my-0 md:text-start font-bold text-lg">
          We are a research-driven tech lab specializing in high-quality
          software development. We innovate and implement cutting-edge
          solutions, helping businesses achieve their goals through advanced
          research and superior software engineering.
        </p>
      </div>
      <div className="w-full flex justify-end items-center">
        <Link
          href={"#contact"}
          className="flex w-[140px] justify-center items-center px-3 py-2 rounded-full border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 group"
        >
          <ChevronDown
            color="black"
            size={20}
            className="mr-1 rotate-[-90deg] group-hover:rotate-0 transition-all duration-300"
          />
          Let's connect
        </Link>
      </div>

      <div className="w-full h-full py-5">
        <p className="text-6xl sm:text-8xl font-bold">WE CREATE</p>
        <p className="text-6xl sm:text-8xl font-bold">HIGH QUALITY</p>
        <p className="text-6xl sm:text-8xl font-bold">SOFTWARE</p>
      </div>
    </header>
  );
};

export default Header;
