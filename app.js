const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const body = require('body-parser');
const connectDb = require('./app/config/connection.js');
//const PORT = 8000;
const NODE_ENV = 'development';

app.use(body.json());


const user_roite = require('./app/routes/user_routes.js');
const expense_router = require('./app/routes/expense_route.js');
const register = require('./app/routes/register_routes/register_routes.js');

connectDb();

app.use('/api/v1', user_roite)
app.use('/api/v1', expense_router)
app.use('/api/v1', register);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server start at ${PORT} here${NODE_ENV}`)
})