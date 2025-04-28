"use client";
import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
export default function Services(){
      const [activeService, setActiveService] = useState('full-car-repair');
    
      const services = [
        { id: 'full-car-repair', name: 'Full Car Repair' },
        { id: 'engine-repair', name: 'Engine Repair' },
        { id: 'automatic-services', name: 'Automatic Services' },
        { id: 'engine-oil-change', name: 'Engine Oil Change' },
        { id: 'battery-charge', name: 'Battery Charge' }
      ];
    return (
      <div className="w-full p-8 bg-secondary-bg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Services</h2>
        
        <div className="space-y-4">
            {services.map((service) => (
            <div 
                key={service.id}
                className={`flex group justify-between items-center p-4 rounded-lg transition-all duration-200 cursor-pointer ${
                activeService === service.id 
                    ? 'bg-primary-bg text-white shadow-lg' 
                    : 'bg-white hover:bg-primary-bg hover:text-white '
                }`}
                onClick={() => setActiveService(service.id)}
            >
                <span className="font-medium group group-hover:text-white">{service.name}</span>
                <FiArrowRight className={`${
                activeService === service.id ? 'text-white' : 'text-primary-bg'
                }`} />
            </div>
            ))}
        </div>
    </div>
    );
};