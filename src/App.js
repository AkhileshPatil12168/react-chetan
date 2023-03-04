import React from "react";
import Card from "./Card";
import cardsData from "./constants";


function App(){
  return(
    <>
  <h1 className="heading_style">List Of Top Web Series's</h1>
  
  {cardsData.map((data)=>{
  return <Card imgsrc={data.imgsrc} title={data.title} sname={data.sname} links={data.links}/>
})}
  </>
  )
}

export default App