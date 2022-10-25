import React from "react";

export default class Tokyo extends React.Component {

    
    render() {
    return (
<div className="mordor-column col-12 col-md-3 mb-4">
<div className="container h-100">
<div className="row d-flex justify-content-center align-items-center">

    <div className="card weather-box border shadow">
        <div className="card-body p-4">
        <div className="d-flex">
            <h3 className="flex-grow-1 text-center mt-3 mb-0">Mordor</h3>
        </div>

        <div className="d-flex flex-column text-center mt-3 mb-4">
            <h6 className="display-4 mb-0 font-weight-bold">
            {this.props.dataFetched === false ? <span></span> : 
            `130°F`}
            </h6>

            {this.props.dataFetched === false ? <span></span> : 
            <img src="https://hfh-projects.s3.us-west-1.amazonaws.com/eye-of-sauron.png" className="sauron-img mx-auto mt-3 mb-4" alt="eye-of-sauron"/>}

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
