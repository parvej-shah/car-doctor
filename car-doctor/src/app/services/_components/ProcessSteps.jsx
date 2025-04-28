import React from 'react';
import { CircleIcon } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      number: '01',
      title: 'STEP ONE',
      description: 'It Uses A Dictionary Of Over 200 .'
    },
    {
      number: '02',
      title: 'STEP TWO',
      description: 'It Uses A Dictionary Of Over 200 .'
    },
    {
      number: '03',
      title: 'STEP THREE',
      description: 'It Uses A Dictionary Of Over 200 .'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">3 Simple Steps to Process</h2>
        <p className="text-gray-600 max-w-3xl">
          There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered 
          Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even 
          Slightly Believable. If You Are Going To Use A Passage Of Lorem Ipsum, You Need To Be Sure There 
          Isn't Anything Embarrassing Hidden In The Middle Of Text
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="border rounded-lg p-6 flex flex-col items-center">
            <div className="relative mb-4">
              <div className="bg-red-100 rounded-full p-4">
                <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                  {step.number}
                </div>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;