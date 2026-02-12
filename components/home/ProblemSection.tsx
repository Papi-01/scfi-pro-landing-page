"use client";

import { motion } from "framer-motion";
import { TrendingDown, AlertTriangle, Clock } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Price Volatility",
    description: "Trading depends on price direction. Many people get hurt chasing pumps, buying tops, and panic-selling bottoms.",
  },
  {
    icon: AlertTriangle,
    title: "Unpredictable Markets",
    description: "Crypto is powerful but unpredictable. Success often requires constant monitoring and perfect timing.",
  },
  {
    icon: Clock,
    title: "Trader Burnout",
    description: "The stress of watching charts 24/7, making split-second decisions, and dealing with emotional swings.",
  },
];

export function ProblemSection() {
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
          <span className="text-gold font-medium text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
            Trading Depends on Price Direction
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Most crypto participants experience significant volatility and uncertainty. The traditional approach puts you at the mercy of market movements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <problem.icon className="h-7 w-7 text-red-500" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
