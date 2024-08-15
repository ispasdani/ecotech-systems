import ImageBackground from "@/components/ImageBackground/ImageBackground";
import VideoPlayer from "@/components/VideoPlayer";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <section className="w-full min-h-[100vh] px-10 mt-20" id="products">
      <p className="uppercase text-md mb-12">/PRODUCTS/</p>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start">
        {/* AUDIOFY CARD */}
        <div className="w-[100%] lg:w-[45%] mb-10 min-h-[70vh]">
          <p className="my-5">
            Developed Audiofy-AI, a web application that converts text into
            audio using a variety of voice types. Users can generate audiobooks,
            podcasts, learning materials, and more. Designed to cater to those
            who prefer listening over reading, Audiofy-AI provides an accessible
            solution for multitasking and auditory learning, benefiting
            individuals who learn better through listening.
          </p>
          <div className="w-full flex justify-start items-center mb-5">
            <Link
              href={"https://www.audiofy-ai.com/"}
              className="flex w-[140px] justify-center items-center px-3 py-2 rounded-full border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 group"
            >
              <ChevronDown
                color="black"
                size={20}
                className="mr-1 rotate-[-90deg] group-hover:rotate-0 transition-all duration-300"
              />
              Check it out
            </Link>
          </div>
          <div className="w-full h-[50vh]">
            <VideoPlayer src="/assets/video/audiofy.mp4" />
          </div>
        </div>
        {/* PIXELFY CARD */}
        <div className="w-[100%] lg:w-[45%] mb-10 min-h-[80vh]">
          <div className="w-full h-[60vh]">
            <VideoPlayer src="/assets/video/pixelfy.mp4" />
          </div>
          <p className="my-5">
            Developed Pixelfy-AI, a web application offering AI-powered image
            editing functionalities, including Image Restore, Generative Fill,
            Object Remove, Object Recolor, Object Replace, Background Remove,
            Image Generation, and Logo Creation. Pixelfy-AI allows users to pay
            per action without the need for a subscription, addressing the need
            for affordable, flexible image editing solutions.
          </p>
          <div className="w-full flex justify-start items-center">
            <Link
              href={"https://www.pixelfy-ai.com/"}
              className="flex w-[140px] justify-center items-center px-3 py-2 rounded-full border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 group"
            >
              <ChevronDown
                color="black"
                size={20}
                className="mr-1 rotate-[-90deg] group-hover:rotate-0 transition-all duration-300"
              />
              Check it out
            </Link>
          </div>
        </div>
      </div>
      {/* NEXT ROW */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start mt-10">
        {/* ATLAS CARD */}
        <div className="w-[100%] lg:w-[45%] mb-10 min-h-[70vh]">
          <p className="my-5">
            Developed Atlas.Chat, a web application that facilitates seamless
            communication across different languages. Users can select their
            native language and receive messages translated in real-time,
            eliminating the need to use external translation tools. Atlas.Chat
            allows users to communicate freely in their native language, with
            messages automatically translated for recipients in their own native
            language, promoting effortless and inclusive global conversations.
          </p>
          <div className="w-full flex justify-start items-center mb-5">
            <Link
              href={"https://www.atlas-chat.com/"}
              className="flex w-[140px] justify-center items-center px-3 py-2 rounded-full border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 group"
            >
              <ChevronDown
                color="black"
                size={20}
                className="mr-1 rotate-[-90deg] group-hover:rotate-0 transition-all duration-300"
              />
              Check it out
            </Link>
          </div>
          <div className="w-full h-[50vh]">
            <VideoPlayer src="/assets/video/atlas.mp4" />
          </div>
        </div>
        {/* SUMLY AI CARD */}
        <div className="w-[100%] lg:w-[45%] mb-10 min-h-[80vh]">
          <div className="w-full h-[60vh]">
            <VideoPlayer src="/assets/video/sumly.mp4" />
          </div>
          <p className="my-5">
            Created Sumly-AI, a versatile web application that provides concise
            summaries of various content types, including web pages, YouTube
            videos, long texts, and documents. Additionally, it features a text
            grammar checker and more. Sumly-AI was developed to streamline the
            information retrieval process, enabling users to quickly access key
            points without sifting through extensive text.
          </p>
          <div className="w-full flex justify-start items-center">
            <Link
              href={"https://sumly-ai.com/"}
              className="flex w-[140px] justify-center items-center px-3 py-2 rounded-full border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 group"
            >
              <ChevronDown
                color="black"
                size={20}
                className="mr-1 rotate-[-90deg] group-hover:rotate-0 transition-all duration-300"
              />
              Check it out
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between items-center lg:items-start mt-10">
        <VideoPlayer src="/assets/video/genomeBank.mp4" />
        <div className="w-full min-h-[30vh]">
          <div className="w-full flex flex-col sm:flex-row justify-start items-start py-10">
            <p className="uppercase text-2xl font-bold w-full sm:w-[40%] mb-10">
              GENOME BANK
            </p>
            <div className="w-full sm:w-[60%] flex justify-start items-center flex-wrap mb-10">
              <p className="mb-5">
                Empower your development process with our carefully curated
                library of code snippets and templates. Just like the essential
                building blocks of the human body, our assets are designed to
                seamlessly integrate into your projects, saving you time and
                effort while maintaining top-notch quality. Dive in and
                accelerate your app development—efficiency has never been this
                simple.
              </p>
              <p className="mb-5">
                Your Bank of Assets could contain a wide variety of reusable
                code snippets and templates that developers frequently need when
                building applications. Here are some examples of what this could
                include:
              </p>
              <div className="w-full flex justify-start items-center">
                <Link
                  href={"https://ecotech-system.com/genome"}
                  className="flex w-[140px] justify-center items-center px-3 py-2 rounded-full border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 group"
                >
                  <ChevronDown
                    color="black"
                    size={20}
                    className="mr-1 rotate-[-90deg] group-hover:rotate-0 transition-all duration-300"
                  />
                  Check it out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
