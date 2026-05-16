"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import { MenuItem } from "@/data/menu";

interface FoodCardProps {
  item: MenuItem;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-[3rem] overflow-hidden p-4 relative group border-2 border-brand-green/5 shadow-premium transition-all duration-500"
    >
      <div className="relative h-72 w-full rounded-[2.5rem] overflow-hidden mb-6">
        <Image
          src={item.image || "/hero.png"}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-5 right-5 bg-white/95 px-4 py-1.5 rounded-2xl flex items-center gap-1.5 backdrop-blur-md shadow-lg border border-brand-green/5">
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <span className="text-brand-black text-sm font-black tracking-tight">{item.rating}</span>
        </div>
        
        {item.featured && (
          <div className="absolute top-5 left-5 bg-brand-green text-white px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-brand-green/30">
            Chef's Pick
          </div>
        )}

        <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-brand-green shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
            <ArrowUpRight size={32} />
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 text-center">
        <div className="flex flex-col items-center gap-1 mb-3">
          <span className="text-brand-green text-[10px] font-black uppercase tracking-[0.3em] opacity-60">
            {item.category}
          </span>
          <h3 className="text-brand-black font-black text-2xl leading-tight group-hover:text-brand-green transition-colors duration-300">
            {item.name}
          </h3>
          {item.amharicName && (
            <span className="text-brand-black/30 font-bold text-sm tracking-wide">
              {item.amharicName}
            </span>
          )}
        </div>
        
        <p className="text-brand-black/40 text-sm line-clamp-2 mb-6 h-10 font-medium leading-relaxed px-2">
          {item.description}
        </p>

        <div className="flex items-center justify-center pt-2">
          <div className="bg-brand-gray/30 px-8 py-3 rounded-2xl border border-brand-green/5 group-hover:bg-brand-orange/10 group-hover:border-brand-orange/20 transition-all duration-300">
            <span className="text-brand-orange font-black text-2xl tracking-tighter">
              {item.price} <span className="text-sm font-bold uppercase tracking-widest text-brand-orange/50">Br</span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
