'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	res.send('Hello remote world!\n');
});

app.use('/public', express.static(path.join(__dirname, 'public')));
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);