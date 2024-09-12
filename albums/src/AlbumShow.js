import "./AlbumShow.css"
import {useState} from "react"
import album1 from "./imgs/midnight_serenades.jpeg"
import album2 from "./imgs/heartfelt_horizons.jpeg"
import album3 from "./imgs/Whispers_from_past.jpeg"
import album4 from "./imgs/starlit_stories.jpeg"
import album5 from "./imgs/eclipsed_emotions.jpeg"
import heart from "./imgs/heart.svg"
const albumMap = {
    album1: album1,
    album2:album2,
    album3: album3,
    album4: album4,
    album5: album5
}

function Albumshow({type}){
    const [click,setClick] = useState(0)

    const handleClick= () => {
        setClick(click+1)
    }
    return <div className="album-show">
        <img className="album" alt = "album" src= {albumMap[type]} />
        <img className="heart" alt="heart" src={heart}
        onClick={handleClick} style={{width: 10+10*click+'px'}} />
    </div>
}

export default Albumshow