"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  Wallet,
  PiggyBank,
  // ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Shield,
  HelpCircle,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Choose an Exchange",
    description: "Browse our selection of 15+ major cryptocurrency exchanges. Each exchange has detailed information about its history, services, and current dividend rates.",
    details: [
      "Research exchange performance and history",
      "Compare dividend rates across exchanges",
      "Review minimum and maximum participation ranges",
    ],
  },
  {
    number: "02",
    icon: Wallet,
    title: "Deposit USDT",
    description: "Fund your position within the exchange's participation range using USDT. Each exchange has its own minimum and maximum limits.",
    details: [
      "Choose your investment amount carefully",
      "Deposit using USDT (Tether)",
      "Your position locks for the participation cycle",
    ],
  },
  {
    number: "03",
    icon: PiggyBank,
    title: "Receive Monthly Dividends",
    description: "Earn dividend-style returns in USDT every month based on your chosen exchange's performance. Rates are updated monthly.",
    details: [
      "Dividends paid monthly in USDT",
      "Rates fluctuate based on market activity",
      "Withdraw dividends anytime",
    ],
  },
  {
    number: "04",
    icon: DollarSign,
    title: "Capital Returns",
    description: "At the end of the 12-month participation cycle, your full deposited capital is automatically returned to your wallet.",
    details: [
      "Full capital returned after 12 months",
      "No action required for return",
      "Can re-participate in new cycles",
    ],
  },
];

const keyPoints = [
  {
    icon: Clock,
    title: "12-Month Cycle",
    description: "Each participation lasts 12 months. You receive monthly dividends throughout, and your capital returns at the end.",
  },
  {
    icon: Shield,
    title: "One Position Per Exchange",
    description: "You can only have one active position per exchange. However, you can participate in multiple different exchanges.",
  },
  {
    icon: DollarSign,
    title: "Flexible Dividend Withdrawal",
    description: "Withdraw your dividend earnings at any time with a standard fee. Capital withdrawals before 12 months incur a separate fee.",
  },
];

const faqs = [
  {
    question: "Can I change my investment amount after joining?",
    answer: "No. Once you select an amount and join an exchange, the position cannot be edited. Choose your amount carefully within each exchange's range.",
  },
  {
    question: "Are dividend rates guaranteed?",
    answer: "No. Rates fluctuate monthly based on exchange activity and market conditions. Rates are published at the beginning of each month.",
  },
  {
    question: "What happens if I need my capital early?",
    answer: "You can withdraw capital before the 12-month cycle completes, but an early withdrawal fee applies. The fee decreases the longer you hold.",
  },
  {
    question: "Can I participate in multiple exchanges?",
    answer: "Yes, you can join multiple exchanges simultaneously. However, you can only have one active position per exchange at a time.",
  },
];

export default function HowItWorksPage() {
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
            <Badge className="bg-gold/20 text-gold mb-4">Getting Started</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              How PROVEN Works
            </h1>
            <p className="text-gray-300 text-lg">
              A simple, transparent process to start earning dividend-style returns linked to major cryptocurrency exchanges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Concept */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              The Core Concept
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Instead of only buying coins that rise and fall, PROVEN lets you benefit from the trading activity that happens on major exchanges. Exchanges earn revenue when people trade—in bull markets and bear markets alike.
            </p>
            <Card className="bg-navy text-white">
              <CardContent className="p-6">
                <p className="font-serif text-xl">
                  &ldquo;Own the system that earns from trading, not only the coins that move up and down.&rdquo;
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
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
              Four Simple Steps
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting started with PROVEN is straightforward. Here&apos;s how the process works from start to finish.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-navy text-white p-6 md:w-48 flex flex-col items-center justify-center">
                      <span className="text-gold font-serif text-4xl font-bold">{step.number}</span>
                      <step.icon className="h-8 w-8 text-gold mt-2" />
                    </div>
                    <CardContent className="flex-1 p-6">
                      <h3 className="font-serif text-xl font-semibold text-navy mb-3">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              Important to Know
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {keyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <point.icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="font-serif font-semibold text-navy mb-2">{point.title}</h3>
                    <p className="text-sm text-gray-600">{point.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl font-bold text-navy mb-8 text-center">
              Quick Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-navy mb-2">{faq.question}</h3>
                          <p className="text-sm text-gray-600">{faq.answer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              Join PROVEN today and start earning dividend-style returns from the world&apos;s leading cryptocurrency exchanges.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
