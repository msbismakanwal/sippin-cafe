import { useState } from "react";
import { FaCoffee, FaWifi, FaBirthdayCake, FaBolt, FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";
import { TESTIMONIALS, buildWhatsAppLink } from "../data/menuData";

export function About() {
  return (
    <section className="section-pad" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <img className="about-img" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop" alt="Inside Sippin Cafe" onError={(e)=>{e.currentTarget.src="/logo.png"}} />
          </div>
          <div className="col-lg-6">
            <p className="section-kicker text-start">Our Story</p>
            <h2 className="section-title text-start">Aik Cup Se Shuru Hui Kahani</h2>
            <p className="mt-3" style={{ color: "var(--muted)" }}>
              Sippin Cafe aik simple khayal se bana — aisi jagah jahan coffee sirf drink na ho,
              aik experience ho. Hum har subah fresh beans roast karte hain, desserts apni kitchen
              mein roz bante hain, aur har customer ko wahi warmth milti hai jo pehle din thi.
            </p>
            <p style={{ color: "var(--muted)" }}>
              Chahe aap kaam ke liye aayein, doston ke saath gupshup ho, ya bas khud ke saath
              aik sukoon bhara lamha — Sippin aap ka apna corner hai.
            </p>
            <div className="d-flex gap-4 mt-4 flex-wrap">
              <div><b className="font-display" style={{ fontSize: "1.6rem", color: "var(--brown-800)" }}>18 hrs</b><div style={{ color: "var(--muted)", fontSize: ".85rem" }}>Slow-steeped cold brew</div></div>
              <div><b className="font-display" style={{ fontSize: "1.6rem", color: "var(--brown-800)" }}>Daily</b><div style={{ color: "var(--muted)", fontSize: ".85rem" }}>Fresh bakes, har subah</div></div>
              <div><b className="font-display" style={{ fontSize: "1.6rem", color: "var(--brown-800)" }}>Premium</b><div style={{ color: "var(--muted)", fontSize: ".85rem" }}>Single-origin beans</div></div>
            </div>
            <a href="#menu" className="btn-brown d-inline-block mt-4">See What We Serve</a>
          </div>
        </div>
      </div>
    </section>
  );
}

const EXP = [
  { icon: <FaCoffee />, title: "Freshly Roasted Beans", text: "Premium single-origin beans, har cup ke liye fresh grind — aroma jo pehle sip se mehsoos ho." },
  { icon: <FaWifi />, title: "Work-Friendly Space", text: "Fast Wi-Fi, charging points aur sukoon bhara mahaul — laptop kholo aur ghante guzaro." },
  { icon: <FaBirthdayCake />, title: "Baked Fresh Daily", text: "Croissants, cheesecake aur tiramisu — sab kuch apni kitchen mein, roz subah fresh." },
  { icon: <FaBolt />, title: "Fast, Friendly Service", text: "Order minutes mein table par. Hamari team aap ko naam se pehchanti hai." },
];

export function Experience() {
  return (
    <section className="section-pad" id="experience" style={{ background: "var(--cream-2)" }}>
      <div className="container">
        <p className="section-kicker">The Sippin Experience</p>
        <h2 className="section-title">Sirf Coffee Nahi, Aik <span className="font-script" style={{ color: "var(--caramel)" }}>ehsaas</span> Hai</h2>
        <div className="row g-4 mt-4">
          {EXP.map((x) => (
            <div className="col-md-6 col-lg-3" key={x.title}>
              <div className="exp-card"><div className="exp-icon">{x.icon}</div><h3 style={{ fontSize: "1.15rem", fontWeight: 700 }}>{x.title}</h3><p style={{ color: "var(--muted)", fontSize: ".9rem" }}>{x.text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  "photo-1445116572660-236099ec97a0", "photo-1501339847302-ac426a4a7cbb",
  "photo-1453614512568-c4024d13c247", "photo-1559925393-8be0ec4767c8",
  "photo-1521017432531-fbd92d768814", "photo-1442512595331-e89e73853f31",
];

export function Gallery() {
  return (
    <section className="section-pad">
      <div className="container">
        <p className="section-kicker">Gallery</p>
        <h2 className="section-title">Moments at Sippin</h2>
        <div className="row g-3 mt-4">
          {GALLERY.map((id) => (
            <div className="col-6 col-lg-4" key={id}>
              <img className="gallery-img" src={`https://images.unsplash.com/${id}?q=80&w=800&auto=format&fit=crop`} alt="Sippin Cafe moment" loading="lazy" onError={(e)=>{e.currentTarget.style.display="none"}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="section-pad" id="reviews" style={{ background: "var(--cream-2)" }}>
      <div className="container">
        <p className="section-kicker">Reviews</p>
        <h2 className="section-title">Log Kya Kehte Hain</h2>
        <div className="row g-4 mt-4">
          {TESTIMONIALS.map((t) => (
            <div className="col-md-4" key={t.name}>
              <div className="testi-card">
                <div className="stars">{"★".repeat(t.rating)}</div>
                <p className="mt-3">“{t.text}”</p>
                <div className="mt-3"><b>{t.name}</b><div style={{ fontSize: ".82rem", color: "#c9ae8d" }}>{t.role}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Visit() {
  const [form, setForm] = useState({ name: "", guests: "2", date: "", time: "19:00" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const reserve = (e) => {
    e.preventDefault();
    const msg = `Assalam-o-Alaikum Sippin Cafe! I want to reserve a table.\n\nName: ${form.name}\nGuests: ${form.guests}\nDate: ${form.date}\nTime: ${form.time}`;
    window.open(buildWhatsAppLink(msg), "_blank");
  };
  return (
    <section className="section-pad" id="visit">
      <div className="container">
        <p className="section-kicker">Visit Us</p>
        <h2 className="section-title">Aaiye, Bethiye, <span className="font-script" style={{ color: "var(--caramel)" }}>Sip kijiye</span></h2>
        <div className="row g-4 mt-4">
          <div className="col-lg-5">
            <div className="visit-card h-100">
              <h3 style={{ fontWeight: 700, fontSize: "1.3rem" }}>Cafe Information</h3>
              <div className="info-row"><FaMapMarkerAlt style={{ color: "var(--caramel)", marginTop: 4 }} /><div><b>Location</b><div style={{ color: "var(--muted)" }}>Sippin Cafe — Main Boulevard<br />(Owner: exact address yahan update hoga)</div></div></div>
              <div className="info-row"><FaClock style={{ color: "var(--caramel)", marginTop: 4 }} /><div><b>Opening Hours</b><div style={{ color: "var(--muted)" }}>Monday – Sunday<br />8:00 AM – 11:00 PM</div></div></div>
              <div className="info-row"><FaPhoneAlt style={{ color: "var(--caramel)", marginTop: 4 }} /><div><b>Order / Reservations</b><div style={{ color: "var(--muted)" }}>WhatsApp par order aur table booking — neeche form ya floating button use karein.</div></div></div>
              <a className="btn-outline-brown d-inline-block mt-3" href={buildWhatsAppLink("Assalam-o-Alaikum Sippin Cafe!")} target="_blank" rel="noreferrer">WhatsApp Karein</a>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="visit-card h-100">
              <h3 style={{ fontWeight: 700, fontSize: "1.3rem" }}>Reserve a Table</h3>
              <p style={{ color: "var(--muted)", fontSize: ".9rem" }}>Form bharein — details seedha hamare WhatsApp par chali jayengi, koi call ki zaroorat nahi.</p>
              <form onSubmit={reserve} className="row g-3 mt-1">
                <div className="col-md-6"><label className="form-label">Aap ka Naam</label><input required className="form-control" value={form.name} onChange={set("name")} placeholder="e.g. Bisma" /></div>
                <div className="col-md-6"><label className="form-label">Guests</label><select className="form-select" value={form.guests} onChange={set("guests")}>{[1,2,3,4,5,6,8,10].map(n=><option key={n} value={n}>{n} {n===1?"Guest":"Guests"}</option>)}</select></div>
                <div className="col-md-6"><label className="form-label">Date</label><input required type="date" className="form-control" value={form.date} onChange={set("date")} /></div>
                <div className="col-md-6"><label className="form-label">Time</label><input required type="time" className="form-control" value={form.time} onChange={set("time")} /></div>
                <div className="col-12"><button type="submit" className="btn-brown w-100">Reserve on WhatsApp</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-5">
            <div className="d-flex align-items-center gap-2">
              <img src="/logo.png" alt="Sippin Cafe" className="logo-img" />
              <span><span className="brand-name d-block" style={{ color: "#fff" }}>SIPPIN</span><span className="brand-sub d-block">cafe</span></span>
            </div>
            <p className="mt-3" style={{ fontSize: ".9rem" }}>Freshly brewed coffee, fresh bakes aur cozy vibes — har din, har cup ke saath.</p>
          </div>
          <div className="col-md-3">
            <h4 style={{ color: "#fff", fontSize: "1.05rem" }}>Quick Links</h4>
            <ul className="list-unstyled mt-3" style={{ fontSize: ".9rem", lineHeight: 2 }}>
              <li><a href="#about">Our Story</a></li><li><a href="#menu">Menu</a></li>
              <li><a href="#experience">Experience</a></li><li><a href="#visit">Visit Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 style={{ color: "#fff", fontSize: "1.05rem" }}>Opening Hours</h4>
            <p className="mt-3" style={{ fontSize: ".9rem" }}>Monday – Sunday<br />8:00 AM – 11:00 PM</p>
            <p className="font-script" style={{ fontSize: "1.5rem", color: "var(--gold)" }}>Sip. Savour. Stay Awhile.</p>
          </div>
        </div>
        <hr style={{ borderColor: "rgba(255,255,255,.15)" }} />
        <p className="text-center mb-0" style={{ fontSize: ".82rem" }}>© {new Date().getFullYear()} Sippin Cafe. All rights reserved.</p>
      </div>
    </footer>
  );
}
