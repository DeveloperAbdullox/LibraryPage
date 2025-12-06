import "./component.css"

export default function Card({onSearch}) {
    return(
        <div className="search">
            <img src="./src/assets/search-outline 1.svg" alt="img" />
            <input type="text" 
                placeholder="Izlash" 
                onChange={(s) => onSearch(s.target.value)}
            />
        </div>
    )
}