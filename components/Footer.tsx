import { soMeIcons } from "@/constants/soMeIcons";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconModal from "./IconModal";

const Footer = () => {
  return (
    <div className="w-full min-h-[50vh] px-10" id="contact">
      <div className="w-full min-h-[40vh] border-b-2 border-black border-t-2">
        <div className="w-full flex flex-col md:flex-row justify-between items-start py-5">
          <ul className="w-full flex flex-row md:flex-col flex-wrap justify-evenly items-start">
            <li className="border-b-2 mb-1 text-xl font-bold cursor-pointer hover:translate-x-2 transition-all duration-300 border-black">
              <Link href={"#about"}>ABOUT</Link>
            </li>
            <li className="border-b-2 mb-1 text-xl font-bold cursor-pointer hover:translate-x-2 transition-all duration-300 border-black">
              <Link href={"#service"}>SERVICE</Link>
            </li>
            <li className="border-b-2 mb-1 text-xl font-bold cursor-pointer hover:translate-x-2 transition-all duration-300 border-black">
              <Link href={"#products"}>PRODUCTS</Link>
            </li>
            <li className="border-b-2 mb-1 text-xl font-bold cursor-pointer hover:translate-x-2 transition-all duration-300 border-black">
              <Link href={"#research"}>RESEARCH</Link>
            </li>
            <li className="border-b-2 mb-1 text-xl font-bold cursor-pointer hover:translate-x-2 transition-all duration-300 border-black">
              <Link href={"#contact"}>CONTACT US</Link>
            </li>
          </ul>

          <div className="w-full md:max-w-[50%] text-center my-5 md:my-0 md:text-start  text-lg">
            <p className="font-bold mb-2">Contact us:</p>
            <div className="flex justify-start items-center mb-2">
              <Mail />
              <p className="ml-2">dnis-ecotech@gmail.com</p>
            </div>
            <div className="flex justify-start items-center mb-2">
              <Image
                src={"/assets/icons/whatsapp.png"}
                width={25}
                height={25}
                alt="whatsapp icon"
              />
              <p className="ml-2">+40 774 699 520</p>
            </div>
            <div className="flex justify-start items-center">
              <Image
                src={"/assets/icons/whatsapp.png"}
                width={25}
                height={25}
                alt="whatsapp icon"
              />
              <p className="ml-2">+45 55 22 50 41</p>
            </div>
          </div>
        </div>

        <p className="text-[13vw] font-extrabold text-center text-wrap md:text-nowrap md:text-[10vw]">
          ECOTECH SYSTEMS
        </p>
      </div>
      <div className="w-full min-h-[10vh] sm:flex-row flex flex-col justify-between items-center">
        <p className="text-sm my-2">Copyright © 2024 - All rights reserved</p>
        <div className="flex justify-center items-center my-2">
          {soMeIcons.map((icon, index) => (
            <div
              key={(index + 493) * 932058}
              className="relative mx-1 hover:-translate-y-1 transition-all ease-linear group/openShow"
            >
              <IconModal label={icon.title} />
              <Link href={icon.link}>
                <Image
                  src={icon.icon}
                  alt={icon.title}
                  width={22}
                  height={22}
                  className="mx-1.5"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
