import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './Contexts/CartContext';
import { MenuProvider } from './Contexts/MenuContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <MenuProvider>
        <Router>
          <App />
        </Router>
      </MenuProvider>
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
