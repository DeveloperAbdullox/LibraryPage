import "./component.css"

export default function Card({img, language, rating, title, oldPrice, newPrice, lavelIcon, lavel, categoryIcon, category, authorIcon, author, textButton, btnColor, likeIcon}) {
    return (
        <div className="Card">
            <img id="img1" src={img} alt="img" />
            <p id="language">{language}</p>
            <p id="rating">{rating}</p>
            <div className="cardItem">
                <h1>{title}</h1>
                <span>{oldPrice}</span>
                <p id="newPrice">{newPrice}</p>
                <div className="infoItem">
                    <img src={lavelIcon} alt="icon" />
                    <p>{lavel}</p>
                    <img src={categoryIcon} alt="icon" />
                    <p>{category}</p>
                    <img src={authorIcon} alt="icon" />
                    <p>{author}</p>
                </div>
                <div className="buttonItem">
                    <button style={{backgroundColor: btnColor}}>{textButton}</button>
                    <img src={likeIcon} alt="icon" />
                </div>
            </div>
        </div>
      );
}