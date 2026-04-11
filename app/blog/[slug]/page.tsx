"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { getBlogPost, getRelatedPosts } from "@/lib/blog-data";

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

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(slug, 3);

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
            <div className="flex items-center gap-3 mb-4">
              <Badge className={getCategoryColor(post.category)}>
                {post.category}
              </Badge>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {post.content.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-gray-700 leading-relaxed mb-5 ${
                    paragraph.length < 60
                      ? "font-semibold text-navy text-xl"
                      : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Share / Back */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                All Articles
              </Link>
              <span className="text-sm text-gray-500">PROVEN — {post.date}</span>
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
                      <div className="relative aspect-video">
                        <Image
                          src={relPost.image}
                          alt={relPost.imageAlt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-5">
                        <Badge
                          className={`${getCategoryColor(relPost.category)} mb-2`}
                        >
                          {relPost.category}
                        </Badge>
                        <h3 className="font-serif text-base font-semibold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">
                          {relPost.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {relPost.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {relPost.readTime}
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
