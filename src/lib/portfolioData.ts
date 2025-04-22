export interface PortfolioItem {
  src: string;
  alt: string;
  category: 'Kitchen' | 'Bathroom' | 'Roofing' | 'ADU'; // Add more categories as needed
}

export const portfolioItems: PortfolioItem[] = [
  {
    src: "/images/kitchen1.jpg",
    alt: "Modern Kitchen Remodel with Island",
    category: "Kitchen",
  },
  {
    src: "/images/kitchen2.jpg",
    alt: "Bright Kitchen with White Cabinets",
    category: "Kitchen",
  },
  // Add more kitchen images if available
  {
    src: "/images/bath1.JPG",
    alt: "Luxury Bathroom Remodel with Walk-in Shower",
    category: "Bathroom",
  },
  {
    src: "/images/bath2.jpg",
    alt: "Contemporary Bathroom Vanity and Tilework",
    category: "Bathroom",
  },
  // Add more bathroom images if available
  {
    src: "/images/roof1.jpg",
    alt: "New Roof Installation - Asphalt Shingles",
    category: "Roofing",
  },
   {
    src: "/images/roof2.jpg",
    alt: "Roof Repair Project",
    category: "Roofing",
  },
  {
    src: "/images/roof3.jpg",
    alt: "Tile Roof Installation",
    category: "Roofing",
  },
   {
    src: "/images/roof6.jpg", // Used this one before
    alt: "Completed Roofing Project Overview",
    category: "Roofing",
  },
  // Add ADU images when available
];

// Function to get unique categories
export const getPortfolioCategories = (): string[] => {
  const categories = new Set(portfolioItems.map(item => item.category));
  return ['All', ...Array.from(categories)];
}; 