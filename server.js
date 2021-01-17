const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const dotenv = require('dotenv')

require('dotenv').config();
require('./config/database');

const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const tripsRouter = require('./routes/trips')
const apiRouter = require('./routes/api')

const cors = require('cors')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/trips', tripsRouter);
app.use('/pickles', apiRouter);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, ()=> {
  console.log(`Express is listening on port ${port}.`)
});
