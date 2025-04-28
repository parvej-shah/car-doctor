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
      image: '/api/placeholder/60/60',
    },
    {
      id: 2,
      name: 'Awlad Hossain',
      profession: 'Businessman',
      rating: 5,
      text: 'There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don\'t Look Even Slightly Believable.',
      image: '/api/placeholder/60/60',
    },
    {
      id: 3,
      name: 'John Doe',
      profession: 'Designer',
      rating: 4.5,
      text: 'There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don\'t Look Even Slightly Believable.',
      image: '/api/placeholder/60/60',
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <p className="text-red-500 font-medium mb-2">Testimonial</p>
        <h2 className="text-4xl font-bold mb-4">What Customer Says</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised
          Words Which Don't Look Even Slightly Believable.
        </p>
      </div>

      <div className="relative">
        {mounted && (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
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
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4" 
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.profession}</p>
                    </div>
                    <div className="ml-auto text-gray-300 text-4xl">"</div>
                  </div>
                  <p className="text-gray-700 mb-4">{testimonial.text}</p>
                  <ReactStars
                    count={5}
                    value={testimonial.rating}
                    size={24}
                    color2={'#ffd700'}
                    edit={false}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center focus:outline-none">
          <ChevronLeft size={24} />
        </button>
        <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center focus:outline-none">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}