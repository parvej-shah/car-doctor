import React from "react";

const ServicesSection = () => {
  const services = [
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
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold text-[var(--color-primary-text)] mb-2">
                  {service.title}
                </h3>
                <p className="text-[var(--color-secondary-text)] mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--color-primary-bg)] font-bold">
                    {service.price}
                  </span>
                  <button className="text-[var(--color-primary-bg)] hover:text-[var(--color-white)] hover:bg-[var(--color-primary-bg)] px-4 py-1 rounded-full border border-[var(--color-primary-bg)] transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Services Button */}
        <div className="text-center">
        <button className="bg-[var(--color-primary-bg)] hover:bg-gradient-to-bl from-primary-bg to-orange-300 text-[var(--color-white)] py-3 px-6 rounded-md font-medium shadow-lg transition-all duration-300">
          More Services
        </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;