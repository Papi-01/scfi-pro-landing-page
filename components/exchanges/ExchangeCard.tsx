"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Users, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Exchange } from "@/lib/data/exchanges";

interface ExchangeCardProps {
  exchange: Exchange;
  index: number;
}

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

export function ExchangeCard({ exchange, index }: ExchangeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <Link href={`/exchanges/${exchange.slug}`}>
        <Card className="h-full hover:shadow-lg transition-all hover:border-gold/50 cursor-pointer group">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                {/* Exchange logo placeholder */}
                <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center">
                  <span className="text-navy font-serif font-bold text-lg">
                    {exchange.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <CardTitle className="font-serif text-lg group-hover:text-gold transition-colors">
                    {exchange.name}
                  </CardTitle>
                  <p className="text-xs text-gray-500">Founded {exchange.founded}</p>
                </div>
              </div>
              <Badge className={getActivityColor(exchange.activityLevel)}>
                {exchange.activityLevel}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {exchange.shortDescription}
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Performance
                </span>
                <span className="font-semibold text-gold">{exchange.currentPerformanceRange}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Participants
                </span>
                <span className="font-medium">{exchange.participants.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500">
                ${exchange.minInvestment.toLocaleString()} - ${exchange.maxInvestment.toLocaleString()}
              </p>
              <span className="text-gold text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
