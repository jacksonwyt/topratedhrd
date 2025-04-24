export interface PortfolioItem {
  src: string;
  alt: string;
  category: 'Kitchen' | 'Bathroom' | 'Roofing' | 'ADU'; // Add more categories as needed
}

export const portfolioItems: PortfolioItem[] = [
  {
    src: "/images/kitchen/kitchen1.jpg",
    alt: "Modern Kitchen Remodel with Island",
    category: "Kitchen",
  },
  {
    src: "/images/kitchen/kitchen2.jpg",
    alt: "Bright Kitchen with White Cabinets",
    category: "Kitchen",
  },
  {
    src: "/images/kitchen/kitchen3.JPG",
    alt: "Kitchen Remodel Detail",
    category: "Kitchen",
  },
  {
    src: "/images/kitchen/kitchen4.JPG",
    alt: "Kitchen Remodel Overview",
    category: "Kitchen",
  },
  // Add more kitchen images if available
  {
    src: "/images/bath/bath1.JPG",
    alt: "Luxury Bathroom Remodel with Walk-in Shower",
    category: "Bathroom",
  },
  {
    src: "/images/bath/bath2.jpg",
    alt: "Contemporary Bathroom Vanity and Tilework",
    category: "Bathroom",
  },
  {
    src: "/images/bath/bath3.JPG",
    alt: "Bathroom Remodel Detail",
    category: "Bathroom",
  },
    {
    src: "/images/bath/bath4.JPG",
    alt: "Bathroom Remodel Detail",
    category: "Bathroom",
  },
    {
    src: "/images/bath/bath5.JPG",
    alt: "Bathroom Remodel Detail",
    category: "Bathroom",
  },
    {
    src: "/images/bath/bath6.JPG",
    alt: "Bathroom Remodel Detail",
    category: "Bathroom",
  },
    {
    src: "/images/bath/bath7.JPG",
    alt: "Bathroom Remodel Detail",
    category: "Bathroom",
  },
    {
    src: "/images/bath/bath8.JPG",
    alt: "Bathroom Remodel Detail",
    category: "Bathroom",
  },
    {
    src: "/images/bath/bath9.JPG",
    alt: "Bathroom Remodel Detail",
    category: "Bathroom",
  },
    {
    src: "/images/bath/bath10.JPG",
    alt: "Bathroom Remodel Detail",
    category: "Bathroom",
  },
  // Add more bathroom images if available
  {
    src: "/images/roof/roof1.jpg",
    alt: "New Roof Installation - Asphalt Shingles",
    category: "Roofing",
  },
   {
    src: "/images/roof/roof2.jpg",
    alt: "Roof Repair Project",
    category: "Roofing",
  },
  {
    src: "/images/roof/roof3.jpg",
    alt: "Tile Roof Installation",
    category: "Roofing",
  },
   {
    src: "/images/roof/roof6.jpg", // Used this one before
    alt: "Completed Roofing Project Overview",
    category: "Roofing",
  },
   {
    src: "/images/roof/roof4.jpg", 
    alt: "Roofing Detail",
    category: "Roofing",
  },
   {
    src: "/images/roof/roof5.jpg", 
    alt: "Roofing Detail",
    category: "Roofing",
  },
  // ADU image
  {
    src: "/images/addition/addition1.JPG",
    alt: "Home Addition / ADU",
    category: "ADU",
  },
];

// Function to get unique categories
export const getPortfolioCategories = (): string[] => {
  const categories = new Set(portfolioItems.map(item => item.category));
  return ['All', ...Array.from(categories)];
}; 