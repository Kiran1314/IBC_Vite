import React from 'react';
//import ReactDOM from 'react-dom/client';
import '../src/Frontend/Styles/main.css'; 
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
//const root = ReactDOM.createRoot(document.getElementById('root'));



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// If you are using react-helmet-async on server side
const helmetContext = {};

root.render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </StrictMode>
);