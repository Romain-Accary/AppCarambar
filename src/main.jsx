import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './component/Header.jsx';
import App from './App.jsx';
import './style/index.css';
import './style/header.css';
import './style/jokebox.css';
import './style/jokebutton.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>,
);
