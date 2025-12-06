import "./component.css"

export default function HeaderComp() {
    return( 
        <div className="header">
            <div className="headerItem1">
                <img src="./src/assets/Group 427318457.png" alt="img" />
                <p>O'zbekcha</p>
                <img id="rustIcon" src="./src/assets/chevron-forward-outline 1.png" alt="icon" />
            </div>

            <div className="headerItem2">
                <button>Asosiy</button>
                <button>Yangiliklar</button>
                <button>Kurslar</button>
                <button>Kutubxona</button>
                <button>Bog'lanish</button>
            </div>

            <div className="headerItem3">
                <img src="./src/assets/search-outline 2 (1).png" alt="icon" />
                <img src="./src/assets/Component 1.png" alt="icon" />
                <img src="./src/assets/notifications-outline 1.png" alt="icon" />
                <p>Jasurbek Pulatov</p>
                <img id="userIcon" src="./src/assets/Frame 6.png" alt="img" />
            </div>
        </div>
    )
}