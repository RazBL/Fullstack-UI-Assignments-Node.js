const express = require('express');

const PORT = process.env.PORT || 8000;

const server = express();
server.use(express.json());


server.use('/api', require('./Routes/stores'));

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));