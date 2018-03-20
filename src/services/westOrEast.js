function westOrEast(obj){
    var a = "";
    a += obj.alt;
    var b = a.substring(0,2);
    var c = parseInt(b);
    if(c % 2 === 0){
        return "westbound";
    }
    else {
        return "eastbound";
    }
}
export default westOrEast;