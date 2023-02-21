const express = require('express');
const cros = require('cors')
const app = express();
const connectDbase = require('./db/connection')
connectDbase();
app.use(express.json());
app.use(cros())
const UserRoute = require('./routes/userRouter');

app.use('/api/user', UserRoute)


const Port = process.env.Port || 4200;

app.listen(Port, ()=> console.log('Server Started'))