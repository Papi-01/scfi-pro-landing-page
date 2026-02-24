"use client";

import { motion } from "framer-motion";
import { Wallet, Calendar, PiggyBank, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    step: "01",
    title: "Choose Your Exchange",
    description: "Select from 15+ major cryptocurrency exchanges based on your research and preferences.",
  },
  {
    icon: PiggyBank,
    step: "02",
    title: "Deposit USDT",
    description: "Fund your position within the exchange's participation range using USDT stablecoin.",
  },
  {
    icon: Calendar,
    step: "03",
    title: "Receive Monthly Dividends",
    description: "Earn dividend payouts in USDT based on that plan's monthly performance.",
  },
];

export function ConceptSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">The Concept</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
            PROVEN Focuses on Participation,<br className="hidden md:block" /> Not Speculation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A structured investment model inside a high-risk market. Fixed entry ranges, variable monthly dividend rates, transparent monthly reviews.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-gold" />
                  </div>
                  <span className="text-4xl font-serif font-bold text-gray-200">{item.step}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Key points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-gray-100"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-serif font-bold text-navy mb-2">12</p>
              <p className="text-gray-600 text-sm">Month Participation Cycle</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-gold mb-2">USDT</p>
              <p className="text-gray-600 text-sm">Deposit & Receive Dividends</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-navy mb-2">15+</p>
              <p className="text-gray-600 text-sm">Major Exchanges Available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
