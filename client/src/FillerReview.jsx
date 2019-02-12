import React from 'react';

class FillerReview extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div>
        <div>
          <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1f2e356daa5c/writeareview/empty_profile.png"/>
        </div>

        <div>
          Start your review of <strong>Straw</strong>
        </div>
      </div>

    )
  }
}

export default FillerReview;