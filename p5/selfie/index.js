
const express = require('express');
const app = express();
app.listen(1301, () => console.log('listening at 1301'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));
//========================================== send a post
app.post('/api', (request, response) => {
console.log('I got a request!');
console.log(request.body);
});
//==========================================
