import React from "react";
import PropTypes from "prop-types";
import communication from "../services/communicationService"; 
class FlightDetais extends React.Component{
    constructor(props){
        super(props);
        this.state = this.initialState();
        this.binder();
    }
    initialState(){
        return{
            manufacturer : "",
            model : "",
            flightOrigin : "",
            destination : "",
            logo : ""
        };
    }
    binder(){
        this.callbackFail = this. callbackFail.bind(this);
        this.callbackSuccess = this.callbackSuccess.bind(this);
        this.findFlight = this.findFlight.bind(this);
    }
    componentDidMount(){
        let flight = this.findFlight(this.props.match.params.id);
        this.setState({
            manufacturer : flight._man,
            model : flight._mdl,
            flightOrigin : flight._origin,
            destination: flight._dest

        });
        communication.getLogo(flight._comp, this.callbackSuccess, this.callbackFail);
    }
    callbackSuccess(a){this.setState({logo: a.data.logo});}
    callbackFail(a){console.log(a);}
    findFlight(id){
        var arr = [];
        var rightOne;
        var x =  window.sessionStorage.getItem("data");
        arr = JSON.parse(x);
        rightOne = arr.find(flight => flight._id == id);
        return rightOne;
    }
    render(){
        
       
       
        return <div>
            <img src={this.state.logo} />
            <div>Manufacturer: {this.state.manufacturer} </div>
            <div>Model: {this.state.model}</div>
            <div>Flight Origin: {this.state.flightOrigin}</div>
            <div>Flight Destination: {this.state.destination}</div>

        </div>;
    }
    
}
FlightDetais.propTypes = {
    match: PropTypes.object

};
export default FlightDetais;