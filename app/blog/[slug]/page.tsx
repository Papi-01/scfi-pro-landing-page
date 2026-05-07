"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Calendar, Clock, ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import {
  getBlogBySlug,
  getBlogs,
  formatDate,
  estimateReadTime,
  type ApiBlog,
} from "@/lib/api/blog";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [post, setPost] = useState<ApiBlog | null>(null);
  const [related, setRelated] = useState<ApiBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFoundFlag, setNotFoundFlag] = useState(false);

  useEffect(() => {
    setLoading(true);
    getBlogBySlug(slug)
      .then((data) => {
        if (!data || (data as { statusCode?: number }).statusCode === 404) {
          setNotFoundFlag(true);
          return;
        }
        setPost(data);
        return getBlogs(1, 10);
      })
      .then((list) => {
        if (list) {
          setRelated(
            (list.data ?? []).filter((p) => p.slug !== slug).slice(0, 3)
          );
        }
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (notFoundFlag) {
    notFound();
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="flex justify-center items-center py-40">
          <Loader2 className="h-8 w-8 animate-spin text-gold" />
        </div>
        <Footer />
      </main>
    );
  }

  if (!post) return null;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Article Hero */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gold transition-colors mb-6 text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {estimateReadTime(post.content)}
              </span>
              {post.author?.name && (
                <span className="text-gray-400">By {post.author.name}</span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {post.mainImageUrl && (
        <div className="container mx-auto px-4 -mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={post.mainImageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      )}

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy prose-a:text-gold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share / Back */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                All Articles
              </Link>
              <span className="text-sm text-gray-500">
                PROVEN — {formatDate(post.publishedAt)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-8">
              More Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((relPost, index) => (
                <motion.div
                  key={relPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${relPost.slug}`} className="group block">
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="relative aspect-video bg-gray-100">
                        {relPost.mainImageUrl && (
                          <Image
                            src={relPost.mainImageUrl}
                            alt={relPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif text-base font-semibold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">
                          {relPost.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(relPost.publishedAt)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {estimateReadTime(relPost.content)}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-gold text-xs font-medium mt-3 group-hover:gap-2 transition-all">
                          Read Article <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
