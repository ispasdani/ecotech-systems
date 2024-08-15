import DropdownMenu from "@/components/DropdownMenu";
import { Sun } from "lucide-react";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="w-full px-10 flex justify-between items-center h-[10vh]">
      <p className="text-xl font-extrabold text-[#dbff5e]">ECOTECH SYSTEMS.</p>
      <ul className="hidden md:flex justify-between items-center">
        <li className="mx-5 text-white hover:scale-[1.1] transition-all duration-300 relative group pb-1">
          <span className="absolute bottom-0 left-0 w-[0px] group-hover:w-[100%] group-hover:h-[4px] transition-all duration-300 bg-[#dbff5e]"></span>
          <Link href={"/#about"}>About</Link>
        </li>
        <li className="mx-5 text-white hover:scale-[1.1] transition-all duration-300 relative group pb-1">
          <span className="absolute bottom-0 left-0 w-[0px] group-hover:w-[100%] group-hover:h-[4px] transition-all duration-300 bg-[#dbff5e]"></span>
          <Link href={"/#service"}>Service</Link>
        </li>
        <li className="mx-5 text-white hover:scale-[1.1] transition-all duration-300 relative group pb-1">
          <span className="absolute bottom-0 left-0 w-[0px] group-hover:w-[100%] group-hover:h-[4px] transition-all duration-300 bg-[#dbff5e]"></span>
          <Link href={"/#products"}>Products</Link>
        </li>
        <li className="mx-5 text-white hover:scale-[1.1] transition-all duration-300 relative group pb-1">
          <span className="absolute bottom-0 left-0 w-[0px] group-hover:w-[100%] group-hover:h-[4px] transition-all duration-300 bg-[#dbff5e]"></span>
          <Link href={"/#research"}>Research</Link>
        </li>
        <li className="mx-5 text-white hover:scale-[1.1] transition-all duration-300 relative group flex justify-center items-center pb-1">
          <span className="absolute bottom-0 left-0 w-full h-[4px] transition-all duration-300 bg-[#dbff5e]"></span>
          <Sun size={18} />
          <Link href={"/"} className="ml-1.5">
            light mode
          </Link>
        </li>
      </ul>
      <Link
        href={"/#contact"}
        className="bg-white text-[#261893] font-bold px-5 py-2.5 rounded-full hidden md:block hover:bg-[#dbff5e] transition-all duration-300 hover:scale-[1.1]"
      >
        Contact Us
      </Link>
      <div className="md:hidden h-full flex justify-center items-center">
        <DropdownMenu darkBackground={true} noWrap={true} />
      </div>
    </nav>
  );
};

export default Nav;
