import React from 'react';

class Modal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      to: '',
      optional: null,
      error: '',
      errorClass: 'hide-error'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validityCheck = this.validityCheck.bind(this)
}

handleChange(event){
  this.setState({
    [event.target.name]: event.target.value  
  })
}

handleSubmit(event){
  event.preventDefault();
  var data = [this.state.name, this.state.email, this.state.to, this.state.optional]
  console.log(data)
  this.validityCheck(data)
}
validityCheck(value){
  if (value[0].length === 0){
    this.setState({
      errorClass: 'show-error',
      error: 'The name you entered is invalid. Check the field highlighted below and try again.'
    })
  }
  else if (!value[1].includes("@") && !value[1].includes(".com")) {
    this.setState({
      errorClass: 'show-error',
      error: 'The email you entered is invalid. Check the field highlighted below and try again.'
    })
  }
  else if (!value[2].includes("@") && !value[2].includes(".com")){
    this.setState({
      errorClass: 'show-error',
      error: 'The \'To\' field is empty'
    })
  }
  else {
    this.setState({
      errorClass: 'show-success',
      error: 'Cool. Successfully Shared'
    })
    setTimeout(()=>this.props.handleClose('firstclassname'),3000)
  }

}

render(){
  return (
    <div>
      <div className={this.props.firstclassname}>
        <section className="modal-main">

          <div>
            <h2>Share Review</h2>
            <button onClick={()=>this.props.handleClose('firstclassname')}>X</button>
          </div>

          <div className={this.state.errorClass}>
            {this.state.error}
          </div>

          <div>
            <a>Share on Facebook</a>
            <a>Share on Twitter</a>
          </div>

          <div>
            <input type="text" value="https://localhost:3004" />
          </div>

          <p>OR</p>

          <div>
            <form onSubmit={this.handleSubmit}>
              <p>Your Name</p>
              <input type="text" name="name" onChange={this.handleChange}/>
              <p>Your Email</p>
              <input type="text" name="email" onChange={this.handleChange}/>
              <p>To</p>
              <input type="text" name="to" onChange={this.handleChange}/>
              <p>Add a note Optional</p>
              <input type="text" name="optional" onChange={this.handleChange}/>
              <div>
                <input type="submit" value="Submit"/>
              </div>
            </form>
          </div>

        </section>
      </div>




      <div className={this.props.secondclassname}>
        <section className="modal-main">
          <p>Data</p>
          <p>Modal</p>
          <button onClick={()=>this.props.handleClose('secondclassname')}>close</button>
        </section>
      </div>

      <div className={this.props.thirdclassname}>
        <section className="modal-main">
          <p>the 3rd</p>
          <p>Modal</p>
          <button onClick={()=>this.props.handleClose('thirdclassname')}>close</button>
        </section>
      </div>

      <div className={this.props.fourthclassname}>
        <section className="modal-main">
          <p>the 4th</p>
          <p>Modal</p>
          <button onClick={()=>this.props.handleClose('fourthclassname')}>close</button>
        </section>
      </div>

      <div className={this.props.fifthclassname}>
        <section className="modal-main">
          <p>the 5th</p>
          <p>Modal</p>
          <button onClick={()=>this.props.handleClose('fifthclassname')}>close</button>
        </section>
      </div>
    </div>
  )
};
}


export default Modal;