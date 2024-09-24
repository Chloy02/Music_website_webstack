import React, { useState, useEffect } from 'react';
import { fetchImages } from '../api';

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("music");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadImages();
  }, [searchQuery]);

  const loadImages = async () => {
    setLoading(true);
    try {
      const response = await fetchImages(searchQuery);
      setImages(response.data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
    setLoading(false);
  };

  return (
    <div className="gallery-container">
      <h1>Image Gallery</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for images"
      />
      <button onClick={loadImages}>Search</button>
      {loading && <p>Loading...</p>}
      <div className="image-grid">
        {images.map((image) => (
          <img key={image.id} src={image.urls.small} alt={image.alt_description} />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
