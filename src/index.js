//using latest version
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Optional: For global styling
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
