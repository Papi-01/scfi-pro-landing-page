"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Youtube, Instagram, Send } from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/transparency", label: "Transparency" },
    { href: "/reports", label: "Reports" },
  ],
  learn: [
    { href: "/how-it-works", label: "How it works" },
    { href: "/exchange-economics", label: "Exchange economics" },
    { href: "/guides", label: "Guides" },
    { href: "/blog", label: "Blog" },
  ],
  support: [
    { href: "/faq", label: "FAQ" },
    { href: "/security", label: "Security" },
    { href: "/contact", label: "Contact" },
    { href: "/help", label: "Help Center" },
  ],
};

const socialLinks = [
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Youtube, label: "YouTube" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Send, label: "Telegram" },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-navy text-white"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and tagline */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-navy font-serif font-bold text-xl">S</span>
              </div>
              <span className="font-serif font-bold text-xl text-white">
                PROVEN
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Your gateway to exchange ownership. Own shares of the world&apos;s leading crypto exchanges and receive dividend-style returns.
            </p>
            <p className="text-gold text-sm font-medium">
              PROVEN...your gateway to exchange ownership.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Learn</h4>
            <ul className="space-y-3">
              {footerLinks.learn.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social and copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PROVEN. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gold hover:text-navy flex items-center justify-center transition-all"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
