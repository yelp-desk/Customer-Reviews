import React from 'react';
import $ from 'jquery';
import axios from 'axios';

class OneDescription extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      usefulCount: this.props.review.usefulCount,
      funnyCount: this.props.review.funnyCount,
      coolCount: this.props.review.coolCount,

      usefulToggle: false,
      funnyToggle: false,
      coolToggle: false,

      usefulColor: 'white',
      funnyColor: 'white',
      coolColor: 'white'
    }

    this.usefulUpdate = this.usefulUpdate.bind(this)
    this.funnyUpdate = this.funnyUpdate.bind(this)
    this.coolUpdate = this.coolUpdate.bind(this)

  }
  
  usefulUpdate(){
    if (this.state.usefulToggle === false){
      axios.put(`/api/restaurant/${this.props.review.id}`, {
        usefulCount: this.props.review.usefulCount + 1,
        usefulToggle: true,
        usefulColor: 'blue'
      })
      .then((response)=>{
        var format = JSON.parse(response.config.data)
          console.log('final answer',format)
        this.setState({
          usefulCount: format.usefulCount,
          usefulColor: format.usefulColor,
          usefulToggle: format.usefulToggle,
        })
      })
      .catch((error)=>{
        console.log(error)
      })
    }
    else {
      axios.put(`/api/restaurant/${this.props.review.id}`, {
        usefulCount: this.props.review.usefulCount - 1,
        usefulToggle: false,
        usefulColor: 'white'
      })
      .then((response)=>{
        var format = JSON.parse(response.config.data)
          console.log('final answer',format)
        this.setState({
          usefulCount: format.usefulCount,
          usefulColor: format.usefulColor,
          usefulToggle: format.usefulToggle,
        })
      })
      .catch((error)=>{
        console.log(error)
      })
    }

    
  }

  funnyUpdate(){

  }

  coolUpdate(){

  }

  render(){
    return(
      <div className="reviewbody">
        <div style={{width: '100%', overflow: 'hidden'}}>

          <div style={{width: '140px', float: 'left'}}><img src={this.props.review.image}/></div>

          <div>
            <div className="reviewName">{this.props.review.name}</div>
            <div><strong>{this.props.review.location}</strong></div>
            <div>{this.props.review.friendCount} friends</div>
            <div>{this.props.review.reviewsCount} reviews</div>
            <div>{this.props.review.photoCount} photo</div>
          </div>

          <div>
            <div>{this.props.review.stars}    {this.props.review.date}</div>
            <div>{this.props.review.text}</div>
          </div>

        </div>

        <div className="hoverDescription">
          <div className="hoverInfo">Share review</div>
          <div className="hoverInfo">Embed review</div>
          <div className="hoverInfo">Compliment</div>
          <div className="hoverInfo">Send Message</div>
          <div className="hoverInfo">Follow {this.props.review.name}</div>
        </div>

        <div>Was this review...?</div>
        <button style={{'backgroundColor':this.state.usefulColor}} onClick={this.usefulUpdate}><img className="buttox" src="https://dumielauxepices.net/sites/default/files/styles/225x120/public/light-bulb-clipart-logo-664919-5076127.png?itok=ZoxF3t1z" />  Useful {this.state.usefulCount}</button>
        <button style={{'backgroundColor':this.state.funnyColor}} onClick={this.funnyUpdate}><img className="buttox" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/face-with-tears-of-joy_1f602.png"/>  Funny {this.state.funnyCount}</button>
        <button style={{'backgroundColor':this.state.coolColor}} onClick={this.coolUpdate}><img className="buttox" src="https://www.simplystamps.com/media/catalog/product/cache/5/image/600x600/9df78eab33525d08d6e5fb8d27136e95/E/M/EMOJI_05.png"/>  Cool {this.state.coolCount}</button>

      </div>
    )
  }
}

export default OneDescription;

