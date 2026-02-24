"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Lock,
  Eye,
  FileCheck,
  Users,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Globe,
  Fingerprint,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Secure Infrastructure",
    description: "Enterprise-grade security protocols protect all user data and transactions. Multi-layer encryption for all sensitive information.",
  },
  {
    icon: Fingerprint,
    title: "Two-Factor Authentication",
    description: "Optional 2FA adds an extra layer of protection to your account, ensuring only you can access your funds.",
  },
  {
    icon: Eye,
    title: "Transparent Operations",
    description: "All dividend rates, fees, and rules are published upfront. No hidden charges or surprise policies.",
  },
  {
    icon: FileCheck,
    title: "Regular Audits",
    description: "Independent security audits ensure our systems meet the highest standards of protection and reliability.",
  },
  {
    icon: Users,
    title: "KYC/AML Compliance",
    description: "We follow standard Know Your Customer and Anti-Money Laundering procedures to maintain platform integrity.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Operations aligned with international financial and data protection regulations.",
  },
];

const transparencyFeatures = [
  {
    icon: Calendar,
    title: "Monthly Rate Publication",
    description: "Dividend percentages are published at the beginning of each month, so you always know what to expect.",
  },
  {
    icon: FileCheck,
    title: "Monthly Performance Review",
    description: "End-of-month recaps show exactly what was paid out and overall platform activity.",
  },
  {
    icon: Eye,
    title: "Clear Fee Structure",
    description: "Withdrawal fees, capital withdrawal fees, and holding period rules are all stated upfront in clear terms.",
  },
  {
    icon: Users,
    title: "Public Leadership",
    description: "Our founder and team are publicly identified. Anonymous leadership kills trust — accountability matters.",
  },
];

export default function SecurityPage() {
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
            <Badge className="bg-gold/20 text-gold mb-4">Security & Trust</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Your Security is Our Priority
            </h1>
            <p className="text-gray-300 text-lg">
              PROVEN is built on a foundation of transparency, security, and trust. Learn about the measures we take to protect your investments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              Security Measures
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We employ multiple layers of security to ensure your funds and data are protected.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-navy" />
                    </div>
                    <h3 className="font-serif font-semibold text-navy mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
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
              Transparency First
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              People trust what is clear, consistent, and verifiable. Here&apos;s how we maintain transparency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {transparencyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-gold/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-navy mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Principles */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-3xl font-bold text-center mb-12">
              Our Trust Principles
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Proof Over Talk</h3>
                    <p className="text-gray-400 text-sm">
                      Press photos, event footage, team presence, documented milestones. Actions matter more than words.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Consistent Communication</h3>
                    <p className="text-gray-400 text-sm">
                      Regular updates, predictable schedules, and reliable information delivery.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Education Focus</h3>
                    <p className="text-gray-400 text-sm">
                      We want users to understand what they&apos;re investing in, not just follow blindly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">No Hidden Surprises</h3>
                    <p className="text-gray-400 text-sm">
                      All fees, rules, and conditions are stated upfront. You know exactly what you&apos;re signing up for.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Honest Risk Disclosure</h3>
                    <p className="text-gray-400 text-sm">
                      We don&apos;t pretend crypto is risk-free. Every investment carries risk and requires understanding.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Accountable Leadership</h3>
                    <p className="text-gray-400 text-sm">
                      Public-facing founders and team. We stand behind our platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="py-12 bg-yellow-50 border-t border-yellow-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-navy mb-2">Important Risk Disclosure</h3>
              <p className="text-gray-600 text-sm mb-4">
                PROVEN is a financial platform operating in the cryptocurrency space. Like stocks, forex, and other financial instruments, participation carries inherent risks. Dividend rates fluctuate based on market conditions and are not guaranteed.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-gray-400" />
                  Past performance does not guarantee future results
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-gray-400" />
                  Only invest what you can afford to lose
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-gray-400" />
                  Understand the product before participating
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
