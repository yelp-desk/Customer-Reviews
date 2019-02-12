import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import photos from '../dist/starPhotos/photos.js'
import AjaxButtons from './AjaxButtons.jsx'

class OneDescription extends React.Component {
  constructor(props){
    super(props)
    // console.log(JSON.stringify(photos[this.props.review.starsCount]))
  }

  render(){
    return(
      <div className="review-body">

        <div className="review-sidebar" >

            <div className="profile-body">
              <div><img className="profile-picture" src={this.props.review.image}/></div>

              <div className="profile-description">
                <div className="profile-name">{this.props.review.name}</div>
                <div><strong>{this.props.review.location}</strong></div>
                <div>{this.props.review.friendCount} friends</div>
                <div>{this.props.review.reviewsCount} reviews</div>
                <div>{this.props.review.photoCount} photo</div>
              </div>
            </div>

            <div className="hover-box">
              <div className="hover-description">
                <div className="hover-info">Share review</div>
                <div className="hover-info">Embed review</div>
                <div className="hover-info">Compliment</div>
                <div className="hover-info">Send Message</div>
                <div className="hover-info">Follow {this.props.review.name}</div>
              </div>
            </div>

        </div>
        
          
        <div className="review-wrapper">

          <div className="review-comment">
            <div><img height="40" width="100" src="http://images.nymag.com/news/intelligencer/intelposts120326_starstruck_560.jpg"/>    {this.props.review.date}</div>
            <div>{this.props.review.text}</div>
          </div>

          <div className="review-buttons">
            <AjaxButtons review={this.props.review}/>
          </div>

        </div>

      </div>
    )
  }
}

export default OneDescription;

