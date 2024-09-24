import React from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Login />
      <ImageGallery />
    </div>
  );
}

export default App;
