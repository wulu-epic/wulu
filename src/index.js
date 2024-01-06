import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = "wulu's portfolio";

const AppWithMouseEffect = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursor = document.querySelector('.cursor');
      cursor.style.top = `${event.clientY}px`;
      cursor.style.left = `${event.clientX}px`;
    };
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor" />
      <App />
    </>
  );
};

root.render(
  <React.StrictMode>
    <AppWithMouseEffect />
  </React.StrictMode>
);