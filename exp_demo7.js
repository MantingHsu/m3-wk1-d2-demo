const express = require('express');
const app = express();
const port = 3006;

app.use((req, res, next) => {
    console.log(`Request made to: ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Middleware Example');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
