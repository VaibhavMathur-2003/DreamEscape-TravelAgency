
import React from 'react'
import "./BigCard.css"

function BigCard(props) {

  return (
    <div className="bigCard">
      <div className="title">
      <h4>{props.title}</h4>
      </div>
        <div className="bigImg">
            <img src={props.img} alt=""  />
        </div>
        <div className="bigCardPara">
            {props.description}
        </div>
    </div>
  )
}

export default BigCard