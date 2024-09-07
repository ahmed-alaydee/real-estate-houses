import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import HousContextProvider from './components/HouseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HousContextProvider> {/* Add the context provider here */}
      <RouterProvider router={router} />
    </HousContextProvider>
  </React.StrictMode>
);