import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import MainPage from "./mainPage";
import FlightDetails from  "./flightDetais";

class App extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return(
            <Switch>
                <Redirect exact from="/" to="/MainPage" /> 
                <Route exact path="/MainPage" component={MainPage} />
                <Route  path="/FlightDetails/:id" component={FlightDetails} />
                    
            </Switch>
        );
    }
}

export default App;
