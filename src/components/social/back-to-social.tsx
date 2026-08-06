"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function BackToSocial() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="mb-2"
    >
      <Link
        href="/social"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#28166F] hover:text-[#0D0B1A] transition-colors"
      >
        <ArrowLeft className="size-4" />
        Back to Konnect2Glory
      </Link>
    </motion.div>
  );
}
