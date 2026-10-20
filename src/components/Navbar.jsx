import { FaShoppingBasket } from "react-icons/fa";

export default function Navbar({ cartCount, onCartOpen }) {
  return (
    <nav className="navbar navbar-expand-lg sippin-nav sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
          <img src="/logo.png" alt="Sippin Cafe" className="logo-img" />
          <span>
            <span className="brand-name d-block">SIPPIN</span>
            <span className="brand-sub d-block">cafe</span>
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">Our Story</a></li>
            <li className="nav-item"><a className="nav-link" href="#menu">Menu</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#reviews">Reviews</a></li>
            <li className="nav-item"><a className="nav-link" href="#visit">Visit Us</a></li>
          </ul>
          <div className="d-flex align-items-center gap-3">
            <a href="#menu" className="btn-brown d-none d-lg-inline-block">Order Now</a>
            <button className="cart-btn" onClick={onCartOpen} aria-label="Open cart">
              <FaShoppingBasket />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
