const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());
app.use(express.json());

require('./routes/api-login.js').route(app);
require('./listen.js').start(app, PORT);