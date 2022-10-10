import React, { Component } from 'react';
import axios from 'axios';
import Modal from './modal'

//modal wont close, but it will close when i press the modal button again.
//doesnt close with the close with the close button

// import { response } from '../server/server';
// import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { json } from 'express';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            boston: {},
            london: {},
            tokyo: {},
            show: false
        }
        this.showModal = this.showModal.bind(this);
    }

    componentDidMount(){
        axios
        .get(`/search/boston`)        
        .then(result => this.setState({boston: result.data.main}) );
        
        axios
        .get(`/search/london`)        
        .then(result => this.setState({london: result.data.main}) );

        axios
        .get(`/search/tokyo`)        
        .then(result => this.setState({tokyo: result.data.main}) );
        
    }
    
    // showModal(e) {
    //     this.setState({
    //       show: true
    //     });
    //   };


      

      showModal (e) {
            this.setState({
              show: !this.state.show
            });
      };

        render() {
            console.log("45", this.state.boston.temp)
            return (
<div>
<div className='row'>
    <h1 className='text-center'>Weather Dashboard</h1>
</div>
<div className='row'>
<div className='col-12 col-md-3 mb-4'>
<div className="container h-100">
<div className="row d-flex justify-content-center align-items-center">

    <div className="card weather-box border-0 shadow">
      <div className="card-body p-4">
        <div className="d-flex">
          <h3 className="flex-grow-1 text-center mt-3 mb-0">Boston</h3>
          
        </div>

        <div className="d-flex flex-column text-center mt-3 mb-4">
          <h6 className="display-4 mb-0 font-weight-bold">{this.state.boston.temp === undefined ? <span></span> : `${this.state.boston.temp.toFixed(0)}°F`}</h6>
          


        </div>
        <button  onClick={e => {this.showModal()}}> show Modal </button>
        
            {/* <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              width="125px" /> */}
         

      </div>
    </div>
      
</div>
</div>
</div>
<div className='col-12 col-md-3 mb-4'>
<div className="container h-100">
<div className="row d-flex justify-content-center align-items-center">

    <div className="card weather-box border-0 shadow">
      <div className="card-body p-4">
        <div className="d-flex">
          <h3 className="flex-grow-1 text-center mt-3 mb-0">London</h3>
          
        </div>

        <div className="d-flex flex-column text-center mt-3 mb-4">
        <h6 className="display-4 mb-0 font-weight-bold">{this.state.london.temp === undefined ? <span></span> : `${this.state.london.temp.toFixed(0)}°F`}</h6>
          
        </div>

        
            {/* <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              width="125px" /> */}
         

      </div>
    </div>
      
</div>
</div>
</div>
<div className='col-12 col-md-3 mb-4'>
<div className="container h-100">
<div className="row d-flex justify-content-center align-items-center">

    <div className="card weather-box border-0 shadow">
      <div className="card-body p-4">
        <div className="d-flex">
          <h3 className="flex-grow-1 text-center mt-3 mb-0">Tokyo</h3>
          
        </div>

        <div className="d-flex flex-column text-center mt-3 mb-4">
        <h6 className="display-4 mb-0 font-weight-bold">{this.state.tokyo.temp === undefined ? <span></span> : `${this.state.tokyo.temp.toFixed(0)}°F`}</h6>
          
        </div>

        
            {/* <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              width="125px" /> */}
         

      </div>
    </div>
      
</div>
</div>
</div>
<div className='col-12 col-md-3 mb-4'>
<div className="container h-100">
<div className="row d-flex justify-content-center align-items-center">

    <div className="card weather-box border-0 shadow">
      <div className="card-body p-4">
        <div className="d-flex">
          <h3 className="flex-grow-1 text-center mt-3 mb-0">Mordor</h3>
          
        </div>

        <div className="d-flex flex-column text-center mt-3 mb-4">
        <h6 className="display-4 mb-0 font-weight-bold">{this.state.boston.temp === undefined ? <span></span> : `160°F`}</h6>
          
        </div>

        
            {/* <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              width="125px" /> */}
         

      </div>
    </div>
      
</div>
</div>
</div>
<Modal onClose={this.showModal} show={this.state.show}></Modal> 
</div>
</div>
    )}

}
    export default App;