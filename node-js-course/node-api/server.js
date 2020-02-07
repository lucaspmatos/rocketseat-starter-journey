const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-kmptn.mongodb.net/node-api?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);