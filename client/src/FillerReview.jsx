import React from 'react';

const FillerReview = (props) => {
  // var rest = props.reviews['0']['restaurant']
  // console.log(rest)
  // console.log(Object.values(rest))


    return(
      <div className="fillerbody">
        <div className="filler-image">
          <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1f2e356daa5c/writeareview/empty_profile.png"/>
        </div>

        <div className="filler-reviewform">

          <div className="filler-background">
            <div className='one' type='radio'> </div>
            <div className='two' type='radio'> </div>
            <div className='three' type='radio'> </div>
            <div className='four' type='radio'> </div>
            <div className='five' type='radio'> </div>  
            {/* <img className="test" src="https://www.freeiconspng.com/uploads/white-star-icon-13.png"/> */}
          </div>

          <div className="filler-initiate">
            <a className="filler-initiate-text">Start your review of <strong>Straw</strong></a>
          </div>
        </div>

      </div>

    )
}

export default FillerReview;