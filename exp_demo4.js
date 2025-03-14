const express = require('express');
const app = express();
const port = 3003;

app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
    res.send('About Page: Learn more about us!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
