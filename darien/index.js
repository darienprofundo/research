
//========https://kc.kobotoolbox.org/api/v1/data/653247.json
//curl -X GET https://[kpi-url]/api/v2/assets.json -H "Authorization: Token [your_token_goes_here]"
//========2c773a1c48ccd8af2f3ec3213441df8ea023a9b8

// "id": 662584,
// "id_string": "ahY7awVS6SUYmZ6qqbHyFQ",
// "title": "Documenting Darién",
// "description": "Documenting Darién",
// "url": "https://kc.kobotoolbox.org/api/v1/data/662584.json"
//
//
// "id": 653247,
// "id_string": "akmQboYqzvAGtENDMnTrVM",
// "title": "Darién Profundo",
// "description": "Darien Profundo_040821",
// "url": "https://kc.kobotoolbox.org/api/v1/data/653247.json"


const express = require('express');
const Datastore = require('nedb');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));
//=======================================personal database

// const database = new Datastore('database.db');
// database.loadDatabase();
//
// app.get('/api', (request, response) => {
//   database.find({}, (err, data) => {
//     if (err) {
//       response.end();
//       return;
//     }
//     response.json(data);
//   });
// });
//
// app.post('/api', (request, response) => {
//   const data = request.body;
//   const timestamp = Date.now();
//   data.timestamp = timestamp;
//   database.insert(data);
//   response.json(data);
// });

//=====================================personal Database

//=====================================3rd party database (kobotoolbox)

//queries======='https://kc.kobotoolbox.org/api/v1/data/22845?query={"_geolocation": "monthly"}' : [
8.268792,
-78.149254
],

app.get('/weather/:latlon', async (request, response) => {
  console.log(request.params);
  const latlon = request.params.latlon.split(',');
  console.log(latlon);
  const lat = latlon[0];
  const lon = latlon[1];
  console.log(lat, lon);
  const api_key = process.env.API_KEY;
  const weather_url = `https://api.darksky.net/forecast/${api_key}/${lat},${lon}/?units=si`;
  const weather_response = await fetch(weather_url);
  const weather_data = await weather_response.json();
//=====================================3rd party database (maps)
  const aq_url = `https://api.openaq.org/v1/latest?coordinates=${lat},${lon}`;
  const aq_response = await fetch(aq_url);
  const aq_data = await aq_response.json();

  const data = {
    weather: weather_data,
    air_quality: aq_data
  };
  response.json(data);
});
