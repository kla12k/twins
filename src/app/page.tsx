"use client";

import React, { useState, useMemo } from "react";
import { CategorySlider } from "@/components/menu/CategorySlider";
import { FoodCard } from "@/components/menu/FoodCard";
import { Hero } from "@/components/menu/Hero";
import { menuItems, MenuItem, restaurantInfo, categoriesInfo, CategoryInfo } from "@/data/menu";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Star, Clock, Info, MessageCircle, Phone, MapPin, ChevronRight, Utensils } from "lucide-react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const currentCategoryInfo = useMemo(() => {
    return categoriesInfo.find(c => c.id === activeCategory);
  }, [activeCategory]);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.amharicName && item.amharicName.includes(searchQuery));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      {/* Premium Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl px-4 md:px-8 py-4 flex items-center justify-between border-b border-brand-green/10 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-brand-orange rounded-2xl flex items-center justify-center shadow-lg shadow-brand-green/20">
            <span className="text-white font-black text-2xl">T</span>
          </div>
          <div>
            <h1 className="text-brand-black font-black text-xl leading-tight tracking-tight">Twins</h1>
            <p className="text-brand-green text-[10px] font-black uppercase tracking-[0.2em]">Digital Menu</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex flex-col items-end mr-4">
            <span className="text-[10px] font-black text-brand-green uppercase tracking-widest">Order Hotline</span>
            <span className="text-brand-black font-black text-lg tracking-tighter">{restaurantInfo.phone}</span>
          </div>
          <a href={`tel:${restaurantInfo.phone}`} className="w-12 h-12 bg-brand-orange text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand-orange/20 hover:scale-110 transition-transform">
            <Phone size={22} />
          </a>
          {/* <a href={`https://wa.me/${restaurantInfo.whatsapp}`} className="w-12 h-12 bg-brand-green text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand-green/20 hover:scale-110 transition-transform">
            <MessageCircle size={22} />
          </a> */}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        {activeCategory === "All" && <Hero />}

        {/* Sticky Search & Categories */}
        <div className="sticky top-20 z-40 bg-[#FDFBF7]/95 backdrop-blur-xl py-8 -mx-4 px-4 border-b border-brand-green/5">
          <div className="relative w-full max-w-3xl mx-auto mb-8">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-brand-green/30" size={28} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, burgers, juices..."
              className="w-full bg-white border-2 border-brand-green/10 rounded-[2.5rem] py-6 pl-20 pr-8 text-brand-black font-semibold text-xl focus:outline-none focus:border-brand-green transition-all shadow-2xl shadow-brand-green/5"
            />
          </div>
          <CategorySlider
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            {activeCategory === "All" ? (
              <motion.div
                key="all-categories"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {categoriesInfo.map((cat) => (
                  <CategoryCard key={cat.id} category={cat} onClick={() => setActiveCategory(cat.id)} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="category-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {/* Category Banner */}
                {currentCategoryInfo && (
                  <div className="relative h-[300px] w-full rounded-[3.5rem] overflow-hidden mb-12 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                    <img src={currentCategoryInfo.image} className="w-full h-full object-cover" alt="" />
                    <div className="absolute bottom-10 left-10 z-20">
                      <h2 className="text-white text-5xl font-black mb-2 tracking-tight">{currentCategoryInfo.name}</h2>
                      <p className="text-white/60 font-bold uppercase tracking-widest text-xs">{currentCategoryInfo.description}</p>
                    </div>
                  </div>
                )}

                {/* Featured Items in Category */}
                <div className="mb-16">
                  <h3 className="text-2xl font-black text-brand-black mb-8 px-4 flex items-center gap-3">
                    <Star className="text-brand-orange fill-brand-orange" size={24} />
                    Chef's Specials
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredItems.filter(i => i.image).map((item) => (
                      <div key={item.id} onClick={() => setSelectedItem(item)} className="cursor-pointer">
                        <FoodCard item={item} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fancy List for All Items in Category */}
                <div className="bg-white rounded-[4rem] p-10 md:p-16 shadow-premium border border-brand-green/5">
                  <div className="flex items-center gap-4 mb-12 pb-8 border-b border-brand-green/5">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green">
                      <Utensils size={24} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-brand-black tracking-tight">Full {activeCategory} Menu</h3>
                      <p className="text-brand-black/40 text-xs font-bold uppercase tracking-widest">Premium curated selection</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                    {filteredItems.map((item) => (
                      <FancyListItem key={item.id} item={item} onClick={() => setSelectedItem(item)} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer & Modal (Same as before but with better scaling) */}
      <footer className="bg-white border-t border-brand-green/10 py-20 px-6 mt-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="max-w-sm">
            <h2 className="text-3xl font-black text-brand-black mb-4">Twins Juice & Burger</h2>
            <p className="text-brand-black/40 font-medium leading-relaxed">{restaurantInfo.about}</p>
          </div>
          <div className="bg-brand-gray/20 p-10 rounded-[3rem] border border-brand-green/5 min-w-[300px]">
            <span className="text-brand-green text-xs font-black uppercase tracking-widest block mb-2">Order Now</span>
            <a href={`tel:${restaurantInfo.phone}`} className="text-3xl font-black text-brand-black">{restaurantInfo.phone}</a>
            <p className="text-brand-black/40 text-[10px] font-bold mt-4">Delivery available throughout Addis Ababa</p>
          </div>
        </div>
      </footer>

      {/* Food Details Modal */}
      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-brand-black/60 backdrop-blur-3xl z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl bg-white rounded-[4rem] z-[101] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-10 right-10 z-10 w-14 h-14 bg-white/90 rounded-2xl flex items-center justify-center text-brand-black shadow-xl"
              >
                <X size={32} />
              </button>

              <div className="relative w-full md:w-1/2 h-80 md:h-auto">
                <img
                  src={selectedItem.image || categoriesInfo.find(c => c.id === selectedItem.category)?.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 p-12 md:p-16 flex flex-col justify-center">
                <span className="text-brand-green text-xs font-black uppercase tracking-[0.3em] mb-4">
                  {selectedItem.category}
                </span>
                <h2 className="text-5xl font-black text-brand-black mb-2 tracking-tight">
                  {selectedItem.name}
                </h2>
                {selectedItem.amharicName && (
                  <p className="text-brand-black/30 text-2xl font-bold mb-6">{selectedItem.amharicName}</p>
                )}
                <p className="text-brand-orange text-4xl font-black mb-8">{selectedItem.price} Br</p>
                <p className="text-brand-black/60 text-lg leading-relaxed mb-12">{selectedItem.description}</p>

                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="bg-brand-green text-white py-6 rounded-3xl font-black text-2xl flex items-center justify-center gap-4 shadow-xl shadow-brand-green/20 hover:scale-105 transition-transform"
                >
                  <Phone size={28} />
                  Order Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

const CategoryCard = ({ category, onClick }: { category: CategoryInfo; onClick: () => void }) => (
  <motion.div
    whileHover={{ y: -10 }}
    onClick={onClick}
    className="relative h-[400px] rounded-[3.5rem] overflow-hidden cursor-pointer group shadow-premium border border-brand-green/5"
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
    <img src={category.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
    <div className="absolute bottom-10 left-10 z-20">
      <h3 className="text-white text-3xl font-black mb-2 tracking-tight">{category.name}</h3>
      <p className="text-white/60 font-bold uppercase tracking-widest text-[10px] mb-4">{category.description}</p>
      <div className="flex items-center gap-2 text-brand-orange font-black text-sm">
        Explore Category <ChevronRight size={18} />
      </div>
    </div>
  </motion.div>
);

const FancyListItem = ({ item, onClick }: { item: MenuItem; onClick: () => void }) => (
  <motion.div
    whileHover={{ x: 10 }}
    onClick={onClick}
    className="group flex justify-between items-start gap-4 cursor-pointer"
  >
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-1">
        <h4 className="text-brand-black font-black text-xl group-hover:text-brand-green transition-colors">{item.name}</h4>
        {item.featured && <div className="w-2 h-2 rounded-full bg-brand-orange" />}
      </div>
      {item.amharicName && <p className="text-brand-black/30 font-bold text-sm mb-1">{item.amharicName}</p>}
      <p className="text-brand-black/40 text-sm font-medium line-clamp-1">{item.description}</p>
    </div>
    <div className="text-right">
      <p className="text-brand-orange font-black text-xl tracking-tight">{item.price} <span className="text-xs">Br</span></p>
      <div className="h-0.5 w-0 group-hover:w-full bg-brand-green/20 transition-all duration-500 mt-1" />
    </div>
  </motion.div>
);
