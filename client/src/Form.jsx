import React from 'react'
import Description from './Description.jsx';
class Form extends React.Component {
  constructor(props){
    super(props)
    // console.log('number of', this.props.review)
    // need access to the number of reviews on the restaurant to display next to language
  }

  render(){
    return(
      <div className="formbody">

        <form className="form">
          
          <div className="searchbar">
            <input type="text" placeholder="Search within the reviews"/>
            <button className="icon"> <img src="http://www.sclance.com/pngs/phone-icon-png-white/phone_icon_png_white_1016476.png" height="15" width="15"/></button>
          </div>
           
          <div className="selectYelp">
            <select>
              <option value="volvo">Yelp Sort</option>
              <option value="saab">Newest First</option>
              <option value="mercedes">Oldest First</option>
              <option value="audi">Highest Rate</option>
              <option value="audi">Lowest Rated</option>
              <option value="audi">Elites</option>
            </select>
          </div>

          <div className="selectLanguage">
            <select>
              <option value="volvo">English</option>
              <option value="saab">German</option>
              <option value="mercedes">Dutch</option>
            </select>
          </div>
        </form>

      </div>
    )
  }
}

export default Form;