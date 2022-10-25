import React, { Component } from "react";
import axios from "axios";
import Modal from "./modal";
import Boston from "./boston";
import London from "./london";
import Tokyo from "./tokyo";
import Mordor from "./mordor";

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
<div className="container">
    <div className="row">
        <h1 className="text-center">Weather Dashboard</h1>
    </div>
    <div className="row mx-3">

        <Boston dataFetched={this.state.dataFetched} state={this.state} onClick={e => {this.showModal(); this.setState({cityButton: "boston"})}}/>

        <London dataFetched={this.state.dataFetched} state={this.state} onClick={e => {this.showModal(); this.setState({cityButton: "london"})}}/>

        <Tokyo dataFetched={this.state.dataFetched} state={this.state} onClick={e => {this.showModal(); this.setState({cityButton: "tokyo"})}}/>

        <Mordor dataFetched={this.state.dataFetched} onClick={e => {this.showModal(); this.setState({cityButton: "mordor"})}}/>

        <Modal onClose={this.showModal} show={this.state.show} state={this.state} dataFetched={this.state.dataFetched} cityButton={this.state.cityButton}></Modal> 

    </div>
</div>
    )}
}
    export default App;