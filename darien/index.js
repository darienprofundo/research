
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
app.use(express.json({
  limit: '1mb'
}));

app.get('/toolbox', async (request, response) => {
  console.log(request.params);
  const kobo_url = 'https:kc.kobotoolbox.org/api/v1/data.json?Authorization:Token2c773a1c48ccd8af2f3ec3213441df8ea023a9b8';
  const kobo_response = await fetch(kobo_url);
  const kobo_data = await kobo_response.json();

  response.json(data);
  console.log(data);

});
