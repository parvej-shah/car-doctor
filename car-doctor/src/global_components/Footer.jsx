import { Google, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { FaGoogle } from 'react-icons/fa';

export default function Footer() {
  const colors = {
    primaryBg: '#FF3811',
    primaryText: '#444444',
    secondaryText: '#737373',
    white: '#FFFFFF',
    secondaryBg: '#F3F3F3',
    dark: '#151515'
  };

  return (
    <footer style={{ backgroundColor: colors.dark }} className="text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description Column */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center">
              <Image src={"/assets/logo.svg"} alt="Logo" width={80} height={60} className="mr-3" />
            </div>
            
            <p className="text-gray-400 max-w-xs">
              Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <FaGoogle size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* About Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold mb-2">About</h3>
            <a href="#" className="text-gray-400 hover:text-white transition">Home</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
          
          {/* Company Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold mb-2">Company</h3>
            <a href="#" className="text-gray-400 hover:text-white transition">Why Car Doctor</a>
            <a href="#" className="text-gray-400 hover:text-white transition">About</a>
          </div>
          
          {/* Support Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold mb-2">Support</h3>
            <a href="#" className="text-gray-400 hover:text-white transition">Support Center</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Feedback</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Accesibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}