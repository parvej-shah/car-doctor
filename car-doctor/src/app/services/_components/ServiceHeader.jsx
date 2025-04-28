import Image from 'next/image';
import React from 'react';

export default function ServiceHeader() {
  return (
    <div className="relative w-full">
      {/* Background image with overlay */}
      <div className="relative h-64 overflow-hidden">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* We'll use a placeholder here - in a real implementation you'd use your actual image */}
        <Image
          src="/assets/images/services/1.jpg" // Replace with your image path
          alt="Mechanic working on engine" 
          className="w-full h-full object-cover"
          width={1200}
          height={400}
        />
        
        {/* Header text positioned over the image */}
        <div className="absolute inset-0 flex items-center justify-start px-12">
          <h1 className="text-4xl font-bold text-white">Service Details</h1>
        </div>
      </div>
      
      {/* Navigation breadcrumb - now positioned at the bottom middle */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="bg-primary-bg text-white py-3 px-8 rounded-t-lg">
          <nav className="text-sm">
            <span>Home</span>
            <span className="mx-1">/</span>
            <span>Service Details</span>
          </nav>
        </div>
      </div>
    </div>
  );
}