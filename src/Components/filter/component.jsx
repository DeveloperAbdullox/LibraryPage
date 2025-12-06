import "./component.css"

export default function Card () {
    return(
        <div className="filter">
            <div className="filterItem1">
                <h4>Filter</h4>
                <p id="cleaning">Tozalash</p>
            </div>
            <p id="id1">TILNI TANLANG:</p>
            <div className="filterItem2">
                <h4>O'zbek</h4>
                <img src="./src/assets/chevron-forward-outline 1.png" alt="icon" />
            </div>
            <p id="id2">DARAJANI TANLANG:</p>
            <div className="filterItem3">
                <h4>Barchasi</h4>
                <img src="./src/assets/chevron-forward-outline 1.png" alt="icon" />
            </div>
            <p id="id3">KATEGORIYA:</p>
            <div className="filterItem4">
                <h4>Barchasi</h4>
                <img src="./src/assets/chevron-forward-outline 1.png" alt="icon" />
            </div>
            <p id="id4">REYTING:</p>
            <div className="filterItem5">
                <img src="./src/assets/star 2.png" alt="icon" />
                <img src="./src/assets/star 2.png" alt="icon" />
                <img src="./src/assets/star 2.png" alt="icon" />
                <img src="./src/assets/star 2.png" alt="icon" />
                <img src="./src/assets/star 2.png" alt="icon" />
            </div>
        </div>
    )
}