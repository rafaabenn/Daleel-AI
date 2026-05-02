import React, { useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__logo-icon">
          <img
            src="/assets/logo.png"
            alt="Daleel AI Logo"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <span className="header__logo-fallback" style={{ display: "none" }}>
            📖
          </span>
        </div>
        <span className="header__logo-text">Daleel AI</span>
      </div>

      <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
        <a href="/" className="header__nav-link header__nav-link--active">
          Accueil
        </a>
        <a href="/categories" className="header__nav-link">
          Catégories
        </a>
        <a href="/collections" className="header__nav-link">
          Collections
        </a>
      </nav>

      <div className="header__actions">
        <a href="/login" className="header__btn header__btn--outline">
          Se connecter
        </a>
        <a href="/register" className="header__btn header__btn--primary">
          S'inscrire
        </a>
      </div>

      <button
        className="header__burger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
