import React from "react";
import "./App.css";
import Albumshow from "./AlbumShow";

function getAlbum() {
  const albums = ['album1', 'album2', 'album3', 'album4', 'album5'];
  return albums[Math.floor(Math.random() * albums.length)];
}

function App() {
  const [albums, setAlbums] = React.useState([]);
  const handleClick = () => {
    setAlbums([...albums, getAlbum()])
  }
  const renderAlbums = albums.map((album, index)=>{
    return <Albumshow type={album} key = {index}/>
  })
  return <div className="app">
    <button onClick = {handleClick}>Show Album</button>
    <div className = "animal-list">{renderAlbums}</div>
  </div>
}
export default App
