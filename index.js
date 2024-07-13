const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('Alamat IP:', ip);
    next();
});

app.get('/', (req, res) => {
    res.send(' ');
});

app.listen(port, () => {
    console.log(`Server berjalan!`);
});
