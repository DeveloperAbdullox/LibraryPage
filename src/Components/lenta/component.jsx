import img from "../../assets/Lenta.png"
import "./component.css"

export default function Card() {
    return (
        <div className="lenta">
            <img src={img} alt="img" />
        </div>
    )
}