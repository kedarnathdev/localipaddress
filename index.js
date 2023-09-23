const express = require('express');
const { resolve } = require('path');
const requestIp = require('request-ip');
const app = express();
const port = process.env.PORT || 3000;
const ip = require('ip');

app.use(express.static('static'));
app.use(requestIp.mw());

app.get('/', (req, res) => {
  console.log(req.clientIp);
  res.send(ip.address());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
