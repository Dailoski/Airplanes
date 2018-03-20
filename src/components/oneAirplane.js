import React from "react";
import PropTypes from "prop-types";
const OneAirplane = (props) => {
    
    var altitude = Math.round(props.alt*0.3048);
    return(
        <div>
            <img src="../pics/airplane logo.png"/>
            <span>Altitude: {altitude} meters</span><div>Flight ID:{props.id}</div>
        </div>
    );
};
OneAirplane.propTypes = {
    alt: PropTypes.number,
    id: PropTypes.number

};
export default OneAirplane;