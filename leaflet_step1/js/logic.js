// create the base map
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// add the light layer tile 
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
maxZoom: 18,
id: "mapbox.light",
accessToken: API_KEY
}).addTo(myMap);


// get the url for the earthquake data
var queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=" +
"2019-01-02&maxlongitude=170.52148437&minlongitude=-150.83789062&maxlatitude=80.74894534&minlatitude=-85.16517337";

// create a function that changes marker size depending on the magnitute values
function markerSize(mag){
  return mag * 5
}

function colors(c) {
  if (c < 1){
    return "#ea4512"
  }
  else if ( c < 2){
    return "#e1f40c"
  }
  else if (c < 3){
    return "#e5d204"
  }
  else if (c < 4){
    return "#3f8708"
  }
  else if (c < 5 ){
    return "#f27313"
  }
  else {
    return "f7592a"
  }
};

function circles(feature, latlng ){
  var markerOptions = {
    radius: markerSize(feature.properties.mag),
    fillColor: getColors(feature.properties.mag),
    color: "black",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  }
  return L.circles( latlng, markerOptions );
};


