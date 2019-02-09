import React from 'react';
import OneDescription from './OneDescription.jsx'

const Description = (props)=>{
  return(
    <div className="line">
      {props.reviews.map((review)=>{
        return <OneDescription review={review}/>
      })}
    </div>
  )

}

export default Description;