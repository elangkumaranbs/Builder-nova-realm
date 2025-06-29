// Product data with unique information for each item
export interface ColorOption {
  name: string;
  color: string;
  isSelected?: boolean;
}

export interface ProductData {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  rating: number;
  sizes: string[];
  category: string;
  colors: ColorOption[];
  features: string[];
  specifications: Record<string, string>;
  washCare: string[];
  inStock: boolean;
  isHotSale?: boolean;
}

// Available colors based on your notes
export const availableColors: ColorOption[] = [
  { name: "White", color: "#FFFFFF" },
  { name: "Black", color: "#000000" },
  { name: "Pink", color: "#FF69B4" },
  { name: "Lt-Green", color: "#90EE90" },
  { name: "Navy", color: "#000080" },
  { name: "Yellow", color: "#FFFF00" },
  { name: "Maroon", color: "#800000" },
  { name: "T-Blue", color: "#008B8B" },
  { name: "Tea Rose", color: "#F4C2C2" },
  { name: "Green", color: "#008000" },
  { name: "Lavender", color: "#E6E6FA" },
  { name: "Purple", color: "#800080" },
  { name: "Aqua", color: "#00FFFF" },
  { name: "Skin", color: "#FDBCB4" },
  { name: "Stone", color: "#918E85" },
  { name: "Orange", color: "#FFA500" },
  { name: "Wine", color: "#722F37" },
  { name: "Royal", color: "#4169E1" },
  { name: "Cream", color: "#FFFDD0" },
  { name: "Brown", color: "#A52A2A" },
  { name: "Red", color: "#FF0000" },
];

