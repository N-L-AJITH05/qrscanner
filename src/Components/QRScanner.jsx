import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner'; // New library
import './QRScanner.css';

const QRScanner = () => {
  const [scannedLink, setScannedLink] = useState('');

  const handleScan = (data) => {
    if (data) {
      setScannedLink(data.text);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div className="qr-scanner-container">
      <h2>QR Code Reader</h2>
      <QrScanner
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      {scannedLink && (
        <div className="scanned-link">
          <p>Scanned Link:</p>
          <a href={scannedLink} target="_blank" rel="noopener noreferrer">
            {scannedLink}
          </a>
        </div>
      )}
    </div>
  );
};

export default QRScanner;
