import { useMemo, useState } from "react";
import { CATEGORIES, MENU_ITEMS, fmtPKR } from "../data/menuData";

export default function MenuSection({ onAdd }) {
  const [cat, setCat] = useState("all");
  const [query, setQuery] = useState("");
  const items = useMemo(() => MENU_ITEMS.filter((i) =>
    (cat === "all" || i.category === cat) &&
    i.name.toLowerCase().includes(query.toLowerCase())
  ), [cat, query]);

  return (
    <section className="section-pad" id="menu" style={{ paddingTop: "3.5rem" }}>
      <div className="container">
        <p className="section-kicker">Our Menu</p>
        <h2 className="section-title">Har Sip Mein <span className="font-script" style={{ color: "var(--caramel)" }}>kuch khaas</span></h2>
        <p className="section-sub">Apni pasand chunein, cart mein add karein aur WhatsApp par order confirm — bas itna asaan.</p>

        <div className="text-center mt-4">
          <input className="form-control search-input" placeholder="Search your favourite… e.g. Latte" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div className="d-flex flex-wrap gap-2 justify-content-center mt-4">
          {CATEGORIES.map((c) => (
            <button key={c.id} className={`menu-tab ${cat === c.id ? "active" : ""}`} onClick={() => setCat(c.id)}>{c.label}</button>
          ))}
        </div>

        <div className="row g-4 mt-3">
          {items.map((item) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={item.id}>
              <div className="menu-card">
                <div style={{ position: "relative" }}>
                  <img src={item.image} alt={item.name} loading="lazy" onError={(e)=>{e.currentTarget.src="/logo.png"}} />
                  {item.tag && <span className="tag-badge">{item.tag}</span>}
                </div>
                <div className="p-3">
                  <h3 style={{ fontSize: "1.08rem", fontWeight: 700 }}>{item.name}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".86rem", minHeight: 42 }}>{item.desc}</p>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span className="price">{fmtPKR(item.price)}</span>
                    <button className="add-btn" onClick={() => onAdd(item)}>Add +</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {items.length === 0 && <p className="text-center" style={{ color: "var(--muted)" }}>Kuch nahi mila — koi aur naam try karein.</p>}
        </div>
      </div>
    </section>
  );
}
