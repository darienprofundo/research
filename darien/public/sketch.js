// Geo Locate
let lat, lon;
//========current location
if ('geolocation' in navigator) {
  console.log('geolocation available');
} else {
  console.log('geolocation not available');
}
const kobo_url = '/toolbox';
async function getData() {
  const response = await fetch(kobo_url);
  const data = await response.json();
  const {} = data;
  console.log(data);
}

getData();
