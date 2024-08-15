import Nav from "@/bold-components/Nav";
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";
import React from "react";

const Herobox = () => {
  return (
    <div className="relative w-full min-h-[100vh] bg-[#261893]">
      <Nav />
      <div className="absolute top-[7%] left-[50%] translate-x-[-50%]">
        <h1 className="text-[#dbff5e] font-extrabold text-center text-nowrap md:text-[13vw] md:leading-[13vw] text-[25vw] leading-[25vw] mt-14">
          WE GO
        </h1>
        <h2 className="text-[#dbff5e] font-extrabold text-center text-nowrap md:text-[13vw] md:leading-[13vw] text-[25vw] leading-[25vw]">
          BOLD
        </h2>
      </div>
      <div className="w-[450px] h-[600px] rounded-xl absolute bottom-[-15%] left-[50%] translate-x-[-50%] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <VideoPlayer src="/assets/video/etsVideo.mp4" rounded={true} />
      </div>
      <div className="w-full h-[90vh] flex justify-between items-end px-10">
        <div>
          <p className="max-w-[300px] mb-10 text-white">
            We are a research-driven tech lab specializing in high-quality
            software development. We innovate and implement cutting-edge
            solutions, helping businesses achieve their goals through advanced
            research and superior software engineering.
          </p>
          <Link
            href={"/#contact"}
            className="bg-[#dbff5e] w-[140px] text-center mb-10 text-[#261893] font-bold px-5 py-2.5 rounded-full hidden md:block transition-all duration-300 hover:scale-[1.1]"
          >
            Let's Connect
          </Link>
        </div>
        <div className="mb-10 text-white text-start">
          <div className="sm:mr-10">
            <p className="text-4xl sm:text-6xl">
              38 <span className="text-[#dbff5e]">+</span>
            </p>
            <p className="text-lg">Projects</p>
          </div>
          <div className="sm:mr-10">
            <p className="text-4xl sm:text-6xl">
              40 <span className="text-[#dbff5e]">+</span>
            </p>
            <p className="text-lg">Clients</p>
          </div>
          <div className="sm:mr-10">
            <p className="text-4xl sm:text-6xl text-start">
              6 <span className="text-[#dbff5e]">+</span>
            </p>
            <p className="text-lg">Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobox;
