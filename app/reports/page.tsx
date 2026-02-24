"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  BarChart3,
  // ArrowRight,
} from "lucide-react";

const monthlyReports = [
  {
    month: "January 2026",
    status: "latest",
    highlights: {
      totalDividendsPaid: "$2.4M",
      activeUsers: "12,450",
      avgReturn: "8.2%",
    },
  },
  {
    month: "December 2025",
    status: "available",
    highlights: {
      totalDividendsPaid: "$1.8M",
      activeUsers: "8,200",
      avgReturn: "7.8%",
    },
  },
  {
    month: "November 2025",
    status: "available",
    highlights: {
      totalDividendsPaid: "$1.2M",
      activeUsers: "5,100",
      avgReturn: "7.5%",
    },
  },
];

const reportTypes = [
  {
    icon: BarChart3,
    title: "Monthly Performance",
    description: "Detailed breakdown of dividends paid, exchange performance, and user activity for each month.",
    frequency: "Monthly",
  },
  {
    icon: TrendingUp,
    title: "Exchange Analytics",
    description: "In-depth analysis of each exchange's performance, volume trends, and dividend calculations.",
    frequency: "Monthly",
  },
  {
    icon: Users,
    title: "Community Updates",
    description: "Growth metrics, user milestones, and community engagement statistics.",
    frequency: "Monthly",
  },
  {
    icon: DollarSign,
    title: "Financial Summary",
    description: "Overview of platform financial health, fee distributions, and operational transparency.",
    frequency: "Quarterly",
  },
];

const keyMetrics = [
  { label: "Total Dividends Distributed", value: "$5.4M+", description: "Since launch" },
  { label: "Active Participants", value: "12,450", description: "As of Jan 2026" },
  { label: "Exchange Partners", value: "15+", description: "Major exchanges" },
  { label: "Countries Reached", value: "40+", description: "Global presence" },
];

export default function ReportsPage() {
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
            <Badge className="bg-gold/20 text-gold mb-4">Documentation</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Reports & Analytics
            </h1>
            <p className="text-gray-300 text-lg">
              Access our monthly performance reports, analytics, and transparent documentation of platform activity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-serif text-3xl md:text-4xl font-bold text-navy">{metric.value}</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{metric.label}</p>
                <p className="text-xs text-gray-500">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Reports */}
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
              Monthly Performance Reports
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every month, we publish a detailed report of dividends paid, user activity, and exchange performance.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {monthlyReports.map((report, index) => (
              <motion.div
                key={report.month}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={report.status === "latest" ? "ring-2 ring-gold" : ""}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center">
                          <FileText className="h-6 w-6 text-gold" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-serif font-semibold text-navy">{report.month}</h3>
                            {report.status === "latest" && (
                              <Badge className="bg-gold text-navy text-xs">Latest</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">Monthly Performance Report</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-sm font-semibold text-navy">{report.highlights.totalDividendsPaid}</p>
                            <p className="text-xs text-gray-500">Dividends</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-navy">{report.highlights.activeUsers}</p>
                            <p className="text-xs text-gray-500">Users</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-navy">{report.highlights.avgReturn}</p>
                            <p className="text-xs text-gray-500">Avg Return</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Types */}
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
              What We Report
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our reporting covers all aspects of platform performance to ensure complete transparency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reportTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <type.icon className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-serif font-semibold text-navy">{type.title}</h3>
                          <Badge variant="outline" className="text-xs">{type.frequency}</Badge>
                        </div>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </div>
                    </div>
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
            <Calendar className="h-12 w-12 text-gold mx-auto mb-4" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              Reports are published at the beginning of each month. Join PROVEN to receive notifications when new reports are available.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
