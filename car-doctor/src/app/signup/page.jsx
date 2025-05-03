import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Linkedin } from 'lucide-react';
import SignUpFrom from './SignUpForm';
export default function SignUpComponent() {

  return (
    <div className="flex items-center justify-center min-h-screen" style={{
        backgroundImage: "linear-gradient(174.2deg, rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4%)",
      }}>
      <div className="flex w-full max-w-5xl overflow-hidden md:p-8 p-2">
        {/* Left side with illustration */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center p-6 relative">
          <div className="relative w-full h-full max-w-md">
            <Image 
              src="/assets/images/login/login.svg" 
              alt="Security Illustration" 
              layout="fill"
              objectFit="contain"
              priority
            />
            <div className="absolute bottom-0 left-0">
              <div className="text-[#FF3811]">
                <svg width="80" height="80" viewBox="0 0 80 80" className="opacity-20">
                  <path d="M40 0C17.9 0 0 17.9 0 40s17.9 40 40 40 40-17.9 40-40S62.1 0 40 0z" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div className="absolute top-5 right-5">
              <div className="text-[#FF3811]">
                <svg width="40" height="40" viewBox="0 0 40 40" className="opacity-20">
                  <path d="M20 0C9 0 0 9 0 20s9 20 20 20 20-9 20-20S31 0 20 0z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 border border-gray-300 rounded-lg shadow-lg bg-white/50">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8 text-[#444444]">Sign Up</h1>
            
            <SignUpFrom/>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-[#737373]">Or Sign Up with</p>
              <div className="flex justify-center space-x-4 mt-4">
                <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition duration-300">
                  <Facebook size={20} className="text-blue-600" />
                </button>
                <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition duration-300">
                  <Linkedin size={20} className="text-blue-700" />
                </button>
                <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 8.5 15.75 11.75 9.75 15" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>
            
            <p className="mt-8 text-center text-sm text-[#737373]">
              Already have an account?{' '}
              <Link href="/login" className="text-[#FF3811] font-medium hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}