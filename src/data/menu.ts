export interface MenuItem {
  id: string;
  name: string;
  amharicName?: string;
  description: string;
  price: number;
  category: string;
  image?: string; // Optional now, since we might use category images
  rating: number;
  reviews: number;
  featured?: boolean;
}

export interface CategoryInfo {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const restaurantInfo = {
  name: "Twins Juice & Burger",
  tagline: "Premium Modern Flavors",
  about: "Experience the fusion of fresh ingredients and modern culinary art. At Twins, we believe in serving not just food, but a luxurious experience that delights all your senses.",
  address: "Bole, Addis Ababa, Ethiopia",
  phone: "0966112215",
  whatsapp: "0966112215",
  email: "hello@twins-juice.com",
  tiktok: "https://www.tiktok.com/@tiwins.juice.and.b?_r=1&_t=ZS-96PycKPSWaj",
  openingHours: "Daily: 8:00 AM - 10:00 PM",
};

export const categoriesInfo: CategoryInfo[] = [
  { 
    id: "Soup", 
    name: "Soup / ሾርባ", 
    image: "/categories/soup.png",
    description: "Warm and comforting traditional soups."
  },
  { 
    id: "Pasta & Rice", 
    name: "Pasta, Penne & Rice", 
    image: "/categories/pasta.png",
    description: "Traditional Italian flavors with a modern twist."
  },
  { 
    id: "Ravioli", 
    name: "Tellatelli Ravioli", 
    image: "/categories/pasta.png",
    description: "Exquisite handmade ravioli selections."
  },
  { 
    id: "Lasagna", 
    name: "Lasagna", 
    image: "/categories/pasta.png",
    description: "Rich, layered premium lasagnas."
  },
  { 
    id: "Combo Dishes", 
    name: "Combo Dishes", 
    image: "/hero.png",
    description: "The ultimate variety for the true foodie."
  },
  { 
    id: "Pizza", 
    name: "Twins Pizza", 
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop",
    description: "Artisanal pizzas baked to perfection."
  },
  { 
    id: "Burgers", 
    name: "Burgers", 
    image: "/categories/burgers.png",
    description: "Gourmet juicy burgers with premium toppings."
  },
  { 
    id: "Shawarma & Sandwiches", 
    name: "Shawarma & Sandwiches", 
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
    description: "Quick, tasty, and satisfying bites."
  },
  { 
    id: "Breakfast & Wraps", 
    name: "Breakfast & Wraps", 
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=1200&auto=format&fit=crop",
    description: "Start your day with our special morning menu."
  },
  { 
    id: "Salads", 
    name: "Special Salads", 
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    description: "Fresh, healthy, and vibrant garden greens."
  },
  { 
    id: "Chicken & Fish", 
    name: "Chicken & Fish", 
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1200&auto=format&fit=crop",
    description: "Perfectly roasted and grilled delights."
  },
  { 
    id: "Drinks", 
    name: "Exotic Drinks & Shakes", 
    image: "/categories/drinks.png",
    description: "Our signature fresh juices, shakes, and smoothies."
  },
  { 
    id: "Extras", 
    name: "Extras & Sauces", 
    image: "/hero.png",
    description: "Add that extra flavor to your meal."
  },
];

export const menuItems: MenuItem[] = [
  // SOUP
  { id: "s1", name: "Seven Soup", amharicName: "ትዊን 7 ሾርባ", description: "Seven fresh seasonal vegetables.", price: 390, category: "Soup", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1000&auto=format&fit=crop", rating: 4.8, reviews: 120, featured: true },
  { id: "s2", name: "Chicken Soup", amharicName: "ዶሮ ሾርባ", description: "Creamy chicken soup.", price: 395, category: "Soup", rating: 4.7, reviews: 85 },
  { id: "s3", name: "Cream Mushroom Soup", amharicName: "ከሬም መሽሩም ሾርባ", description: "Rich mushroom cream.", price: 460, category: "Soup", rating: 4.9, reviews: 150 },

  // PASTA & RICE
  { id: "p1", name: "Tomato Sauce", description: "Classic tomato basil pasta.", price: 295, category: "Pasta & Rice", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop", rating: 4.2, reviews: 110, featured: true },
  { id: "p2", name: "Vegetable Sauce", description: "Garden veggies.", price: 295, category: "Pasta & Rice", rating: 4.3, reviews: 85 },
  { id: "p3", name: "Meat Sauce", description: "Beef bolognese.", price: 399, category: "Pasta & Rice", rating: 4.9, reviews: 210 },
  { id: "p4", name: "Tuna Sauce", description: "Zesty tuna pasta.", price: 400, category: "Pasta & Rice", rating: 4.5, reviews: 75 },
  { id: "p5", name: "Meat Cream Sauce", description: "Creamy beef pasta.", price: 410, category: "Pasta & Rice", rating: 4.7, reviews: 140 },
  { id: "p6", name: "Carbonara Sauce", description: "Egg and cheese style.", price: 470, category: "Pasta & Rice", rating: 4.8, reviews: 190 },

  // RAVIOLI
  { id: "r1", name: "Tomato Sauce", price: 530, category: "Ravioli", description: "Handmade ravioli in tomato sauce.", rating: 4.4, reviews: 60 },
  { id: "r2", name: "Vegetable Sauce", price: 530, category: "Ravioli", description: "Handmade ravioli with veggies.", rating: 4.5, reviews: 45 },
  { id: "r3", name: "Meat Sauce", price: 600, category: "Ravioli", description: "Handmade ravioli with meat sauce.", rating: 4.9, reviews: 120 },
  { id: "r4", name: "Tuna Sauce", price: 620, category: "Ravioli", description: "Handmade ravioli with tuna sauce.", rating: 4.6, reviews: 55 },
  { id: "r5", name: "Meat Cream Sauce", price: 700, category: "Ravioli", description: "Handmade ravioli with creamy meat sauce.", rating: 5.0, reviews: 80, featured: true },

  // LASAGNA
  { id: "ls1", name: "Lasagna with Salad", description: "Layered lasagna with salad.", price: 780, category: "Lasagna", image: "https://images.unsplash.com/photo-1619895092538-128341789043?q=80&w=1000&auto=format&fit=crop", rating: 4.8, reviews: 130 },
  { id: "ls2", name: "Lasagna with Chicken", description: "Chicken lasagna layers.", price: 850, category: "Lasagna", rating: 4.9, reviews: 170, featured: true },

  // COMBO DISHES
  { id: "c1", name: "Ill Migliore (Full Combo)", description: "The ultimate platter.", price: 970, category: "Combo Dishes", image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=1000&auto=format&fit=crop", rating: 5.0, reviews: 400, featured: true },
  { id: "c2", name: "Combo Pasta", price: 590, category: "Combo Dishes", description: "Mix of best pastas.", rating: 4.5, reviews: 90 },
  { id: "c3", name: "Combo with Lasagna", price: 690, category: "Combo Dishes", description: "Lasagna with sides.", rating: 4.7, reviews: 110 },
  { id: "c4", name: "Grilled Chicken Combo", price: 850, category: "Combo Dishes", description: "Grilled chicken sides.", rating: 4.9, reviews: 250 },
  { id: "c5", name: "Combo Fish Cutlet", price: 680, category: "Combo Dishes", description: "Fish cutlet combo.", rating: 4.6, reviews: 70 },
  { id: "c6", name: "Combo Fish Goulash", price: 670, category: "Combo Dishes", description: "Fish goulash combo.", rating: 4.4, reviews: 65 },

  // PIZZA
  { id: "pz1", name: "Vegetable Pizza", price: 490, category: "Pizza", description: "Garden fresh vegetable topping.", rating: 4.5, reviews: 180 },
  { id: "pz2", name: "Twins Special Pizza", description: "Signature meats mix.", price: 830, category: "Pizza", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop", rating: 5.0, reviews: 520, featured: true },
  { id: "pz3", name: "Margherita Pizza", price: 580, category: "Pizza", description: "Classic cheese and tomato.", rating: 4.2, reviews: 100 },
  { id: "pz4", name: "Meat Lover’s Pizza", price: 790, category: "Pizza", description: "All the meats.", rating: 4.9, reviews: 210 },

  // BURGERS
  { id: "b1", name: "Plain Patty Burger", price: 460, category: "Burgers", description: "Simple juicy beef patty.", rating: 4.1, reviews: 90 },
  { id: "b2", name: "Cheese Burger", price: 510, category: "Burgers", description: "Beef patty with cheese.", rating: 4.6, reviews: 310 },
  { id: "b3", name: "Chicken Burger", price: 550, category: "Burgers", description: "Crispy chicken breast.", rating: 4.4, reviews: 150 },
  { id: "b4", name: "Beef Burger", price: 590, category: "Burgers", description: "Classic juicy beef burger.", rating: 4.7, reviews: 280 },
  { id: "b5", name: "Mexican Burger", price: 570, category: "Burgers", description: "Spicy Mexican style.", rating: 4.8, reviews: 120 },
  { id: "b8", name: "Double Cheese Burger", description: "Double patties, double cheese.", price: 650, category: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop", rating: 4.9, reviews: 420, featured: true },
  { id: "b13", name: "Twins Special Burger", description: "Ultimate signature burger.", price: 930, category: "Burgers", image: "/categories/burgers.png", rating: 5.0, reviews: 650, featured: true },
  { id: "b14", name: "Triple Tite / Juicy Burger", description: "Heaviest juicy burger.", price: 970, category: "Burgers", rating: 5.0, reviews: 380 },

  // SHAWARMA & SANDWICHES
  { id: "sw1", name: "Twins Shawarma", price: 625, category: "Shawarma & Sandwiches", description: "Authentic spicy shawarma.", rating: 4.8, reviews: 290 },
  { id: "sw2", name: "Tuna Sandwich", price: 430, category: "Shawarma & Sandwiches", description: "Fresh tuna salad sandwich.", rating: 4.4, reviews: 80 },
  { id: "sw5", name: "Twins Club Sandwich", description: "Triple-decker sandwich.", price: 570, category: "Shawarma & Sandwiches", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000&auto=format&fit=crop", rating: 4.8, reviews: 190, featured: true },

  // BREAKFAST & WRAPS
  { id: "bw1", name: "Special Twins Wrap", price: 750, category: "Breakfast & Wraps", description: "Premium loaded wrap.", rating: 4.9, reviews: 150 },
  { id: "bw7", name: "Special Chechebsa", description: "Traditional honey glazed.", price: 390, category: "Breakfast & Wraps", image: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?q=80&w=1000&auto=format&fit=crop", rating: 4.9, reviews: 200, featured: true },

  // SALADS
  { id: "sl1", name: "Rashan Salad", price: 395, category: "Salads", description: "Corn flakes salad mix.", rating: 4.5, reviews: 70 },
  { id: "sl4", name: "Twins Special Salad", description: "Signature house salad.", price: 525, category: "Salads", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop", rating: 4.9, reviews: 210, featured: true },

  // CHICKEN & FISH
  { id: "cf1", name: "Roasted Chicken Full", description: "Whole roasted chicken.", price: 2700, category: "Chicken & Fish", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1000&auto=format&fit=crop", rating: 5.0, reviews: 450, featured: true },
  { id: "cf5", name: "Fish Cutlet with Rice", description: "Crispy fish with rice.", price: 770, category: "Chicken & Fish", rating: 4.8, reviews: 180 },

  // DRINKS
  { id: "d1", name: "Special Juice", description: "Signature fruit mix.", price: 290, category: "Drinks", image: "/categories/drinks.png", rating: 5.0, reviews: 500, featured: true },
  { id: "sh5", name: "Chocolate Shake", description: "Rich chocolate blend.", price: 330, category: "Drinks", rating: 4.9, reviews: 320 },
  { id: "sm5", name: "Telba Smoothie", description: "Flaxseed smoothie.", price: 270, category: "Drinks", rating: 4.9, reviews: 120 },
  { id: "mj1", name: "Orange Mojito", description: "Citrus mint refresher.", price: 250, category: "Drinks", rating: 4.9, reviews: 80 },

  // EXTRAS
  { id: "ex2", name: "Burger Sauce", price: 120, category: "Extras", description: "House burger sauce.", rating: 4.9, reviews: 150 },
];
