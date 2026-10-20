import { FaTimes, FaTrash, FaWhatsapp } from "react-icons/fa";
import { fmtPKR, buildWhatsAppLink, buildOrderMessage } from "../data/menuData";

export default function CartDrawer({ open, cart, onClose, onQty, onRemove }) {
  if (!open) return null;
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <aside className="cart-drawer">
        <div className="d-flex justify-content-between align-items-center p-4 pb-2">
          <h3 className="mb-0" style={{ fontWeight: 800, fontSize: "1.3rem" }}>Your Order</h3>
          <button className="btn btn-light rounded-circle" onClick={onClose} aria-label="Close cart"><FaTimes /></button>
        </div>
        <div className="px-4" style={{ overflowY: "auto", flex: 1 }}>
          {cart.length === 0 && (
            <div className="text-center py-5">
              <img src="/logo.png" alt="" style={{ width: 120, opacity: .85 }} />
              <p className="mt-3" style={{ color: "var(--muted)" }}>Cart khaali hai — menu se kuch tasty add karein!</p>
              <a href="#menu" className="btn-brown d-inline-block" onClick={onClose}>Browse Menu</a>
            </div>
          )}
          {cart.map((i) => (
            <div key={i.id} className="d-flex gap-3 py-3" style={{ borderBottom: "1px dashed rgba(93,46,12,.15)" }}>
              <img src={i.image} alt={i.name} style={{ width: 62, height: 62, objectFit: "cover", borderRadius: 14 }} onError={(e)=>{e.currentTarget.src="/logo.png"}} />
              <div style={{ flex: 1 }}>
                <div className="d-flex justify-content-between"><b style={{ fontSize: ".92rem" }}>{i.name}</b>
                  <button className="btn btn-sm text-danger p-0" onClick={() => onRemove(i.id)} aria-label="Remove"><FaTrash /></button></div>
                <div style={{ color: "var(--muted)", fontSize: ".82rem" }}>{fmtPKR(i.price)} each</div>
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <span className="d-flex align-items-center gap-2">
                    <button className="qty-btn" onClick={() => onQty(i.id, -1)}>−</button>
                    <b>{i.qty}</b>
                    <button className="qty-btn" onClick={() => onQty(i.id, 1)}>+</button>
                  </span>
                  <b className="price" style={{ fontSize: "1rem" }}>{fmtPKR(i.price * i.qty)}</b>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="p-4" style={{ borderTop: "1px solid rgba(93,46,12,.12)" }}>
            <div className="d-flex justify-content-between mb-3"><span style={{ color: "var(--muted)" }}>Total</span><b className="price" style={{ fontSize: "1.3rem" }}>{fmtPKR(total)}</b></div>
            <a className="btn-brown w-100 d-flex align-items-center justify-content-center gap-2" href={buildWhatsAppLink(buildOrderMessage(cart))} target="_blank" rel="noreferrer">
              <FaWhatsapp size={20} /> Order on WhatsApp
            </a>
            <p className="text-center mt-2 mb-0" style={{ fontSize: ".78rem", color: "var(--muted)" }}>Payment cafe par — cash ya card, jo aap ko asaan lage.</p>
          </div>
        )}
      </aside>
    </>
  );
}
