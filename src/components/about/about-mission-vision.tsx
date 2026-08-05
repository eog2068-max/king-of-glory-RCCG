"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/home/section-wrapper";
import { Target, Eye, ArrowRight } from "lucide-react";

export function AboutMissionVision() {
  return (
    <SectionWrapper className="py-16 md:py-24 bg-[#E8E0F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-3xl p-8 md:p-10 shadow-lg shadow-[#28166F]/5 border border-[#28166F]/5 overflow-hidden group"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#DA251D]/5 to-transparent rounded-bl-[80px]" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-[#28166F] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="size-7 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#28166F] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To preach the Word of God and to make heaven. To prepare people for the
                return of our Lord Jesus Christ, and to take the Gospel to the ends of the
                earth. Following the vision of The Redeemed Christian Church of God, we
                exist to equip every believer to live a life of holiness, service, and
                purpose, and to plant churches within our community and beyond.
              </p>
              <ul className="space-y-3">
                {[
                  "Preach the undiluted Word of God",
                  "Raise godly and Spirit-filled believers",
                  "Demonstrate God&apos;s love through service and fellowship",
                  "Impact our community and nation for Christ",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <ArrowRight className="size-4 text-[#DA251D] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative bg-gradient-to-br from-[#28166F] to-[#0D0B1A] rounded-3xl p-8 md:p-10 shadow-xl overflow-hidden group"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-[100px]" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#DA251D]/10 rounded-tr-[80px]" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="size-7 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-purple-200/80 leading-relaxed mb-6">
                To be a leading parish of The Redeemed Christian Church of God,
                renowned for spiritual depth, holiness, love, and transformative
                community impact. We envision a church where every member
                discovers their purpose, develops their spiritual gifts, and deploys them
                for the advancement of God&apos;s Kingdom. RCCG King of Glory Parish,
                Zonal Headquarters, shall be a place where God&apos;s presence is tangible,
                lives are transformed, and families are built on the solid foundation
                of God&apos;s Word.
              </p>
              <ul className="space-y-3">
                {[
                  "A parish of spiritual depth and excellence",
                  "A community of holy living and fervent prayer",
                  "A place where purposes are discovered and fulfilled",
                  "A centre for impact and kingdom advancement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-purple-100/80">
                    <ArrowRight className="size-4 text-[#DA251D] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
