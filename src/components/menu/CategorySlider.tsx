"use client";

import React from "react";
import { motion } from "framer-motion";
import { categoriesInfo } from "@/data/menu";

interface CategorySliderProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const CategorySlider: React.FC<CategorySliderProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar py-4 px-2 max-w-5xl mx-auto justify-start md:justify-center">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setActiveCategory("All")}
        className={`px-10 py-4 rounded-[1.5rem] whitespace-nowrap text-sm font-black transition-all duration-500 border-2 tracking-tight ${
          activeCategory === "All"
            ? "bg-brand-green text-white border-brand-green shadow-xl shadow-brand-green/20"
            : "bg-white text-brand-black/50 border-brand-green/5 hover:border-brand-green/20 hover:text-brand-green"
        }`}
      >
        All
      </motion.button>
      
      {categoriesInfo.map((category) => (
        <motion.button
          key={category.id}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveCategory(category.id)}
          className={`px-10 py-4 rounded-[1.5rem] whitespace-nowrap text-sm font-black transition-all duration-500 border-2 tracking-tight ${
            activeCategory === category.id
              ? "bg-brand-green text-white border-brand-green shadow-xl shadow-brand-green/20"
              : "bg-white text-brand-black/50 border-brand-green/5 hover:border-brand-green/20 hover:text-brand-green"
          }`}
        >
          {category.id}
        </motion.button>
      ))}
    </div>
  );
};
