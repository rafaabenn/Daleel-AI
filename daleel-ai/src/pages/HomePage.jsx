import React, { useState } from "react";
import "../styles/HomePage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// --- Mock data (à remplacer par database.js) ---
const tools = [
  {
    id: 1,
    nom: "ChatGPT",
    description_courte: "Assistant conversationnel polyvalent",
    logo_url: null,
    logo_letter: "C",
    logo_color: "#4A90A4",
    score: 4.8,
    categorie_principale: "Texte",
    tarifs: "Freemium",
  },
  {
    id: 2,
    nom: "Midjourney",
    description_courte: "Génération d'images haute qualité",
    logo_url: null,
    logo_letter: "M",
    logo_color: "#E07B4A",
    score: 4.6,
    categorie_principale: "Image",
    tarifs: "Payant",
  },
  {
    id: 3,
    nom: "Perplexity AI",
    description_courte: "Moteur de recherche IA avec sources citées",
    logo_url: null,
    logo_letter: "P",
    logo_color: "#C8A84B",
    score: 4.5,
    categorie_principale: "Texte",
    tarifs: "Freemium",
  },
];

const categories = [
  { id: 1, nom: "Image", icon: "🖼️", color: "#E07B4A" },
  { id: 2, nom: "Texte", icon: "📝", color: "#4A90A4" },
  { id: 3, nom: "Vidéo", icon: "🎬", color: "#3A7D44" },
  { id: 4, nom: "Audio", icon: "🔊", color: "#9B59B6" },
  { id: 5, nom: "Code", icon: "💻", color: "#2E86AB" },
  { id: 6, nom: "Data", icon: "📊", color: "#3A7D44" },
];

const discoverTool = {
  nom: "Perplexity AI",
  description_courte:
    "Un moteur de recherche IA qui cite ses sources. Idéal pour la recherche académique.",
};

// ---- Tag Badge ----
const TagBadge = ({ label, type }) => (
  <span className={`tag-badge tag-badge--${type?.toLowerCase() || "default"}`}>
    {label}
  </span>
);

// ---- Tool Card ----
const ToolCard = ({ tool }) => (
  <div className="tool-card">
    <div className="tool-card__header">
      <div
        className="tool-card__logo"
        style={{ backgroundColor: tool.logo_color || "#ccc" }}
      >
        {tool.logo_url ? (
          <img src={tool.logo_url} alt={tool.nom} />
        ) : (
          <span>{tool.logo_letter}</span>
        )}
      </div>
      <div className="tool-card__rating">
        <span className="tool-card__star">⭐</span>
        <span>{tool.score}</span>
      </div>
    </div>
    <h3 className="tool-card__name">{tool.nom}</h3>
    <p className="tool-card__desc">{tool.description_courte}</p>
    <div className="tool-card__tags">
      <TagBadge label={tool.categorie_principale} type="category" />
      <TagBadge label={tool.tarifs} type={tool.tarifs} />
    </div>
  </div>
);

// ---- HomePage ----
const HomePage = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/categories?q=${encodeURIComponent(query)}`;
    }
  };

  const handleQuickSearch = (term) => {
    setQuery(term);
  };

  return (
    <div className="homepage">
      <Header />

      <main className="homepage__main">
        {/* ===== HERO ===== */}
        <section className="hero">
          <h1 className="hero__title">Le bon outil IA pour chaque besoin</h1>
          <p className="hero__subtitle">
            Plus de <strong>50 outils</strong> classés, comparés et recommandés
          </p>

          <form className="hero__search" onSubmit={handleSearch}>
            <div className="hero__search-box">
              <span className="hero__search-icon">🔍</span>
              <input
                type="text"
                className="hero__search-input"
                placeholder="Que voulez-vous faire aujourd'hui ?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit" className="hero__search-btn">
                Rechercher
              </button>
            </div>
          </form>

          <div className="hero__quick-tags">
            {["Générer une image", "Résumer un texte", "Ecrire du code", "Créer une vidéo"].map(
              (tag) => (
                <button
                  key={tag}
                  className="hero__quick-tag"
                  onClick={() => handleQuickSearch(tag)}
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </section>

        {/* ===== CATEGORIES ===== */}
        <section className="categories-section">
          <h2 className="section-title">Explorer par catégorie</h2>
          <div className="categories-grid">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`/categories?cat=${cat.nom}`}
                className="category-card"
                style={{ "--cat-color": cat.color }}
              >
                <div
                  className="category-card__icon"
                  style={{ backgroundColor: cat.color }}
                >
                  <span>{cat.icon}</span>
                </div>
                <span className="category-card__name">{cat.nom}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ===== OUTILS RECOMMANDÉS ===== */}
        <section className="tools-section">
          <div className="tools-section__header">
            <h2 className="section-title">Outils recommandés</h2>
            <a href="/categories" className="tools-section__see-all">
              Voir tout →
            </a>
          </div>
          <div className="tools-grid">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        {/* ===== DÉCOUVERTE DU JOUR ===== */}
        <section className="discover-section">
          <div className="discover-card">
            <div className="discover-card__icon">⭐</div>
            <div className="discover-card__content">
              <p className="discover-card__label">DECOUVERTE DU JOUR</p>
              <h3 className="discover-card__name">{discoverTool.nom}</h3>
              <p className="discover-card__desc">
                {discoverTool.description_courte}
              </p>
            </div>
          </div>
        </section>

        {/* ===== SUBMIT CTA ===== */}
        <section className="submit-section">
          <div className="submit-card">
            <div className="submit-card__bg-icons">
              <span>🤖</span>
              <span>🧠</span>
              <span>⚙️</span>
              <span>🔮</span>
            </div>
            <div className="submit-card__content">
              <h2 className="submit-card__title">Submit a new Ai Tool ?</h2>
              <p className="submit-card__subtitle">
                Add a new feature to help others to achieve their needs !
              </p>
              <a href="/submit" className="submit-card__btn">
                Submit →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
