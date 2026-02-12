"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  "I like the monthly update style, it feels organized",
  "The USDT in, USDT out makes it simple for me",
  "I used to panic trade, this is calmer",
  "The idea of earning from exchange activity makes sense",
  "I like that they don't promise fixed rates forever",
  "The monthly review post is what convinced me",
  "It feels like the stock mindset but in crypto",
  "It's not about chasing pumps, that's what I needed",
  "I understand the plan structure quickly",
  "The education part helped me choose better",
  "I prefer dividends than stressful chart watching",
  "I like the clarity of fees and rules",
  "It made my crypto feel more long term",
  "It's the first time my USDT feels like it's working",
  "This feels like infrastructure investing",
  "The monthly recap is the trust builder",
  "I'm watching how consistent they are, so far it's solid",
  "I like the discipline it forces, no reckless trading",
  "The concept is easy to explain to friends",
  "It's not perfect but it's structured, and structure matters",
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">Community</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
            What People Are Saying
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real feedback from members after the January 2026 launch.
          </p>
        </motion.div>

        {/* Scrolling testimonials - Row 1 */}
        <div className="relative mb-6">
          <div className="flex gap-4 animate-scroll">
            {[...testimonials.slice(0, 10), ...testimonials.slice(0, 10)].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <Quote className="h-6 w-6 text-gold/30 mb-3" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  &ldquo;{testimonial}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling testimonials - Row 2 (reverse direction) */}
        <div className="relative">
          <div className="flex gap-4 animate-scroll-reverse">
            {[...testimonials.slice(10, 20), ...testimonials.slice(10, 20)].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <Quote className="h-6 w-6 text-gold/30 mb-3" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  &ldquo;{testimonial}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 40s linear infinite;
        }
        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
