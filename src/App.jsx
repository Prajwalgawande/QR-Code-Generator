import React, { useState } from 'react'
import './App.css'
import QrCode from './QrCode'

const App = () => {
  const [Url, setUrl] = useState("");
  const [Image, setImage] = useState("");
  const [Color, setColor] = useState("#000000");
  const handleShare = async (url, image) => {
  try {
    if (navigator.share) {
      await navigator.share({
        title: 'QR Code',
        text: 'Check out this QR code I generated!',
        url: url || window.location.href, 
      });
    } else {
      alert("Sharing not supported on this browser. Copy the link instead.");
    }
  } catch (error) {
    console.error("Error sharing:", error);
  }
};


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <h1>QR Code Generator</h1>
      <p>Generate your QR code easily</p>

      <div className="inputs">
        <label htmlFor="Url">Enter URL</label>
        <input
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder="Enter text or URL"
        />

        <label htmlFor="image">Upload Logo</label>
        <input type="file" onChange={handleImageUpload} id="image" />

        <label htmlFor="color">Select QR Code Color</label>
        <input
          type="color"
          id="color"
          value={Color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <div className="qr-container">
        {Url.length > 0 ? (
          <QrCode
            value={Url}
            fgColor={Color}
            imageSettings={{
              src: Image,
              height: 40,
              width: 40,
              excavate: true,
            }}
          />
        ) : null}
      </div>
      <button
        onClick={() => handleShare(Url, Image)}
        className="share-btn"
      >
        Share QR Code
      </button>

    </>
  );
};

export default App;
