
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const artist = require('./controllers/Artist');

require('dotenv').config({
  path: path.join(__dirname, './settings.env'),
});

const app = express();
mongoose.connect(process.env.DATABASE_CONN);
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello MongoDb!'));
app.post('/Artist', artist.post);
app.get('/Artist', artist.list);
app.get('/Artist/:artistId', artist.get);
app.listen(3000, () => console.log('It works!'));

