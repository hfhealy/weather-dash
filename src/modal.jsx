import React from "react";
import PropTypes from "prop-types";


export default class Modal extends React.Component {

    // onClose(e) {
    //     this.props.show = false;
    //     this.props.onClose && this.props.onClose(e);
    //   };

  render() {
    
    if(!this.props.show){
        return null;
    }
    return (
        <div className="row">
        <div className='col-12 col-md-3 mb-4'>
<div className="container h-100">
<div className="row d-flex justify-content-center align-items-center">

    <div className="card weather-box border-0 shadow">
      <div className="card-body p-4">
        <div className="d-flex">
          <h3 className="flex-grow-1 text-center mt-3 mb-0">Boston Extra</h3>
          
        </div>

        <div className="d-flex flex-column text-center mt-3 mb-4">
          <h6 className="display-4 mb-0 font-weight-bold">80</h6>
          


        </div>
        <button  onClick={this.props.onClose}> Close </button>
        
            {/* <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              width="125px" /> */}
         

      </div>
    </div>
      
</div>
</div>
</div>
</div>
        /* <div>
          <div>Message in Modal</div>
          
            <button onClick={this.props.onClose}>
              Close
            </button>
         
        </div> */
        
      );
  }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };