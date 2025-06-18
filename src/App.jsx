import React, { useState } from "react";
import "./index.css"; // Ensure this import points to your CSS file

/* ── Die component ── */
// Renamed to DieButton to avoid confusion with a potential Die component div
function Die({ value }) {
  // The CSS targets 'div.dice-container button', so this is correct as a button
  return <button className="die-button">{value}</button>;
}

/* ── Main app ── */
export default function App() {
  // 1️⃣  helper – returns 10 random numbers 1-6
  function generateAllNewDice() {
    return Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6));
  }

  // 2️⃣  state – initialise with fresh dice
  const [dice, setDice] = useState(() => generateAllNewDice());

  // Function to re-roll the dice
  function rollDice() {
    setDice(generateAllNewDice());
  }

  // 3️⃣  map numbers → <Die> elements
  // The 'key' prop is important for React list rendering performance and avoiding bugs
  const diceElements = dice.map((value, idx) => (
    <Die key={idx} value={value} />
  ));

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            
            <button className="roll-dice" onClick={rollDice}>Roll</button>
            
        </main>
    )
}