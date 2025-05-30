const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Change port to 3001

app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
