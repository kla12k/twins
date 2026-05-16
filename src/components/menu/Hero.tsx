"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Phone, MessageCircle } from "lucide-react";
import { restaurantInfo } from "@/data/menu";

export const Hero = () => {
  return (
    <div className="relative h-[450px] w-full rounded-[4rem] overflow-hidden mb-16 shadow-2xl group">
      {/* Dynamic Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7]/40 to-transparent z-10" />
      
      <img
        src="/hero.png"
        alt="Twins Gourmet Experience"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] ease-linear group-hover:scale-110"
      />
      
      <div className="relative z-20 h-full flex flex-col justify-center px-12 md:px-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-6 bg-brand-green/10 w-fit px-4 py-2 rounded-2xl border border-brand-green/20"
        >
          <Star className="text-brand-green fill-brand-green" size={16} />
          <span className="text-brand-green text-xs font-black uppercase tracking-[0.2em]">Top Rated in Addis Ababa</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-brand-black text-5xl md:text-7xl font-black mb-6 leading-[0.95] tracking-tight"
        >
          Gourmet Burgers <br />
          <span className="text-brand-green">& Exotic Juices.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-brand-black/60 text-lg md:text-xl font-medium mb-10 max-w-lg leading-relaxed"
        >
          Discover the perfect fusion of fresh local ingredients and premium culinary craft.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <button className="bg-brand-green text-white px-10 py-5 rounded-[2rem] font-black text-xl flex items-center gap-3 shadow-xl shadow-brand-green/20 hover:scale-105 transition-transform">
            View Menu
            <ArrowRight size={24} />
          </button>
          
          <a 
            href={`tel:${restaurantInfo.phone}`}
            className="bg-white/80 backdrop-blur-md text-brand-black px-10 py-5 rounded-[2rem] font-black text-xl flex items-center gap-3 shadow-lg border border-brand-green/10 hover:bg-white transition-all"
          >
            <Phone size={24} />
            Order Now
          </a>
        </motion.div>
      </div>

      {/* Floating Info Card */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute top-12 right-12 z-20 hidden lg:block"
      >
        <div className="bg-white/90 backdrop-blur-2xl p-8 rounded-[3rem] shadow-2xl border border-brand-green/10 max-w-[280px]">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-brand-orange rounded-2xl flex items-center justify-center text-white shadow-lg">
              <MessageCircle size={28} />
            </div>
            <div>
              <p className="text-brand-black font-black text-lg">Fast Delivery</p>
              <p className="text-brand-black/40 text-[10px] font-bold uppercase tracking-widest">To your doorstep</p>
            </div>
          </div>
          <p className="text-brand-black/60 text-sm font-medium leading-relaxed">
            Order directly via WhatsApp for lightning-fast service and real-time updates.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
