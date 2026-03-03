"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getExchangeBySlug, exchanges } from "@/lib/data/exchanges";
import {
  ArrowLeft,
  TrendingUp,
  Users,
  Calendar,
  DollarSign,
  Building2,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const getActivityColor = (level: string) => {
  switch (level) {
    case "Very High":
      return "bg-green-100 text-green-700";
    case "High":
      return "bg-blue-100 text-blue-700";
    case "Medium":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function ExchangeDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const exchange = getExchangeBySlug(slug);

  if (!exchange) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-serif text-3xl font-bold text-navy mb-4">
            Exchange Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The exchange you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/exchanges">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Exchanges
            </Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  // Get related exchanges (excluding current)
  const relatedExchanges = exchanges
    .filter((e) => e.id !== exchange.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Back link */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/exchanges"
            className="inline-flex items-center text-sm text-gray-600 hover:text-navy transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Exchanges
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-start gap-8"
          >
            {/* Exchange logo placeholder */}
            <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shrink-0">
              {/* <span className="text-gold font-serif font-bold text-4xl">
                {exchange.name.charAt(0)}
              </span> */}
              <Image
                src={exchange.image}
                alt={exchange.name}
                width={150}
                height={150}
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="font-serif text-4xl md:text-5xl font-bold">
                  {exchange.name}
                </h1>
                <Badge className={getActivityColor(exchange.activityLevel)}>
                  {exchange.activityLevel} Activity
                </Badge>
              </div>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl">
                {exchange.shortDescription}
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gold" />
                  <span>Founded {exchange.founded}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gold" />
                  <span>
                    {exchange.participants.toLocaleString()} Participants
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-gold" />
                  <span>{exchange.currentPerformanceRange} Monthly</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Story */}
            <div className="lg:col-span-2 space-y-8">
              {/* Story */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-gold" />
                      The Story
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-gray max-w-none">
                      {exchange.story.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="text-gray-600 mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Growth & Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-gold" />
                      Growth & Role in Crypto
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {exchange.name} became known for:
                    </p>
                    <ul className="space-y-3">
                      {exchange.growthAndRole.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Position in Ecosystem */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="bg-navy text-white">
                  <CardHeader>
                    <CardTitle className="font-serif text-white">
                      Position in the Ecosystem
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-lg">
                      {exchange.positionInEcosystem}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right Column - Participation Info */}
            <div className="space-y-6">
              {/* Participation Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="border-gold/50 sticky top-24">
                  <CardHeader className="bg-linear-to-r from-navy to-navy-light text-white rounded-t-lg">
                    <CardTitle className="font-serif text-white">
                      Participation Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    {/* Investment Range */}
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Investment Range
                      </p>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-gold" />
                        <span className="text-xl font-semibold text-navy">
                          ${exchange.minInvestment.toLocaleString()} - $
                          {exchange.maxInvestment.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Current Performance */}
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Current Monthly Performance
                      </p>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-500" />
                        <span className="text-2xl font-bold text-gold">
                          {exchange.currentPerformanceRange}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        *Rates fluctuate monthly based on market activity
                      </p>
                    </div>

                    {/* Participants */}
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Active Participants
                      </p>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-500" />
                        <span className="text-xl font-semibold text-navy">
                          {exchange.participants.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Duration */}
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Participation Duration
                      </p>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-navy" />
                        <span className="text-xl font-semibold text-navy">
                          12 Months
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t space-y-3">
                      <Link href="https://user.provenexchange.com/register" target="_blank" className="block">
                        <Button className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold">
                          Start Participating
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <p className="text-xs text-center text-gray-500">
                        Capital returns after 12 months. Early withdrawal fees
                        apply.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Exchanges */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold text-navy mb-8">
            Explore Other Exchanges
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedExchanges.map((related) => (
              <Link key={related.id} href={`/exchanges/${related.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all hover:border-gold/50 cursor-pointer group">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center">
                        <span className="text-navy font-serif font-bold">
                          {related.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold group-hover:text-gold transition-colors">
                          {related.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          Founded {related.founded}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                      {related.shortDescription}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gold font-medium">
                        {related.currentPerformanceRange}
                      </span>
                      <Badge
                        className={getActivityColor(related.activityLevel)}
                      >
                        {related.activityLevel}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
