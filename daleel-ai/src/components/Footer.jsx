import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-icon">📖</div>
            <span className="footer__logo-text">Daleel AI</span>
          </div>
          <p className="footer__description">
            Daleel Ai is the premier AI tools directory, exclusively featuring
            high-quality, useful, and thoroughly tested tools. Discover the
            perfect AI tool for your task using our AI-powered search engine.
          </p>
        </div>

        <div className="footer__team">
          <h4 className="footer__section-title">Get to know Us</h4>
          <ul className="footer__list">
            <li>GHAMMAD AYA</li>
            <li>BENNOUR RAFAA</li>
            <li>RIAD MARWA</li>
            <li>AMANZOU AMAL</li>
          </ul>
        </div>

        <div className="footer__trusted">
          <h4 className="footer__section-title">TRUSTED BY</h4>
          <div className="footer__logos">
            <div className="footer__partner-logo">
              <span>FSTM</span>
            </div>
            <div className="footer__partner-logo footer__partner-logo--dark">
              <span>ILISI</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2026 Daleel AI. All rights reserved.
        </p>
        <div className="footer__links">
          <a href="/privacy" className="footer__link">
            Privacy Policy
          </a>
          <a href="/terms" className="footer__link">
            Terms of Service
          </a>
          <a href="/dcma" className="footer__link">
            DCMA
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
