const express = require('express');
const app = express();
const port = 3005;

app.get('/', (req, res) => {
    res.send('Welcome to our app!');
});

app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
