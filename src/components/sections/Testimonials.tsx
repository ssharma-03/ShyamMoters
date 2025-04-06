import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

interface Testimonial {
  id: string
  name: string
  role: string
  image: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    image: '/images/testimonials/person1.jpg',
    content: 'Exceptional service at Shree Shyam Motors. Their attention to detail and professional approach made my car buying experience outstanding.',
    rating: 5
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'IT Professional',
    image: '/images/testimonials/person2.jpg',
    content: 'The team at Shree Shyam Motors goes above and beyond. Their after-sales service is remarkable, and they truly value customer satisfaction.',
    rating: 5
  },
  // Add more testimonials
]

const stats = [
  { label: 'Happy Customers', value: '500+' },
  { label: 'Years of Experience', value: '10+' },
  { label: 'Vehicles Delivered', value: '1000+' },
  { label: 'Service Rating', value: '4.8/5' }
]

export default function Testimonials() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-20 bg-light dark:bg-dark">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-12 opacity-0 translate-y-5 animate-fadeInUp"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-light mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-primary/80 dark:text-light/80 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="mb-20">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary dark:text-light">
                        {testimonial.name}
                      </h3>
                      <p className="text-primary/60 dark:text-light/60">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-primary/80 dark:text-light/80">
                    "{testimonial.content}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                        border border-gray-200 dark:border-gray-700 opacity-0 translate-y-5 animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-3xl font-bold text-primary dark:text-light mb-2">
                {stat.value}
              </h3>
              <p className="text-primary/60 dark:text-light/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
