import React from "react";
import communication from "../services/communicationService"; 
import AirplaneDTO from "../services/airplaneDTO";
import sortAirplanes from "../services/sortAirplanes";
import OneAirplane from "./oneAirplane";
class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = this.initialState();
    }
    initialState(){
        return{
            aircraftsArr: []
        };
    }
    componentDidMount(){
        var that = this;
        const { aircraftsArr } = this.state;
        navigator.geolocation.getCurrentPosition(function(a){
            communication.getAirplanes(
                {lat:a.coords.latitude,
                    long: a.coords.longitude,
                }, (a) => {
                    const arr = a.acList.map((a)=> new AirplaneDTO(a)
                    );
                    const x = sortAirplanes(arr);
                    that.setState({aircraftsArr:x});
                });    
        });
    };
    render(){
        return<div>
            {this.state.aircraftsArr.map(airplane => {
                return (
                    <OneAirplane
                        key={airplane.id}
                        id = {airplane.id}
                        alt = {airplane.alt}
                    />
                );
            })}
        </div> ;
    }
        
}
export default MainPage;