import React from "react";

const ContactInfoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {/* Opening Hours */}
          <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-[#FF3811] to-[#FF3811]/70 rounded-lg">
            <div className="bg-white p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#FF3811]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium">We are open monday-friday</p>
              <p className="text-white font-bold">7:00 am - 9:00 pm</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-orange-400 to-orange-300 rounded-lg">
            <div className="bg-white p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium">Have a question?</p>
              <p className="text-white font-bold">+2546 251 2658</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-[#FF3811] to-[#FF3811]/70 rounded-lg">
            <div className="bg-white p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#FF3811]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium">Need a repair? our address</p>
              <p className="text-white font-bold">Liza Street, New York</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;