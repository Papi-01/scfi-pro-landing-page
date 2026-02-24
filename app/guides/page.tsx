"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  PlayCircle,
  FileText,
  ArrowRight,
  Clock,
  User,
  TrendingUp,
  Shield,
  Wallet,
  Calculator,
} from "lucide-react";

const featuredGuides = [
  {
    icon: BookOpen,
    title: "Getting Started with PROVEN",
    description: "A complete beginner's guide to understanding the platform, creating your account, and making your first investment.",
    readTime: "10 min read",
    category: "Beginner",
    featured: true,
  },
  {
    icon: TrendingUp,
    title: "Understanding Exchange Dividends",
    description: "Learn how cryptocurrency exchanges generate revenue and how PROVEN converts this into dividend-style returns.",
    readTime: "8 min read",
    category: "Education",
    featured: true,
  },
  {
    icon: Calculator,
    title: "Calculating Your Potential Returns",
    description: "A practical guide to estimating your dividend returns based on exchange performance and participation amounts.",
    readTime: "6 min read",
    category: "Strategy",
    featured: true,
  },
];

const guideCategories = [
  {
    title: "Getting Started",
    icon: User,
    guides: [
      { title: "Creating Your Account", readTime: "3 min" },
      { title: "Verifying Your Identity", readTime: "4 min" },
      { title: "Understanding the Dashboard", readTime: "5 min" },
      { title: "Making Your First Deposit", readTime: "4 min" },
    ],
  },
  {
    title: "Investing",
    icon: Wallet,
    guides: [
      { title: "How to Choose an Exchange", readTime: "7 min" },
      { title: "Understanding Participation Ranges", readTime: "5 min" },
      { title: "Reading Exchange Performance Data", readTime: "6 min" },
      { title: "Diversifying Across Exchanges", readTime: "5 min" },
    ],
  },
  {
    title: "Dividends & Withdrawals",
    icon: TrendingUp,
    guides: [
      { title: "How Dividends Are Calculated", readTime: "6 min" },
      { title: "Withdrawing Your Earnings", readTime: "4 min" },
      { title: "Understanding Withdrawal Fees", readTime: "3 min" },
      { title: "Tax Considerations", readTime: "8 min" },
    ],
  },
  {
    title: "Security",
    icon: Shield,
    guides: [
      { title: "Securing Your Account", readTime: "5 min" },
      { title: "Two-Factor Authentication", readTime: "3 min" },
      { title: "Recognizing Scams", readTime: "6 min" },
      { title: "Best Security Practices", readTime: "5 min" },
    ],
  },
];

const videoGuides = [
  {
    title: "Platform Walkthrough",
    duration: "12:34",
    thumbnail: "Introduction to PROVEN",
  },
  {
    title: "Making Your First Investment",
    duration: "8:45",
    thumbnail: "Step-by-step guide",
  },
  {
    title: "Understanding Monthly Reports",
    duration: "6:20",
    thumbnail: "Reading your statements",
  },
];

export default function GuidesPage() {
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
            <Badge className="bg-gold/20 text-gold mb-4">Learn</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Guides & Tutorials
            </h1>
            <p className="text-gray-300 text-lg">
              Everything you need to know about PROVEN, from getting started to advanced investment strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Guides */}
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
              Featured Guides
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start with these essential guides to understand PROVEN and make informed investment decisions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featuredGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                        <guide.icon className="h-5 w-5 text-gold" />
                      </div>
                      <Badge variant="outline">{guide.category}</Badge>
                    </div>
                    <h3 className="font-serif font-semibold text-navy mb-2">{guide.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {guide.readTime}
                      </span>
                      <ArrowRight className="h-4 w-4 text-gold" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Categories */}
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
              Browse by Category
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {guideCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                        <category.icon className="h-5 w-5 text-gold" />
                      </div>
                      <span className="font-serif">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.guides.map((guide) => (
                        <li
                          key={guide.title}
                          className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 cursor-pointer hover:text-gold transition-colors"
                        >
                          <span className="text-sm text-gray-700">{guide.title}</span>
                          <span className="text-xs text-gray-400">{guide.readTime}</span>
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

      {/* Video Guides */}
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
              Video Tutorials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prefer watching over reading? Check out our video guides.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {videoGuides.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="bg-navy aspect-video flex items-center justify-center relative">
                    <PlayCircle className="h-12 w-12 text-gold" />
                    <Badge className="absolute bottom-2 right-2 bg-black/70">{video.duration}</Badge>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-navy">{video.title}</h3>
                    <p className="text-sm text-gray-500">{video.thumbnail}</p>
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
            <FileText className="h-12 w-12 text-gold mx-auto mb-4" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Can&apos;t Find What You Need?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              Our support team is here to help. Reach out with any questions about the platform.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
