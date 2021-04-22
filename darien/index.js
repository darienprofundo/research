
//========https://kc.kobotoolbox.org/api/v1/data/653247.json
//========2c773a1c48ccd8af2f3ec3213441df8ea023a9b8
//========form ID 653247
const express = require('express');
const app = express();

app.listen(1300, () => console.log('listening at 1300'));
app.use(express.static('public'));

// {
//     "id": 270622,
//     "username": "dariengap2021",
//     "name": "",
//     "email": "dariengapproject2021@gmail.com",
//     "city": "",
//     "country": "",
//     "organization": "",
//     "website": "",
//     "twitter": "",
//     "gravatar": "https://secure.gravatar.com/avatar/d9f6d883a41172381e596237b26c718c?s=60&d=https%3A%2F%2Fformhub.org%2Fstatic%2Fimages%2Fformhub_avatar.png",
//     "require_auth": false,
//     "metadata": {},
//     "api_token": "2c773a1c48ccd8af2f3ec3213441df8ea023a9b8",
//     "temp_token": "9outfkhf5cc6r78jlgsw1gzvh2k6dpbx"
// }

// {
// "briefcase": "https://kc.kobotoolbox.org/api/v1/briefcase?format=json",
// "media": "https://kc.kobotoolbox.org/api/v1/media?format=json",
// "notes": "https://kc.kobotoolbox.org/api/v1/notes?format=json",
// "forms": "https://kc.kobotoolbox.org/api/v1/forms?format=json",
// "user": "https://kc.kobotoolbox.org/api/v1/user?format=json",
// "submissions": "https://kc.kobotoolbox.org/api/v1/submissions?format=json",
// "formlist": "https://kc.kobotoolbox.org/api/v1/formlist?format=json",
// "metadata": "https://kc.kobotoolbox.org/api/v1/metadata?format=json"
// }

// app.use(express.json({limit: '1mb'}));
//
// const api_url = "kc.kobotoolbox.org/api/v1";
// const apiKey = "2c773a1c48ccd8af2f3ec3213441df8ea023a9b8";
// const mediaURL = "https://kc.kobotoolbox.org/api/v1/media.json"
//
// const express = require('express');
// const app = express();
//
// //========================================== send a post
// app.post('/api', (request, response) => {
// const data + request.body;
// console.log('I got a request!');
// console.log(request.body);
// database.insert(data);
// response.json(data);
// });
// //========================================== get a POST
// app.get(mediaURL, (request, response) => {
//   database.find({}, (err, data) => {
//     if  (err) {
//       response.end();
//     }
//     response.json(data);
//
//   })
// });
//
// getData();
//
// async function getData() {
//   const response = await fetch(mediaURL);
//   const data = await response.json();
//   console.log(data);
// }
