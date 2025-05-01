import dbConnect, { dbCollections } from "@/lib/dbConnect";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServicesSection = async() => {

  
  const services2 = [
    {
      title: "Electrical System",
      description: "Professional electrical diagnostics and repairs",
      price: "$20.00",
    },
    {
      title: "Engine Diagnostics",
      description: "Comprehensive engine analysis and troubleshooting",
      price: "$20.00",
    },
    {
      title: "Auto Car Repair",
      description: "Complete automotive repair services",
      price: "$20.00",
    },
  ];
  const servicesCollection = await dbConnect(dbCollections.servicesCollection);
  const services = await servicesCollection.find({}).toArray();
  return (
    <section className="py-16 bg-[var(--color-secondary-bg)]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h5 className="text-[var(--color-primary-bg)] font-bold mb-2">
            Service
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-text)] mb-4">
            Our Service Area
          </h2>
          <p className="text-[var(--color-secondary-text)] max-w-2xl mx-auto">
            The Majority Have Suffered Alteration In Some Form, By Injected
            Humour, Or Randomised Words Which Don't Look Even Slightly
            Believable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <div key={index} className="card w-full hover:shadow-xl duration-300 transform-all bg-base-100 shadow-md border border-gray-100">
            <figure className="px-4 pt-4">
              <img src={service.img} alt={service.title} className="rounded-lg h-40 object-cover w-full" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-base">{service.title}</h2>
              <div className="card-actions items-center justify-end mt-2">
              <p className="text-sm text-red-600 font-semibold">
                Price : ${service?.price}
              </p>
                <Link href={`/services/${service._id}`} className="text-red-500 cursor-pointer hover:text-red-700">
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
          ))}
        </div>

        {/* More Services Button */}
        <div className="text-center">
        <button className="bg-[var(--color-primary-bg)] cursor-pointer hover:bg-gradient-to-bl from-primary-bg to-orange-300 text-[var(--color-white)] py-3 px-6 rounded-md font-medium shadow-lg transition-all duration-300">
          More Services
        </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;