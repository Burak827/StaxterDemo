//a simple node app to statically serve on port:44

const express = require('express');
const path = require('path');

// Constants
const PORT = 44;
const HOST = '127.0.0.1';

// App
const app = express();

app.use('/', express.static(path.join(__dirname, 'distProd')))
app.listen(PORT, HOST);