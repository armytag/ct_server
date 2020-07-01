
const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (request, response) => {
        response.send('Here\'s the new CT server!');
});

app.listen(port, (err) => {
        if (err) {
            return console.log('something bad has happened', err);
        }

        console.log(`server is listening on ${port}`);
});
