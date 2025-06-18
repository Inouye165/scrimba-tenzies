import React from "react";
import "./index.css";

/* ── Single-file Die component ── */
function Die({ value }) {
  return (
    <button className="die">
      {value}
    </button>
  );
}

/* ── Main app ── */
export default function App() {
  return (
    <main>
      <div className="dice-container">
        {/* 10 dice rendered manually for now */}
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
        <Die value={5} />
        <Die value={6} />
        <Die value={2} />
        <Die value={4} />
        <Die value={5} />
        <Die value={1} />
      </div>
    </main>
  );
}
