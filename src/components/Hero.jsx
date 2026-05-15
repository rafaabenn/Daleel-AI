import { useState } from 'react';
import { suggestionPills } from '../data/tools';
import './Hero.css';

export default function Hero() {
  const [query, setQuery] = useState('');

  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">Le bon outil IA pour chaque besoin</h1>
        <p className="hero-subtitle">
          Plus de <strong>50 outils</strong> classés, comparés et recommandés
        </p>

        <div className="hero-search-wrapper">
          <div className="hero-search-box">
            <span className="search-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              className="search-input"
              placeholder="Que voulez-vous faire aujourd'hui ?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="search-btn">Rechercher</button>
          </div>
        </div>

        <div className="hero-pills">
          {suggestionPills.map((pill) => (
            <button
              key={pill}
              className="suggestion-pill"
              onClick={() => setQuery(pill)}
            >
              {pill}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
