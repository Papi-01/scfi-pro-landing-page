"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  Globe,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useRouter } from "next/navigation";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    value: "support@proven.com",
    description: "For general inquiries and support",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+971 4 XXX XXXX",
    description: "Mon-Fri, 9AM-6PM UTC",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    value: "Available 24/7",
    description: "Get instant support through our chat",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "Dubai, UAE",
    description: "PROVEN Global HQ",
  },
];

const offices = [
  { city: "Dubai", country: "UAE", type: "Global Headquarters", flag: "🇦🇪" },
  {
    city: "Singapore",
    country: "Singapore",
    type: "Asia Pacific Office",
    flag: "🇸🇬",
  },
  { city: "London", country: "UK", type: "Europe Office", flag: "🇬🇧" },
];

const socialLinks = [
  { icon: Twitter, label: "Twitter", handle: "@proven" },
  { icon: Linkedin, label: "LinkedIn", handle: "PROVEN" },
  { icon: Instagram, label: "Instagram", handle: "@proven" },
];

export default function ContactPage() {
  const router = useRouter();

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
            <Badge className="bg-gold/20 text-gold mb-4">Get in Touch</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-gray-300 text-lg">
              Have questions about PROVEN? Our team is here to help. Reach out
              through any of our channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <method.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-semibold text-navy text-sm">
                  {method.title}
                </h3>
                <p className="text-navy font-medium">{method.value}</p>
                <p className="text-xs text-gray-500">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-navy">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-30"
                      />
                    </div>
                    <Button className="w-full bg-gold text-navy hover:bg-gold/90">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Response Time */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-navy mb-1">
                        Quick Response
                      </h3>
                      <p className="text-sm text-gray-600">
                        We typically respond to all inquiries within 24 hours.
                        For urgent matters, please use our live chat for
                        immediate assistance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Global Offices */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-navy flex items-center gap-2">
                    <Globe className="h-5 w-5 text-gold" />
                    Global Offices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {offices.map((office) => (
                      <li key={office.city} className="flex items-center gap-3">
                        <span className="text-2xl">{office.flag}</span>
                        <div>
                          <p className="font-medium text-navy">
                            {office.city}, {office.country}
                          </p>
                          <p className="text-xs text-gray-500">{office.type}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-navy">
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href="#"
                        className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center hover:bg-gold transition-colors group"
                      >
                        <social.icon className="h-5 w-5 text-white group-hover:text-navy" />
                      </a>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Stay updated with the latest news, updates, and community
                    discussions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-12 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl font-bold mb-4">
              Looking for Quick Answers?
            </h2>
            <p className="text-gray-400 mb-6">
              Check out our FAQ section for answers to commonly asked questions.
            </p>
            <Button
              onClick={() => router.push("/faq")}
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-navy"
            >
              Visit FAQ
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
