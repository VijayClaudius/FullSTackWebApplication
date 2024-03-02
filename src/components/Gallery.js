import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Photo Gallery</h2>
      <div className="image-grid">
        <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" />
        <img src="image4.jpg" alt="Image 4" />
      </div>
    </div>
  );
};

export default Gallery;