export const productsData: ProductData[] = [
  // Men's Products
  {
    id: 1,
    name: "Men's Round Neck T-Shirt",
    price: 399,
    originalPrice: 499,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=600&fit=crop"
    ],
    description: "Premium quality round neck t-shirt made from 100% cotton. Perfect for casual wear with excellent breathability and comfort. Features reinforced stitching and pre-shrunk fabric.",
    rating: 5,
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Men's T-Shirts",
    colors: [
      { name: "Black", color: "#000000", isSelected: true },
      { name: "White", color: "#FFFFFF" },
      { name: "Navy", color: "#000080" },
      { name: "Royal", color: "#4169E1" },
    ],
    features: ["100% Cotton", "Pre-shrunk", "Machine Washable", "Reinforced Stitching"],
    specifications: {
      "Fabric": "100% Cotton",
      "Fit": "Regular Fit",
      "Sleeve": "Short Sleeve",
      "Neck": "Round Neck",
      "GSM": "180"
    },
    washCare: ["Machine wash cold", "Do not bleach", "Tumble dry low", "Iron on medium heat"],
    inStock: true,
    isHotSale: true
  },
  {
    id: 2,
    name: "Men's V-Neck T-Shirt",
    price: 449,
    originalPrice: 549,
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=600&fit=crop"
    ],
    description: "Stylish V-neck t-shirt crafted from premium cotton blend. Features a modern slim fit design that's perfect for both casual and semi-formal occasions.",
    rating: 4,
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Men's T-Shirts",
    colors: [
      { name: "White", color: "#FFFFFF" },
      { name: "Black", color: "#000000" },
      { name: "Navy", color: "#000080" },
      { name: "Maroon", color: "#800000" },
    ],
    features: ["Cotton Blend", "Slim Fit", "V-Neck Design", "Soft Touch"],
    specifications: {
      "Fabric": "Cotton Blend",
      "Fit": "Slim Fit",
      "Sleeve": "Short Sleeve",
      "Neck": "V-Neck",
      "GSM": "160"
    },
    washCare: ["Machine wash cold", "Do not bleach", "Tumble dry low", "Iron on low heat"],
    inStock: true
  },
  {
    id: 3,
    name: "Men's Track Pants",
    price: 699,
    originalPrice: 899,
    images: [
      "https://images.unsplash.com/photo-1506629905962-d997d54d4702?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=600&fit=crop"
    ],
    description: "Comfortable track pants made from moisture-wicking fabric. Perfect for workouts, jogging, or casual wear. Features elastic waistband and side pockets.",
    rating: 5,
    sizes: ["M", "L", "XL", "XXL"],
    category: "Men's Bottomwear",
    colors: [
      { name: "Black", color: "#000000" },
      { name: "Navy", color: "#000080" },
      { name: "Maroon", color: "#800000" },
      { name: "T-Blue", color: "#008B8B" },
    ],
    features: ["Moisture Wicking", "Elastic Waistband", "Side Pockets", "Quick Dry"],
    specifications: {
      "Fabric": "Polyester Blend",
      "Fit": "Regular Fit",
      "Type": "Track Pants",
      "Waist": "Elastic",
      "Pockets": "2 Side Pockets"
    },
    washCare: ["Machine wash cold", "Do not bleach", "Air dry", "Do not iron"],
    inStock: true
  },
  // Women's Products
  {
    id: 4,
    name: "Women's Flat Ankle Leggings",
    price: 599,
    originalPrice: 799,
    images: [
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=600&fit=crop"
    ],
    description: "Premium quality flat ankle leggings made from stretchable cotton blend. Perfect for daily wear, yoga, or casual outings. Features high waistband for comfort.",
    rating: 5,
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
    category: "Women's Leggings",
    colors: availableColors.slice(0, 8),
    features: ["High Waistband", "Stretchable", "Ankle Length", "Flat Seams"],
    specifications: {
      "Fabric": "Cotton Lycra",
      "Fit": "Skinny Fit",
      "Length": "Ankle Length",
      "Waist": "High Waist",
      "Stretch": "4-Way Stretch"
    },
    washCare: ["Hand wash cold", "Do not bleach", "Air dry", "Iron on low heat"],
    inStock: true,
    isHotSale: true
  },
  {
    id: 5,
    name: "Women's Shimmer Leggings",
    price: 799,
    originalPrice: 999,
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=600&fit=crop"
    ],
    description: "Glamorous shimmer leggings perfect for parties and special occasions. Made with metallic finish fabric that catches light beautifully. Comfortable and stylish.",
    rating: 5,
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    category: "Women's Leggings",
    colors: [
      { name: "Black", color: "#000000" },
      { name: "Navy", color: "#000080" },
      { name: "Maroon", color: "#800000" },
      { name: "Purple", color: "#800080" },
    ],
    features: ["Metallic Finish", "Party Wear", "Stretchable", "Shimmer Effect"],
    specifications: {
      "Fabric": "Metallic Lycra",
      "Fit": "Skinny Fit",
      "Length": "Full Length",
      "Finish": "Shimmer",
      "Occasion": "Party Wear"
    },
    washCare: ["Hand wash only", "Do not bleach", "Air dry", "Do not iron"],
    inStock: true
  },
  {
    id: 6,
    name: "Saree Shapewear",
    price: 649,
    originalPrice: 849,
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=600&fit=crop"
    ],
    description: "Premium saree shapewear designed to give you the perfect silhouette under sarees. Made from breathable fabric with tummy control and hip enhancement.",
    rating: 4,
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    category: "Saree Shapewear",
    colors: [
      { name: "Skin", color: "#FDBCB4" },
      { name: "Black", color: "#000000" },
      { name: "White", color: "#FFFFFF" },
      { name: "Cream", color: "#FFFDD0" },
    ],
    features: ["Tummy Control", "Hip Enhancement", "Breathable", "Seamless"],
    specifications: {
      "Fabric": "Nylon Spandex",
      "Control": "Medium Control",
      "Type": "Full Body",
      "Closure": "Hook & Eye",
      "Support": "Built-in Bra"
    },
    washCare: ["Hand wash cold", "Do not bleach", "Air dry", "Do not iron"],
    inStock: true
  },
  {
    id: 7,
    name: "Women's Night T-Shirt",
    price: 399,
    originalPrice: 499,
    images: [
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop"
    ],
    description: "Comfortable night t-shirt made from soft cotton fabric. Perfect for sleeping or lounging at home. Features relaxed fit and breathable material.",
    rating: 4,
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Night Wear",
    colors: [
      { name: "Pink", color: "#FF69B4" },
      { name: "Lavender", color: "#E6E6FA" },
      { name: "Lt-Green", color: "#90EE90" },
      { name: "Tea Rose", color: "#F4C2C2" },
    ],
    features: ["Soft Cotton", "Relaxed Fit", "Breathable", "Comfortable"],
    specifications: {
      "Fabric": "100% Cotton",
      "Fit": "Relaxed Fit",
      "Sleeve": "Short Sleeve",
      "Length": "Hip Length",
      "Type": "Night Wear"
    },
    washCare: ["Machine wash cold", "Do not bleach", "Tumble dry low", "Iron on low heat"],
    inStock: true
  },
  {
    id: 8,
    name: "Women's 3/4 Leggings",
    price: 499,
    originalPrice: 649,
    images: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop"
    ],
    description: "Versatile 3/4 length leggings perfect for workouts, yoga, or casual wear. Made from moisture-wicking fabric with excellent stretch and recovery.",
    rating: 4,
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Women's Leggings",
    colors: availableColors.slice(8, 14),
    features: ["3/4 Length", "Moisture Wicking", "Workout Ready", "High Stretch"],
    specifications: {
      "Fabric": "Polyester Lycra",
      "Fit": "Compression Fit",
      "Length": "3/4 Length",
      "Waist": "Mid Waist",
      "Activity": "Active Wear"
    },
    washCare: ["Machine wash cold", "Do not bleach", "Air dry", "Do not iron"],
    inStock: true
  }
];

// Helper function to get product by ID
export const getProductById = (id: number): ProductData | undefined => {
  return productsData.find(product => product.id === id);
};

// Helper function to get products by category
export const getProductsByCategory = (category: string): ProductData[] => {
  return productsData.filter(product => product.category.toLowerCase().includes(category.toLowerCase()));
};

// Helper function to get hot sale products
export const getHotSaleProducts = (): ProductData[] => {
  return productsData.filter(product => product.isHotSale);
};