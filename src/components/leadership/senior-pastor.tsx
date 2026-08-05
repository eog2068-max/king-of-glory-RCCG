"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/home/section-wrapper";
import Image from "next/image";
import { BookOpen, Heart, Quote } from "lucide-react";

export function SeniorPastor() {
  return (
    <SectionWrapper className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Photo Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Photo placeholder */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-[#28166F]/15 bg-gradient-to-br from-[#E8E0F0] to-[#E1BEE7]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 rounded-full bg-[#28166F]/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-bold text-[#28166F]">SP</span>
                    </div>
                    <p className="text-sm text-gray-400">Photo Placeholder</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border-2 border-[#DA251D]/20 -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#DA251D]/10 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <p className="text-[#DA251D] font-semibold text-sm uppercase tracking-wider mb-2">
              RCCG King of Glory Pastor
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#28166F] mb-2 leading-tight">
              Pastor [Name]
            </h2>
            <p className="text-gray-500 text-base mb-6">
              Zonal Pastor, King of Glory Parish, Zonal Headquarters
            </p>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Pastor [Name] is the Zonal Pastor of The Redeemed Christian Church of God,
                King of Glory Parish, Zonal Headquarters, Abuja. Called into ministry under the
                RCCG umbrella founded by Pa Josiah Akindayomi and led by the General
                Overseer, Pastor E.A. Adeboye, Pastor [Name] has served the Lord
                faithfully for years, demonstrating an unwavering commitment to the
                preaching of the Gospel, the Word of God, and the transformation of
                lives through the power of the Holy Spirit.
              </p>
              <p>
                With a deep passion for the Word of God and a heart for the people,
                Pastor [Name] leads the King of Glory family with wisdom, love, and
                a pastoral grace that has positioned the church as a place of
                spiritual growth and purpose. Under [his/her] leadership,
                the church has grown into a vibrant, Spirit-filled congregation of
                believers impacting their community and beyond.
              </p>
              <p>
                Pastor [Name] holds a [Degree/Qualification] from [Institution] and is
                happily married to [Spouse&apos;s Name], and they are blessed with
                [number] children. Together, they serve as a testament to God&apos;s
                faithfulness in the family and in ministry.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 rounded-2xl bg-[#E8E0F0] border-l-4 border-[#DA251D]">
              <Quote className="size-6 text-[#DA251D] mb-2" />
              <p className="text-[#28166F] font-medium italic leading-relaxed">
                &ldquo;The Lord is my strength and my shield; my heart trusted in Him,
                and I am helped. Jesus Christ the same yesterday, and today, and
                forever.&rdquo; — Hebrews 13:8
              </p>
              <p className="text-sm text-gray-500 mt-2">— Pastor [Name]</p>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2">
                <BookOpen className="size-5 text-[#28166F]" />
                <span className="text-sm text-gray-600"><strong className="text-[#28166F]">20+</strong> Years in Ministry</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="size-5 text-[#DA251D]" />
                <span className="text-sm text-gray-600"><strong className="text-[#28166F]">500+</strong> Lives Impacted</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
