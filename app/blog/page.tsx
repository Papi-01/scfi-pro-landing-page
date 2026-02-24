"use client";

import { motion } from "framer-motion";
// import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

// Placeholder blog posts
const blogPosts = [
  {
    id: 1,
    title: "Understanding Exchange Economics: How Crypto Platforms Generate Revenue",
    excerpt: "A deep dive into the various revenue streams that power cryptocurrency exchanges, from trading fees to ecosystem services.",
    category: "Education",
    date: "January 28, 2026",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "PROVEN Launch Recap: 7 Countries in 7 Days",
    excerpt: "Highlights from our global launch tour across Dubai, New York, Singapore, Lagos, Mumbai, Toronto, and London.",
    category: "News",
    date: "January 25, 2026",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "The Difference Between Trading and Participating",
    excerpt: "Why the shift from trader mindset to shareholder mindset could change how you think about cryptocurrency exposure.",
    category: "Insights",
    date: "January 20, 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Monthly Report: January 2026 Exchange Activity",
    excerpt: "Our first monthly transparency report covering exchange performance, dividend payouts, and participant growth.",
    category: "Reports",
    date: "January 15, 2026",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "How to Choose the Right Exchange for Your Portfolio",
    excerpt: "A guide to evaluating different exchange plans based on your investment goals, risk tolerance, and preferences.",
    category: "Guide",
    date: "January 10, 2026",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "Welcome to PROVEN: A New Way to Participate in Crypto",
    excerpt: "An introduction to PROVEN's dividend model and how it differs from traditional cryptocurrency trading.",
    category: "Announcement",
    date: "January 1, 2026",
    readTime: "5 min read",
  },
];

const categories = ["All", "Education", "News", "Insights", "Reports", "Guide", "Announcement"];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Education: "bg-blue-100 text-blue-700",
    News: "bg-green-100 text-green-700",
    Insights: "bg-purple-100 text-purple-700",
    Reports: "bg-orange-100 text-orange-700",
    Guide: "bg-cyan-100 text-cyan-700",
    Announcement: "bg-gold/20 text-gold",
  };
  return colors[category] || "bg-gray-100 text-gray-700";
};

export default function BlogPage() {
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
            <Badge className="bg-gold/20 text-gold mb-4">Blog</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Insights & Updates
            </h1>
            <p className="text-gray-300 text-lg">
              Stay informed with the latest news, educational content, and market insights from the PROVEN team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-navy text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  {/* Placeholder image */}
                  <div className="aspect-video bg-gradient-to-br from-navy/10 to-gold/10 flex items-center justify-center">
                    <span className="text-4xl font-serif font-bold text-navy/20">PROVEN</span>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-navy text-white rounded-full font-medium hover:bg-navy-light transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-400 mb-8">
              Subscribe to receive the latest insights, market updates, and educational content directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold"
              />
              <button className="px-8 py-3 bg-gold text-navy rounded-full font-semibold hover:bg-gold-light transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
