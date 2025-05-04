"use client"
import { signIn } from 'next-auth/react';
import { useState } from 'react';
export default function SignInForm() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormSubmitted(true);
        const result = await signIn('credentials', { ...formData, callbackUrl: '/' });
        if (result.error) {
          alert('Invalid email or password');
          console.error('Sign in error:', result.error);
        } else {
          setFormSubmitted(false);
          alert('Sign in successful!');
        }
      };

      return (
        <form onSubmit={handleSubmit}>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-[#444444] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF3811] focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-[#444444] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Your password"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF3811] focus:border-transparent"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#FF3811] hover:bg-[#e53110] text-white font-medium py-3 px-4 rounded transition duration-300"
              >
                {formSubmitted?"Signing in....": "Sign In"}
              </button>
            </form>
      )
}