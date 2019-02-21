import React from 'react';
import Form from './Form.jsx';
import OneDescription from './OneDescription.jsx';
import FillerReview from './FillerReview.jsx';

const Description = (props)=>{
  return(
    <div>
      <div className="line">
        {props.reviews.map((review)=>(
          <OneDescription review={review}/>
        ))}
      </div>
      {/* <div>
       {props.reviews.map((review)=>(
          <Form review={review}/>
        ))}
      </div>
      <div>
         {props.reviews.map((review)=>(
          <FillerReview review={review}/>
        ))}
      </div> */}
    </div>
  )

}

export default Description;