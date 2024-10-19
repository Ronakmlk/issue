import React from 'react';
import ReactDOM from 'react-dom/client'; // Change this import
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode> {/* Optional: helps to identify potential problems in your app */}
      <App />
  </React.StrictMode>
);
