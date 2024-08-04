const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const port = 3000;


app.use((req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('Alamat IP:', ip);
    cookieParser();
    next();
});

app.get('/', (req, res) => {
    const cookies = req.cookies;
    res.send(' ');
});

app.listen(port, () => {
    console.log(`Server berjalan!`);
});
