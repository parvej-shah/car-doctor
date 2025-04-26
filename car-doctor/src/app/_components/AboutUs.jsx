'use client';

import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-20 bg-[var(--color-white)]">
      {/* Left Side - Images */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <Image
          src="/assets/images/about_us/person.jpg" // 👉 Make sure this image is inside your public/images folder
          alt="Experienced Worker"
          width={460}
          height={473}
          className="rounded-lg shadow-lg object-cover"
          priority
        />
        <Image
          src="/assets/images/about_us/parts.jpg" // 👉 Make sure this image is inside your public/images folder
          alt="Tools"
          width={327}
          height={332}
          className="absolute -bottom-8 -right-8 rounded-lg shadow-xl border-4 border-white bg-white"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2">
        <p className="text-[var(--color-primary-bg)] font-semibold mb-2">
          About Us
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary-text)] leading-tight mb-6">
          We are qualified<br />& of experience<br />in this field
        </h2>
        <p className="text-[var(--color-secondary-text)] mb-4 leading-relaxed">
          There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority
          Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words
          Which Don’t Look Even Slightly Believable.
        </p>
        <p className="text-[var(--color-secondary-text)] mb-6 leading-relaxed">
          The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or
          Randomised Words Which Don’t Look Even Slightly Believable.
        </p>
        <button className="bg-[var(--color-primary-bg)] hover:bg-[var(--gradient-button-hover)] text-[var(--color-white)] py-3 px-6 rounded-md font-medium shadow-lg transition-all duration-300">
          Get More Info
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
