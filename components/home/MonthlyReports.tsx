"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample exchange activity data
const exchangeReports = [
  {
    name: "Binance",
    month: "January 2026",
    activityLevel: "High",
    performanceRange: "28-32%",
    participants: "12,450",
    status: "active",
  },
  {
    name: "Coinbase",
    month: "January 2026",
    activityLevel: "High",
    performanceRange: "25-29%",
    participants: "8,320",
    status: "active",
  },
  {
    name: "Crypto.com",
    month: "January 2026",
    activityLevel: "Medium",
    performanceRange: "22-26%",
    participants: "6,180",
    status: "active",
  },
  {
    name: "Kraken",
    month: "January 2026",
    activityLevel: "High",
    performanceRange: "24-28%",
    participants: "5,940",
    status: "active",
  },
  {
    name: "OKX",
    month: "January 2026",
    activityLevel: "High",
    performanceRange: "26-30%",
    participants: "7,820",
    status: "active",
  },
  {
    name: "Bybit",
    month: "January 2026",
    activityLevel: "Very High",
    performanceRange: "30-34%",
    participants: "9,150",
    status: "active",
  },
];

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

export function MonthlyReports() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-wider">Transparency</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
            Monthly Exchange Activity Reports
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dividend percentages are updated monthly based on exchange volume and market activity. This information is shared publicly at the beginning of each month.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exchangeReports.map((report, index) => (
            <motion.div
              key={report.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-gray-100">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-serif text-lg">{report.name}</CardTitle>
                    <Badge className={getActivityColor(report.activityLevel)}>
                      {report.activityLevel}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Month
                      </span>
                      <span className="font-medium">{report.month}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Performance Range
                      </span>
                      <span className="font-medium text-gold">{report.performanceRange}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Participants
                      </span>
                      <span className="font-medium">{report.participants}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          * Performance ranges are estimates based on market activity. Actual results may vary. Updated monthly.
        </motion.p>
      </div>
    </section>
  );
}
