"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionTitle } from "@/components/home/section-wrapper";
import Image from "next/image";
import { Church, Users, Globe, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Members" },
  { icon: Church, value: "10+", label: "Years of Service" },
  { icon: Globe, value: "5+", label: "Community Outreach Programs" },
  { icon: Heart, value: "20+", label: "Active Ministries" },
];

export function AboutStory() {
  return (
    <SectionWrapper className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-[#28166F]/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#28166F]/20 to-[#DA251D]/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="relative h-24 w-24 mx-auto rounded-full bg-white/90 p-1 shadow-lg mb-4">
                    <Image
                      src="/king-of-glory-logo.png"
                      alt="RCCG King of Glory Logo"
                      fill
                      sizes="96px"
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[#28166F] font-bold text-lg">RCCG King of Glory</p>
                  <p className="text-gray-500 text-sm mt-1">Est. 2015</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#DA251D]/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#28166F]/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-[#DA251D] font-semibold text-sm uppercase tracking-wider mb-2">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#28166F] mb-6 leading-tight">
              Growing in Grace,
              <span className="text-[#DA251D]"> Radiating His Glory</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                RCCG King of Glory Parish, Zonal Headquarters is a vibrant parish of The Redeemed
                Christian Church of God, established with a divine mandate to raise people who
                are thoroughly equipped in the Word of God, empowered by the Holy Spirit, and
                committed to living fruitful, purpose-driven lives for the advancement of
                God&apos;s Kingdom.
              </p>
              <p>
                Rooted in the foundational pillars of RCCG — prayer, the Word, holiness, and
                evangelism — King of Glory Parish, Zonal Headquarters exists to equip believers to
                grow in their faith, live victoriously, and become bold ambassadors of Christ
                in every sphere of influence. We are a people devoted to God, committed to
                pursuing His presence and demonstrating His love.
              </p>
              <p>
                From our humble beginnings, RCCG King of Glory has grown into a vibrant,
                Spirit-filled community of believers. We have witnessed countless lives
                transformed through the power of prayer, dynamic worship, and the faithful
                preaching of the Gospel of our Lord Jesus Christ.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-[#E8E0F0] border border-[#28166F]/5"
            >
              <stat.icon className="size-8 text-[#DA251D] mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-bold text-[#28166F]">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
