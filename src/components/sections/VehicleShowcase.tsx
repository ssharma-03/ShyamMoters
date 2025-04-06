import { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Vehicle {
  id: string
  name: string
  image: string
  specs: {
    engine: string
    power: string
    transmission: string
    mileage: string
  }
}

const vehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Premium SUV',
    image: '/images/vehicles/suv.jpg',
    specs: {
      engine: '2.0L Turbo',
      power: '200 HP',
      transmission: '8-Speed Automatic',
      mileage: '15 km/l'
    }
  },
  // Add more vehicles here
]

export default function VehicleShowcase() {
  const [activeVehicle, setActiveVehicle] = useState<Vehicle>(vehicles[0])

  return (
    <section className="py-20 bg-gradient-to-b from-light to-gray-50 dark:from-dark dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-light mb-4">
            Our Vehicle Collection
          </h2>
          <p className="text-lg text-primary/80 dark:text-light/80 max-w-2xl mx-auto">
            Explore our premium selection of vehicles with interactive 3D views
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Navigation, Pagination]}
            className="w-full py-12"
            onSlideChange={(swiper) => setActiveVehicle(vehicles[swiper.activeIndex])}
          >
            {vehicles.map((vehicle) => (
              <SwiperSlide key={vehicle.id} className="w-80 h-60">
                <div className="relative w-full h-full rounded-lg overflow-hidden group">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-xl font-display font-bold">{vehicle.name}</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          key={activeVehicle.id}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(activeVehicle.specs).map(([key, value]) => (
              <div
                key={key}
                className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                          border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-sm text-primary/60 dark:text-light/60 capitalize mb-1">
                  {key}
                </h4>
                <p className="text-lg font-semibold text-primary dark:text-light">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
