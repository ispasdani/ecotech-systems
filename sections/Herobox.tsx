import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";
import React from "react";

const Herobox = () => {
  return (
    <section className="w-full min-h-[90vh]">
      <Header />

      <div className="w-full h-[80vh] mt-10 px-10">
        <VideoPlayer src="/assets/video/etsVideo.mp4" />
      </div>

      <div className="w-full h-[20vh] flex justify-center items-center px-10 my-20">
        <p className="font-bold text-lg text-black text-center w-full sm:w-[700px]">
          We are ready to transform your ideas into powerful software solutions
          and help you achieve your technological vision. Unlock limitless
          innovation with us.
        </p>
      </div>
    </section>
  );
};

export default Herobox;
