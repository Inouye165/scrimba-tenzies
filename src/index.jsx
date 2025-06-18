// index.js (or similar)
import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import App from './App';
import './index.css'; // Make sure your CSS is imported here too, often it is.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);