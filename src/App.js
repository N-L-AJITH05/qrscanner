import React from 'react';
import QRScanner from './Components/QRScanner';
import ImageGallery from './Components/ImageGallery';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Welcome to QR Code Reader</h1>
      <QRScanner />
      <ImageGallery />
    </div>
  );
};

export default App;
