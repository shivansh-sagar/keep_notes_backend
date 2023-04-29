const express = require('express');
const app = express();
const port = 3000;

app.listen(3000, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
app.get('/', (request, response) => {
    response.status(201).send('<a href="/page2">Hello World!</a>');
});

app.get('/page2', (request, response) => { 
    response.sendFile(__dirname + '/index.html');
});

app.get('/*', (request, response) => {
    response.status(404).send('<h1>Page not found</h1>');
});