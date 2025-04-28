"use client";
import Image from 'next/image';

const AutoRepairServices = () => {


  return (
    <section className="w-full gap-8 max-w-6xl mx-auto my-6 bg-white">
      {/* Left Section - Image */}
      <div className="w-full h-64 md:h-96 relative">
        <Image
          src="/assets/images/services/2.jpg"
          alt="Car Polishing Service"
          fill
          className="object-cover rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default AutoRepairServices;