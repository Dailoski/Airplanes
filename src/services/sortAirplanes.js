function sortAirplanes(arr){
    var max, pom;
    for (var i = 0; i < arr.length; i++) {
        max=i;
        for (var j = i+1; j < arr.length; j++) {
            if(arr[j].alt>arr[max].alt){
                pom=arr[max];
                arr[max]=arr[j];
                arr[j]=pom;    
            }
        } 
         
    } return arr;

};

export default sortAirplanes;