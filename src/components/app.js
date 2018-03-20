import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import MainPage from "./MainPage";

class App extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return(
            <Switch>
                <Redirect exact from="/" to="/MainPage" /> 
                <Route exact path="/MainPage" component={MainPage} />
                {/* <Route exact path="/SingleAircraft" component={SingleAircraft} /> */}
                    
            </Switch>
        );
    }
}

export default App;
