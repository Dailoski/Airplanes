function posGen(lat, long, width, height){
    var x = window.sessionStorage.getItem("latitude");
    var y = window.sessionStorage.getItem("longitude");
    if(lat > x && long > y){
        var top = Math.random() * (height/2 -0) + 0;
        var left = Math.random() * (width - width/2) + width/2;
        return  {top: top, left:left};
    }
    if(lat <= x && long > y){
        var top = Math.random() * (height - height/2) + height/2;
        var left = Math.random() * (width - width/2) + width/2;
        return  {top: top, left:left};
    }
    if(lat > x && long <= y){
        var top = Math.random() * (height/2 -0) + 0;
        var left = Math.random() * (width/2 - 0) + 0;
        return  {top: top, left:left};
    }
    if(lat <= x && long <= y){
        var top = Math.random() * (height - height/2) + height/2;
        var left = Math.random() * (width/2 - 0) + 0;
        return  {top: top, left:left};        
    }
    else{
        var top = Math.random() * (height - 0) + 0;
        var left = Math.random() * (width - 0) + 0;
        return  {top: top, left:left};        
    }
}
export default posGen;