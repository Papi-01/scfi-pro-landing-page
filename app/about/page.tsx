"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Building2,
  Globe,
  GraduationCap,
  MapPin,
  Calendar,
  Users,
  Target,
  Shield,
  CheckCircle,
  Briefcase,
} from "lucide-react";

const tourStops = [
  { day: 1, city: "Dubai", country: "UAE", date: "16/01", flag: "🇦🇪" },
  { day: 2, city: "New York", country: "USA", date: "17/01", flag: "🇺🇸" },
  { day: 3, city: "Singapore", country: "SGP", date: "18/01", flag: "🇸🇬" },
  { day: 4, city: "Lagos", country: "NGA", date: "19/01", flag: "🇳🇬" },
  { day: 5, city: "Mumbai", country: "IND", date: "20/01", flag: "🇮🇳" },
  { day: 6, city: "Toronto", country: "CAD", date: "21/01", flag: "🇨🇦" },
  { day: 7, city: "London", country: "UK", date: "22/01", flag: "🇬🇧" },
];

const awards = [
  "Global Fintech Visionary Award (Dubai FinTech Summit)",
  "Blockchain Infrastructure Pioneer (Asia Blockchain Forum)",
  "Financial Systems Architect of the Year (Global Capital Markets Council)",
  "Top 10 Most Influential Leaders in Digital Finance (International Finance Review)",
  "Lifetime Achievement in Financial Innovation (World Blockchain Congress)",
];

