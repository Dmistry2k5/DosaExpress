// Mock data for Dosa Express

export const branches = [
  {
    id: 1,
    name: "Wembley Branch",
    address: "547 High Road, Wembley, HA0 2DJ",
    phone: "+44 7505 920566",
    email: "wembley@dosaexpress.co.uk",
    hours: {
      monday: "8:00 AM – 10:30 PM",
      tuesday: "8:00 AM – 10:30 PM",
      wednesday: "8:00 AM – 10:30 PM",
      thursday: "8:00 AM – 10:30 PM",
      friday: "8:00 AM – 10:30 PM",
      saturday: "8:00 AM – 10:30 PM",
      sunday: "11:00 AM – 10:30 PM"
    },
    coordinates: { lat: 51.5607, lng: -0.2969 },
    status: "open"
  },
  {
    id: 2,
    name: "Kingsbury Branch",
    address: "730-732 Kenton Road, Harrow, HA3 9QX",
    phone: "+44 7943 745610",
    email: "kingsbury@dosaexpress.co.uk",
    hours: {
      monday: "8:00 AM – 10:30 PM",
      tuesday: "8:00 AM – 10:30 PM",
      wednesday: "8:00 AM – 10:30 PM",
      thursday: "8:00 AM – 10:30 PM",
      friday: "8:00 AM – 10:30 PM",
      saturday: "8:00 AM – 10:30 PM",
      sunday: "11:00 AM – 10:30 PM"
    },
    coordinates: { lat: 51.5860, lng: -0.2890 },
    status: "open"
  },
  {
    id: 3,
    name: "South Harrow Branch",
    address: "Coming Soon",
    phone: "Coming Soon",
    email: "info@dosaexpress.co.uk",
    hours: {},
    coordinates: null,
    status: "coming-soon"
  }
];

export const menuCategories = [
  { id: "all", name: "All Items" },
  { id: "popular", name: "Most Popular" },
  { id: "dosas", name: "Dosas" },
  { id: "special-dosas", name: "Special Curry Dosas" },
  { id: "indo-chinese-dosas", name: "Indo Chinese Dosas" },
  { id: "kal-dosas", name: "10\" Kal Dosas" },
  { id: "idlis", name: "Idlis" },
  { id: "starters", name: "Starters" },
  { id: "chaats", name: "Chaats" },
  { id: "noodles-rice", name: "Noodles & Rice" },
  { id: "biryani", name: "Biryanis" },
  { id: "parathas", name: "Parathas & Puris" },
  { id: "uttappam", name: "Uttappam" }
];

