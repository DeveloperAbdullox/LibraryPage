import "./component.css"
import img from "../../assets/21.png"

export default function Card() {
    return (
        <div className="noData">
            <img src={img} alt="img" />
            <p>Hech qanday malumot topilmadi</p>
        </div>
    )
}