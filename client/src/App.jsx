import React from 'react';
import reactDOM from 'react-dom';
import Description from './Description.jsx';
import FillerReview from './FillerReview.jsx';
import Form from './Form.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      reviews: [],
      restaurant: 'Straw',
      reviewLength: null
    }
  }

  componentDidMount(){
    // var endpoint = Math.floor(Math.random() * 8) + 1; 
    var endpoint = 4;
    console.log(endpoint)
    $.get(`/api/restaurant/${endpoint}`, (data)=>{
      this.setState({
        reviews:data,
        restaurant: data[0].restaurant,
        reviewLength: data.length

      })
    })
  }

  render(){
    return(
      <div>
        <div className="header">
          <font>Recommended Reviews</font> for {this.state.restaurant}
        </div>
        <div>
          <Form reviewLength={this.state.reviewLength}/>
        </div>
        <div>
          <FillerReview reviews={this.state.reviews} restaurant={this.state.restaurant}/>
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