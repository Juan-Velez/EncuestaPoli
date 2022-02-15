const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');


//importating routes
const asociadoRoutes = require('./routes/rutas');
const { urlencoded } = require('express');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    port: 3306,
    database: 'crudcovid'
}, 'single'));
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

//routes
app.use('/', asociadoRoutes);

//statics files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});