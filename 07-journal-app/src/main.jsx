import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { JournapApp } from './JournapApp.jsx';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <JournapApp />
    </BrowserRouter>
  </StrictMode>
);
