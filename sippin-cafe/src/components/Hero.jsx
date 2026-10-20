export default function Hero() {
  return (
    <header className="hero-wrap" id="home">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="hero-kicker mb-3">Freshly Brewed • Every Single Day</p>
            <h1 className="hero-title">Sip. Savour.<br /><em>Stay Awhile.</em></h1>
            <p className="mt-4" style={{ color: "var(--muted)", maxWidth: 520 }}>
              Sippin Cafe mein har cup aik kahani hai — premium beans, fresh bakes aur woh cozy
              mahaul jahan dost, family aur khayal — sab slow ho jate hain.
            </p>
            <div className="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start flex-wrap">
              <a href="#menu" className="btn-brown">Explore Menu</a>
              <a href="#visit" className="btn-outline-brown">Book a Table</a>
            </div>
            <div className="row g-3 mt-4">
              <div className="col-4"><div className="stat-box"><b>22+</b><span>Menu Items</span></div></div>
              <div className="col-4"><div className="stat-box"><b>4.9★</b><span>Customer Rating</span></div></div>
              <div className="col-4"><div className="stat-box"><b>100%</b><span>Fresh Beans</span></div></div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img src="/logo.png" alt="Sippin Cafe logo" className="hero-logo" />
          </div>
        </div>
      </div>
    </header>
  );
}

export function MarqueeStrip() {
  const items = "ESPRESSO ✦ CAPPUCCINO ✦ COLD BREW ✦ MATCHA ✦ TIRAMISU ✦ CROISSANT ✦ SPANISH LATTE ✦ BASQUE CHEESECAKE ✦ ";
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">{items.repeat(3)}</div>
    </div>
  );
}
