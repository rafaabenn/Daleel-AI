import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToolCard } from '../components/RecommendedTools';
import { recommendedTools } from '../data/tools';
import { BookmarkSimple, ClockCounterClockwise } from '@phosphor-icons/react';
import './DashboardPage.css';

export default function DashboardPage() {
  return (
    <>
      <Navbar isLoggedIn={true} />
      
      <main className="dashboard-main">
        {/* Welcome Section */}
        <section className="dashboard-hero">
          <div className="dashboard-hero-inner">
            <h1 className="dashboard-title">Tableau de bord</h1>
            <p className="dashboard-subtitle">
              Bienvenue dans votre espace personnel, <strong>Aya</strong> 👋
            </p>
          </div>
        </section>

        <div className="dashboard-content">
          {/* Sidebar / Quick Stats */}
          <aside className="dashboard-sidebar">
            <div className="stat-card">
              <div className="stat-icon-wrapper bookmark">
                <BookmarkSimple size={24} weight="duotone" />
              </div>
              <div className="stat-info">
                <span className="stat-value">12</span>
                <span className="stat-label">Outils sauvegardés</span>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon-wrapper history">
                <ClockCounterClockwise size={24} weight="duotone" />
              </div>
              <div className="stat-info">
                <span className="stat-value">5</span>
                <span className="stat-label">Outils consultés</span>
              </div>
            </div>
          </aside>

          {/* Main Dashboard Area */}
          <div className="dashboard-tools">
            <div className="dashboard-section-header">
              <h2>Mes outils favoris</h2>
              <button className="btn-manage">Gérer</button>
            </div>
            
            <div className="tools-grid">
              {/* Reuse the tool data to simulate saved tools */}
              {recommendedTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
