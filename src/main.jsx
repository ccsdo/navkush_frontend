import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// The following line is commented out to avoid 404 errors for FontAwesome CSS
// import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Note: If you are seeing a 404 error for a script like /cdn-cgi/challenge-platform/scripts/jsd/main.js,
// it is likely caused by a browser extension (such as an ad blocker or Cloudflare protection) or a misconfiguration
// in your development environment. This is not related to your React code and can be safely ignored for local development.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
