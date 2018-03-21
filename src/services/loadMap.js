
function loadMap(lat, long){
    var platform = new H.service.Platform({
        'app_id': '3tAb2QXNQ5KSGwryq9Cg',
        'app_code': 'xf16lvGJdDxHEWeEaVBR6A'
    });

    // Obtain the default map types from the platform object
    var maptypes = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        maptypes.normal.map,
        {
            zoom: 10,
            center: { lng: long, lat: lat}
        });
    var urPosition = new H.map.Marker({
        lat:lat,
        lng:long
    });
    map.addObject(urPosition);
}
export default loadMap;