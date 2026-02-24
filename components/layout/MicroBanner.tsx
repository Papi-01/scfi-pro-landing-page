"use client";

import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export function MicroBanner() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-navy text-white py-2 px-4 text-center text-sm"
    >
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Gift className="h-4 w-4 text-gold" />
        <span className="text-gray-300">
          Receive a <span className="text-gold font-semibold">10% participation reward</span> when invited members join PROVEN.
        </span>
      </div>
    </motion.div>
  );
}
