"use client";

import { motion } from "framer-motion";
import { Building2, Users, TrendingUp, DollarSign } from "lucide-react";

const revenueStreams = [
  { icon: DollarSign, label: "Trading Fees" },
  { icon: TrendingUp, label: "Spread & Liquidity" },
  { icon: Users, label: "Margin & Derivatives" },
  { icon: Building2, label: "Listing & Ecosystem" },
];

export function ShiftSection() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-medium text-sm uppercase tracking-wider">The Shift</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6">
              Platforms Generate Revenue from User Activity
            </h2>
            <p className="text-gray-300 mb-6">
              Every day, millions of people buy and sell crypto. They trade spot, futures, options, convert, swap, withdraw, deposit. Exchanges earn from that flow.
            </p>
            <p className="text-gray-300 mb-8">
              Even when prices are down, people still trade. And when people trade, exchanges still earn. This is the mental shift: from trader mindset to shareholder mindset.
            </p>

            {/* Revenue streams */}
            <div className="grid grid-cols-2 gap-4">
              {revenueStreams.map((stream, index) => (
                <motion.div
                  key={stream.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white/5 rounded-lg p-3"
                >
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                    <stream.icon className="h-5 w-5 text-gold" />
                  </div>
                  <span className="text-sm font-medium">{stream.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              {/* Stadium analogy visual */}
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="h-12 w-12 text-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">The Stadium Analogy</h3>
                <p className="text-gray-400 text-sm max-w-sm">
                  Imagine a stadium full of people betting on games. The people betting win and lose. But the stadium collects fees from everybody entering, buying drinks, and placing bets.
                </p>
                <div className="mt-6 flex items-center gap-4 text-sm">
                  <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full">
                    Coins = Teams
                  </div>
                  <div className="bg-gold/20 text-gold px-3 py-1 rounded-full">
                    Exchanges = Stadium
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -z-10 top-4 right-4 w-full h-full bg-gold/10 rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
