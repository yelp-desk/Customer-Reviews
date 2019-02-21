import React from 'react';
import reactDOM from 'react-dom';
import reviews from '../dummyData.js';
import Description from './Description.jsx';
import FillerReview from './FillerReview.jsx';
import Form from './Form.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    // var endpoint = Math.floor(Math.random() * 10) + 1; 
    var endpoint = 1
    $.get(`/api/restaurant/${endpoint}`, (data)=>{
      this.setState({
        reviews:data
      })
    })
  }

  render(){

    return(
      <div>
        <h2 className="header"><font color="#d32323">Recommended Reviews</font> for Straw</h2>
        <div>
          <Form/>
        </div>
        <div>
          <FillerReview reviews={this.state.reviews}/>
        </div>
        <div>
          <Description reviews={this.state.reviews}/>
        </div>
      </div>
    )
  }
}

reactDOM.render(
  <App/>, document.getElementById("app")
)