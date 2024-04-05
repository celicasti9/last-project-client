import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/auth.context.jsx'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './css/style.css';
import './css/satoshi.css';
{/*import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import 'nouislider/dist/nouislider.css';
import 'dropzone/dist/dropzone.css';*/}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
