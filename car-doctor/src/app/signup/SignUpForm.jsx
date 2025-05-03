"use client"
import axios from 'axios';
import { useState } from 'react';
export default function SignUpComponent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        if(formData.password !== formData.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        const {data} = axios.post('/signup/api/', formData)
        if(data.status === 200) {
          alert("User Created Successfully!");
        } else if(data.status === 304) {
          alert("User Already Exists!");
        } else {
          alert("An unexpected error occurred.");
        }
        
      };

      return (
        <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-[#444444] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF3811] focus:border-transparent"
                  required
                />
              </div>
              
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
              
              <div className="mb-8">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#444444] mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
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
                Sign Up
              </button>
            </form>
      )
}