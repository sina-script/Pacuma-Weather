import React, { useState } from "react";
import "./App.css";
import "./components/NoCity/NoCity";
import NoCity from "./components/NoCity/NoCity";

function App() {
  const [city, setCity] = useState("");
  const [mainCity, setMainCity] = useState(null);
  const [noCity, setNoCity] = useState(false);

  const showFoundCity = () => {
    const newMainCity = cities.find((item) => {
      return item.name.toLowerCase() === city.toLowerCase();
    });

    if (newMainCity) {
      setMainCity(newMainCity);
    } else {
      setNoCity(true);
    }
  };

  const cities = [
    {
      name: "Tehran",
      temp: 23,
      desc: "Scattered clouds with a breeze",
      sat: "23°",
      satIcon: "⛅",
      satMin: "18°",
      satMax: "25°",
      sun: "24°",
      sunIcon: "🌤️",
      sunMin: "19°",
      sunMax: "26°",
      mon: "22°",
      monIcon: "☁️",
      monMin: "17°",
      monMax: "24°",
      tue: "25°",
      tueIcon: "☀️",
      tueMin: "18°",
      tueMax: "26°",
      wed: "26°",
      wedIcon: "☀️",
      wedMin: "19°",
      wedMax: "27°",
      thu: "21°",
      thuIcon: "🌦️",
      thuMin: "16°",
      thuMax: "23°",
      fri: "20°",
      friIcon: "🌧️",
      friMin: "15°",
      friMax: "22°",
    },
    {
      name: "Karaj",
      temp: 21,
      desc: "Bright and clear sunny skies",
      sat: "21°",
      satIcon: "☀️",
      satMin: "16°",
      satMax: "23°",
      sun: "22°",
      sunIcon: "☀️",
      sunMin: "17°",
      sunMax: "24°",
      mon: "20°",
      monIcon: "🌤️",
      monMin: "15°",
      monMax: "22°",
      tue: "23°",
      tueIcon: "☀️",
      tueMin: "17°",
      tueMax: "25°",
      wed: "24°",
      wedIcon: "☀️",
      wedMin: "18°",
      wedMax: "26°",
      thu: "19°",
      thuIcon: "⛅",
      thuMin: "14°",
      thuMax: "21°",
      fri: "18°",
      friIcon: "☁️",
      friMin: "13°",
      friMax: "20°",
    },
    {
      name: "Qazvin",
      temp: 19,
      desc: "Cool winds blowing through city",
      sat: "19°",
      satIcon: "💨",
      satMin: "13°",
      satMax: "21°",
      sun: "18°",
      sunIcon: "💨",
      sunMin: "12°",
      sunMax: "20°",
      mon: "17°",
      monIcon: "⛅",
      monMin: "11°",
      monMax: "19°",
      tue: "20°",
      tueIcon: "🌤️",
      tueMin: "13°",
      tueMax: "22°",
      wed: "21°",
      wedIcon: "☀️",
      wedMin: "14°",
      wedMax: "23°",
      thu: "16°",
      thuIcon: "💨",
      thuMin: "10°",
      thuMax: "18°",
      fri: "15°",
      friIcon: "☁️",
      friMin: "9°",
      friMax: "17°",
    },
    {
      name: "Pardis",
      temp: 18,
      desc: "Overcast skies with grey clouds",
      sat: "18°",
      satIcon: "☁️",
      satMin: "12°",
      satMax: "19°",
      sun: "17°",
      sunIcon: "☁️",
      sunMin: "11°",
      sunMax: "18°",
      mon: "16°",
      monIcon: "🌦️",
      monMin: "10°",
      monMax: "17°",
      tue: "19°",
      tueIcon: "⛅",
      tueMin: "12°",
      tueMax: "20°",
      wed: "20°",
      wedIcon: "🌤️",
      wedMin: "13°",
      wedMax: "21°",
      thu: "15°",
      thuIcon: "🌧️",
      thuMin: "9°",
      thuMax: "16°",
      fri: "14°",
      friIcon: "☁️",
      friMin: "8°",
      friMax: "15°",
    },
    {
      name: "Rudehen",
      temp: 17,
      desc: "Gentle morning breeze and chill",
      sat: "17°",
      satIcon: "🍃",
      satMin: "11°",
      satMax: "18°",
      sun: "16°",
      sunIcon: "🍃",
      sunMin: "10°",
      sunMax: "17°",
      mon: "15°",
      monIcon: "⛅",
      monMin: "9°",
      monMax: "16°",
      tue: "18°",
      tueIcon: "🌤️",
      tueMin: "11°",
      tueMax: "19°",
      wed: "19°",
      wedIcon: "☀️",
      wedMin: "12°",
      wedMax: "20°",
      thu: "14°",
      thuIcon: "💨",
      thuMin: "8°",
      thuMax: "15°",
      fri: "13°",
      friIcon: "🌦️",
      friMin: "7°",
      friMax: "14°",
    },
    {
      name: "Bumehen",
      temp: 17,
      desc: "Partly cloudy with fresh air",
      sat: "17°",
      satIcon: "⛅",
      satMin: "11°",
      satMax: "18°",
      sun: "16°",
      sunIcon: "⛅",
      sunMin: "10°",
      sunMax: "17°",
      mon: "15°",
      monIcon: "☁️",
      monMin: "9°",
      monMax: "16°",
      tue: "18°",
      tueIcon: "🌤️",
      tueMin: "11°",
      tueMax: "19°",
      wed: "19°",
      wedIcon: "☀️",
      wedMin: "12°",
      wedMax: "20°",
      thu: "14°",
      thuIcon: "🌦️",
      thuMin: "8°",
      thuMax: "15°",
      fri: "13°",
      friIcon: "🌧️",
      friMin: "7°",
      friMax: "14°",
    },
    {
      name: "Qom",
      temp: 27,
      desc: "Warm and bright sunny weather",
      sat: "27°",
      satIcon: "☀️",
      satMin: "20°",
      satMax: "29°",
      sun: "28°",
      sunIcon: "☀️",
      sunMin: "21°",
      satMax: "30°",
      mon: "29°",
      monIcon: "☀️",
      monMin: "22°",
      monMax: "31°",
      tue: "30°",
      tueIcon: "☀️",
      tueMin: "22°",
      tueMax: "32°",
      wed: "28°",
      wedIcon: "🌤️",
      wedMin: "20°",
      wedMax: "30°",
      thu: "26°",
      thuIcon: "💨",
      thuMin: "19°",
      thuMax: "28°",
      fri: "25°",
      friIcon: "☀️",
      friMin: "18°",
      friMax: "27°",
    },
    {
      name: "Tabriz",
      temp: 14,
      desc: "Light rain showers falling down",
      sat: "14°",
      satIcon: "🌧️",
      satMin: "9°",
      satMax: "16°",
      sun: "13°",
      sunIcon: "🌧️",
      sunMin: "8°",
      sunMax: "15°",
      mon: "12°",
      monIcon: "🌦️",
      monMin: "7°",
      monMax: "14°",
      tue: "15°",
      tueIcon: "⛅",
      tueMin: "8°",
      tueMax: "16°",
      wed: "16°",
      wedIcon: "🌤️",
      wedMin: "9°",
      wedMax: "17°",
      thu: "11°",
      thuIcon: "🌧️",
      thuMin: "6°",
      thuMax: "13°",
      fri: "10°",
      friIcon: "🌨️",
      friMin: "5°",
      friMax: "12°",
    },
    {
      name: "Mashhad",
      temp: 20,
      desc: "Clear sky and calm atmosphere",
      sat: "20°",
      satIcon: "☀️",
      satMin: "14°",
      satMax: "22°",
      sun: "21°",
      sunIcon: "☀️",
      sunMin: "15°",
      sunMax: "23°",
      mon: "22°",
      monIcon: "🌤️",
      monMin: "15°",
      monMax: "24°",
      tue: "23°",
      tueIcon: "☀️",
      tueMin: "16°",
      tueMax: "25°",
      wed: "19°",
      wedIcon: "⛅",
      wedMin: "13°",
      wedMax: "21°",
      thu: "18°",
      thuIcon: "💨",
      thuMin: "12°",
      thuMax: "20°",
      fri: "17°",
      friIcon: "🌦️",
      friMin: "11°",
      friMax: "19°",
    },
    {
      name: "Sabzevar",
      temp: 24,
      desc: "Sunny day with warm sunshine",
      sat: "24°",
      satIcon: "☀️",
      satMin: "17°",
      satMax: "26°",
      sun: "25°",
      sunIcon: "☀️",
      sunMin: "18°",
      sunMax: "27°",
      mon: "26°",
      monIcon: "☀️",
      monMin: "19°",
      monMax: "28°",
      tue: "27°",
      tueIcon: "☀️",
      tueMin: "19°",
      tueMax: "29°",
      wed: "23°",
      wedIcon: "🌤️",
      wedMin: "16°",
      wedMax: "25°",
      thu: "22°",
      thuIcon: "💨",
      thuMin: "15°",
      thuMax: "24°",
      fri: "20°",
      friIcon: "⛅",
      friMin: "14°",
      friMax: "22°",
    },
    {
      name: "Shiraz",
      temp: 25,
      desc: "Mild sunshine and pleasant warmth",
      sat: "25°",
      satIcon: "☀️",
      satMin: "17°",
      satMax: "27°",
      sun: "26°",
      sunIcon: "☀️",
      sunMin: "18°",
      sunMax: "28°",
      mon: "27°",
      monIcon: "🌤️",
      monMin: "18°",
      monMax: "28°",
      tue: "28°",
      tueIcon: "☀️",
      tueMin: "19°",
      tueMax: "29°",
      wed: "25°",
      wedIcon: "⛅",
      wedMin: "16°",
      wedMax: "26°",
      thu: "24°",
      thuIcon: "🌤️",
      thuMin: "15°",
      thuMax: "25°",
      fri: "23°",
      friIcon: "☀️",
      friMin: "14°",
      friMax: "24°",
    },
    {
      name: "Isfahan",
      temp: 24,
      desc: "Few clouds across the sky",
      sat: "24°",
      satIcon: "🌤️",
      satMin: "16°",
      satMax: "26°",
      sun: "25°",
      sunIcon: "☀️",
      sunMin: "17°",
      sunMax: "27°",
      mon: "26°",
      monIcon: "☀️",
      monMin: "17°",
      monMax: "27°",
      tue: "26°",
      tueIcon: "🌤️",
      tueMin: "18°",
      tueMax: "28°",
      wed: "23°",
      wedIcon: "⛅",
      wedMin: "15°",
      wedMax: "25°",
      thu: "22°",
      thuIcon: "💨",
      thuMin: "14°",
      thuMax: "24°",
      fri: "21°",
      friIcon: "🌤️",
      friMin: "13°",
      friMax: "23°",
    },
    {
      name: "Babol",
      temp: 22,
      desc: "Humid air and steady rain",
      sat: "22°",
      satIcon: "🌧️",
      satMin: "17°",
      satMax: "24°",
      sun: "21°",
      sunIcon: "🌧️",
      sunMin: "16°",
      sunMax: "23°",
      mon: "23°",
      monIcon: "🌦️",
      monMin: "17°",
      monMax: "24°",
      tue: "24°",
      tueIcon: "⛅",
      tueMin: "18°",
      tueMax: "25°",
      wed: "22°",
      wedIcon: "🌧️",
      wedMin: "17°",
      wedMax: "23°",
      thu: "20°",
      thuIcon: "🌧️",
      thuMin: "16°",
      thuMax: "22°",
      fri: "19°",
      friIcon: "🌦️",
      friMin: "15°",
      friMax: "21°",
    },
    {
      name: "Rasht",
      temp: 20,
      desc: "Heavy rain pouring all day",
      sat: "20°",
      satIcon: "🌧️",
      satMin: "16°",
      satMax: "22°",
      sun: "19°",
      sunIcon: "🌧️",
      sunMin: "15°",
      sunMax: "21°",
      mon: "21°",
      monIcon: "🌧️",
      monMin: "16°",
      monMax: "22°",
      tue: "22°",
      tueIcon: "🌦️",
      tueMin: "17°",
      tueMax: "23°",
      wed: "20°",
      wedIcon: "🌧️",
      wedMin: "16°",
      wedMax: "21°",
      thu: "18°",
      thuIcon: "🌧️",
      thuMin: "14°",
      thuMax: "20°",
      fri: "17°",
      friIcon: "🌧️",
      friMin: "13°",
      friMax: "19°",
    },
    {
      name: "Sari",
      temp: 21,
      desc: "Intermittent light rain and damp",
      sat: "21°",
      satIcon: "🌦️",
      satMin: "16°",
      satMax: "23°",
      sun: "20°",
      sunIcon: "🌦️",
      sunMin: "15°",
      sunMax: "22°",
      mon: "22°",
      monIcon: "⛅",
      monMin: "16°",
      monMax: "23°",
      tue: "23°",
      tueIcon: "🌤️",
      tueMin: "17°",
      tueMax: "24°",
      wed: "21°",
      wedIcon: "🌧️",
      wedMin: "16°",
      wedMax: "22°",
      thu: "19°",
      thuIcon: "🌧️",
      thuMin: "15°",
      thuMax: "21°",
      fri: "18°",
      friIcon: "🌦️",
      friMin: "14°",
      friMax: "20°",
    },
    {
      name: "Yazd",
      temp: 28,
      desc: "Dry sunshine and clear air",
      sat: "28°",
      satIcon: "☀️",
      satMin: "20°",
      satMax: "30°",
      sun: "29°",
      sunIcon: "☀️",
      sunMin: "21°",
      sunMax: "31°",
      mon: "30°",
      monIcon: "☀️",
      monMin: "22°",
      monMax: "32°",
      tue: "31°",
      tueIcon: "☀️",
      tueMin: "22°",
      tueMax: "33°",
      wed: "29°",
      wedIcon: "🌤️",
      wedMin: "20°",
      wedMax: "30°",
      thu: "27°",
      thuIcon: "💨",
      thuMin: "19°",
      thuMax: "28°",
      fri: "26°",
      friIcon: "☀️",
      friMin: "18°",
      friMax: "27°",
    },
    {
      name: "Kerman",
      temp: 22,
      desc: "Clear skies and calm weather",
      sat: "22°",
      satIcon: "☀️",
      satMin: "13°",
      satMax: "24°",
      sun: "23°",
      sunIcon: "☀️",
      sunMin: "14°",
      sunMax: "25°",
      mon: "24°",
      monIcon: "☀️",
      monMin: "15°",
      monMax: "26°",
      tue: "25°",
      tueIcon: "🌤️",
      tueMin: "15°",
      tueMax: "26°",
      wed: "21°",
      wedIcon: "💨",
      wedMin: "12°",
      wedMax: "23°",
      thu: "19°",
      thuIcon: "⛅",
      thuMin: "11°",
      thuMax: "21°",
      fri: "18°",
      friIcon: "☀️",
      friMin: "10°",
      friMax: "20°",
    },
    {
      name: "Ahvaz",
      temp: 33,
      desc: "Very hot and clear sunlight",
      sat: "33°",
      satIcon: "🔥",
      satMin: "25°",
      satMax: "35°",
      sun: "34°",
      sunIcon: "🔥",
      sunMin: "26°",
      sunMax: "36°",
      mon: "35°",
      monIcon: "☀️",
      monMin: "27°",
      monMax: "37°",
      tue: "36°",
      tueIcon: "🔥",
      tueMin: "27°",
      tueMax: "38°",
      wed: "34°",
      wedIcon: "☀️",
      wedMin: "25°",
      wedMax: "36°",
      thu: "32°",
      thuIcon: "🌤️",
      thuMin: "24°",
      thuMax: "34°",
      fri: "31°",
      friIcon: "💨",
      friMin: "23°",
      friMax: "33°",
    },
    {
      name: "Kish",
      temp: 31,
      desc: "Tropical humidity and bright sun",
      sat: "31°",
      satIcon: "🌴",
      satMin: "26°",
      satMax: "33°",
      sun: "32°",
      sunIcon: "☀️",
      sunMin: "27°",
      sunMax: "34°",
      mon: "32°",
      monIcon: "☀️",
      monMin: "27°",
      monMax: "33°",
      tue: "33°",
      tueIcon: "🌴",
      tueMin: "27°",
      tueMax: "34°",
      wed: "31°",
      wedIcon: "🌤️",
      wedMin: "26°",
      wedMax: "32°",
      thu: "30°",
      thuIcon: "⛅",
      thuMin: "25°",
      thuMax: "31°",
      fri: "29°",
      friIcon: "🌤️",
      friMin: "24°",
      friMax: "30°",
    },
    {
      name: "Bandar abbas",
      temp: 32,
      desc: "Hazy sunshine and warm breeze",
      sat: "32°",
      satIcon: "🌤️",
      satMin: "26°",
      satMax: "33°",
      sun: "33°",
      sunIcon: "☀️",
      sunMin: "27°",
      sunMax: "34°",
      mon: "33°",
      monIcon: "☀️",
      monMin: "27°",
      monMax: "34°",
      tue: "34°",
      tueIcon: "☀️",
      tueMin: "28°",
      tueMax: "35°",
      wed: "32°",
      wedIcon: "🌤️",
      wedMin: "26°",
      wedMax: "33°",
      thu: "31°",
      thuIcon: "💨",
      thuMin: "25°",
      thuMax: "32°",
      fri: "30°",
      friIcon: "🌤️",
      friMin: "24°",
      friMax: "31°",
    },
    {
      name: "Hamedan",
      temp: 15,
      desc: "Chilly breeze and crisp air",
      sat: "15°",
      satIcon: "🌬️",
      satMin: "8°",
      satMax: "17°",
      sun: "14°",
      sunIcon: "🌬️",
      sunMin: "7°",
      sunMax: "16°",
      mon: "13°",
      monIcon: "⛅",
      monMin: "6°",
      monMax: "15°",
      tue: "16°",
      tueIcon: "🌤️",
      tueMin: "8°",
      tueMax: "18°",
      wed: "17°",
      wedIcon: "☀️",
      wedMin: "9°",
      wedMax: "19°",
      thu: "12°",
      thuIcon: "💨",
      thuMin: "6°",
      thuMax: "14°",
      fri: "11°",
      friIcon: "🌧️",
      friMin: "5°",
      friMax: "13°",
    },
    {
      name: "Ardabil",
      temp: 11,
      desc: "Dense fog and cold temperature",
      sat: "11°",
      satIcon: "🌫️",
      satMin: "6°",
      satMax: "13°",
      sun: "10°",
      sunIcon: "🌫️",
      sunMin: "5°",
      sunMax: "12°",
      mon: "9°",
      monIcon: "🌧️",
      monMin: "4°",
      monMax: "11°",
      tue: "12°",
      tueIcon: "⛅",
      tueMin: "6°",
      tueMax: "14°",
      wed: "13°",
      wedIcon: "🌤️",
      wedMin: "7°",
      wedMax: "15°",
      thu: "8°",
      thuIcon: "🌫️",
      thuMin: "3°",
      thuMax: "10°",
      fri: "7°",
      friIcon: "🌨️",
      friMin: "2°",
      friMax: "9°",
    },
    {
      name: "Urmia",
      temp: 16,
      desc: "Partly cloudy with cool winds",
      sat: "16°",
      satIcon: "⛅",
      satMin: "10°",
      satMax: "18°",
      sun: "15°",
      sunIcon: "⛅",
      sunMin: "9°",
      sunMax: "17°",
      mon: "14°",
      monIcon: "☁️",
      monMin: "8°",
      monMax: "16°",
      tue: "17°",
      tueIcon: "🌤️",
      tueMin: "10°",
      tueMax: "19°",
      wed: "18°",
      wedIcon: "☀️",
      wedMin: "11°",
      wedMax: "20°",
      thu: "13°",
      thuIcon: "🌧️",
      thuMin: "7°",
      thuMax: "15°",
      fri: "12°",
      friIcon: "💨",
      friMin: "6°",
      friMax: "14°",
    },
    {
      name: "Kermanshah",
      temp: 20,
      desc: "Scattered clouds over the hills",
      sat: "20°",
      satIcon: "🌤️",
      satMin: "13°",
      satMax: "22°",
      sun: "19°",
      sunIcon: "⛅",
      sunMin: "12°",
      sunMax: "21°",
      mon: "21°",
      monIcon: "☀️",
      monMin: "14°",
      monMax: "23°",
      tue: "22°",
      tueIcon: "☀️",
      tueMin: "14°",
      tueMax: "24°",
      wed: "23°",
      wedIcon: "🌤️",
      wedMin: "15°",
      wedMax: "25°",
      thu: "18°",
      thuIcon: "💨",
      thuMin: "11°",
      thuMax: "20°",
      fri: "17°",
      friIcon: "🌦️",
      friMin: "10°",
      friMax: "19°",
    },
  ];

  return (
    <>
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
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                  onKeyUp={(event) => {
                    if (event.key == "Enter") {
                      showFoundCity();
                    }
                  }}
                />
              </div>
              <button
                type="button"
                className="action-btn"
                onClick={showFoundCity}
              >
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
                <span className="date-badge">Today</span>
                <h2 className="city-title">
                  {mainCity ? mainCity.name : cities[0].name}
                </h2>
                <div className="temp-display">
                  <span className="current-temp">
                    {mainCity ? mainCity.temp : cities[0].temp}
                  </span>
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
                  <span className="day-name">Sat</span>
                  <span className="day-icon">
                    {mainCity ? mainCity.satIcon : cities[0].satIcon}
                  </span>
                  <span className="temp-range">
                    <strong>
                      {mainCity ? mainCity.satMax : cities[0].satMax}
                    </strong>{" "}
                    / {mainCity ? mainCity.satMin : cities[0].satMin}
                  </span>
                </div>
                <div className="forecast-row">
                  <span className="day-name">Sun</span>
                  <span className="day-icon">
                    {mainCity ? mainCity.sunIcon : cities[0].sunIcon}
                  </span>
                  <span className="temp-range">
                    <strong>
                      {mainCity ? mainCity.sunMax : cities[0].sunMax}
                    </strong>{" "}
                    / {mainCity ? mainCity.sunMin : cities[0].sunMin}
                  </span>
                </div>
                <div className="forecast-row">
                  <span className="day-name">Mon</span>
                  <span className="day-icon">
                    {mainCity ? mainCity.monIcon : cities[0].monIcon}
                  </span>
                  <span className="temp-range">
                    <strong>
                      {mainCity ? mainCity.monMax : cities[0].monMax}
                    </strong>{" "}
                    /{mainCity ? mainCity.monMin : cities[0].monMin}
                  </span>
                </div>
                <div className="forecast-row">
                  <span className="day-name">Tue</span>
                  <span className="day-icon">
                    {mainCity ? mainCity.tueIcon : cities[0].tueIcon}
                  </span>
                  <span className="temp-range">
                    <strong>
                      {mainCity ? mainCity.tueMax : cities[0].tueMax}
                    </strong>{" "}
                    / {mainCity ? mainCity.tueMin : cities[0].tueMin}
                  </span>
                </div>
                <div className="forecast-row">
                  <span className="day-name">Wed</span>
                  <span className="day-icon">
                    {mainCity ? mainCity.wedIcon : cities[0].wedIcon}
                  </span>
                  <span className="temp-range">
                    <strong>
                      {mainCity ? mainCity.wedMax : cities[0].wedMax}
                    </strong>{" "}
                    / {mainCity ? mainCity.wedMin : cities[0].wedMin}
                  </span>
                </div>
                <div className="forecast-row">
                  <span className="day-name">Thu</span>
                  <span className="day-icon">
                    {mainCity ? mainCity.thuIcon : cities[0].thuIcon}
                  </span>
                  <span className="temp-range">
                    <strong>
                      {mainCity ? mainCity.thuMax : cities[0].thuMax}
                    </strong>{" "}
                    / {mainCity ? mainCity.thuMin : cities[0].thuMin}
                  </span>
                </div>
                <div className="forecast-row">
                  <span className="day-name">Fri</span>
                  <span className="day-icon">
                    {mainCity ? mainCity.friIcon : cities[0].friIcon}
                  </span>
                  <span className="temp-range">
                    <strong>
                      {mainCity ? mainCity.friMax : cities[0].friMax}
                    </strong>{" "}
                    / {mainCity ? mainCity.friMin : cities[0].friMin}
                  </span>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {noCity && (
        <NoCity
          onClose={() => {
            setNoCity(false);
            setCity("");
          }}
        ></NoCity>
      )}
    </>
  );
}

export default App;
