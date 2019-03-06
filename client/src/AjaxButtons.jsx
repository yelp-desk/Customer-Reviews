import axios from 'axios'
import React from 'react';

class AjaxButtons extends React.Component {
  constructor(props){
    super(props)

    if (this.props.review.usefulCount === 0){
      this.props.review.usefulCount = null
    } 
    if (this.props.review.funnyCount === 0){
      this.props.review.funnyCount = null
    } 
    if (this.props.review.coolCount === 0){
      this.props.review.coolCount = null
    } 
    
    this.state = {
      usefulCount: this.props.review.usefulCount,
      funnyCount: this.props.review.funnyCount,
      coolCount: this.props.review.coolCount,

      usefulToggle: this.props.review.usefulToggle,
      funnyToggle: this.props.review.funnyToggle,
      coolToggle: this.props.review.coolToggle,

      usefulBackgroundColor: this.props.review.usefulBackgroundColor,
      funnyBackgroundColor: this.props.review.funnyBackgroundColor,
      coolBackgroundColor: this.props.review.coolBackgroundColor,

      usefulFontColor: this.props.review.usefulFontColor,
      funnyFontColor: this.props.review.funnyFontColor,
      coolFontColor: this.props.review.coolFontColor,

      voteButtonResponse: "Was this review …?",
      responseColor: '#444343',

    }
    this.usefulUpdate = this.usefulUpdate.bind(this)
    this.funnyUpdate = this.funnyUpdate.bind(this)
    this.coolUpdate = this.coolUpdate.bind(this)
  }

