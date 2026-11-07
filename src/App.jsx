import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");


  const showFoundCity=()=>{
    const mainCity=cities.find((item)=>{
      return item.name===city.toLowerCase()
    })

    console.log(mainCity);
    
  }

  const cities = [
    {
      name: "tehran",
      temp: 23,
      desc: "Scattered clouds with a breeze",
      icon: "⛅",
      min: 18,
      max: 26,
    },
    {
      name: "karaj",
      temp: 21,
      desc: "Bright and clear sunny skies",
      icon: "☀️",
      min: 16,
      max: 24,
    },
    {
      name: "qazvin",
      temp: 19,
      desc: "Cool winds blowing through city",
      icon: "💨",
      min: 13,
      max: 22,
    },
    {
      name: "pardis",
      temp: 18,
      desc: "Overcast skies with grey clouds",
      icon: "☁️",
      min: 12,
      max: 20,
    },
    {
      name: "rudehen",
      temp: 17,
      desc: "Gentle morning breeze and chill",
      icon: "🍃",
      min: 11,
      max: 19,
    },
    {
      name: "bumehen",
      temp: 17,
      desc: "Partly cloudy with fresh air",
      icon: "⛅",
      min: 11,
      max: 19,
    },
    {
      name: "qom",
      temp: 27,
      desc: "Warm and bright sunny weather",
      icon: "☀️",
      min: 20,
      max: 30,
    },
    {
      name: "tabriz",
      temp: 14,
      desc: "Light rain showers falling down",
      icon: "🌧️",
      min: 9,
      max: 17,
    },
    {
      name: "mashhad",
      temp: 20,
      desc: "Clear sky and calm atmosphere",
      icon: "☀️",
      min: 14,
      max: 23,
    },
    {
      name: "sabzevar",
      temp: 24,
      desc: "Sunny day with warm sunshine",
      icon: "☀️",
      min: 17,
      max: 27,
    },
    {
      name: "shiraz",
      temp: 25,
      desc: "Mild sunshine and pleasant warmth",
      icon: "☀️",
      min: 17,
      max: 28,
    },
    {
      name: "isfahan",
      temp: 24,
      desc: "Few clouds across the sky",
      icon: "🌤️",
      min: 16,
      max: 27,
    },
    {
      name: "babol",
      temp: 22,
      desc: "Humid air and steady rain",
      icon: "🌧️",
      min: 17,
      max: 24,
    },
    {
      name: "rasht",
      temp: 20,
      desc: "Heavy rain pouring all day",
      icon: "🌧️",
      min: 16,
      max: 22,
    },
    {
      name: "sari",
      temp: 21,
      desc: "Intermittent light rain and damp",
      icon: "🌦️",
      min: 16,
      max: 23,
    },
    {
      name: "yazd",
      temp: 28,
      desc: "Dry sunshine and clear air",
      icon: "☀️",
      min: 20,
      max: 31,
    },
    {
      name: "kerman",
      temp: 22,
      desc: "Clear skies and calm weather",
      icon: "☀️",
      min: 13,
      max: 25,
    },
    {
      name: "ahvaz",
      temp: 33,
      desc: "Very hot and clear sunlight",
      icon: "🔥",
      min: 25,
      max: 36,
    },
    {
      name: "kish",
      temp: 31,
      desc: "Tropical humidity and bright sun",
      icon: "🌴",
      min: 26,
      max: 33,
    },
    {
      name: "bandar abbas",
      temp: 32,
      desc: "Hazy sunshine and warm breeze",
      icon: "🌤️",
      min: 26,
      max: 34,
    },
    {
      name: "hamedan",
      temp: 15,
      desc: "Chilly breeze and crisp air",
      icon: "🌬️",
      min: 8,
      max: 18,
    },
    {
      name: "ardabil",
      temp: 11,
      desc: "Dense fog and cold temperature",
      icon: "🌫️",
      min: 6,
      max: 14,
    },
    {
      name: "urmia",
      temp: 16,
      desc: "Partly cloudy with cool winds",
      icon: "⛅",
      min: 10,
      max: 19,
    },
    {
      name: "kermanshah",
      temp: 20,
      desc: "Scattered clouds over the hills",
      icon: "🌤️",
      min: 13,
      max: 23,
    },
  ];

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
              <svg
                className="search-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                className="city-input"
                placeholder="Enter city name..."
                value={city}
                onChange={(event)=>{
                  setCity(event.target.value)
                }}
                onKeyUp={(event)=>{
                  if(event.key=="Enter")
                  {
                    showFoundCity()
                  }
                }}
              />
            </div>
            <button type="button" className="action-btn">
              <span className="btn-glow-effect" />
              <span className="btn-text">Search</span>
              <svg
                className="btn-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                onClick={showFoundCity}
              >
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
              <div className="high-low-bar"></div>
              <p className="condition-status">
                Scattered clouds over the hills
              </p>
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
                <span className="temp-range">
                  <strong>26°</strong> / 18°
                </span>
              </div>
              <div className="forecast-row">
                <span className="day-name">Mon</span>
                <span className="day-icon">☀️</span>
                <span className="temp-range">
                  <strong>28°</strong> / 19°
                </span>
              </div>
              <div className="forecast-row">
                <span className="day-name">Tue</span>
                <span className="day-icon">☁️</span>
                <span className="temp-range">
                  <strong>24°</strong> / 16°
                </span>
              </div>
              <div className="forecast-row">
                <span className="day-name">Wed</span>
                <span className="day-icon">🌧️</span>
                <span className="temp-range">
                  <strong>21°</strong> / 14°
                </span>
              </div>
              <div className="forecast-row">
                <span className="day-name">Thu</span>
                <span className="day-icon">⛈️</span>
                <span className="temp-range">
                  <strong>19°</strong> / 13°
                </span>
              </div>
              <div className="forecast-row">
                <span className="day-name">Fri</span>
                <span className="day-icon">🌤️</span>
                <span className="temp-range">
                  <strong>22°</strong> / 15°
                </span>
              </div>
              <div className="forecast-row">
                <span className="day-name">Sat</span>
                <span className="day-icon">☀️</span>
                <span className="temp-range">
                  <strong>25°</strong> / 17°
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
