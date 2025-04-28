'use client';
import { FaFileDownload } from 'react-icons/fa';
import { MdArrowForwardIos } from 'react-icons/md';
import { GiCarWheel } from 'react-icons/gi';

const DownloadSection = () => {
  return (
    <div className="flex flex-col gap-6 p-4">

      {/* Download Section */}
      <div className="bg-secondary-bg p-6 rounded-lg shadow-md">
        <h2 className="text-primary-text text-lg font-semibold mb-4">Download</h2>
        <div className="flex flex-col gap-4">
          {/* Brochure */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaFileDownload className="text-primary-bg text-xl" />
              <div>
                <h4 className="text-primary-text font-medium">Our Brochure</h4>
                <p className="text-secondary-text text-sm">Download</p>
              </div>
            </div>
            <button className="bg-primary-bg text-white p-2 rounded-full">
              <MdArrowForwardIos size={18} />
            </button>
          </div>

          {/* Company Details */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaFileDownload className="text-primary-bg text-xl" />
              <div>
                <h4 className="text-primary-text font-medium">Company Details</h4>
                <p className="text-secondary-text text-sm">Download</p>
              </div>
            </div>
            <button className="bg-primary-bg text-white p-2 rounded-full">
              <MdArrowForwardIos size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Car Doctor Section */}
      <div className="bg-primary-text p-6 rounded-lg shadow-md text-white flex flex-col items-center text-center">
        <GiCarWheel className="text-primary-bg text-4xl mb-2" />
        <h2 className="text-2xl font-bold">Car Doctor</h2>
        <p className="mt-2">Need Help? We Are Here<br />To Help You</p>
        <div className="bg-white text-primary-text rounded-lg p-4 mt-4 w-full">
          <h4 className="text-primary-bg font-bold">Car Doctor Special</h4>
          <p className="text-secondary-text text-sm">Save up to <span className="text-primary-bg font-semibold">60% off</span></p>
          <button className="mt-4 bg-primary-bg text-white w-full py-2 rounded-md font-semibold">Get A Quote</button>
        </div>
      </div>

      {/* Price and Checkout */}
      <div className="flex flex-col items-center gap-4 mt-6">
        <h3 className="text-primary-text text-xl font-semibold">Price $250.00</h3>
        <button className="bg-primary-bg text-white w-full py-3 rounded-md font-bold">
          Proceed Checkout
        </button>
      </div>

    </div>
  );
};

export default DownloadSection;
