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
  { id: "all", name: "All Items", icon: "🍽️" },
  { id: "signature", name: "Signature Dosas", icon: "⭐" },
  { id: "classic", name: "Classic Dosas", icon: "🥞" },
  { id: "special", name: "Special Dosas", icon: "🌟" },
  { id: "starters", name: "Starters", icon: "🥘" },
  { id: "chaats", name: "Chaats", icon: "🍢" },
  { id: "rice", name: "Rice & Noodles", icon: "🍚" },
  { id: "drinks", name: "Drinks", icon: "🥤" }
];

export const menuItems = [
  {
    id: 1,
    name: "Mysore Masala Dosa",
    description: "Crispy dosa with spicy red chutney spread, filled with potato masala",
    price: 8.50,
    category: "signature",
    vegan: true,
    spicy: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
  },
  {
    id: 2,
    name: "Indo-Chinese Cheese Dosa",
    description: "Fusion dosa with Chinese vegetables, cheese and special sauces",
    price: 9.50,
    category: "signature",
    vegan: false,
    spicy: false,
    image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075"
  },
  {
    id: 3,
    name: "Kal Dosa 10\"",
    description: "Thick, soft fermented dosa served with coconut chutney",
    price: 7.00,
    category: "signature",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6"
  },
  {
    id: 4,
    name: "Plain Dosa",
    description: "Classic crispy golden dosa served with sambar and chutneys",
    price: 6.00,
    category: "classic",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1743517894265-c86ab035adef"
  },
  {
    id: 5,
    name: "Masala Dosa",
    description: "Traditional dosa filled with spiced potato filling",
    price: 7.50,
    category: "classic",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
  },
  {
    id: 6,
    name: "Cheese Dosa",
    description: "Crispy dosa topped with melted cheese",
    price: 8.00,
    category: "classic",
    vegan: false,
    spicy: false,
    image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075"
  },
  {
    id: 7,
    name: "Paneer Tikka Dosa",
    description: "Dosa filled with marinated paneer tikka and mint chutney",
    price: 9.00,
    category: "special",
    vegan: false,
    spicy: true,
    image: "https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6"
  },
  {
    id: 8,
    name: "Schezwan Dosa",
    description: "Spicy Indo-Chinese fusion dosa with Schezwan sauce",
    price: 8.50,
    category: "special",
    vegan: true,
    spicy: true,
    image: "https://images.unsplash.com/photo-1743517894265-c86ab035adef"
  },
  {
    id: 9,
    name: "Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas",
    price: 3.50,
    category: "starters",
    vegan: true,
    spicy: false,
    image: "https://images.pexels.com/photos/12392915/pexels-photo-12392915.jpeg"
  },
  {
    id: 10,
    name: "Pani Puri",
    description: "Crispy shells filled with spiced water, tamarind and potato",
    price: 5.00,
    category: "chaats",
    vegan: true,
    spicy: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
  },
  {
    id: 11,
    name: "Vegetable Biryani",
    description: "Aromatic basmati rice with mixed vegetables and spices",
    price: 8.50,
    category: "rice",
    vegan: true,
    spicy: false,
    image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075"
  },
  {
    id: 12,
    name: "Mango Lassi",
    description: "Refreshing yogurt drink blended with sweet mangoes",
    price: 3.50,
    category: "drinks",
    vegan: false,
    spicy: false,
    image: "https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6"
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
