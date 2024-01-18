import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

interface Pokemon {
  id: number;
  altura: number;
  peso: number;
  evolucoes: string[];
  ataques: string[];
  imagem: string;
}

function App() {
  const [showBulbasaurOut, setShowBulbasaurOut] = useState(false);
  const [showSquirtleOut, setShowSquirtleOut] = useState(false);
  const [showCharmanderOut, setShowCharmanderOut] = useState(false);
  const navigate = useNavigate();

  const handlePokemonClick = (pokemonId: number) => {
    navigate(`/carrossel/${pokemonId}`);
  };

  const bulbasaur: Pokemon = {
    id: 1,
    altura: 0.7,
    peso: 6.9,
    evolucoes: ["Ivysaur", "Venusaur"],
    ataques: ["Tackle", "Vine Whip", "Solar Beam"],
    imagem: "src/assets/bulbasaur.png",
  };

  const squirtle: Pokemon = {
    id: 2,
    altura: 0.5,
    peso: 9.0,
    evolucoes: ["Wartortle", "Blastoise"],
    ataques: ["Tackle", "Water Gun", "Hydro Pump"],
    imagem: "src/assets/squirtle.jpg",
  };

  const charmander: Pokemon = {
    id: 3,
    altura: 0.6,
    peso: 8.5,
    evolucoes: ["Charmeleon", "Charizard"],
    ataques: ["Scratch", "Ember", "Dragon Rage"],
    imagem: "src/assets/charmander.jpg",
  };

  return (
    <div className="app">
      <div className="primeiro">
        <img
          src="src/assets/bulbasaurout.png"
          className={`bulbasaruOut ${
            showBulbasaurOut ? "showBulbasaurOut" : ""
          }`}
          alt=""
        />
        {showBulbasaurOut ? (
          <img
            src="src/assets/pokeballopen.png"
            className="ballopen"
            alt="pokeball"
            onClick={() => handlePokemonClick(bulbasaur.id)}
            onMouseOut={() => setShowBulbasaurOut(false)}
          />
        ) : (
          <img
            src="src/assets/pokeball.png"
            className="ball"
            onMouseOver={() => setShowBulbasaurOut(true)}
            alt="pokeball"
          />
        )}
      </div>
      <div className="segundo">
        <img
          src="src/assets/squirtle.webp"
          className={`squirtleOut ${showSquirtleOut ? "showSquirtleOut" : ""}`}
          alt=""
        />
        {showSquirtleOut ? (
          <img
            src="src/assets/pokeballopen.png"
            className="ballopen"
            onClick={() => handlePokemonClick(squirtle.id)}
            onMouseOver={() => setShowSquirtleOut(true)}
            onMouseOut={() => setShowSquirtleOut(false)}
            alt="pokeball"
          />
        ) : (
          <img
            src="src/assets/pokeball.png"
            className="ball"
            onMouseOver={() => setShowSquirtleOut(true)}
            onMouseOut={() => setShowSquirtleOut(false)}
            alt="pokeball"
          />
        )}
      </div>
      <div className="terceiro">
        <img
          src="src/assets/charmander.webp"
          className={`charmanderOut ${
            showCharmanderOut ? "showCharmanderOut" : ""
          }`}
          alt=""
        />
        {showCharmanderOut ? (
          <img
            src="src/assets/pokeballopen.png"
            className="ballopen"
            alt="pokeball"
            onClick={() => handlePokemonClick(charmander.id)}
            onMouseOver={() => setShowCharmanderOut(true)}
            onMouseOut={() => setShowCharmanderOut(false)}
          />
        ) : (
          <img
            src="src/assets/pokeball.png"
            className="ball"
            onMouseOver={() => setShowCharmanderOut(true)}
            onMouseOut={() => setShowCharmanderOut(false)}
            alt="pokeball"
          />
        )}
      </div>
    </div>
  );
}

export default App;
