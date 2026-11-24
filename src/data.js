/* Set `img` on any item to use a real photo (e.g. img: "/assets/latte.jpg"). */
export const MENU = [
  { id: 1, cat: "Coffee", name: "Flat White", price: 190, art: "mug", color: "#B9784A", desc: "Double ristretto with silky steamed milk." },
  { id: 2, cat: "Coffee", name: "Cold Brew", price: 220, art: "glass", color: "#3B2A20", desc: "Steeped 18 hours, served over ice." },
  { id: 3, cat: "Coffee", name: "Cardamom Latte", price: 230, art: "mug", color: "#C9A27A", desc: "Espresso, steamed milk and house cardamom syrup." },
  { id: 4, cat: "Tea & More", name: "Masala Chai", price: 140, art: "mug", color: "#C98B4B", desc: "Slow-simmered with ginger, clove and black pepper." },
  { id: 5, cat: "Tea & More", name: "Matcha Latte", price: 250, art: "glass", color: "#8DB36B", desc: "Ceremonial matcha whisked with oat milk." },
  { id: 6, cat: "Tea & More", name: "Hot Chocolate", price: 210, art: "mug", color: "#5A3A2E", desc: "Dark chocolate melted into steamed milk." },
  { id: 7, cat: "Bites", name: "Butter Croissant", price: 160, art: "pastry", color: "#E3B66B", desc: "Baked each morning, flaky and golden." },
  { id: 8, cat: "Bites", name: "Avocado Toast", price: 320, art: "plate", color: "#9CBF6B", desc: "Sourdough, smashed avocado, chilli flakes, lime." },
  { id: 9, cat: "Bites", name: "Blueberry Muffin", price: 150, art: "muffin", color: "#7A86C9", desc: "Soft crumb with a sugar-crisp top." },
  { id: 10, cat: "Bites", name: "Paneer Sandwich", price: 280, art: "plate", color: "#E6C27A", desc: "Grilled paneer, mint chutney, pickled onion." },
];
export const CATS = ["All", "Coffee", "Tea & More", "Bites"];
export const SIZES = { Small: [0.5, 0], Regular: [0.7, 30], Large: [0.9, 60] };
export const MILKS = { "Whole milk": 0, "Oat milk": 30, "Almond milk": 30 };
export const inr = n => "₹" + n;
