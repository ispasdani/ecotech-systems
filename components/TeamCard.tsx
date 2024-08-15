import Image from "next/image";
import React from "react";

type TeamCardProps = {
  src: string;
  name: string;
  status: string;
  description: string;
};

const TeamCard = ({ src, name, status, description }: TeamCardProps) => {
  return (
    <div className="w-[350px] min-h-[532px] bg-white border border-black text-black mb-5 mr-5 rounded-xl flex justify-start items-center flex-col p-5">
      <Image
        src={src}
        alt="Company Founder"
        width={300}
        height={290}
        className="rounded-xl mb-3 items-center hover:scale-[1.05] transition-all duration-300 cursor-pointer"
      />
      <div>
        <p className="font-bold text-xl">{name}</p>
        <p className="text-sm mb-3 opacity-60">{status}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
