import "./AlbumShow.css";
import { useState } from "react";
import album1 from "./imgs/midnight_serenades.jpeg";
import album2 from "./imgs/heartfelt_horizons.jpeg";
import album3 from "./imgs/Whispers_from_past.jpeg";
import album4 from "./imgs/starlit_stories.jpeg";
import album5 from "./imgs/eclipsed_emotions.jpeg";
import heart from "./imgs/heart.svg";

const albumMap = {
  album1: album1,
  album2: album2,
  album3: album3,
  album4: album4,
  album5: album5,
};

function AlbumShow({ type }) {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="relative p-4 border border-gray-300 rounded-lg shadow-md flex items-center">
      <img
        className="h-48 rounded-md object-cover"
        alt="album"
        src={albumMap[type]}
      />
      <img
        className="absolute bottom-4 right-4 cursor-pointer transition-transform duration-300"
        alt="heart"
        src={heart}
        onClick={handleClick}
        style={{
          width: liked ? "60px" : "20px",
        }}
      />
    </div>
  );
}

export default AlbumShow;
