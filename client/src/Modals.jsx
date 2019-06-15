import React from 'react';
import FirstModal from './FirstModal.jsx'

class Modals extends React.Component {
  constructor(props){
    super(props)
    
}

render(){
  return (
    <div>
      <div className={this.props.firstclassname}>
        <section className="modal-main">
          <FirstModal handleClose={this.props.handleClose}/>
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


export default Modals;