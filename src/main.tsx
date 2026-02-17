import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { LangProvider } from './context/LanguageContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>,
);