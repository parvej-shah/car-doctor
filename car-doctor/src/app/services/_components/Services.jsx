"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
export default function Services({activeServiceId}) {
      const [activeService, setActiveService] = useState(activeServiceId);
    
      const services = [
        { id: '68132a7769c8e8edfc03b99a', name: 'Engine Oil Change' },
        { id: '68132a7769c8e8edfc03b99d', name: 'Engine Repair' },
        { id: '68132a7769c8e8edfc03b99e', name: 'Automatic Services' },
        { id: '68132a7769c8e8edfc03b99c', name: 'Full car Repair' },
        { id: '68132a7769c8e8edfc03b99b', name: 'Battery Charge' }
      ];
    return (
      <div className="w-full p-8 bg-secondary-bg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Services</h2>
        
        <div className="space-y-4">
            {services.map((service) => (
            <Link 
                href={`/services/${service.id}`}
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
            </Link>
            ))}
        </div>
    </div>
    );
};