"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  // ArrowRight,
  Building2,
  // Users,
  Repeat,
  PieChart,
  CheckCircle,
} from "lucide-react";

const revenueStreams = [
  {
    icon: Repeat,
    title: "Trading Fees",
    description: "Exchanges charge a small percentage on every trade executed on their platform, typically 0.1-0.5% per transaction.",
    percentage: "60-70%",
    subtitle: "of exchange revenue",
  },
  {
    icon: DollarSign,
    title: "Withdrawal Fees",
    description: "Fees charged when users withdraw cryptocurrency or fiat currency from the exchange to external wallets.",
    percentage: "10-15%",
    subtitle: "of exchange revenue",
  },
  {
    icon: TrendingUp,
    title: "Listing Fees",
    description: "Projects pay substantial fees to have their tokens listed on major exchanges, providing upfront revenue.",
    percentage: "5-10%",
    subtitle: "of exchange revenue",
  },
  {
    icon: BarChart3,
    title: "Margin & Derivatives",
    description: "Interest on margin trading and fees from futures, options, and other derivative products.",
    percentage: "10-20%",
    subtitle: "of exchange revenue",
  },
];

const whyItWorks = [
  {
    title: "Market-Independent Revenue",
    description: "Whether prices go up or down, people trade. Exchanges earn from the activity itself, not the direction of the market.",
  },
  {
    title: "Volume-Based Model",
    description: "Higher market volatility often means more trading, which can increase exchange revenue even in bear markets.",
  },
  {
    title: "Diversified Income",
    description: "Major exchanges have multiple revenue streams beyond just trading fees, creating stability.",
  },
  {
    title: "Network Effects",
    description: "Established exchanges benefit from liquidity and trust, making them harder to disrupt and more stable over time.",
  },
];

const comparisonData = [
  {
    aspect: "Income Source",
    traditional: "Company profits & dividends",
    proven: "Exchange trading activity",
  },
  {
    aspect: "Market Dependency",
    traditional: "Tied to stock price movement",
    proven: "Benefits from trading volume",
  },
  {
    aspect: "Volatility Impact",
    traditional: "Volatility often hurts returns",
    proven: "Volatility can increase activity",
  },
  {
    aspect: "Entry Barrier",
    traditional: "Varies, often high minimums",
    proven: "Accessible participation ranges",
  },
];

export default function ExchangeEconomicsPage() {
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
            <Badge className="bg-gold/20 text-gold mb-4">Understanding the Model</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Exchange Economics
            </h1>
            <p className="text-gray-300 text-lg">
              Learn how cryptocurrency exchanges generate revenue and why PROVEN&apos;s dividend model is designed to benefit from this ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Big Idea */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Building2 className="h-12 w-12 text-gold mx-auto mb-4" />
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                The Exchange Economy
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Cryptocurrency exchanges are the infrastructure of digital finance. Every time someone buys, sells, or trades crypto, exchanges earn revenue.
              </p>
            </div>

            <Card className="bg-navy text-white">
              <CardContent className="p-8">
                <p className="text-xl font-serif text-center">
                  &ldquo;Coins go up and down. But the exchanges that facilitate trading continue to earn from the activity itself.&rdquo;
                </p>
                <p className="text-center text-gold mt-4 text-sm">
                  This is the core insight behind PROVEN
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Revenue Streams */}
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
              How Exchanges Make Money
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Major crypto exchanges have multiple revenue streams that generate billions in annual revenue.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                        <stream.icon className="h-6 w-6 text-gold" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-serif font-semibold text-navy">{stream.title}</h3>
                          <Badge className="bg-gold/10 text-gold">{stream.percentage}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{stream.description}</p>
                        <p className="text-xs text-gray-400">{stream.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
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
              Why Exchange-Linked Dividends Work
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {whyItWorks.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-semibold text-navy mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-3xl font-bold text-navy mb-8 text-center">
              Traditional vs Exchange Dividends
            </h2>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="text-left p-4 font-serif">Aspect</th>
                        <th className="text-left p-4 font-serif">Traditional Stocks</th>
                        <th className="text-left p-4 font-serif">PROVEN</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={row.aspect} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="p-4 font-medium text-navy">{row.aspect}</td>
                          <td className="p-4 text-gray-600">{row.traditional}</td>
                          <td className="p-4 text-gray-600">{row.proven}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* The Analogy */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <PieChart className="h-12 w-12 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
              Think of It Like This
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Imagine a stadium full of people betting on games. The bettors win and lose. But the stadium collects fees from everyone entering, buying refreshments, and placing bets.
            </p>
            <div className="bg-white/10 rounded-xl p-6">
              <p className="text-gold font-semibold mb-2">The parallel:</p>
              <p className="text-gray-300">
                Coins are like the teams — they can win or lose dramatically. Exchanges are like the stadium — they earn when the crowd is active, regardless of who wins.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
