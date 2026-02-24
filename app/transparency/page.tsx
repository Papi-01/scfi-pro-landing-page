"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Eye,
  FileText,
  Users,
  CheckCircle,
  BarChart3,
  Lock,
  Globe,
} from "lucide-react";

const transparencyPillars = [
  {
    icon: Eye,
    title: "Public Rate Updates",
    description: "Dividend percentages are shared publicly at the beginning of each month. No hidden rates or surprise changes.",
  },
  {
    icon: BarChart3,
    title: "Monthly Performance Reviews",
    description: "A detailed month-end recap of dividends paid and overall platform activity is published for all users.",
  },
  {
    icon: FileText,
    title: "Clear Fee Structure",
    description: "All fees including withdrawal fees and capital withdrawal conditions are stated upfront. No hidden charges.",
  },
  {
    icon: Lock,
    title: "Security Practices",
    description: "We maintain industry-standard security protocols and regularly audit our systems to protect user assets.",
  },
  {
    icon: Users,
    title: "Public Leadership",
    description: "Our founder and leadership team are publicly known, ensuring accountability and trust.",
  },
  {
    icon: Globe,
    title: "Global Compliance",
    description: "We operate within regulatory frameworks and maintain compliance across all jurisdictions we serve.",
  },
];

const commitments = [
  {
    title: "No Hidden Fees",
    description: "Every fee is disclosed before you make any transaction. What you see is what you pay.",
  },
  {
    title: "Real-Time Dashboard",
    description: "Track your investments, dividends, and portfolio performance in real-time through our dashboard.",
  },
  {
    title: "Honest Communication",
    description: "We communicate both successes and challenges. Crypto carries risk, and we never pretend otherwise.",
  },
  {
    title: "Verifiable Track Record",
    description: "Our milestones, events, and achievements are documented and verifiable through public records.",
  },
  {
    title: "User Education",
    description: "We provide comprehensive resources to help you understand your investments before committing.",
  },
  {
    title: "Open Feedback",
    description: "We actively listen to user feedback and continuously improve based on community input.",
  },
];

export default function TransparencyPage() {
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
            <Badge className="bg-gold/20 text-gold mb-4">Our Promise</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Transparency at PROVEN
            </h1>
            <p className="text-gray-300 text-lg">
              Trust is built on clarity, consistency, and verification. Here&apos;s how we maintain complete transparency with our users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Shield className="h-16 w-16 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              Why Transparency Matters
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              In the world of crypto and digital finance, trust is everything. Too many platforms operate in the shadows, leaving users uncertain about where their money goes and how decisions are made.
            </p>
            <p className="text-gray-600 text-lg">
              At PROVEN, we believe you deserve complete visibility into our operations, fees, performance, and leadership. Transparency isn&apos;t just a policy—it&apos;s the foundation of everything we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Transparency Pillars */}
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
              Our Transparency Pillars
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Six key areas where we maintain complete openness with our community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {transparencyPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-4">
                      <pillar.icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="font-serif font-semibold text-navy mb-2">{pillar.title}</h3>
                    <p className="text-sm text-gray-600">{pillar.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
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
              Our Commitments to You
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={commitment.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-semibold text-navy mb-1">{commitment.title}</h3>
                    <p className="text-sm text-gray-600">{commitment.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-serif text-2xl md:text-3xl mb-6">
              &ldquo;People trust what is clear, consistent, and verifiable. That&apos;s the standard we hold ourselves to every day.&rdquo;
            </p>
            <p className="text-gold font-semibold">— Kim Sun Cho, Founder & CEO</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
