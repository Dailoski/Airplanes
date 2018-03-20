

class CommunicationService{
    constructor(){

    }
    getAirplanes(objInfo, callBackSucces, callBackFail){
        $.ajax({
            url: "https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat="
             + objInfo.lat + "&lng=" + objInfo.long +"&fDstL=0&fDstU=100",
            dataType: "jsonp",
            jsonpCallback: "logResults",
            success: (result) => callBackSucces(result),
            fail: (err) => callBackFail(err)
        });
    }
}
const communication = new CommunicationService();
export default communication;