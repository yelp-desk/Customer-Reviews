import React from 'react';
import AjaxButtons from './AjaxButtons.jsx'
import Modal from './Modal.jsx'
import {photosReview,photosProfile,photosMedia} from './OneDescriptionPhotos.js'

class OneDescription extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      show: false,
      firstclassname: "modal display-none",
      secondclassname: "modal display-none",
      thirdclassname: "modal display-none",
      fourthclassname: "modal display-none",
      fifthclassname: "modal display-none",
    }
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  showModal(){
    this.setState({
      show: true,
      [`${arguments[0]}classname`]: "modal display-block"
    })
  }
  hideModal(){
    this.setState({
      show: false,
      [`${arguments[0]}`]: "modal display-none"
    })
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
                <div className="profile-counter"><img src={photosProfile[0]}/><span>{this.props.review.friendCount}</span> friends</div>
                <div className="profile-counter"><img src={photosProfile[1]}/><span>{this.props.review.reviewsCount}</span> reviews</div>
                <div className="profile-counter"><img src={photosProfile[2]}/><span>{this.props.review.photoCount}</span> photo</div>
              </div>
            </div>

            <div className="hover-box">
              <div className="hover-description">
                  <Modal show={this.state.show} handleClose={this.hideModal} 
                    firstclassname={this.state.firstclassname}
                    secondclassname={this.state.secondclassname}
                    thirdclassname={this.state.thirdclassname}
                    fourthclassname={this.state.fourthclassname}
                    fifthclassname={this.state.fifthclassname}>
                  </Modal>

                <div onClick={()=>this.showModal('first')} className="hover-info">
                  <div className="hover-info-pic"><img src={photosMedia[0]}/></div>
                  <div className="hover-info-special"><a>Share review</a></div>
                </div>
                <div onClick={()=>this.showModal('second')} className="hover-info">
                  <div className="hover-info-pic"><img src={photosMedia[1]}/></div>
                  <div className="hover-info-special"><a>Embed review</a></div>
                </div>
                <div onClick={()=>this.showModal('third')} className="hover-info">
                  <div className="hover-info-pic"><img src={photosMedia[2]}/></div>
                  <div className="hover-info-special"><a>Compliment</a></div>
                </div>
                <div onClick={()=>this.showModal('fourth')} className="hover-info">
                  <div className="hover-info-pic"><img src={photosMedia[3]}/></div>
                  <div className="hover-info-special"><a>Send Message</a></div>
                </div>
                <div onClick={()=>this.showModal('fifth')} className="hover-info">
                  <div className="hover-info-pic"><img src={photosMedia[4]}/></div>
                  <div className="hover-info-special"><a>Follow {this.props.review.name}</a></div>
                </div>
               
              </div>
            </div>

        </div>
        
          
        <div className="review-wrapper">

          <div className="review-comment">
            <div><img height="18" width="100" src={photosReview[this.props.review.starsCount]}/>    <a className="review-date">{this.props.review.date}</a></div>
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

