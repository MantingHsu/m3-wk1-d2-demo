const express = require('express');
const app = express();
const router = require('./exp_demo3a');
const port = 3002;

app.use('/routedemo', router);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
