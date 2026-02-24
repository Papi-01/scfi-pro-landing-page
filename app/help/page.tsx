"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  MessageCircle,
  Mail,
  Phone,
  FileText,
  HelpCircle,
  BookOpen,
  Shield,
  Wallet,
  TrendingUp,
  Users,
  ArrowRight,
  // ExternalLink,
} from "lucide-react";

const helpCategories = [
  {
    icon: Users,
    title: "Account & Profile",
    description: "Account settings, verification, and profile management",
    articles: 12,
  },
  {
    icon: Wallet,
    title: "Deposits & Withdrawals",
    description: "How to deposit USDT and withdraw your earnings",
    articles: 8,
  },
  {
    icon: TrendingUp,
    title: "Dividends & Returns",
    description: "Understanding dividend calculations and payouts",
    articles: 10,
  },
  {
    icon: BookOpen,
    title: "Exchange Plans",
    description: "Choosing and managing your exchange investments",
    articles: 15,
  },
  {
    icon: Shield,
    title: "Security",
    description: "Account security, 2FA, and protecting your assets",
    articles: 7,
  },
  {
    icon: FileText,
    title: "Fees & Policies",
    description: "Understanding fees, terms, and platform policies",
    articles: 6,
  },
];

const popularArticles = [
  { title: "How to make your first deposit", category: "Deposits" },
  { title: "Understanding dividend rates", category: "Dividends" },
  { title: "Withdrawing your earnings", category: "Withdrawals" },
  { title: "Setting up two-factor authentication", category: "Security" },
  { title: "Choosing the right exchange plan", category: "Investing" },
  { title: "Early withdrawal fees explained", category: "Fees" },
];

const contactOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    availability: "Available 24/7",
    action: "Start Chat",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us an email and we'll respond within 24 hours",
    availability: "support@proven.com",
    action: "Send Email",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with a support representative",
    availability: "Mon-Fri, 9AM-6PM UTC",
    action: "Call Now",
  },
];

export default function HelpCenterPage() {
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
            className="max-w-3xl mx-auto text-center"
          >
            <Badge className="bg-gold/20 text-gold mb-4">Support</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Help Center
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Find answers to your questions and get the support you need.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search for help articles..."
                className="pl-12 py-6 text-lg bg-white text-gray-900 border-0 rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
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
              Browse by Category
            </h2>
            <p className="text-gray-600">
              Find help articles organized by topic
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                      <category.icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="font-serif font-semibold text-navy mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                    <p className="text-xs text-gray-400">{category.articles} articles</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
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
              Popular Articles
            </h2>

            <Card>
              <CardContent className="p-0">
                <ul className="divide-y">
                  {popularArticles.map((article, index) => (
                    <motion.li
                      key={article.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="p-4 hover:bg-gray-50 cursor-pointer flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-gray-900 group-hover:text-gold transition-colors">{article.title}</p>
                          <p className="text-xs text-gray-400">{article.category}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-gold transition-colors" />
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
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
              Need More Help?
            </h2>
            <p className="text-gray-600">
              Our support team is ready to assist you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                      <option.icon className="h-7 w-7 text-gold" />
                    </div>
                    <h3 className="font-serif font-semibold text-navy mb-2">{option.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                    <p className="text-xs text-gold mb-4">{option.availability}</p>
                    <Button variant="outline" className="w-full">
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="/faq" className="flex items-center gap-2 hover:text-gold transition-colors">
              <FileText className="h-4 w-4" />
              FAQ
            </a>
            <a href="/guides" className="flex items-center gap-2 hover:text-gold transition-colors">
              <BookOpen className="h-4 w-4" />
              Guides
            </a>
            <a href="/security" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Shield className="h-4 w-4" />
              Security
            </a>
            <a href="/contact" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="h-4 w-4" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
