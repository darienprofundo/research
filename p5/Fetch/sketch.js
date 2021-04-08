//jQuery.getJSON(url [,data][,success]);
//API key 2c773a1c48ccd8af2f3ec3213441df8ea023a9b8

//https://kf.kobotoolbox.org/api/v2/assets/2c773a1c48ccd8af2f3ec3213441df8ea023a9b8/data/What_did_you_find
//https://kc.kobotoolbox.org/api/v1/data/616797.json
//============================== fetch()
//============================== URL.createObjectURL()
// var token = "https:kc.kobotoolbox.org/api/v1/assets/2c773a1c48ccd8af2f3ec3213441df8ea023a9b8";



function preload() {
 data = loadJSON("kobo_data.json");
}

function setup() {
    noCanvas();
    //insert variables for data that I want to collect
var myFind = data.Recorded_by;
// "Recorded_by": "Lucy Gill",
for (var i = 0; i < data.length; i++) {
  createElement("h1", data[i].myFind);
    print.console.log();
}

}


function draw() {

}
