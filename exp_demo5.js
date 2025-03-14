const express = require('express');
const app = express();
const port = 3004;

app.get('/bookings/:id', (req, res) => {
    res.send(`Booking ID: ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
