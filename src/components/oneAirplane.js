import React from "react";
import PropTypes from "prop-types";
import westOrEast from "../services/westOrEast";
import positionGenerator from "../services/positionGenerator";
const OneAirplane = (props) => {
    
    var altitude = Math.round(props.alt*0.3048);
    var direction = westOrEast(props);
    var flip;
    if(direction === "westbound"){
        flip = {};
    }
    else{
        flip={
            WebkitTransform: "scaleX(-1)",
            Transform: "scaleX(-1)"
        };
    }
    var h = screen.height;
    var w = screen.width;
    var position = {};
    if(w >= 1400){
        position = positionGenerator(props.plane.lat, props.plane.long, w*0.8, h*0.8);
    }
    
    
    return(
       
        <div style={position} className="planes-div" >
            <img style= {flip}src="../pics/airplane logo.png"/>
            <div>Altitude: {altitude} meters</div><div>Flight ID: {props.id}</div>
        </div>
    );
};
OneAirplane.propTypes = {
    alt: PropTypes.number,
    id: PropTypes.number,
    comp: PropTypes.string,
    plane: PropTypes.object
};
export default OneAirplane;