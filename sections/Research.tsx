import AsciiSpinner from "@/components/AsciiSpinner";
import ImageBackground from "@/components/ImageBackground/ImageBackground";
import MatrixVortex from "@/components/MatrixVortex";
import PyramidAnimation from "@/components/PyramidAnimation";
import { Code, FileCode, TabletSmartphone } from "lucide-react";
import React from "react";

const Research = () => {
  return (
    <section className="w-full min-h-[100vh] px-10" id="research">
      <p className="uppercase text-md mb-5">/RESEARCH/</p>
      <p className="mb-10 text-lg font-bold w-full sm:w-[60%]">
        <span className="mr-5">/1/</span>One of our upcoming projects is a
        groundbreaking application that transforms our extensive library of code
        assets GENOME into a powerful, visual scripting tool.
      </p>
      <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 mb-20">
        <div className="bg-green-100 h-[450px]">
          <ImageBackground backgroundImage="/assets/image/framework.jpg" />
        </div>
        <div className="h-[450px] border border-black flex flex-col justify-between items-start p-5">
          <p>/01/</p>
          <p>
            We believe that innovation should be accessible to everyone. As a
            research-driven tech lab, we are constantly exploring new ways to
            empower developers and creators alike. One of our upcoming projects
            is a groundbreaking application that transforms our extensive
            library of code assets into a powerful, visual scripting tool.
          </p>
        </div>
        <div className="border border-black p-5 h-[450px]">
          <MatrixVortex />
        </div>
        <div className="h-[450px] border border-black flex flex-col justify-between items-start p-5">
          <p>/02/</p>
          <p>
            This app will enable users to build fully functional full-stack
            applications with ease, using an intuitive drag-and-drop interface.
            By connecting pre-built code snippets, users can quickly assemble
            complex workflows and see their application come to life.
          </p>
        </div>
        <div className="bg-green-100 h-[450px]">
          <ImageBackground backgroundImage="/assets/image/framework2.jpg" />
        </div>
        <div className="h-[450px] border border-black flex flex-col justify-between items-start p-5">
          <p>/03/</p>
          <p>
            Understanding the need for flexibility and customization, we’re
            taking this concept a step further. As users connect these visual
            scripts, the underlying code will be displayed in real-time in a
            separate window. This allows for immediate modification and
            personalization, ensuring that users have the freedom to tailor
            their applications to meet specific needs.
          </p>
        </div>
        <div className="bg-orange-100 h-[450px]">
          <ImageBackground backgroundImage="/assets/image/framework3.jpg" />
        </div>
        <div className="flex justify-center items-center overflow-hidden border border-black h-[450px]">
          <PyramidAnimation />
        </div>
        <div className="h-[450px] border border-black flex flex-col justify-between items-start p-5">
          <p>/04/</p>
          <p>
            Our vision is to bridge the gap between simplicity and
            sophistication, making innovation not only possible but practical
            for everyone, regardless of their level of coding expertise.
          </p>
        </div>
      </div>
      {/* SECOND RESEARCH */}
      <p className="mb-10 text-lg font-bold w-full sm:w-[60%]">
        <span className="mr-5">/1/</span>Our commitment to innovation extends to
        the mobile development experience with our upcoming product—a fully
        featured code editor for mobile operating systems. This cutting-edge
        tool will bring the power and flexibility of traditional desktop coding
        environments, like Visual Studio Code, to your smartphone or tablet.
      </p>
      <div className="w-full h-[100vh]">
        <ImageBackground backgroundImage="/assets/image/codeEditor.png" />
      </div>
      <div className="w-full h-auto py-10 flex flex-col-reverse sm:flex-row justify-between items-center group">
        <p className="w-full sm:w-[60%]">
          With this mobile code editor, users can write, edit, and navigate
          through files seamlessly on their mobile devices, providing a true
          on-the-go development experience. We are pushing the boundaries of
          what’s possible by enabling developers to maintain productivity and
          creativity, no matter where they are.
        </p>
        <div className="w-[100px] h-[100px] rounded-full bg-gray-200 flex justify-center items-center mb-10 group-hover:rotate-[360deg] transition-all duration-[600ms]">
          <Code size={36} />
        </div>
      </div>
      <div className="w-full h-auto py-10 flex flex-col sm:flex-row justify-between items-center group">
        <div className="w-[100px] h-[100px] rounded-full bg-gray-200 flex justify-center items-center mb-10 group-hover:rotate-[360deg] transition-all duration-[600ms]">
          <FileCode size={36} />
        </div>
        <p className="w-full sm:w-[60%]">
          In addition to its robust coding capabilities, we are excited to
          integrate the visual scripting functionality from our GENOME platform
          as a plugin. This will allow users to visually connect and customize
          code snippets directly within the mobile editor, blending intuitive
          design with hands-on coding flexibility.
        </p>
      </div>
      <div className="w-full h-auto py-10 flex flex-col-reverse sm:flex-row justify-between items-center group">
        <p className="w-full sm:w-[60%]">
          Our goal is to redefine mobile development by making powerful coding
          tools accessible and versatile, enabling developers to bring their
          ideas to life anytime, anywhere.
        </p>
        <div className="w-[100px] h-[100px] rounded-full bg-gray-200 flex justify-center items-center mb-10 group-hover:rotate-[360deg] transition-all duration-[600ms]">
          <TabletSmartphone size={36} />
        </div>
      </div>
    </section>
  );
};

export default Research;
