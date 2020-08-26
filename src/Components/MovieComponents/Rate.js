import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import "./MovieComponents.css"


export default function Rate({rate}){
  const starRating=[];
  for(let istar =0;istar<Math.floor(rate);istar++){
    starRating.push(<FontAwesomeIcon icon={faStar} />)
  }
  if (rate >Math.floor(rate) )
    starRating.push(<FontAwesomeIcon icon={faStarHalfAlt}/>)

  return(
    <React.Fragment>
      <div className="star">
        {starRating}
      </div>
    </React.Fragment>

  )
}
