"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Loader2 } from "lucide-react";
import {
  getBlogs,
  formatDate,
  estimateReadTime,
  type ApiBlog,
} from "@/lib/api/blog";

export default function BlogPage() {
  const [posts, setPosts] = useState<ApiBlog[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getBlogs(1, 10)
      .then((res) => {
        setPosts(res.data ?? []);
        setTotal(res.total ?? 0);
        setPage(1);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    setLoadingMore(true);
    getBlogs(nextPage, 10)
      .then((res) => {
        setPosts((prev) => [...prev, ...(res.data ?? [])]);
        setPage(nextPage);
      })
      .finally(() => setLoadingMore(false));
  };

  const featured = posts[0];
  const rest = posts.slice(1);
  const hasMore = posts.length < total;

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
              Insights &amp; Updates
            </h1>
            <p className="text-gray-300 text-lg">
              Stay informed with the latest news, educational content, and market
              insights from the PROVEN team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Loading */}
      {loading && (
        <div className="flex justify-center items-center py-24">
          <Loader2 className="h-8 w-8 animate-spin text-gold" />
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <div className="flex justify-center py-24 text-gray-500">
          Failed to load posts. Please try again later.
        </div>
      )}

      {!loading && !error && (
        <>
          {/* Featured Post */}
          {featured && (
            <section className="py-12">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link href={`/blog/${featured.slug}`} className="group block">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                      <div className="grid md:grid-cols-2">
                        <div className="relative aspect-video md:aspect-auto min-h-[240px]">
                          {featured.mainImageUrl && (
                            <Image
                              src={featured.mainImageUrl}
                              alt={featured.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              priority
                            />
                          )}
                        </div>
                        <div className="p-8 md:p-10 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs text-gold font-semibold uppercase tracking-wide">
                              Featured
                            </span>
                          </div>
                          <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-3 group-hover:text-gold transition-colors leading-tight">
                            {featured.title}
                          </h2>
                          <p className="text-gray-600 mb-6 line-clamp-3">
                            {featured.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {formatDate(featured.publishedAt)}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {estimateReadTime(featured.content)}
                              </span>
                            </div>
                            <span className="inline-flex items-center gap-1 text-gold font-medium text-sm group-hover:gap-2 transition-all">
                              Read More <ArrowRight className="h-4 w-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </section>
          )}

          {/* Blog Posts Grid */}
          {rest.length > 0 && (
            <section className="pb-8">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.04 }}
                      viewport={{ once: true }}
                    >
                      <Link href={`/blog/${post.slug}`} className="group block h-full">
                        <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                          <div className="relative aspect-video overflow-hidden bg-gray-100">
                            {post.mainImageUrl && (
                              <Image
                                src={post.mainImageUrl}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            )}
                          </div>
                          <CardContent className="pt-5">
                            <h3 className="font-serif text-base font-semibold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {formatDate(post.publishedAt)}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {estimateReadTime(post.content)}
                                </span>
                              </div>
                              <ArrowRight className="h-4 w-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center pb-16">
              <button
                onClick={loadMore}
                disabled={loadingMore}
                className="px-8 py-3 bg-navy text-white rounded-full font-medium hover:bg-navy/90 transition-colors disabled:opacity-60 flex items-center gap-2"
              >
                {loadingMore && <Loader2 className="h-4 w-4 animate-spin" />}
                {loadingMore ? "Loading…" : "Load More"}
              </button>
            </div>
          )}

          {!loading && posts.length === 0 && !error && (
            <div className="flex justify-center py-24 text-gray-500">
              No posts published yet.
            </div>
          )}
        </>
      )}

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
            <h2 className="font-serif text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-400 mb-8">
              Subscribe to receive the latest insights, market updates, and
              educational content directly to your inbox.
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
