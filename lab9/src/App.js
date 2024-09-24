import React, { useState } from "react";
import ImageGallery from "./components/ImageGallery.js"; 
import "./App.css"; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    window.alert(`Username: ${username}\nPassword: ${password}`);
    
    setIsLoggedIn(true);
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <ImageGallery /> 
      ) : (
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username: </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password: </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
