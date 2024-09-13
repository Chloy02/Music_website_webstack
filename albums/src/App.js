import React from "react";
import AlbumShow from "./AlbumShow";

function getAlbum() {
  const albums = ['album1', 'album2', 'album3', 'album4', 'album5'];
  return albums[Math.floor(Math.random() * albums.length)];
}

function App() {
  const [albums, setAlbums] = React.useState([]);

  const handleClick = () => {
    setAlbums([...albums, getAlbum()]);
  };

  const renderAlbums = albums.map((album, index) => (
    <AlbumShow type={album} key={index} />
  ));

  return (
    <div className="flex flex-col items-center space-y-4 p-5">
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Show Album
      </button>
      <div className="flex flex-wrap justify-center gap-4">{renderAlbums}</div>
    </div>
  );
}

export default App;
