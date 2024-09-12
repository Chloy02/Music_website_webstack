import "./App.css";

function getAlbum() {
  const albums = ['Midnight Serenades', 'Heartflet Horizons', 'Whispers from the past', 'Starlit Stories', 'Eclipsed Emotions'];
  return alnums[Math.floor(Math.random() * albums.length)];
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
    <button onClick = {handleClick}>Add Animal</button>
    <div className = "animal-list">{renderAlbums}</div>
  </div>
}
export default App
