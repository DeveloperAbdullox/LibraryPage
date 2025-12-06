import "./component.css"
import img from "../../assets/Vector.svg"

export default function Card() {
    return(
        <div className="pageTitle">
            <img className="vector" src={img} alt="icon" />
            <h1>Kutubxona</h1>
        </div>
    )
}