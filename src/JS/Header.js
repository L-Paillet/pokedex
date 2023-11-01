import "../CSS/style.css";
import pokeMap from "../asset/pokeMap.png"

export default function Header() {
    return (
        <div>
            <p>Hello</p>
            <div><img className="parallax" alt="" src={pokeMap}></img></div>
        </div>
    )
}