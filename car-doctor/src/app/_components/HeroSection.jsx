"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="h-[550px] flex items-center justify-center bg-gradient-to-b from-[#fff4e4] via-[#f0f6ee] to-[#f3f3f3] text-center px-4"
      style={{
        backgroundImage: "linear-gradient(174.2deg, rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4%)",
      }}
    >
      <div className="max-w-2xl" data-aos="fade-up">
        <h1 className="text-5xl md:text-6xl font-bold text-[#444444] mb-6 leading-tight">
          Affordable <br />
          Price For Car <br />
          Servicing
        </h1>
        <p className="text-lg text-[#737373] mb-8" data-aos="fade-up" data-aos-delay="200">
          There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alteration In Some Form.
        </p>
        <div className="flex justify-center gap-4" data-aos="fade-up" data-aos-delay="400">
          <a
            href="#"
            className="bg-[#FF3811] text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            Discover More
          </a>
          <a
            href="#"
            className="border border-[#444444] text-[#444444] px-6 py-3 rounded-md font-semibold hover:bg-[#10b981] hover:text-white hover:border-[#10b981] hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out"
          >
            Latest Project
          </a>
        </div>
      </div>
    </section>
  );
}
