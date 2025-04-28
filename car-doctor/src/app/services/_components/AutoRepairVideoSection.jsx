"use client";
import React from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';

const AutoRepairVideoSection = () => {
  const handlePlayVideo = () => {
    // Implement video playback functionality here
    console.log('Play video clicked');
    // You could open a modal with the video or trigger an embedded player
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        {/* Video thumbnail image */}
        <div className="relative aspect-video w-full">
          <Image
            src="/assets/images/services/3.jpg" 
            alt="Auto mechanic with tools in repair shop"
            fill
            className="object-cover"
            priority
          />
          
          {/* Play button overlay */}
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={handlePlayVideo}
          >
            <div className="rounded-full bg-red-500 bg-opacity-80 p-3 flex items-center justify-center animate-pulse hover:bg-opacity-100 transition-all duration-300">
              <Play size={28} fill="white" className="text-white ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoRepairVideoSection;