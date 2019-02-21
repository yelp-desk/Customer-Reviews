import axios from 'axios'
import React from 'react';

class AjaxButtons extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      usefulCount: this.props.review.usefulCount,
      funnyCount: this.props.review.funnyCount,
      coolCount: this.props.review.coolCount,

      usefulToggle: this.props.review.usefulToggle,
      funnyToggle: this.props.review.funnyToggle,
      coolToggle: this.props.review.coolToggle,

      usefulColor: this.props.review.usefulColor,
      funnyColor: this.props.review.funnyColor,
      coolColor: this.props.review.coolColor,

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
        usefulColor: 'blue'
      })
      .then((response)=>{
        var format = JSON.parse(response.config.data)
          console.log('toggle on',format)
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
        argument: arguments[0],
        name: this.props.review.name,
        usefulCount: this.state.usefulCount -1,
        usefulToggle: 0,
        usefulColor: 'white'
      })
      .then((response)=>{
        var format = JSON.parse(response.config.data)
          console.log('toggle off',format)
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
        funnyColor: 'blue'
      })
      .then((response)=>{
        var format = JSON.parse(response.config.data)
          console.log('toggle on',format)
        this.setState({
          funnyCount: format.funnyCount,
          funnyColor: format.funnyColor,
          funnyToggle: format.funnyToggle,
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
        funnyColor: 'white'
      })
      .then((response)=>{
        var format = JSON.parse(response.config.data)
          console.log('toggle off',format)
        this.setState({
          funnyCount: format.funnyCount,
          funnyColor: format.funnyColor,
          funnyToggle: format.funnyToggle,
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
        coolColor: 'blue'
      })
      .then((response)=>{
        var format = JSON.parse(response.config.data)
          console.log('toggle on',format)
        this.setState({
          coolCount: format.coolCount,
          coolColor: format.coolColor,
          coolToggle: format.coolToggle,
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
        coolColor: 'white'
      })
      .then((response)=>{
        var format = JSON.parse(response.config.data)
          console.log('toggle off',format)
        this.setState({
          coolCount: format.coolCount,
          coolColor: format.coolColor,
          coolToggle: format.coolToggle,
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
              <button style={{'backgroundColor':this.state.usefulColor}} onClick={()=>this.usefulUpdate('useful')}><img className="buttonpress" src="https://dumielauxepices.net/sites/default/files/styles/225x120/public/light-bulb-clipart-logo-664919-5076127.png?itok=ZoxF3t1z" />  Useful {this.state.usefulCount}</button>
            </div>
            <div className="buttonfunny">
              <button style={{'backgroundColor':this.state.funnyColor}} onClick={()=>this.funnyUpdate('funny')}><img className="buttonpress" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/face-with-tears-of-joy_1f602.png"/>  Funny {this.state.funnyCount}</button>
            </div>
            <div className="buttoncool">
               <button style={{'backgroundColor':this.state.coolColor}} onClick={()=>this.coolUpdate('cool')}><img className="buttonpress" src="https://www.simplystamps.com/media/catalog/product/cache/5/image/600x600/9df78eab33525d08d6e5fb8d27136e95/E/M/EMOJI_05.png"/>  Cool {this.state.coolCount}</button>
            </div>
          </div>
    </div>
    )
  }
}

export default AjaxButtons;