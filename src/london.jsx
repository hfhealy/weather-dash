import React from "react";

export default class London extends React.Component {

    
    render() {
    return (
<div className="london-column col-12 col-md-3 mb-4">
<div className="container h-100">
<div className="row d-flex justify-content-center align-items-center">

    <div className="card weather-box border shadow">
        <div className="card-body p-4">
        <div className="d-flex">
            <h3 className="flex-grow-1 text-center mt-3 mb-0">London</h3>
        </div>

        <div className="d-flex flex-column text-center mt-3 mb-4">
            <h6 className="display-4 mb-0 font-weight-bold">
            {this.props.state.dataFetched === false ? <span></span> : 
            `${this.props.state.london.main.temp.toFixed(0)}°F`}
            </h6>

            {this.props.dataFetched === false ? <span></span> : 
            <img src={`http://openweathermap.org/img/wn/${this.props.state.london.weather[0].icon}@2x.png`} className="mx-auto" alt="weather-icon"/>}

            <button className="btn btn-light shadow" onClick={this.props.onClick}> More </button>
        </div>
        </div>
    </div>
</div>
</div>
</div>
    );
    }
}
