import React from 'react';

const UniqueCarEngineService = () => {
  const services = [
    {
      title: "Instant Car Services",
      description: "It Uses A Dictionary Of Over 200 Latin Words, Combined With A Model Sentence Structures."
    },
    {
      title: "24/7 Quality Service",
      description: "It Uses A Dictionary Of Over 200 Latin Words, Combined With A Model Sentence Structures."
    },
    {
      title: "Easy Customer Service",
      description: "It Uses A Dictionary Of Over 200 Latin Words, Combined With A Model Sentence Structures."
    },
    {
      title: "Quality Cost Service",
      description: "It Uses A Dictionary Of Over 200 Latin Words, Combined With A Model Sentence Structures."
    },
    {
      title: "Affordable Maintenance",
      description: "We Provide Cost-Effective Solutions For Your Vehicle's Needs."
    }
  ];

  const placeholderText = "There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable. If You Are Going To Use A Passage Of Lorem Ipsum, You Need To Be Sure There Isn't Anything Embarrassing Hidden In The Middle Of Text.";

  return (
    <section className="max-w-6xl mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold mb-4">Unique Car Engine Service</h1>
      
      <p className="text-gray-600 mb-8">
        {placeholderText}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-gray-100 p-6 rounded-lg border-t-4 border-primary-bg hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      
      <p className="text-gray-600 mt-8">
        {placeholderText}
      </p>
    </section>
  );
};

export default UniqueCarEngineService;