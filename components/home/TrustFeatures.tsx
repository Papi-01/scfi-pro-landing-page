"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  FileText,
  Shield,
  BookOpen,
  Wallet,
  AlertCircle,
  User,
  Camera
} from "lucide-react";

const trustFeatures = [
  {
    icon: CalendarCheck,
    title: "Transparent Monthly Updates",
    description: "Percentages change, and SCFI PRO posts the rates at the beginning of each month.",
  },
  {
    icon: FileText,
    title: "Monthly Performance Review",
    description: "A public month-end recap of dividends paid and platform activity.",
  },
  {
    icon: Shield,
    title: "Clear Fees and Rules",
    description: "Withdrawal fee, capital withdrawal fee, and conditions stated upfront. No hidden surprises.",
  },
  {
    icon: BookOpen,
    title: "Strong Education Focus",
    description: "Users can read exchange summaries, history, and recent activity to understand their investments.",
  },
  {
    icon: Wallet,
    title: "Consistent Structure",
    description: "Deposit in USDT, earn in USDT. Plans with fixed entry ranges, dividend rates adjusted monthly.",
  },
  {
    icon: AlertCircle,
    title: "Risk Disclosure",
    description: "SCFI PRO does not pretend crypto is risk-free. All investments carry risk and require understanding.",
  },
  {
    icon: User,
    title: "Public-Facing Leadership",
    description: "Clear leadership and consistent communication increases accountability. Anonymous leadership kills trust.",
  },
  {
    icon: Camera,
    title: "Proof Over Talk",
    description: "Press photos, event footage, team presence, documented milestones. Actions matter more than words.",
  },
];

export function TrustFeatures() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">Why Trust SCFI PRO</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4">
            People Trust What Is Clear,<br className="hidden md:block" /> Consistent, and Verifiable
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Compliance, transparency, and proof-first communication are at the core of everything we do.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
