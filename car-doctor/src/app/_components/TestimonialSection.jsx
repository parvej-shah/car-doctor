"use client";
import { useState, useEffect } from 'react';
import ReactStars from 'react-stars';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialSection() {
  const [mounted, setMounted] = useState(false);
  
  // Custom colors from the palette
  const colors = {
    primaryBg: '#FF3811',
    primaryText: '#444444',
    secondaryText: '#737373',
    white: '#FFFFFF',
    secondaryBg: '#F3F3F3',
  };
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const testimonials = [
    {
      id: 1,
      name: 'Awlad Hossain',
      profession: 'Businessman',
      rating: 5,
      text: 'There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don\'t Look Even Slightly Believable.',
      image: '/assets/images/team/1.jpg',
    },
    {
      id: 2,
      name: 'Awlad Hossain',
      profession: 'Businessman',
      rating: 5,
      text: 'There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don\'t Look Even Slightly Believable.',
      image:'/assets/images/team/2.jpg',
    },
    {
      id: 3,
      name: 'John Doe',
      profession: 'Designer',
      rating: 4.5,
      text: 'There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don\'t Look Even Slightly Believable.',
      image:'/assets/images/team/3.jpg',
    },
  ];

  return (
    <div className="py-12 px-4 bg-secondary-bg" style={{ color: colors.primaryText }}>
      <div className="text-center mb-12">
        <p className="font-medium mb-2" style={{ color: colors.primaryBg }}>Testimonial</p>
        <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primaryText }}>What Customer Says</h2>
        <p style={{ color: colors.secondaryText }} className="max-w-2xl mx-auto">
          The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised
          Words Which Don't Look Even Slightly Believable.
        </p>
      </div>

      <div className="relative px-10  md:px-20">
        {mounted && (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
           
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="p-6 rounded-lg shadow-md border bg-white border-gray-100">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4" 
                    />
                    <div>
                      <h3 className="text-lg font-semibold" style={{ color: colors.primaryText }}>{testimonial.name}</h3>
                      <p style={{ color: colors.secondaryText }}>{testimonial.profession}</p>
                    </div>
                    <div className="ml-auto text-4xl" style={{ color: colors.primaryBg }}>"</div>
                  </div>
                  <p className="mb-4" style={{ color: colors.secondaryText }}>{testimonial.text}</p>
                  <ReactStars
                    count={5}
                    value={testimonial.rating}
                    size={24}
                    color2={colors.primaryBg}
                    edit={false}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
    
        <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10  rounded-full flex items-center justify-center focus:outline-none w-12 h-12 p-8" 
          >
          <ChevronLeft className='w-6 h-6 text-primary-bg' />
        </button>
        <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center p-4 justify-center focus:outline-none"
          >
          <ChevronRight className='w-6 h-6 text-primary-bg' />
        </button>
      </div>
    </div>
  );
}