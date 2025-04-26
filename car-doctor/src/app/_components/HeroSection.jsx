"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Only animate once
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <Image
        src="/your-image-path/3aa144c4-8ca5-49b5-b5e4-4fc0f3858fa9.png"
        alt="Car Servicing Background"
        fill
        quality={100}
        className="object-cover object-center z-0"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6">
        <div className="max-w-xl" data-aos="fade-up">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Affordable <br />
            Price For Car <br />
            Servicing
          </h1>
          <p className="text-lg text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">
            There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alteration In Some Form
          </p>
          <div className="flex space-x-4" data-aos="fade-up" data-aos-delay="400">
            <a
              href="#"
              className="bg-[#FF3811] text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition"
            >
              Discover More
            </a>
            <a
              href="#"
              className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-[#10b981] hover:border-[#10b981] transition"
            >
              Latest Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
