"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Circle, Clock, Rocket, Target, Globe, Users, Shield } from "lucide-react";

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Infrastructure Foundation",
    period: "Q3 2025 - Q1 2026",
    status: "completed",
    items: [
      { text: "Exchange revenue index architecture", completed: true },
      { text: "Tiered client verification system (KYC/AML)", completed: true },
      { text: "Segregated wallet infrastructure", completed: true },
      { text: "Initial exchange revenue partnerships", completed: true },
      { text: "Professional dashboard development", completed: true },
      { text: "U.S. compliance framework implementation", completed: true },
    ],
  },
  {
    phase: "Phase 2",
    title: "Structured Access Expansion",
    period: "Q2 2026 - Q4 2026",
    status: "current",
    items: [
      { text: "Enhanced portfolio term structures (30/90/180-day)", completed: false },
      { text: "Professional financial reporting (PDF statements)", completed: false },
      { text: "Auto-compounding account features", completed: false },
      { text: "Institutional-grade disclosure pages", completed: false },
      { text: "Advanced distribution tracking dashboard", completed: false },
      { text: "Multi-tier withdrawal governance system", completed: false },
    ],
  },
  {
    phase: "Phase 3",
    title: "Professional & Institutional Access",
    period: "Q1 2027 - Q2 2027",
    status: "upcoming",
    items: [
      { text: "Level 2 enhanced verification (biometric)", completed: false },
      { text: "Long-term digital wealth planning tools", completed: false },
      { text: "Crypto retirement account structures", completed: false },
      { text: "Institutional capital management APIs", completed: false },
      { text: "Advanced risk disclosure frameworks", completed: false },
    ],
  },
  {
    phase: "Phase 4",
    title: "Market-Neutral Scale",
    period: "Q3 2027 & Beyond",
    status: "upcoming",
    items: [
      { text: "Expanded exchange revenue index coverage", completed: false },
      { text: "Regional regulatory alignment frameworks", completed: false },
      { text: "Institutional partnership program launch", completed: false },
      { text: "SPV and reserve fund transparency reporting", completed: false },
      { text: "Global infrastructure revenue integration", completed: false },
    ],
  },
];

const visionCards = [
  {
    icon: Target,
    title: "Infrastructure Focus",
    description: "Invest in digital financial infrastructure, not price speculation. Revenue-sourced distributions backed by real exchange activity.",
  },
  {
    icon: Globe,
    title: "Market-Neutral Model",
    description: "Profits accrue regardless of price fluctuations. Structured exposure to exchange performance without direct equity.",
  },
  {
    icon: Users,
    title: "Professional Gateway",
    description: "Serving retail, accredited, and institutional clients through tiered accounts ensuring appropriate investor engagement.",
  },
  {
    icon: Shield,
    title: "Transparent Operations",
    description: "Clear reporting, segregated accounts, structured pools. Operating under U.S. jurisdiction with SEC-conscious framework.",
  },
];

export default function RoadmapPage() {
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
            <Badge className="bg-gold/20 text-gold mb-4">Infrastructure Development</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Product Roadmap
            </h1>
            <p className="text-gray-300 text-lg">
              America&apos;s leading Digital Asset Infrastructure Investment Firm. Track our structured development as we expand access to crypto exchange revenue systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {visionCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <card.icon className="h-8 w-8 text-gold mb-4" />
                    <h3 className="font-serif font-semibold text-navy mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-600">{card.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              Development Timeline
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured, governance-driven approach designed for predictable, revenue-backed participation and long-term sustainable growth.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`overflow-hidden ${phase.status === "current" ? "ring-2 ring-gold" : ""}`}>
                  <div className={`p-4 ${phase.status === "completed" ? "bg-green-600" : phase.status === "current" ? "bg-gold" : "bg-gray-400"}`}>
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-3">
                        {phase.status === "completed" ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : phase.status === "current" ? (
                          <Rocket className="h-5 w-5 text-navy" />
                        ) : (
                          <Clock className="h-5 w-5" />
                        )}
                        <span className={`font-semibold ${phase.status === "current" ? "text-navy" : ""}`}>
                          {phase.phase}: {phase.title}
                        </span>
                      </div>
                      <Badge className={`${phase.status === "current" ? "bg-navy text-white" : "bg-white/20"}`}>
                        {phase.period}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <ul className="grid md:grid-cols-2 gap-3">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm">
                          {item.completed ? (
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                          ) : (
                            <Circle className="h-4 w-4 text-gray-300 mt-0.5 shrink-0" />
                          )}
                          <span className={item.completed ? "text-gray-600" : "text-gray-500"}>
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Participate in Exchange Revenue
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              Stop speculating, start participating. Access structured exposure to crypto exchange revenue with institutional-grade transparency and governance.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
