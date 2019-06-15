import React from 'react';
import Form from './Form.jsx';
import ReviewBodyPiece from './ReviewBodyPiece.jsx';
import FillerReview from './FillerReview.jsx';

const ReviewBody = (props)=>{
  return(
    <div>
      <div className="line">
        {props.reviews.map((review)=>(
          <ReviewBodyPiece review={review}/>
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

export default ReviewBody;