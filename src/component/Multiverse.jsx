import React, { useState } from "react";
import "./Multiverse.css";
import { characters } from "./character";
import { backImages } from "./BackImages";

export default function MultiverseCards() {
  const [flipped, setFlipped] = useState({});

  const handleFlip = (name) => {
    setFlipped((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="cards-section">
      <h2 className="section-title">Which Marvel Suits You?</h2>
      <p className="section-subtitle">Pick the card that feels most like you…</p>

      <div className="cards-container">
        {characters.map((char) => {
          const backImg = backImages.find((b) => b.name === char.name)?.backImg;

          return (
            <div
              key={char.name}
              className={`card ${flipped[char.name] ? "flipped" : ""}`}
              onClick={() => handleFlip(char.name)}
            >
              <div className="card-inner">
                {/* Front */}
                <div className="card-front">
                  <img src={char.img} alt={char.name} />
                  <h3>{char.name}</h3>
                </div>

                {/* Back */}
                <div className="card-back">
                  {backImg && (
                    <img src={backImg} alt={char.name} className="back-img" />
                  )}
                  <h3>{char.name}</h3>
                  <p>Alignment: {char.alignment}</p>
                  <p>Ability: {char.ability}</p>
                  <p className="personality">
                    Hero: {char.power}% | Chaos: {100 - char.power}%
                  </p>
                  <p className="catchphrase">"{char.catchphrase}"</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}