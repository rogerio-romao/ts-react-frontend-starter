// packages
import React from 'react';
import { createRoot } from 'react-dom/client';

// components
import App from './pages/App.tsx';

// styles
import './css/global.css';

createRoot(document.querySelector('#root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
