"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, AlertTriangle } from "lucide-react";

const faqs = [
  {
    question: "What is PROVEN?",
    answer: "A USDT-based dividend platform designed to give users dividend-style exposure linked to exchange market activity. Instead of trading cryptocurrencies directly, members gain exposure to the infrastructure powering global digital markets.",
  },
  {
    question: "How do dividends work?",
    answer: "Users choose an exchange plan, deposit USDT within the plan's investment range, and receive monthly dividend payouts in USDT based on that plan's performance. Each participation cycle lasts 12 months.",
  },
  {
    question: "Are the dividend rates fixed?",
    answer: "No. Rates fluctuate and are updated monthly based on exchange activity, volume, and market conditions. This information is shared publicly at the beginning of each month and reviewed at month end.",
  },
  {
    question: "Can I withdraw dividends anytime?",
    answer: "Yes, you can withdraw your dividend earnings at any time with a standard withdrawal fee that is stated upfront.",
  },
  {
    question: "Can I withdraw capital anytime?",
    answer: "Yes, you can withdraw your capital before the 12-month cycle completes, but an early capital withdrawal fee applies. There are reduced fee rules based on holding period — the longer you hold, the lower the fee.",
  },
  {
    question: "Is PROVEN risk-free?",
    answer: "No. Like stocks, forex, crypto, and fintech products, PROVEN carries risk. Users should understand what they are investing in. We strongly recommend reading the exchange summaries and understanding the model before participating.",
  },
  {
    question: "Where can I learn about each exchange?",
    answer: "PROVEN provides comprehensive exchange summaries, history, and recent activity inside the website and app. Each exchange has a dedicated page where you can learn about the company, its services, revenue model, and market presence.",
  },
  {
    question: "How many exchanges can I participate in?",
    answer: "You can participate in multiple exchanges simultaneously. However, you can only have one active position per exchange at a time. This prevents duplicate exposure to the same revenue stream.",
  },
  {
    question: "What happens at the end of 12 months?",
    answer: "At the end of the 12-month participation cycle, your full deposited capital is automatically returned to your USDT wallet. No action is required from you — the participation simply completes and closes.",
  },
  {
    question: "Can I edit my position after joining?",
    answer: "No. Once you select an amount and join an exchange, the position cannot be edited, split, or replaced after activation. Choose your amount carefully within each exchange's minimum and maximum participation range.",
  },
];

const participationRules = [
  {
    title: "One Active Position Per Exchange",
    description: "Each exchange can only be joined once at a time. If you join the Binance Pool with $14,000, you cannot open another Binance position simultaneously. However, you can join other exchanges (Coinbase, Bybit, etc.).",
  },
  {
    title: "Choose Your Amount Carefully",
    description: "Every exchange has its own minimum and maximum participation range. The selected amount becomes locked into that yearly participation cycle and cannot be edited after activation.",
  },
  {
    title: "Dividend Entitlement Period",
    description: "Each exchange participation lasts 12 months. During this period, you receive monthly dividends in USDT. Dividend percentages may fluctuate monthly based on market activity.",
  },
  {
    title: "Capital Return",
    description: "At the end of the 12-month cycle, your full deposited capital is automatically returned to your USDT wallet. No action required.",
  },
  {
    title: "Early Exit Rule",
    description: "If you withdraw capital before the 12-month completion, an early withdrawal fee of 10% applies. This rule maintains stability of exchange pools and fair distribution for all participants.",
  },
];

export default function FAQPage() {
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
            <Badge className="bg-gold/20 text-gold mb-4">Support</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-300 text-lg">
              Find answers to common questions about PROVEN, how dividends work, and our participation structure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-xl border shadow-sm px-6"
                  >
                    <AccordionTrigger className="text-left font-serif font-semibold text-navy hover:text-gold transition-colors py-6">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-6 pl-8">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exchange Participation Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-3xl font-bold text-navy mb-8 text-center">
              Exchange Participation Structure
            </h2>

            <div className="space-y-6">
              {participationRules.map((rule, index) => (
                <motion.div
                  key={rule.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-gold font-bold text-sm">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-serif font-semibold text-navy mb-2">{rule.title}</h3>
                          <p className="text-gray-600 text-sm">{rule.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Summary box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Card className="bg-navy text-white">
                <CardHeader>
                  <CardTitle className="font-serif text-white">Simple Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    PROVEN positions work like yearly participation subscriptions:
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="bg-white/10 px-3 py-1 rounded-full">You choose an exchange</span>
                    <span className="text-gold">→</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full">Choose an amount</span>
                    <span className="text-gold">→</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full">Receive dividends monthly</span>
                    <span className="text-gold">→</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full">Capital returns after 12 months</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-4">
                    You may join many exchanges, but only once per exchange at a time.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="py-12 bg-yellow-50 border-t border-yellow-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-navy mb-2">Risk Disclosure</h3>
              <p className="text-gray-600 text-sm">
                PROVEN does not pretend crypto is risk-free. It frames itself as another financial system, like stocks, forex, crypto, and fintech. All have risk, all require understanding. Past performance does not guarantee future results. Only invest what you can afford to lose.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
