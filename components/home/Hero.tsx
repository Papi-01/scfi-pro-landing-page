"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-gray-50 py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-navy/5 text-navy px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            Launched January 2026
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6"
          >
            Own Shares of the World&apos;s{" "}
            <span className="text-gradient-gold">Leading Crypto Exchanges</span>
          </motion.h1>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            SCFI PRO enables individuals to participate in the revenue activity
            of major cryptocurrency trading platforms. Instead of trading
            assets, members gain exposure to the infrastructure powering global
            digital markets.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link href="/auth/register">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy-light text-white px-8 h-12 text-base"
              >
                Create Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about#how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="px-8 h-12 text-base border-navy text-navy hover:bg-navy hover:text-white"
              >
                <Play className="mr-2 h-4 w-4" />
                Learn How It Works
              </Button>
            </Link>
          </motion.div>

          {/* Dashboard Preview Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative mx-auto max-w-3xl"
          >
            <div className="aspect-video bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Placeholder for dashboard preview */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  {/* Mock Dashboard Header */}
                  <div className="bg-navy-950 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-sm text-gray-400">
                      SCFI PRO Dashboard
                    </span>
                  </div>

                  {/* Mock Dashboard Content */}
                  <div className="p-6 sm:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      {[
                        "Total Invested",
                        "Monthly Dividend",
                        "Active Exchanges",
                      ].map((label, i) => (
                        <div key={i} className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm text-gray-500 mb-1">{label}</p>
                          <p className="text-2xl font-bold text-navy-900">
                            {i === 0 ? "$12,500" : i === 1 ? "$1,087" : "4"}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Mock Chart */}
                    <div className="bg-linear-to-br from-navy-50 to-gold-50 rounded-lg p-6 h-48 flex items-end justify-between gap-2">
                      {[65, 78, 82, 70, 85, 92, 88].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                          className="flex-1 bg-linear-to-t from-navy-900 to-navy-600 rounded-t"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-4 bg-linear-to-r from-gold-200 via-navy-200 to-gold-200 rounded-3xl blur-2xl -z-10 opacity-20" />
              </motion.div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-gold/20 rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
