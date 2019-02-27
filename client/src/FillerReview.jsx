import React from 'react';

const FillerReview = (props) => {
    return(
      <div className="filler-body">

        <div className="filler-image">
          <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1f2e356daa5c/writeareview/empty_profile.png"/>
        </div>

        <div className="filler-reviewform">

          <div className="filler-background">
            <div className="filler-stars-container">
              <div className='one' type='radio'> <img className="star" src="https://www.freeiconspng.com/uploads/white-star-icon-13.png" /></div>
              <div className='two' type='radio'> <img className="star" src="https://www.freeiconspng.com/uploads/white-star-icon-13.png" /></div>
              <div className='three' type='radio'> <img className="star" src="https://www.freeiconspng.com/uploads/white-star-icon-13.png" /></div>
              <div className='four' type='radio'> <img className="star" src="https://www.freeiconspng.com/uploads/white-star-icon-13.png" /> </div>
              <div className='five' type='radio'> <img className="star" src="https://www.freeiconspng.com/uploads/white-star-icon-13.png" /></div>  
            </div>
          </div>

          <div className="filler-initiate">
            <a className="filler-initiate-text">Start your review of <strong>{props.restaurant}</strong></a>
          </div>

        </div>

      </div>
    )
}

export default FillerReview;