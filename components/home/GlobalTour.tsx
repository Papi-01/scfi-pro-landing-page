"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const tourStops = [
  { day: 1, city: "Dubai", country: "UAE", date: "16/01", flag: "🇦🇪" },
  { day: 2, city: "New York", country: "USA", date: "17/01", flag: "🇺🇸" },
  { day: 3, city: "Singapore", country: "SGP", date: "18/01", flag: "🇸🇬" },
  { day: 4, city: "Lagos", country: "NGA", date: "19/01", flag: "🇳🇬" },
  { day: 5, city: "Mumbai", country: "IND", date: "20/01", flag: "🇮🇳" },
  { day: 6, city: "Toronto", country: "CAD", date: "21/01", flag: "🇨🇦" },
  { day: 7, city: "London", country: "UK", date: "22/01", flag: "🇬🇧" },
];

export function GlobalTour() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">Global Launch</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
            7 Countries in 7 Days
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            PROVEN&apos;s launch phase focused on visibility, education, and community building through public campaigns and tours in January 2026.
          </p>
        </motion.div>

        {/* Tour timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Line connecting all stops */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {tourStops.map((stop, index) => (
              <motion.div
                key={stop.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Day indicator */}
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-3 z-10 relative">
                  <span className="text-gold font-bold">{stop.day}</span>
                </div>

                {/* Flag */}
                <span className="text-3xl mb-2">{stop.flag}</span>

                {/* City info */}
                <h3 className="font-serif font-semibold text-navy">{stop.city}</h3>
                <p className="text-gray-500 text-xs">{stop.country}</p>

                {/* Date */}
                <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
                  <Calendar className="h-3 w-3" />
                  {stop.date}/2026
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-12 max-w-xl mx-auto"
        >
          The tour was designed to introduce PROVEN&apos;s dividend model, educate the public, and position the brand as a serious global project.
        </motion.p>
      </div>
    </section>
  );
}
