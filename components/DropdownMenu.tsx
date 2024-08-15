"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type DropdownMenuProps = {
  darkBackground?: boolean;
  noWrap?: boolean;
};

const DropdownMenu = ({ darkBackground, noWrap }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    closed: { opacity: 0, scale: 0, display: "none" },
    open: {
      opacity: 1,
      scale: 1,
      display: "block", // Ensure the dropdown is shown when open
      transition: { display: { delay: 0 }, opacity: { delay: 0.1 } }, // Ensures a smooth transition in display
    },
  };

  return (
    <div className="relative flex justify-center items-center ml-5">
      <button
        className={`flex justify-center items-center  py-1 text-nowrap group border-b ${
          darkBackground ? "text-white border-white" : "text-black border-black"
        }`}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <Plus
          size={16}
          className="group-hover:rotate-180 transition-all duration-300"
        />
        <Plus
          size={16}
          className="group-hover:rotate-180 transition-all duration-300"
        />
        <span className="pl-2 text-sm">menu</span>
      </button>
      <motion.div
        initial="closed" // Start in the closed state
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={` absolute right-0 p-5 top-10  w-[300px] h-[260px] rounded-xl z-20 ${
          darkBackground ? "bg-white text-black" : "bg-black text-white"
        }`}
        style={{ transformOrigin: "top right" }} // Keep this line to set the transform origin
      >
        <p className="font-extrabold mb-3">ECOTECH SYSTEMS.</p>
        <ul
          className={`w-full flex flex-wrap justify-evenly items-start ${
            noWrap ? "flex-col" : "flex-row md:flex-col"
          }`}
        >
          <li
            className={`border-b mb-1 text-md cursor-pointer hover:translate-x-2 transition-all duration-300  ${
              darkBackground ? "border-black" : "border-white"
            }`}
            onClick={() => setIsOpen(() => false)}
          >
            <Link href={"#about"}>ABOUT</Link>
          </li>
          <li
            className={`border-b mb-1 text-md cursor-pointer hover:translate-x-2 transition-all duration-300  ${
              darkBackground ? "border-black" : "border-white"
            }`}
            onClick={() => setIsOpen(() => false)}
          >
            <Link href={"#service"}>SERVICE</Link>
          </li>
          <li
            className={`border-b mb-1 text-md cursor-pointer hover:translate-x-2 transition-all duration-300  ${
              darkBackground ? "border-black" : "border-white"
            }`}
            onClick={() => setIsOpen(() => false)}
          >
            <Link href={"#products"}>PRODUCTS</Link>
          </li>
          <li
            className={`border-b mb-1 text-md cursor-pointer hover:translate-x-2 transition-all duration-300  ${
              darkBackground ? "border-black" : "border-white"
            }`}
            onClick={() => setIsOpen(() => false)}
          >
            <Link href={"#research"}>RESEARCH</Link>
          </li>
          <li
            className={`border-b mb-1 text-md cursor-pointer hover:translate-x-2 transition-all duration-300  ${
              darkBackground ? "border-black" : "border-white"
            }`}
            onClick={() => setIsOpen(() => false)}
          >
            <Link href={"#contact"}>CONTACT US</Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default DropdownMenu;
