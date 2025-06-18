import React, { useState } from "react"; // Best practice: import useState directly
import "./index.css";

/* ── Die component ── */
function Die({ value }) {
  return <button className="die">{value}</button>;
}

/* ── Main app ── */
export default function App() {
  // 1️⃣  helper – returns 10 random numbers 1-6
  function generateAllNewDice() {
    return Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6));
  }

  // 2️⃣  state – initialise with fresh dice
  // Using the functional update for useState initial state for best practice,
  // although generateAllNewDice() called directly works for initial state too.
  // This ensures generateAllNewDice is only called once.
  const [dice, setDice] = useState(() => generateAllNewDice());

  // 3️⃣  map numbers → <Die> elements
  const diceElements = dice.map((value, idx) => (
    <Die key={idx} value={value} />
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
    </main>
  );
}