const express = require('express');
const mongoose = require('mongoose');

const server = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout', 
    { useNewUrlParser: true }
);

server.use(express.static('public'));

server.use(express.urlencoded({ extended: true}));
server.use(express.json());

server.use(require('./routes/html-routes.js'));
server.use(require('./routes/api-routes.js'));

server.listen(PORT, () => {
    console.log(`Server up on http://localhost:${PORT}`);
});