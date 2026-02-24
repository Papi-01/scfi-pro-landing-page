"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Circle, Clock, Rocket, Target, Globe, Users, Shield } from "lucide-react";

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Foundation & Launch",
    period: "Q3 2025 - Q1 2026",
    status: "completed",
    items: [
      { text: "Platform concept development", completed: true },
      { text: "Core infrastructure build", completed: true },
      { text: "Security architecture implementation", completed: true },
      { text: "Initial exchange partnerships", completed: true },
      { text: "7-country global launch tour", completed: true },
      { text: "Platform public launch", completed: true },
    ],
  },
  {
    phase: "Phase 2",
    title: "Growth & Expansion",
    period: "Q2 2026 - Q4 2026",
    status: "current",
    items: [
      { text: "Mobile app development (iOS & Android)", completed: false },
      { text: "Additional exchange partnerships", completed: false },
      { text: "Enhanced analytics dashboard", completed: false },
      { text: "Multi-language support", completed: false },
      { text: "Community ambassador program", completed: false },
      { text: "Educational content expansion", completed: false },
    ],
  },
  {
    phase: "Phase 3",
    title: "Advanced Features",
    period: "Q1 2027 - Q2 2027",
    status: "upcoming",
    items: [
      { text: "Advanced portfolio management tools", completed: false },
      { text: "Automated reinvestment options", completed: false },
      { text: "Premium tier introduction", completed: false },
      { text: "API access for institutional users", completed: false },
      { text: "Enhanced reporting features", completed: false },
    ],
  },
  {
    phase: "Phase 4",
    title: "Global Scale",
    period: "Q3 2027 & Beyond",
    status: "upcoming",
    items: [
      { text: "Expansion to 50+ exchanges", completed: false },
      { text: "Regional compliance frameworks", completed: false },
      { text: "Institutional partnership program", completed: false },
      { text: "Advanced AI-driven insights", completed: false },
      { text: "Global financial services integration", completed: false },
    ],
  },
];

const visionCards = [
  {
    icon: Target,
    title: "Mission",
    description: "To democratize access to exchange-based dividend returns, making institutional-grade financial products accessible to everyone.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Building a worldwide community of investors who benefit from the infrastructure powering digital markets.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Every feature we build is designed with our users in mind, ensuring transparency and ease of use.",
  },
  {
    icon: Shield,
    title: "Security & Trust",
    description: "Maintaining the highest standards of security and operational transparency at every step.",
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
            <Badge className="bg-gold/20 text-gold mb-4">Our Journey</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Product Roadmap
            </h1>
            <p className="text-gray-300 text-lg">
              Follow our journey as we continue to build and expand the PROVEN platform. See what we&apos;ve accomplished and what&apos;s coming next.
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
              Our phased approach ensures stable, secure growth while continuously adding value for our users.
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
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          ) : (
                            <Circle className="h-4 w-4 text-gray-300 mt-0.5 flex-shrink-0" />
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
              Be Part of Our Journey
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              Join PROVEN today and grow with us as we continue to expand and innovate in the crypto dividend space.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
