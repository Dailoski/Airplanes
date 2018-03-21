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
            logo : "",
            comp : ""
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
            destination: flight._dest,
            comp: flight._comp
        });
        communication.getLogo(flight._comp, this.callbackSuccess, this.callbackFail);
    }
    callbackSuccess(a){this.setState({logo: a.data.logo});}
    callbackFail(a){console.log(a);
        this.setState({logo: "../pics/logo-default.png"});
    }
    findFlight(id){
        var arr = [];
        var rightOne;
        var x =  window.sessionStorage.getItem("data");
        arr = JSON.parse(x);
        rightOne = arr.find(flight => flight._id == id);
        return rightOne;
    }
    render(){
        
       
       
        return <div className= "details-page">
            <div className="name-and-logo">
                <div className="company-name">{this.state.comp}</div>
                <img className="details-logo" src={this.state.logo || "../pics/logo-default.png"} />
            </div>
            <div><span>Manufacturer:</span><br/> {this.state.manufacturer || "Not Available"} </div>
            <div><span>Model:</span><br/> {this.state.model || "Not Available"}</div>
            <div><span>Flight Origin:</span><br/> {this.state.flightOrigin || "Not Available" }</div>
            <div><span>Flight Destination:</span><br/> {this.state.destination || "Not Available"}</div>

        </div>;
    }
    
}
FlightDetais.propTypes = {
    match: PropTypes.object

};
export default FlightDetais;