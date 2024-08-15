import TeamCard from "@/components/TeamCard";
import { team } from "@/constants/team";
import React from "react";

const About = () => {
  return (
    <section className="w-full min-h-[100vh] px-10" id="about">
      <div className="w-full min-h-[40vh] border-b border-black flex flex-col sm:flex-row justify-start items-start mb-10">
        <p className="uppercase text-md w-full sm:w-[40%] mb-10">/About/</p>
        <div className="w-full sm:w-[60%]">
          <p className="text-center sm:text-start text-lg mb-10">
            A dynamic software company born from a passion for innovation,
            founded by a skilled software architect and his close-knit team of
            friends. Our journey began with a series of successful freelance
            projects and has since evolved into a cutting-edge tech lab. With a
            team of expert developers and visionary researchers, we are
            committed to pushing the boundaries of technology.
          </p>
          <p className="text-center sm:text-start text-lg mb-10">
            Our mission is to create powerful software solutions that empower
            businesses to achieve their goals with precision and efficiency. By
            blending rigorous research with top-tier software development, we
            set high standards for ourselves and the impact of our work,
            ensuring every project delivers real results that inspire and
            endure.
          </p>
          <div className="w-full flex justify-between sm:justify-start items-start mb-10">
            <div className="sm:mr-10">
              <p className="text-4xl sm:text-6xl">38+</p>
              <p className="text-lg">Projects</p>
            </div>
            <div className="sm:mr-10">
              <p className="text-4xl sm:text-6xl">40+</p>
              <p className="text-lg">Clients</p>
            </div>
            <div className="sm:mr-10">
              <p className="text-4xl sm:text-6xl">6+</p>
              <p className="text-lg">Products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[40vh] border-b border-black flex flex-col sm:flex-row justify-start items-start mb-10">
        <p className="uppercase text-md w-full sm:w-[40%] mb-10">/Team/</p>
        <div className="w-full sm:w-[60%] flex justify-start items-center flex-wrap mb-10">
          {team.map((t) => (
            <TeamCard
              src={t.src}
              name={t.name}
              status={t.status}
              description={t.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
