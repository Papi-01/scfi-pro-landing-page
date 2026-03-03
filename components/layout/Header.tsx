"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const navItems = [
  { href: "/exchanges", label: "Exchanges" },
  { href: "/about", label: "About PROVEN" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/security", label: "Security" },
];

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center gap-2">
            <div className="w-15 h-15 bg-white rounded-lg flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="proven logo"
                width={200}
                height={200}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-navy transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="hidden md:flex items-center">
              {isSearchOpen ? (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="relative"
                >
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="pr-8 h-9"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                  <X
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer"
                    onClick={() => setIsSearchOpen(false)}
                  />
                </motion.div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-gray-600"
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Auth buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <Link href="https://user.provenexchange.com/login" target="_blank">
                <Button variant="ghost" size="sm">
                  Sign in
                </Button>
              </Link>
              <Link href="https://user.provenexchange.com/register" target="_blank">
                <Button
                  size="sm"
                  className="bg-navy hover:bg-navy-light text-white"
                >
                  Sign up
                </Button>
              </Link>
            </div>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="font-serif text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-4">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="pl-9"
                    />
                  </div>

                  {/* Mobile Nav Items */}
                  <nav className="flex flex-col gap-2 mt-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="px-3 py-2 text-gray-600 hover:text-navy hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile Auth */}
                  <div className="flex flex-col gap-2 mt-6 pt-6 border-t">
                    <Link href="/auth/login" className="w-full">
                      <Button variant="outline" className="w-full">
                        Sign in
                      </Button>
                    </Link>
                    <Link href="/auth/register" className="w-full">
                      <Button className="w-full bg-navy hover:bg-navy-light text-white">
                        Sign up
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