export const menuItems = [
  // Popular Items
  {
    id: 1,
    name: "Medhu Vada",
    description: "2 pieces with sambhar and chutney",
    price: 4.70,
    category: "popular",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1730191843435-073792ba22bc",
    rating: "78% liked"
  },
  {
    id: 2,
    name: "Idly",
    description: "2 pieces soft steamed rice cakes with sambhar and chutney",
    price: 4.50,
    category: "popular",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
    rating: "Popular"
  },
  {
    id: 3,
    name: "Masala Dosa",
    description: "Classic crispy dosa filled with spiced potato masala",
    price: 7.50,
    category: "popular",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
  },
  
  // Classic Dosas
  {
    id: 10,
    name: "Plain Dosa",
    description: "Classic crispy golden dosa",
    price: 5.99,
    category: "dosas",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075"
  },
  {
    id: 11,
    name: "Masala Dosa",
    description: "Traditional dosa filled with spiced potato masala",
    price: 7.50,
    category: "dosas",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
  },
  {
    id: 12,
    name: "Mysore Masala Dosa",
    description: "Crispy dosa with spicy red chutney spread, filled with potato masala",
    price: 8.00,
    category: "dosas",
    vegan: true,
    spicy: true,
    image: "https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6"
  },
  {
    id: 13,
    name: "Ghee Roast Dosa",
    description: "Crispy dosa roasted with pure ghee for rich flavor",
    price: 7.95,
    category: "dosas",
    vegan: false,
    spicy: false,
    image: "https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg"
  },
  {
    id: 14,
    name: "Cheese Dosa",
    description: "Crispy dosa topped with melted cheese",
    price: 7.99,
    category: "dosas",
    vegan: false,
    spicy: false,
    image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg"
  },
  {
    id: 15,
    name: "Paneer Dosa",
    description: "Dosa filled with spiced cottage cheese",
    price: 8.50,
    category: "dosas",
    vegan: false,
    spicy: false,
    image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075"
  },
  
  // Special Curry Dosas
  {
    id: 20,
    name: "Chola Dosa",
    description: "Dosa served with spicy chickpea curry",
    price: 8.50,
    category: "special-dosas",
    vegan: true,
    spicy: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
  },
  {
    id: 21,
    name: "Paneer Butter Masala Dosa",
    description: "Dosa with creamy paneer butter masala curry",
    price: 9.50,
    category: "special-dosas",
    vegan: false,
    spicy: false,
    image: "https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6"
  },
  
  // Indo Chinese Dosas
  {
    id: 30,
    name: "Schezwan Dosa",
    description: "Spicy Indo-Chinese fusion dosa with Schezwan sauce",
    price: 8.50,
    category: "indo-chinese-dosas",
    vegan: true,
    spicy: true,
    image: "https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg"
  },
  {
    id: 31,
    name: "Manchurian Dosa",
    description: "Dosa with vegetable Manchurian filling",
    price: 8.95,
    category: "indo-chinese-dosas",
    vegan: true,
    spicy: true,
    image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg"
  },
  {
    id: 32,
    name: "Hakka Noodles Dosa",
    description: "Unique fusion with Hakka noodles inside crispy dosa",
    price: 9.50,
    category: "indo-chinese-dosas",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
  },
  
  // 10" Kal Dosas
  {
    id: 40,
    name: "Plain Kal Dosa 10\"",
    description: "Thick, soft fermented dosa served with coconut chutney",
    price: 6.50,
    category: "kal-dosas",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6"
  },
  {
    id: 41,
    name: "Onion Kal Dosa 10\"",
    description: "Thick dosa topped with onions and spices",
    price: 7.50,
    category: "kal-dosas",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075"
  },
  
  // Idlis
  {
    id: 50,
    name: "Idly (2 Pieces)",
    description: "Soft steamed rice cakes with sambhar and chutney",
    price: 4.50,
    category: "idlis",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc"
  },
  {
    id: 51,
    name: "Ghee Podi Idly",
    description: "Idlis tossed in ghee with spiced lentil powder",
    price: 5.50,
    category: "idlis",
    vegan: false,
    spicy: true,
    image: "https://images.unsplash.com/photo-1632104667384-06f58cb7ad44"
  },
  {
    id: 52,
    name: "Sambar Idly",
    description: "Idlis served with hot sambhar",
    price: 5.00,
    category: "idlis",
    vegan: true,
    spicy: false,
    image: "https://images.pexels.com/photos/14831540/pexels-photo-14831540.jpeg"
  },
  
  // Starters
  {
    id: 60,
    name: "Samosa",
    description: "2 pieces crispy pastry filled with spiced potatoes",
    price: 3.95,
    category: "starters",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
  },
  {
    id: 61,
    name: "Punjabi Samosa",
    description: "2 pieces with chutney",
    price: 3.95,
    category: "starters",
    vegan: true,
    spicy: false,
    image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
  },
  {
    id: 62,
    name: "Pav Bhaji",
    description: "Spicy street food favourite made with mixed vegetables",
    price: 6.40,
    category: "starters",
    vegan: true,
    spicy: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
  },
  {
    id: 63,
    name: "Moong Dal Vada",
    description: "3 pieces with chutney",
    price: 3.95,
    category: "starters",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1683533678059-63c6a0e9e3ef"
  },
  {
    id: 64,
    name: "Sambar Vada",
    description: "4 pieces vada dipped in sambhar",
    price: 6.00,
    category: "starters",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1683533678033-f5d60f0a3437"
  },
  
  // Chaats
  {
    id: 70,
    name: "Pani Puri",
    description: "Crispy shells filled with spiced water, tamarind and potato",
    price: 5.50,
    category: "chaats",
    vegan: true,
    spicy: true,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84"
  },
  {
    id: 71,
    name: "Bhel Puri",
    description: "Puffed rice mixed with vegetables and tangy chutneys",
    price: 5.50,
    category: "chaats",
    vegan: true,
    spicy: true,
    image: "https://images.unsplash.com/photo-1653850280260-aa3b9e00b230"
  },
  {
    id: 72,
    name: "Sev Puri",
    description: "Crispy puris topped with potatoes, chutneys and sev",
    price: 5.95,
    category: "chaats",
    vegan: true,
    spicy: true,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84"
  },
  
  // Noodles & Rice
  {
    id: 80,
    name: "Vegetable Hakka Noodles",
    description: "Stir-fried noodles with vegetables and soy sauce",
    price: 7.50,
    category: "noodles-rice",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246"
  },
  {
    id: 81,
    name: "Schezwan Noodles",
    description: "Spicy noodles with vegetables in Schezwan sauce",
    price: 7.95,
    category: "noodles-rice",
    vegan: true,
    spicy: true,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246"
  },
  {
    id: 82,
    name: "Vegetable Fried Rice",
    description: "Aromatic fried rice with mixed vegetables",
    price: 7.50,
    category: "noodles-rice",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
  },
  
  // Biryani
  {
    id: 90,
    name: "Vegetable Biryani",
    description: "Aromatic basmati rice with mixed vegetables and spices",
    price: 8.50,
    category: "biryani",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd"
  },
  {
    id: 91,
    name: "Paneer Biryani",
    description: "Fragrant rice with marinated paneer and whole spices",
    price: 9.50,
    category: "biryani",
    vegan: false,
    spicy: false,
    image: "https://images.pexels.com/photos/2092916/pexels-photo-2092916.jpeg"
  },
  
  // Parathas & Puris
  {
    id: 100,
    name: "Chola Puri",
    description: "Fluffy puris served with spicy chickpea curry",
    price: 7.50,
    category: "parathas",
    vegan: true,
    spicy: true,
    image: "https://images.pexels.com/photos/4149256/pexels-photo-4149256.jpeg"
  },
  {
    id: 101,
    name: "Aloo Paratha",
    description: "Stuffed flatbread with spiced potato filling",
    price: 6.50,
    category: "parathas",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1580064003296-29deb3521370"
  },
  
  // Uttappam
  {
    id: 110,
    name: "Plain Uttappam",
    description: "Thick South Indian pancake",
    price: 6.50,
    category: "uttappam",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1632104667384-06f58cb7ad44"
  },
  {
    id: 111,
    name: "Onion Uttappam",
    description: "Thick pancake topped with onions",
    price: 7.50,
    category: "uttappam",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc"
  },
  {
    id: 112,
    name: "Mixed Vegetable Uttappam",
    description: "Thick pancake topped with mixed vegetables",
    price: 8.50,
    category: "uttappam",
    vegan: true,
    spicy: false,
    image: "https://images.pexels.com/photos/14831540/pexels-photo-14831540.jpeg"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Best dosas in London! The Mysore Masala is absolutely incredible. Authentic flavors and generous portions.",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Raj Patel",
    rating: 5,
    comment: "Been coming here since 2010. The quality has never dropped. The Indo-Chinese Cheese Dosa is my family's favorite!",
    date: "2024-01-10"
  },
  {
    id: 3,
    name: "Emma Williams",
    rating: 5,
    comment: "As a vegan, I'm so happy to have found this place. So many options and everything is delicious!",
    date: "2024-01-05"
  },
  {
    id: 4,
    name: "Mohammed Ali",
    rating: 5,
    comment: "Perfect spot for vegetarian food in Wembley. Great service, clean restaurant, and amazing dosas!",
    date: "2023-12-28"
  }
];

export const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1725483990070-509319bc6ecc",
    alt: "Chef preparing dosa on griddle",
    category: "preparation"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1731846569848-f435e8e4a36b",
    alt: "Professional kitchen cooking scene",
    category: "kitchen"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
    alt: "Beautiful dosa plating",
    category: "food"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1694849789325-914b71ab4075",
    alt: "South Indian thali",
    category: "food"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1725483990122-802996d84699",
    alt: "Active cooking process",
    category: "preparation"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6",
    alt: "Mysore dosa with accompaniments",
    category: "food"
  }
];

export const onlineOrderingPlatforms = [
  {
    id: 1,
    name: "Uber Eats",
    url: "https://www.ubereats.com/gb/store/dosa-express/",
    icon: "UberEats"
  },
  {
    id: 2,
    name: "Deliveroo",
    url: "https://deliveroo.co.uk/menu/london/dosa-express",
    icon: "Deliveroo"
  },
  {
    id: 3,
    name: "Just Eat",
    url: "https://www.just-eat.co.uk/restaurants-dosa-express",
    icon: "JustEat"
  }
];
