"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Eye, EyeOff, ArrowRight, Mail, Lock, Gift, CheckCircle } from "lucide-react";

const benefits = [
  "Access 15+ major exchange plans",
  "Receive monthly dividend payouts in USDT",
  "Transparent monthly performance reports",
  "24/7 portfolio monitoring",
];

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Register:", formData);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-5xl relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center">
                <span className="text-gold font-serif font-bold text-2xl">S</span>
              </div>
              <span className="font-serif font-bold text-2xl text-navy">PROVEN</span>
            </Link>

            <h1 className="font-serif text-4xl font-bold text-navy mb-4">
              Start Your Journey to<br />
              <span className="text-gradient-gold">Exchange Ownership</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Join thousands of members who are earning dividend-style returns from the world&apos;s leading cryptocurrency exchanges.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-12 bg-white rounded-xl p-6 border shadow-sm">
              <p className="text-gray-600 italic mb-4">
                &ldquo;It feels like the stock mindset but in crypto. The monthly review post is what convinced me.&rdquo;
              </p>
              <p className="text-sm text-gray-500">— PROVEN Member</p>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Mobile logo */}
            <Link href="/" className="flex items-center justify-center gap-2 mb-8 lg:hidden">
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center">
                <span className="text-gold font-serif font-bold text-2xl">S</span>
              </div>
              <span className="font-serif font-bold text-2xl text-navy">PROVEN</span>
            </Link>

            <Card className="shadow-xl border-0">
              <CardHeader className="text-center pb-2">
                <CardTitle className="font-serif text-2xl">Create Account</CardTitle>
                <CardDescription>
                  Start participating in exchange ownership today
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 h-12"
                        required
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                        className="pl-10 pr-10 h-12"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="pl-10 pr-10 h-12"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Referral Code */}
                  <div className="space-y-2">
                    <label htmlFor="referralCode" className="text-sm font-medium text-gray-700">
                      Referral Code <span className="text-gray-400">(optional)</span>
                    </label>
                    <div className="relative">
                      <Gift className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="referralCode"
                        name="referralCode"
                        type="text"
                        placeholder="Enter referral code"
                        value={formData.referralCode}
                        onChange={handleChange}
                        className="pl-10 h-12"
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      Have a referral code? Enter it to receive bonus rewards.
                    </p>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full h-12 bg-navy hover:bg-navy-light text-white font-semibold"
                  >
                    Create Account
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                {/* Login link */}
                <p className="text-center text-sm text-gray-600 mt-6">
                  Already have an account?{" "}
                  <Link href="/auth/login" className="text-gold hover:text-gold-dark font-semibold">
                    Sign In
                  </Link>
                </p>
              </CardContent>
            </Card>

            {/* Footer */}
            <p className="text-center text-xs text-gray-500 mt-6">
              By creating an account, you agree to our{" "}
              <Link href="#" className="text-navy hover:underline">Terms of Service</Link>
              {" "}and{" "}
              <Link href="#" className="text-navy hover:underline">Privacy Policy</Link>
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
