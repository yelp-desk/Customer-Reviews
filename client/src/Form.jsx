import React from 'react'

class Form extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <form className="form" >
          <input type="text" placeholder="Search within the reviews"/>
          <button className="icon"> <img src="http://www.sclance.com/pngs/phone-icon-png-white/phone_icon_png_white_1016476.png" height="15" width="15"/></button>
        </form>
      </div>
    )
  }
}

export default Form;