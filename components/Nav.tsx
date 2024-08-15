import { BicepsFlexed } from "lucide-react";

import React from "react";
import DropdownMenu from "./DropdownMenu";
import { TransitionLink } from "@/utils/TransitionLink";

const Nav = () => {
  return (
    <nav className="w-full h-[10vh] px-10 flex justify-between items-center">
      <div className=" w-full h-full flex justify-between items-center border-b border-black">
        <p className="text-xl font-extrabold">ECOTECH SYSTEMS.</p>

        <div className="sm:flex justify-center items-center hidden ">
          <TransitionLink href="/bold" classname="group">
            <BicepsFlexed
              size={16}
              className="group-hover:rotate-[360deg] transition-all duration-300"
            />
            <p className="ml-2 text-sm">bold mode</p>
          </TransitionLink>
          <DropdownMenu noWrap={true} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
