import HeaderComp from "./Components/header/component.jsx"
import Breadcrumb from "./Components/breadcumb/component.jsx"
import PageTitle from "./Components/pageTitle/component.jsx"
import Search from "./Components/search/component.jsx"
import Banner1 from "./Components/banner1/component.jsx"
import Filter from "./Components/filter/component.jsx"
import Description from "./Components/description/component.jsx"
import Lenta from "./Components/lenta/component.jsx"
import NoData from "./Components/noData/components.jsx"


import { books } from "./data.json/book.js"
import { useState } from "react"


export default function App() {
  
  const [searchValue, setSearchValue] = useState("")
  
  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchValue.toLowerCase()))

  return(
    <div>
      <HeaderComp/>
      <Breadcrumb/>
      <div style={{display: "flex"}}>
        <PageTitle/>
        <Search onSearch={(value => setSearchValue(value))}/>
        <Banner1/>
      </div>
      <div style={{display: "flex"}}>
        <Filter/>
        <div>
        {filteredBooks.length === 0 ? (
    <NoData />
  ) : (
    filteredBooks.map(book => (
      <div key={book.id} style={{ marginBottom: "130px" }}>
        <Description
          img={book.img}
          language={book.language}
          rating={book.rating}
          title={book.title}
          oldPrice={book.oldPrice}
          newPrice={book.newPrice}
          lavelIcon={book.lavelIcon}
          lavel={book.lavel}
          categoryIcon={book.categoryIcon}
          category={book.category}
          authorIcon={book.authorIcon}
          author={book.author}
          textButton={book.textButton}
          btnColor={book.btnColor}
          likeIcon={book.likeIcon}
        />
      </div>
    ))
  )}
        
        <br /><br /><br /><br /><br /><br /><br />
          
        </div>
        <Lenta/>
      </div>
    </div>
  )
}