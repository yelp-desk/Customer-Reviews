import React from 'react'
class Form extends React.Component {
  constructor(props){
    super(props)
    // console.log('number of', this.props.review)
    // need access to the number of reviews on the restaurant to display next to language
  }

  render(){
    return(
      <form className="form">
        
        <div className="searchbar">
          <input type="text" placeholder="Search within the reviews"/>
          <button className="icon"> <img src="http://www.sclance.com/pngs/phone-icon-png-white/phone_icon_png_white_1016476.png" height="15" width="15"/></button>
        </div>
          
        <div className="selectYelp">
          <select>
            <option value="sort">Yelp Sort</option>
            <option value="new">Newest First</option>
            <option value="old">Oldest First</option>
            <option value="high">Highest Rate</option>
            <option value="low">Lowest Rated</option>
            <option value="elites">Elites</option>
          </select>
        </div>

        <div className="selectLanguage">
          <select>
            <option value="en">English ({this.props.reviewLength})</option>
            <option value="gm">German</option>
            <option value="du">Dutch</option>
          </select>
        </div>
        
      </form>
    )
  }
}

export default Form;