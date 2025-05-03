import Image from 'next/image';
import Link from 'next/link';

import SocialLogin from '@/global_components/SocialLogin';
import SignInForm from './SignInForm';
export default function SignIn() {

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
            <h1 className="text-3xl font-bold text-center mb-8 text-[#444444]">Sign In</h1>
            
            <SignInForm/>
            
            <SocialLogin/>
            
            <p className="mt-8 text-center text-sm text-[#737373]">
              Don't have an account?{' '}
              <Link href="/signup" className="text-[#FF3811] font-medium hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}