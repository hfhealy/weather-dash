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
        
        <div className="myModal">
          <div>Message in Modal</div>
          <div>
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      );
  }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };