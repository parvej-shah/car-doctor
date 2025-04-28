import React from "react";
import Image from "next/image";

const ProductsSection = () => {
  const products = [
    {
      title: "Car Engine Plug",
      price: "$20.00",
      rating: 4,
      image: "/assets/images/products/1.png"
    },
    {
      title: "Car Air Filter",
      price: "$20.00",
      rating: 5,
      image: "/assets/images/products/2.png"
    },
    {
      title: "Cools Led Light",
      price: "$20.00",
      rating: 4,
      image: "/assets/images/products/3.png"
    },
    {
      title: "Car Engine Plug",
      price: "$20.00",
      rating: 3,
      image: "/assets/images/products/4.png"
    },
    {
      title: "Car Air Filter",
      price: "$20.00",
      rating: 4,
      image: "/assets/images/products/5.png"
    },
    {
      title: "Cools Led Light",
      price: "$20.00",
      rating: 5,
      image: "/assets/images/products/6.png"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h5 className="text-[var(--color-primary-bg)] font-bold mb-2">
            Popular Products
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-text)] mb-4">
            Browse Our Products
          </h2>
          <p className="text-[var(--color-secondary-text)] max-w-2xl mx-auto">
            The Majority Have Suffered Alteration In Some Form, By Injected Humour, 
            Or Randomised Words Which Don't Look Even Slightly Believable.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
              {/* Product Image - Using Next.js Image */}
              <div className="h-48 bg-gray-100 relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={80}
                  priority={index < 3} // Only first 3 images get priority loading
                />
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                {/* Rating */}
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Title & Price */}
                <h3 className="text-lg font-semibold text-[var(--color-primary-text)] mb-1">
                  {product.title}
                </h3>
                <p className="text-[var(--color-primary-bg)] font-bold">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* More Products Button */}
        <div className="text-center">
          <button className="bg-[var(--color-primary-bg)] hover:bg-gradient-to-bl from-primary-bg to-orange-300 text-[var(--color-white)] py-3 px-6 rounded-md font-medium shadow-lg transition-all duration-300">
            More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;