import React, { useState } from 'react';
import './App.css';

// Local Movie Mock Database matching layout requirements
const INITIAL_MOVIES = [
  { id: "1", title: "Daredevil", image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=400&auto=format&fit=crop" },
  { id: "2", title: "The Witcher", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop", active: true },
  { id: "3", title: "Narcos", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=400&auto=format&fit=crop" },
  { id: "4", title: "Jessica Jones", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop" },
  { id: "5", title: "Lucifer", image: "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?q=80&w=400&auto=format&fit=crop" },
  { id: "6", title: "You", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=400&auto=format&fit=crop" },
  { id: "7", title: "The Crown", image: "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?q=80&w=400&auto=format&fit=crop" },
  { id: "8", title: "The Rain", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&auto=format&fit=crop" }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [movies] = useState(INITIAL_MOVIES);

  return (
    <div className="dashboard-root">
      
      {/* HEADER NAVIGATION */}
      <nav className="navbar">
        <div className="logo">Moviestan</div>
        
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#tvshows" className="active">Tv Shows</a>
          <a href="#movies">Movies</a>
          <a href="#upcoming">Upcoming</a>
        </div>

        <div className="nav-right">
          <button className="search-btn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          
          <button className="menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* HERO BANNER SECTION */}
      <header className="hero">
        <div className="hero-backdrop" />
        <div className="hero-content">
          <h1 className="hero-title">THE WITCHER</h1>
          <p className="hero-season">Season 1</p>
          
          <div className="rating-row">
            <div className="star filled"></div>
            <div className="star filled"></div>
            <div className="star filled"></div>
            <div className="star filled"></div>
            <div className="star"></div>
          </div>

          <div className="genres">
            <span>Crime</span>
            <span>Drama</span>
            <span>Mystery</span>
          </div>

          <div className="cta-row">
            <button className="btn-play" aria-label="Play">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <button className="btn-add" aria-label="Add to List">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="21" y2="12"></line>
              </svg>
            </button>
          </div>

          <p className="description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta.
          </p>
        </div>
      </header>

      {/* HORIZONTAL CAROUSEL */}
      <main className="carousel-section">
        <div className="carousel-container">
          {movies.map((movie) => (
            <div key={movie.id} className={`movie-card ${movie.active ? 'active' : ''}`}>
              <img src={movie.image} alt={movie.title} className="card-img" loading="lazy" />
              <div className="card-overlay">
                <p className="card-title">{movie.title}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}