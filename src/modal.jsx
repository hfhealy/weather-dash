import React from "react";

export default class Modal extends React.Component {

    
    render() {
    //defines cityView variable to dynamically change modal city data depending on city button clicked
    const cityView = this.props.state[this.props.cityButton];

    //returns nothing if show is false
    if(!this.props.show){
        return null;
    }

    return (
<div id="wrapper" className="modal-content d-flex justify-content-center align-items-center">
<div className="col-12 col-md-6 mb-4">
<div className="container h-100">
<div className="row d-flex justify-content-center align-items-center">

    <div className="card weather-box border-0 shadow w-75">
        <div className="card-body p-4">
        <div className="d-flex">
            <h3 className="flex-grow-1 text-center mt-3 mb-0">
            {this.props.dataFetched === false ? <span></span> : 
            this.props.cityButton === "mordor" ? "Mordor" : cityView.name}
            </h3>
        </div>

        <div className="d-flex flex-column text-center mt-3 mb-4">
            <h6 className="display-4 mb-0 font-weight-bold">
            {this.props.dataFetched === false ? <span></span> : 
            this.props.cityButton === "mordor" ? "130°F" : 
            `${cityView.main.temp.toFixed(0)}°F`}
            </h6>

            <span className="">
            {this.props.dataFetched === false ? <span></span> : 
            this.props.cityButton === "mordor" ? "Heated by the fires of Mount Doom" : 
            `${cityView.weather[0].description.charAt(0).toUpperCase()}${cityView.weather[0].description.slice(1)}`}
            </span>
        </div>

        <div className="d-flex align-items-center mb-4">
        <div className="flex-grow-1">
            <div className="ms-1">
            {this.props.dataFetched === false ? <span></span> : 
            this.props.cityButton === "mordor" ? "Pressure: enough to destroy the ring" : 
            `Pressure: ${cityView.main.pressure}`} 
            </div>

            <div className="ms-1">
            {this.props.dataFetched === false ? <span></span> : 
            this.props.cityButton === "mordor" ? "Humidity: 75" : 
            `Humidity: ${cityView.main.humidity}`} 
            </div>

            <div className="ms-1">
            {this.props.dataFetched === false ? <span></span> : 
            this.props.cityButton === "mordor" ? "Visibility: 0" : 
            `Visibility: ${cityView.visibility}`} 
            </div>
        </div>
        <div>
            <img src={this.props.cityButton === "mordor" ? "https://hfh-projects.s3.us-west-1.amazonaws.com/eye-of-sauron.png" : `http://openweathermap.org/img/wn/${cityView.weather[0].icon}@2x.png`} width="125px" alt="weather-icon" />
        </div>
        </div>
        <div className="d-flex justify-content-center">
            <button className="btn btn-light shadow w-100" onClick={this.props.onClose}> Close </button>
        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
        
    );
    }
}
