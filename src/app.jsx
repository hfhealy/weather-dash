import React, { Component } from "react";
import axios from "axios";
import Modal from "./modal"

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            boston: {},
            london: {},
            tokyo: {},
            show: false,
            dataFetched: false,
            cityButton: ""
        }
        this.showModal = this.showModal.bind(this);
    }

    //grabs API data for specific cities on page load and sets state
    componentDidMount(){
        axios
        .get(`/search/boston`)        
        .then(result => this.setState({boston: result.data}) );
        
        axios
        .get(`/search/london`)        
        .then(result => this.setState({london: result.data}) );

        axios
        .get(`/search/tokyo`)        
        .then(result => this.setState({tokyo: result.data}) )
        .then(() => this.setState({dataFetched: true}));
    }

    //sets state to show or hide modal
    showModal (e) {
            this.setState({show: !this.state.show});
    };

    render() {
            
        return (
<div>
<div className="row">
    <h1 className="text-center">Weather Dashboard</h1>
</div>
<div className="row mx-3">
<div className="boston-column col-12 col-md-3 mb-4">
<div className="container h-100">
<div className="row d-flex justify-content-center align-items-center">

    <div className="card weather-box border shadow">
        <div className="card-body p-4">
        <div className="d-flex">
            <h3 className="flex-grow-1 text-center mt-3 mb-0">Boston</h3>
        </div>

        <div className="d-flex flex-column text-center mt-3 mb-4">
            <h6 className="display-4 mb-0 font-weight-bold">
            {this.state.dataFetched === false ? <span></span> : 
            `${this.state.boston.main.temp.toFixed(0)}°F`}
            </h6>

            {this.state.dataFetched === false ? <span></span> : 
            <img src={`http://openweathermap.org/img/wn/${this.state.boston.weather[0].icon}@2x.png`} className="mx-auto"/>}

            <button className="btn btn-light shadow" onClick={e => {this.showModal(); this.setState({cityButton: "boston"})}}> More </button>
        </div>
        </div>
    </div>
</div>
</div>
</div>

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
            {this.state.dataFetched === false ? <span></span> : 
            `${this.state.london.main.temp.toFixed(0)}°F`}
            </h6>

            {this.state.dataFetched === false ? <span></span> : 
            <img src={`http://openweathermap.org/img/wn/${this.state.london.weather[0].icon}@2x.png`} className="mx-auto"/> }

            <button className="btn btn-light shadow" onClick={e => {this.showModal(); this.setState({cityButton: "london"})}}> More </button>
        </div>
        </div>
    </div>
</div>
</div>
</div>

<div className="tokyo-column col-12 col-md-3 mb-4">
<div className="container h-100">
<div className="row d-flex justify-content-center align-items-center">

    <div className="card weather-box border shadow">
        <div className="card-body p-4">
        <div className="d-flex">
            <h3 className="flex-grow-1 text-center mt-3 mb-0">Tokyo</h3>
        </div>

        <div className="d-flex flex-column text-center mt-3 mb-4">
            <h6 className="display-4 mb-0 font-weight-bold">
            {this.state.dataFetched === false ? <span></span> : 
            `${this.state.tokyo.main.temp.toFixed(0)}°F`}
            </h6>

            {this.state.dataFetched === false ? <span></span> : 
            <img src={`http://openweathermap.org/img/wn/${this.state.tokyo.weather[0].icon}@2x.png`} className="mx-auto"/>}

            <button className="btn btn-light shadow" onClick={e => {this.showModal(); this.setState({cityButton: "tokyo"})}}> More </button>
        </div>
    </div>
</div>
</div>
</div>
</div>

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
            {this.state.dataFetched === false ? <span></span> : 
            `130°F`}
            </h6>

            {this.state.dataFetched === false ? <span></span> : 
            <img src="https://hfh-projects.s3.us-west-1.amazonaws.com/eye-of-sauron.png" className="sauron-img mx-auto mt-3 mb-4"/>}

            <button className="btn btn-light shadow" onClick={e => {this.showModal(); this.setState({cityButton: "mordor"})}}> More </button>
        </div>
    </div>
</div>
</div>
</div>
</div>

<Modal onClose={this.showModal} show={this.state.show} state={this.state} dataFetched={this.state.dataFetched} cityButton={this.state.cityButton}></Modal> 

</div>
</div>

    )}

}
    export default App;