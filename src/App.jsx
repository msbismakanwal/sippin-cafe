import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero, { MarqueeStrip } from "./components/Hero";
import MenuSection from "./components/MenuSection";
import CartDrawer from "./components/CartDrawer";
import { About, Experience, Gallery, Testimonials, Visit, Footer } from "./components/Sections";
import { buildWhatsAppLink } from "./data/menuData";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === item.id);
      if (found) return prev.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
    setCartOpen(true);
  };
  const changeQty = (id, delta) =>
    setCart((prev) => prev.map((i) => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
  const removeItem = (id) => setCart((prev) => prev.filter((i) => i.id !== id));
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <>
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Hero />
      <MarqueeStrip />
      <About />
      <MenuSection onAdd={addToCart} />
      <Experience />
      <Gallery />
      <Testimonials />
      <Visit />
      <Footer />
      <CartDrawer open={cartOpen} cart={cart} onClose={() => setCartOpen(false)} onQty={changeQty} onRemove={removeItem} />
      <a className="wa-float" href={buildWhatsAppLink("Assalam-o-Alaikum Sippin Cafe! I have a question.")} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <FaWhatsapp />
      </a>
    </>
  );
}
