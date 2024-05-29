const express = require("express");
const requestIp = require("request-ip");

const app = express();

// Middleware untuk mendapatkan alamat IP dari request
app.use(requestIp.mw());

// Endpoint untuk menampilkan IP pengunjung
app.get("/", (req, res) => {
    const clientIp = req.clientIp;
    if (clientIp) {
        console.log(`[+] Ip Address: ${clientIp}`);
    }
    res.send(`Hanya mengecek.`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Web server is a running!`);
});
