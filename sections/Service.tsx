import Line from "@/components/Line";
import { services } from "@/constants/services";
import React from "react";

const Service = () => {
  return (
    <section className="w-full min-h-[100vh] my-20 px-10" id="service">
      <p className="uppercase text-md mb-10">/SERVICE/</p>
      <p className="text-lg font-bold w-full sm:w-[60%] mb-10 text-center sm:text-start">
        We offer a comprehensive range of services designed to propel your
        business to success in the digital world. Whether you're looking to
        innovate with cutting-edge software solutions, harness the power of
        advanced research, or streamline your operations with custom-built
        applications, our expert team is here to make it happen. From initial
        concept to final implementation, we partner with you every step of the
        way to ensure your vision becomes a reality. Let us help you navigate
        the complexities of the digital landscape and unlock new opportunities
        for growth and efficiency.
      </p>
      {services.map((service, index) => (
        <Line
          key={service.serviceName}
          serviceName={service.serviceName}
          description={service.description}
        />
      ))}
    </section>
  );
};

export default Service;
