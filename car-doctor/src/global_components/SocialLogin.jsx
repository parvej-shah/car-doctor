import { Facebook, Linkedin } from 'lucide-react';
const SocialLogin = () => {
    return (
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
    );
}

export default SocialLogin;