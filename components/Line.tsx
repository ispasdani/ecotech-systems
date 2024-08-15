"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

type LineProps = {
  serviceName: string;
  description: string;
};

const Line = ({ serviceName, description }: LineProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full min-h-[10vh] border-b border-black text-black hover:bg-gray-100 cursor-pointer transition-all duration-200 flex flex-col justify-center items-center group">
      <div
        className="w-full h-[10vh] flex justify-between items-center z-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg">{serviceName}</p>
        <ChevronDown className="-rotate-90 group-hover:rotate-0 transition-all duration-200" />
      </div>
      {isOpen && (
        <div className="w-full min-h-[5vh] px-5">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Line;
