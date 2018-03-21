import axios from "axios";

class CommunicationService{
    constructor(){

    }
    getAirplanes(objInfo, callBackSucces, callBackFail){
        $.ajax({
            url: "https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat="
             + objInfo.lat + "&lng=" + objInfo.long +"&fDstL=0&fDstU=200",
            dataType: "jsonp",
            jsonpCallback: "logResults",
            success: (result) => callBackSucces(result),
            fail: (err) => callBackFail(err)
        });
    }
    getLogo(name, callbackSuccess, callbackFail){
        axios({
            method: "get",
            url: "https://company.clearbit.com/v1/domains/find?name=" + name,
            headers: {Authorization: "Bearer sk_5099d4e3d4859b6eaa4def8505a90bc5"}
        }).then((response) => {
            callbackSuccess(response);
        }).catch((reason) => {
            callbackFail(reason);
        });
    }
}
const communication = new CommunicationService();
export default communication;