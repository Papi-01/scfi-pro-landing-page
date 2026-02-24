"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { ExchangeCard } from "@/components/exchanges/ExchangeCard";
import { exchanges } from "@/lib/data/exchanges";
import { Info } from "lucide-react";

export default function ExchangesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Exchange Database
            </h1>
            <p className="text-gray-300 text-lg">
              Explore 15+ major cryptocurrency exchanges. Each exchange page includes company overview, services, revenue models, and how PROVEN participation connects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Exchange Participation Info */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start gap-4 bg-blue-50 rounded-xl p-6"
          >
            <Info className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif font-semibold text-navy mb-2">Exchange Participation Structure</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li><span className="font-medium">One Active Position Per Exchange</span> — Each exchange can only be joined once at a time</li>
                <li><span className="font-medium">12-Month Participation Cycle</span> — Receive monthly dividends, capital returns after completion</li>
                <li><span className="font-medium">Multiple Exchange Ownership</span> — Join multiple exchanges simultaneously, but only once per exchange</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exchange Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exchanges.map((exchange, index) => (
              <ExchangeCard key={exchange.id} exchange={exchange} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom info */}
      <section className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              How Exchanges Earn
            </h2>
            <p className="text-gray-600 mb-6">
              Every day, millions of people buy and sell crypto. They trade spot, futures, options, convert, swap, withdraw, deposit. Exchanges earn from that flow through:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Trading fees", "Spread & liquidity", "Margin & derivatives", "Listing & ecosystem"].map((item) => (
                <div key={item} className="bg-gray-50 rounded-lg p-4 text-sm font-medium text-navy">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
