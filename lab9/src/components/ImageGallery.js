import React, { useEffect, useState } from "react";
import { fetchImages } from "../api"; 
import "./ImageGallery.css";

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("music"); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch images from the API
  const fetchImagesData = async (searchQuery) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetchImages(searchQuery); 
      console.log("API Response: ", response.data);
      setImages(response.data.results); 
    } catch (error) {
      console.error("Error fetching images:", error);
      setError("Failed to fetch images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImagesData(query); 
  }, [query]);

  return (
    <div className="gallery-container">
      {/* Search Bar */}
      <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search for images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
        />
      </form>

      {/* Error handling */}
      {error && <p className="error-message">{error}</p>}

      {/* Gallery */}
      <div className="gallery">
        {loading ? (
          <p>Loading images...</p>
        ) : (
          images.length > 0 ? (
            images.map((image) => (
              <img
                key={image.id}
                src={image.urls.small}
                alt={image.description || "Unsplash Image"}
                className="gallery-image"
              />
            ))
          ) : (
            <p>No images found. Try a different search term.</p>
          )
        )}
      </div>
    </div>
  );
}

export default ImageGallery;
