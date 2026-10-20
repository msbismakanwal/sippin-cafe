// Sippin Cafe — central data file
// NOTE for owner: apna asal WhatsApp number yahan ek dafa change karein,
// poori website (order, reservation, floating button) isi se chalegi.
export const WHATSAPP_NUMBER = "923000000000";

export const fmtPKR = (n) => "Rs " + Number(n).toLocaleString("en-PK");

export const CATEGORIES = [
  { id: "all", label: "All Items" },
  { id: "hot", label: "Hot Coffee" },
  { id: "cold", label: "Cold Coffee" },
  { id: "tea", label: "Tea & Matcha" },
  { id: "dessert", label: "Desserts & Bakes" },
  { id: "bites", label: "All-Day Bites" },
];

const img = (id) => `https://images.unsplash.com/${id}?q=80&w=800&auto=format&fit=crop`;

export const MENU_ITEMS = [
  // Hot Coffee
  { id: 1, name: "Espresso", category: "hot", price: 350, tag: "Classic", desc: "Rich, bold single-origin shot with a golden crema.", image: img("photo-1510707577719-ae7c14805e3a") },
  { id: 2, name: "Cappuccino", category: "hot", price: 550, tag: "Bestseller", desc: "Velvety steamed milk, airy foam and a dusting of cocoa.", image: img("photo-1572442388796-11668a67e53d") },
  { id: 3, name: "Cafe Latte", category: "hot", price: 600, tag: "", desc: "Smooth espresso wrapped in silky milk, latte art on top.", image: img("photo-1541167760496-1628856ab772") },
  { id: 4, name: "Spanish Latte", category: "hot", price: 650, tag: "Signature", desc: "Espresso over sweet condensed milk — creamy and indulgent.", image: img("photo-1561047029-3000c68339ca") },
  { id: 5, name: "Cafe Mocha", category: "hot", price: 700, tag: "", desc: "Espresso, Belgian chocolate and steamed milk, topped with cream.", image: img("photo-1578314675249-a6910f80cc4e") },
  { id: 6, name: "Caramel Macchiato", category: "hot", price: 750, tag: "Bestseller", desc: "Vanilla milk marked with espresso and a caramel drizzle.", image: img("photo-1485808191679-5f86510681a4") },
  // Cold Coffee
  { id: 7, name: "Classic Cold Brew", category: "cold", price: 650, tag: "Signature", desc: "Slow-steeped 18 hours for a smooth, chocolatey finish.", image: img("photo-1517701550927-30cf4ba1dba5") },
  { id: 8, name: "Iced Latte", category: "cold", price: 600, tag: "", desc: "Double espresso poured over cold milk and crystal ice.", image: img("photo-1495474472287-4d71bcdd2085") },
  { id: 9, name: "Sippin Frappe", category: "cold", price: 800, tag: "Bestseller", desc: "Blended coffee, vanilla ice cream and a cocoa swirl.", image: img("photo-1509042239860-f550ce710b93") },
  { id: 10, name: "Iced Caramel Latte", category: "cold", price: 750, tag: "New", desc: "Chilled latte layered with house caramel and sea salt.", image: img("photo-1442512595331-e89e73853f31") },
  // Tea & Matcha
  { id: 11, name: "Ceremonial Matcha Latte", category: "tea", price: 850, tag: "Signature", desc: "Stone-ground Japanese matcha whisked into creamy milk.", image: img("photo-1536256263959-770b48d82b0a") },
  { id: 12, name: "Masala Chai", category: "tea", price: 400, tag: "Classic", desc: "Slow-brewed desi chai with ginger, cardamom and spices.", image: img("photo-1571934811356-5cc061b6821f") },
  { id: 13, name: "Mint Lemonade Cooler", category: "tea", price: 450, tag: "", desc: "Fresh mint, lemon and soda — light, bright, refreshing.", image: img("photo-1556679343-c7306c1976bc") },
  { id: 14, name: "Peach Iced Tea", category: "tea", price: 500, tag: "New", desc: "Black tea infused with peach, served over ice with mint.", image: img("photo-1499638673689-79a0b5115d87") },
  // Desserts & Bakes
  { id: 15, name: "Classic Tiramisu", category: "dessert", price: 850, tag: "Signature", desc: "Espresso-soaked layers, mascarpone cream, cocoa dust.", image: img("photo-1571877227200-a0d98ea607e9") },
  { id: 16, name: "Basque Burnt Cheesecake", category: "dessert", price: 750, tag: "Bestseller", desc: "Caramelised top, custardy centre — baked fresh daily.", image: img("photo-1533134242443-d4fd215305ad") },
  { id: 17, name: "Butter Croissant", category: "dessert", price: 450, tag: "", desc: "Flaky, golden, 27 layers of French butter goodness.", image: img("photo-1555507036-ab1f4038808a") },
  { id: 18, name: "Banana Walnut Loaf", category: "dessert", price: 400, tag: "", desc: "Warm spiced banana bread with toasted walnuts.", image: img("photo-1606101273945-e9eba91c0dc4") },
  // Bites
  { id: 19, name: "Avocado Sourdough Toast", category: "bites", price: 950, tag: "Healthy", desc: "Smashed avocado, chilli flakes and a poached egg.", image: img("photo-1541519227354-08fa5d50c44d") },
  { id: 20, name: "Grilled Chicken Panini", category: "bites", price: 850, tag: "Bestseller", desc: "Smoky chicken, mozzarella and pesto in pressed ciabatta.", image: img("photo-1528735602780-2552fd46c7af") },
  { id: 21, name: "Loaded Fries", category: "bites", price: 650, tag: "", desc: "Crispy fries, cheese sauce, jalapenos and house dip.", image: img("photo-1573080496219-bb080dd4f877") },
  { id: 22, name: "Club Sandwich", category: "bites", price: 800, tag: "Classic", desc: "Triple-decker with grilled chicken, egg and fries.", image: img("photo-1509722747041-616f39b57569") },
];

export const TESTIMONIALS = [
  { name: "Ayesha K.", role: "Regular since 2023", text: "Spanish Latte yahan ki best hai poore area mein. Jagah itni cozy hai ke kaam bhi yahin se kar leti hoon.", rating: 5 },
  { name: "Bilal R.", role: "Food Blogger", text: "Cold brew aur Basque cheesecake — perfect combo. Staff friendly, service fast, vibe bilkul premium.", rating: 5 },
  { name: "Mahnoor S.", role: "Weekend Visitor", text: "Doston ke saath evening chai ke liye hamari go-to jagah ban gayi hai. Tiramisu lazmi try karein!", rating: 5 },
];

export function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildOrderMessage(cart) {
  const lines = cart.map((i) => `• ${i.name} x${i.qty} — ${fmtPKR(i.price * i.qty)}`);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  return `Assalam-o-Alaikum Sippin Cafe! I want to place an order:\n\n${lines.join("\n")}\n\nTotal: ${fmtPKR(total)}\n\nName: \nAddress / Table No: `;
}
