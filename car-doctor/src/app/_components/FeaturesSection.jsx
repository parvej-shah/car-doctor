// Features.jsx
import React from 'react';
import { 
  FaUsers, 
  FaClock, 
  FaHeadset, 
  FaTools, 
  FaShieldAlt, 
  FaShippingFast 
} from 'react-icons/fa';

const FeatureCard = ({ icon: Icon, title, isActive = false }) => {
  return (
    <div className="flex flex-col items-center text-center p-8 border border-gray-200 rounded-lg bg-white transition-all duration-300 hover:bg-[#FF3811] hover:-translate-y-1 hover:shadow-lg cursor-pointer group">
      <div className="mb-5">
        <Icon className="w-12 h-12 text-[#FF3811] group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-[#444444] group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    { icon: FaUsers, title: 'Expert Team' },
    { icon: FaClock, title: 'Timely Delivery' },
    { icon: FaHeadset, title: '24/7 Support' },
    { icon: FaTools, title: 'Best Equipment' },
    { icon: FaShieldAlt, title: '100% Guaranty' },
    { icon: FaShippingFast, title: 'Fast Delivery' }
  ];

  return (
    <section className="py-20 px-4 " style={{
        backgroundImage: "linear-gradient(174.2deg, rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4%)",
      }}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h3 className="text-[#FF3811] text-xl font-semibold mb-3">
            Core Features
          </h3>
          <h2 className="text-5xl font-bold text-[#444444] mb-6">
            Why Choose Us
          </h2>
          <p className="text-[#737373] max-w-3xl mx-auto">
            The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised
            Words Which Don't Look Even Slightly Believable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;