const trustFeatures = [
  {
    title: "Transparent Monthly Updates",
    description: "Percentages change, and PROVEN posts the rates at the beginning of each month.",
  },
  {
    title: "Monthly Performance Review",
    description: "A public month-end recap of dividends paid and platform activity.",
  },
  {
    title: "Clear Fees and Rules",
    description: "Withdrawal fee, capital withdrawal fee, and conditions stated upfront. No hidden surprises.",
  },
  {
    title: "Strong Education Focus",
    description: "Users can read exchange summaries, history, and recent activity to understand their investments.",
  },
  {
    title: "Consistent Structure",
    description: "Deposit in USDT, earn in USDT. Plans with fixed entry ranges, dividend rates adjusted monthly.",
  },
  {
    title: "Risk Disclosure",
    description: "PROVEN does not pretend crypto is risk-free. All investments carry risk and require understanding.",
  },
  {
    title: "Public-Facing Leadership",
    description: "Clear leadership and consistent communication increases accountability.",
  },
  {
    title: "Proof Over Talk",
    description: "Press photos, event footage, team presence, documented milestones.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Badge className="bg-gold/20 text-gold mb-4">About PROVEN</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Your Gateway to Exchange Ownership
            </h1>
            <p className="text-gray-300 text-lg">
              PROVEN is a crypto dividend platform introduced in August 2025 and officially launched in January 2026 by Kim Sun Cho.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is PROVEN */}
      <section className="py-16 bg-white" id="how-it-works">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-3xl font-bold text-navy mb-8 text-center">
              What is PROVEN?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                PROVEN is built around one simple idea: Instead of only buying coins that rise and fall, users can use USDT to access dividend-style returns linked to the activity of major cryptocurrency exchanges.
              </p>
              <p className="mb-6">
                People trade every day, in bull markets and bear markets. Exchanges earn revenue from trading activity, fees, spreads, and services. PROVEN is designed to let everyday users benefit from that &ldquo;exchange economy&rdquo; and receive dividend payouts in USDT.
              </p>
              <div className="bg-navy text-white p-6 rounded-xl my-8">
                <p className="text-lg font-serif font-semibold text-center">
                  &ldquo;Own the system that earns from trading, not only the coins that move up and down&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50" id="exchange-economics">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-3xl font-bold text-navy mb-8 text-center">
              What PROVEN Does
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-serif font-semibold mb-2">Choose a Plan</h3>
                  <p className="text-sm text-gray-600">Select from 15+ major exchange plans based on your research</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-serif font-semibold mb-2">Deposit USDT</h3>
                  <p className="text-sm text-gray-600">Fund your position within the exchange&apos;s participation range</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-serif font-semibold mb-2">Earn Dividends</h3>
                  <p className="text-sm text-gray-600">Receive monthly payouts in USDT based on performance</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="pt-6">
                <h3 className="font-serif font-semibold text-navy mb-4">Key Points:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Dividend percentages are not permanent — they fluctuate monthly based on market activity
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Rates are shared publicly at the beginning of each month
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Monthly review shows what was paid and overall investor activity
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* The Analogies */}
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
              Understanding PROVEN
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif font-semibold text-navy mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-gold" />
                    Explained to a 20-Year-Old
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Imagine a stadium full of people betting on games. The people betting win and lose. But the stadium collects fees from everybody entering, buying drinks, and placing bets.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg text-sm">
                    <p className="font-medium text-navy mb-2">The comparison:</p>
                    <p className="text-gray-600">Coins are like the teams — they can win or lose hard.</p>
                    <p className="text-gray-600">Exchanges are like the stadium — they still earn when the crowd is active.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif font-semibold text-navy mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-gold" />
                    Explained to a 60-Year-Old
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Stocks pay dividends when businesses make profits. Crypto usually feels like price gambling to many people. PROVEN is positioned like a dividend system inside crypto.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg text-sm">
                    <p className="font-medium text-navy mb-2">The key difference:</p>
                    <p className="text-gray-600">Instead of betting only on price, you benefit from the fact that exchanges earn revenue when people trade.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Tour */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="bg-gold/20 text-gold mb-4">January 2026</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              7 Countries in 7 Days
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              PROVEN&apos;s launch phase focused on visibility, education, and community building through public campaigns and tours.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-5xl mx-auto">
            {tourStops.map((stop, index) => (
              <motion.div
                key={stop.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl p-4 text-center"
              >
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-navy font-bold text-sm">{stop.day}</span>
                </div>
                <span className="text-2xl mb-1 block">{stop.flag}</span>
                <h3 className="font-semibold text-sm">{stop.city}</h3>
                <p className="text-gray-500 text-xs">{stop.date}/2026</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-16 bg-gray-50" id="transparency">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              Why People Trust PROVEN
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              People trust what is clear, consistent, and verifiable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <Shield className="h-8 w-8 text-gold mb-4" />
                    <h3 className="font-serif font-semibold text-navy mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
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
              Founder Profile
            </h2>

            <Card className="overflow-hidden">
              <div className="bg-navy p-8 text-white">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Founder photo placeholder */}
                  <div className="w-32 h-32 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-serif text-4xl font-bold">KSC</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">Kim Sun Cho</h3>
                    <p className="text-gray-300">Founder & CEO of PROVEN</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge className="bg-white/10">Born September 14, 1969</Badge>
                      <Badge className="bg-white/10">Singaporean-Emirati</Badge>
                      <Badge className="bg-white/10">Based in Dubai</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="pt-8">
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-6">
                    Kim Sun Cho is a Singaporean–Emirati technology entrepreneur, financier, and blockchain executive. He is best known as the founder and chief executive officer of PROVEN, a digital finance platform described as the world&apos;s first crypto dividend exchange.
                  </p>

                  <h4 className="font-serif font-semibold text-navy flex items-center gap-2 mb-4">
                    <GraduationCap className="h-5 w-5 text-gold" />
                    Early Life & Education
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Kim Sun Cho was born in Singapore to a multicultural family. His mother is of Indian origin, while his father is Singaporean. He pursued formal education in computer science and financial systems, combining software engineering principles with market economics.
                  </p>

                  <h4 className="font-serif font-semibold text-navy flex items-center gap-2 mb-4">
                    <Briefcase className="h-5 w-5 text-gold" />
                    Career
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Kim began his professional career as a software engineer in Singapore, working on secure and scalable digital systems. He later transitioned into traditional finance, becoming a banker in China, where he was involved in cross-border banking operations and capital flow analysis.
                  </p>
                  <p className="text-gray-600 mb-6">
                    With the rise of digital assets, Kim moved into the cryptocurrency sector. He served as a crypto analyst at Binance, where his work focused on exchange revenue structures, liquidity dynamics, and market behavior. He later became Asia Blockchain Finance Manager, overseeing blockchain-related financial strategies across multiple Asian markets.
                  </p>

                  <h4 className="font-serif font-semibold text-navy flex items-center gap-2 mb-4">
                    <Globe className="h-5 w-5 text-gold" />
                    Industry Relationships
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Kim Sun Cho is reported to maintain professional relationships with senior executives across the global cryptocurrency exchange industry, including leadership associated with Binance, Coinbase, Crypto.com, KuCoin, and Bitget.
                  </p>

                  <h4 className="font-serif font-semibold text-navy flex items-center gap-2 mb-4">
                    <Award className="h-5 w-5 text-gold" />
                    Awards & Recognition
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {awards.map((award) => (
                      <li key={award} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                        {award}
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-serif font-semibold text-navy flex items-center gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-gold" />
                    Personal Life
                  </h4>
                  <p className="text-gray-600">
                    Kim Sun Cho is married to Li Ming. The couple has three children: two sons and one daughter. He holds citizenship in both Singapore and the United Arab Emirates and resides primarily in Dubai, which serves as his base for international business and investment activities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
