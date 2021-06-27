//kc.kobotoolbox.org/api/v1/data/653247.json?owner=dariengap2021&Authorization=2c773a1c48ccd8af2f3ec3213441df8ea023a9b8
  // Making a map and tiles
  // var clat = 8.15;
  // var clon = -78.0;
  //
  // var ww = 840;
  // var hh = 830;
  //// var zoom = 9;\

  const koboKey = '2c773a1c48ccd8af2f3ec3213441df8ea023a9b8';
  const response = await fetch (koboKey);

function preload () {

const mymap = L.map('darienMap').setView([-78, 8.15], 9);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, {
  attribution
});
tiles.addTo(mymap);

// Making a marker with a custom icon

const ceramic = L.icon({
  iconUrl: 'assets/ceramic.png',
  iconSize: [15, 100 % ],
  iconAnchor: [7, 50 % ]
});
const chip = L.icon({
  iconUrl: 'assets/chip.png',
  iconSize: [15, 100 % ],
  iconAnchor: [7, 50 % ]
});
const fauna = L.icon({
  iconUrl: 'assets/fauna.png',
  iconSize: [15, 100 % ],
  iconAnchor: [7, 50 % ]
});
const flora = L.icon({
  iconUrl: 'assets/flora.png',
  iconSize: [15, 100 % ],
  iconAnchor: [7, 50 % ]
});
const ground = L.icon({
  iconUrl: 'assets/ground.png',
  iconSize: [15, 100 % ],
  iconAnchor: [7, 50 % ]
});
const misc = L.icon({
  iconUrl: 'assets/misc.png',
  iconSize: [15, 100 % ],
  iconAnchor: [7, 50 % ]
});
const mound = L.icon({
  iconUrl: 'assets/mound.png',
  iconSize: [15, 100 % ],
  iconAnchor: [7, 50 % ]
});
const petro = L.icon({
  iconUrl: 'assets/petro.png',
  iconSize: [15, 100 % ],
  iconAnchor: [7, 50 % ]
});
const site = L.icon({
  iconUrl: 'assets/site.png',
  iconSize: [15, 100 % ],
  iconAnchor: [7, 50 % ]
});

}
//=========================end preload

function setup() {

  let marker = L.marker([0, 0], { icon: ceramic }).addTo(mymap);
  let marker = L.marker([0, 0], { icon: chip }).addTo(mymap);
  let marker = L.marker([0, 0], { icon: fauna }).addTo(mymap);
  let marker = L.marker([0, 0], { icon: flora }).addTo(mymap);
  let marker = L.marker([0, 0], { icon: ground }).addTo(mymap);
  let marker = L.marker([0, 0], { icon: misc }).addTo(mymap);
  let marker = L.marker([0, 0], { icon: mound }).addTo(mymap);
  let marker = L.marker([0, 0], { icon: petro }).addTo(mymap);
  let marker = L.marker([0, 0], { icon: site }).addTo(mymap);

  mymap.on('zoomend', function() {
    const zoom = mymap.getZoom() + 1;
    const w = 50 * zoom;
    const h = 32 * zoom;
    issIcon.options.iconSize = [w, h];
    issIcon.options.iconAnchor = [w / 2, h / 2];
    mymap.removeLayer(marker);
    let latlng = marker.getLatLng();
    marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);
    marker.setLatLng(latlng);
  });

  const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

  let firstTime = true;

  async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude } = data;

    marker.setLatLng([latitude, longitude]);
    if (firstTime) {
      mymap.setView([latitude, longitude], 2);
      firstTime = false;
    }
    document.getElementById('lat').textContent = latitude.toFixed(2);
    document.getElementById('lon').textContent = longitude.toFixed(2);
  }
}
  // getISS();
  // setInterval(getISS, 1000);