  usefulUpdate(){
    this.setState({
      voteButtonResponse: "Thanks for your vote!",
      responseColor: "green"
    })
    if (this.state.usefulToggle === 0 || this.state.usefulToggle === null ){
      axios.put(`/api/restaurant/${this.props.review.id}`, {
        argument: arguments[0],
        name: this.props.review.name,
        usefulCount: this.state.usefulCount + 1,
        usefulToggle: 1,
        usefulBackgroundColor: 'blue',
        usefulFontColor: 'white'
      })
      .then((response)=>{
        var format = JSON.parse(response.config.data)
          console.log('toggle on',format)
        this.setState({
          usefulCount: format.usefulCount,
          usefulBackgroundColor: format.usefulBackgroundColor,
          usefulToggle: format.usefulToggle,
          usefulFontColor: format.usefulFontColor
        })
      })
      .catch((error)=>{
        console.log(error)
      })
    }
    else {
      axios.put(`/api/restaurant/${this.props.review.id}`, {
        argument: arguments[0],
        name: this.props.review.name,
        usefulCount: this.state.usefulCount -1,
        usefulToggle: 0,
        usefulBackgroundColor: 'white',
        usefulFontColor: 'black'
      })
      .then((response)=>{
        var format = JSON.parse(response.config.data)
        console.log('toggle off',format)
        if (format.usefulCount === 0){
          format.usefulCount = null
        } 
        this.setState({
          usefulCount: format.usefulCount,
          usefulBackgroundColor: format.usefulBackgroundColor,
          usefulToggle: format.usefulToggle,
          usefulFontColor: format.usefulFontColor
        })
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  }

  funnyUpdate(){
    this.setState({
      voteButtonResponse: "Thanks for your vote!",
      responseColor: "green"
    })
    if (this.state.funnyToggle === 0 || this.state.funnyToggle === null) {
      axios.put(`/api/restaurant/${this.props.review.id}`, {
        argument: arguments[0],
        name: this.props.review.name,
        funnyCount: this.state.funnyCount + 1,
        funnyToggle: 1,
        funnyBackgroundColor: 'blue',
        funnyFontColor: 'white'
      })
      .then((response)=>{
        var format = JSON.parse(response.config.data)
          console.log('toggle on',format)
        this.setState({
          funnyCount: format.funnyCount,
          funnyBackgroundColor: format.funnyBackgroundColor,
          funnyToggle: format.funnyToggle,
          funnyFontColor: format.funnyFontColor
        })
      })
      .catch((error)=>{
        console.log(error)
      })
    }
    else {
      axios.put(`/api/restaurant/${this.props.review.id}`, {
        argument: arguments[0],
        name: this.props.review.name,
        funnyCount: this.state.funnyCount -1,
        funnyToggle: 0,
        funnyBackgroundColor: 'white',
        funnyFontColor: 'black'
      })
      .then((response)=>{
        var format = JSON.parse(response.config.data)
        console.log('toggle off',format)
        if (format.funnyCount === 0){
          format.funnyCount = null
        } 
        this.setState({
          funnyCount: format.funnyCount,
          funnyBackgroundColor: format.funnyBackgroundColor,
          funnyToggle: format.funnyToggle,
          funnyFontColor: format.funnyFontColor
        })
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  }

  coolUpdate(){
    this.setState({
      voteButtonResponse: "Thanks for your vote!",
      responseColor: "green"
    })
    if (this.state.coolToggle === 0 || this.state.coolToggle === null){
      axios.put(`/api/restaurant/${this.props.review.id}`, {
        argument: arguments[0],
        name: this.props.review.name,
        coolCount: this.state.coolCount + 1,
        coolToggle: 1,
        coolBackgroundColor: 'blue',
        coolFontColor: 'white'
      })
      .then((response)=>{
        var format = JSON.parse(response.config.data)
          console.log('toggle on',format)
        this.setState({
          coolCount: format.coolCount,
          coolBackgroundColor: format.coolBackgroundColor,
          coolToggle: format.coolToggle,
          coolFontColor: format.coolFontColor
        })
      })
      .catch((error)=>{
        console.log(error)
      })
    }
    else {
      axios.put(`/api/restaurant/${this.props.review.id}`, {
        argument: arguments[0],
        name: this.props.review.name,
        coolCount: this.state.coolCount -1,
        coolToggle: 0,
        coolBackgroundColor: 'white',
        coolFontColor: 'black'
      })
      .then((response)=>{
        var format = JSON.parse(response.config.data)
          console.log('toggle off',format)
          if (format.coolCount === 0){
            format.coolCount = null
          } 
        this.setState({
          coolCount: format.coolCount,
          coolBackgroundColor: format.coolBackgroundColor,
          coolToggle: format.coolToggle,
          coolFontColor: format.coolFontColor
        })
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  }
  render(){
    return(
    <div className="buttonbody">
       <div style={{'color':this.state.responseColor}}><a className="buttonresponse">{this.state.voteButtonResponse}</a></div>
          <div>
            <div className="buttonuseful" >
              <button style={{'backgroundColor':this.state.usefulBackgroundColor}} onClick={()=>this.usefulUpdate('useful')}>
              <img className="buttonpress" src="https://dumielauxepices.net/sites/default/files/styles/225x120/public/light-bulb-clipart-logo-664919-5076127.png?itok=ZoxF3t1z" />  
              <a className="buttontext" style={{'color':this.state.usefulFontColor}}> Useful {this.state.usefulCount}</a> </button>
            </div>
            <div className="buttonfunny">
              <button style={{'backgroundColor':this.state.funnyBackgroundColor}} onClick={()=>this.funnyUpdate('funny')}>
              <img className="buttonpress" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/face-with-tears-of-joy_1f602.png"/>  
              <a className="buttontext" style={{'color':this.state.funnyFontColor}}> Funny {this.state.funnyCount}</a> </button>
            </div>
            <div className="buttoncool">
               <button style={{'backgroundColor':this.state.coolBackgroundColor}} onClick={()=>this.coolUpdate('cool')}>
               <img className="buttonpress" src="https://www.simplystamps.com/media/catalog/product/cache/5/image/600x600/9df78eab33525d08d6e5fb8d27136e95/E/M/EMOJI_05.png"/>
               <a className="buttontext" style={{'color':this.state.coolFontColor}}> Cool {this.state.coolCount}</a> </button>
            </div>
          </div>
    </div>
    )
  }
}

export default AjaxButtons;