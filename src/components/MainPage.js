import React from "react";
import { Link } from "react-router-dom";
import communication from "../services/communicationService"; 
import AirplaneDTO from "../services/airplaneDTO";
import sortAirplanes from "../services/sortAirplanes";
import OneAirplane from "./oneAirplane";
import FlightDetails from "./flightDetais";
import loadMap from "../services/loadMap";

class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = this.initialState();
        this.storeData = this.storeData.bind(this);
        this.getApi = this.getApi.bind(this);
    }
    initialState(){
        return{
            aircraftsArr: [],
            
        };
    }
    componentDidMount(){
        var that = this;
        const { aircraftsArr } = this.state;
        const lat = window.sessionStorage.getItem("latitude");
        const long = window.sessionStorage.getItem("longitude");
        if(!!lat && !!long){
            this.getApi(lat, long);
            loadMap(lat, long);
        }
        else{navigator.geolocation.getCurrentPosition(function(a){
            window.sessionStorage.setItem("latitude", a.coords.latitude);
            window.sessionStorage.setItem("longitude", a.coords.longitude);
            that.getApi(a.coords.latitude,a.coords.longitude);
            loadMap(a.coords.latitude,a.coords.longitude);
        });}
    };
    getApi(x,y){
        var obj = {
            lat:x,
            long: y
        };
        communication.getAirplanes(
            obj, (response) => {
                const arr = response.acList.map((obj)=> new AirplaneDTO(obj)
                );
                const x = sortAirplanes(arr);
                this.storeData(x);
                console.log(x);
                this.setState({aircraftsArr:x});
            });    
    }
    storeData(array){
        var x = JSON.stringify(array);
        window.sessionStorage.setItem("data", x);
    }
    render(){
        console.log(window.screen.availWidth);
        return<div className="map" id="mapContainer">
            
            
            {this.state.aircraftsArr.map(airplane => {
                return (
                    <Link key={airplane.id} ad={{airplane}} to={`/FlightDetails/${airplane.id}`}>
                        <OneAirplane
                            id = {airplane.id}
                            alt = {airplane.alt}
                            comp = {airplane.comp}
                            plane ={airplane}
                        />
                    </Link>
                );
            })}
            {/* <div className="planes" >
                <img src="../pics/airplane logo.png"/>
                <span>Altitude: 0000 meters</span><div>Flight ID:00000</div>
            </div> */}
        </div> ;

    }
        
}
export default MainPage;