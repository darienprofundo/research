const express = require('express');
const app = express();
const fetch = require('node-fetch');
app.listen(3000, () => console.log('listening at 3000'));

app.use(express.static('public'));


app.get('/kobo/:_geolocation', async (request, response) => {
  console.log(request.params);
  const _geolocation = request.params._geolocation.split(',');
  console.log(_geolocation);
  const lat = _geolocation[0];
  const lon = _geolocation[1];
  console.log(lat, lon);
  const api_key = "?Authorization=2c773a1c48ccd8af2f3ec3213441df8ea023a9b8";
  const kobo_url = `https://kc.kobotoolbox.org/api/v1/data/653247${api_key}/${lat},${lon}`;
  const kobo_response = await fetch(kobo_url);
  const kobo_data = await kobo_response.json();

  const data = {
    kobo: kobo_data,
  };
  response.json(data);
});
