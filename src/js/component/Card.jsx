import React from "react"

const Card = ({title,imagen}) => {

  let style= {width:"18rem", margin:"10px"}
  let imageStyle= {height:"200px", width:"100%"}
  return (
    <div className="card" style= {style}>
      <img src={imagen} style={imageStyle} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  )
}
 
export default Card;


