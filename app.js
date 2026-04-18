const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! This is my custom message. - From Theo. I am testing for a review stage'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
