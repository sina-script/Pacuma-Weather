import React from "react";
import "./App.css";

 function App() {
  return (
    <div className="weather-wrapper" dir="ltr">

      <div className="glow-sphere sphere-purple" />
      <div className="glow-sphere sphere-dark" />

      <div className="weather-container">

        <header className="app-header">
          <div className="brand">
            <h1 className="brand-title">AuraCast</h1>
          </div>

          <div className="search-bar-container">
            <div className="input-group">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                className="city-input"
                placeholder="Enter city name..."
              />
            </div>
            <button type="button" className="action-btn">
              <span className="btn-glow-effect" />
              <span className="btn-text">Search</span>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </header>


        <main className="main-layout">

          <section className="hero-card">
            <div className="hero-info">
              <span className="date-badge">Sunday, Nov 8, 2026</span>
              <h2 className="city-title">Tehran</h2>
              <div className="temp-display">
                <span className="current-temp">23</span>
                <span className="temp-unit">°C</span>
              </div>
              <p className="condition-status">Partly Cloudy • Gentle Breeze</p>
              <div className="high-low-bar">
                <span>H: <strong>26°</strong></span>
                <span className="divider">/</span>
                <span>L: <strong>18°</strong></span>
              </div>
            </div>



          </section>


          <section className="forecast-card">
            <div className="forecast-header">
              <h3 className="section-title">7-Day Forecast</h3>
   
            </div>

            <div className="forecast-list">
              <div className="forecast-row active-day">
                <span className="day-name">Today</span>
                <span className="day-icon">⛅</span>
                <span className="temp-range"><strong>26°</strong> / 18°</span>
              </div>
              <div className="forecast-row">
                <span className="day-name">Mon</span>
                <span className="day-icon">☀️</span>
                <span className="temp-range"><strong>28°</strong> / 19°</span>
              </div>
              <div className="forecast-row">
                <span className="day-name">Tue</span>
                <span className="day-icon">☁️</span>
                <span className="temp-range"><strong>24°</strong> / 16°</span>
              </div>
              <div className="forecast-row">
                <span className="day-name">Wed</span>
                <span className="day-icon">🌧️</span>
                <span className="temp-range"><strong>21°</strong> / 14°</span>
              </div>
              <div className="forecast-row">
                <span className="day-name">Thu</span>
                <span className="day-icon">⛈️</span>
                <span className="temp-range"><strong>19°</strong> / 13°</span>
              </div>
              <div className="forecast-row">
                <span className="day-name">Fri</span>
                <span className="day-icon">🌤️</span>
                <span className="temp-range"><strong>22°</strong> / 15°</span>
              </div>
              <div className="forecast-row">
                <span className="day-name">Sat</span>
                <span className="day-icon">☀️</span>
                <span className="temp-range"><strong>25°</strong> / 17°</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}


export default App;
