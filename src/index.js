const path = require('path');
const express = require('express');
const handlebars = require("express-handlebars");
const app = express();
const port = 1234;
const route = require('./routes');
const db = require('./config/db');



app.use(express.static(path.join(__dirname, 'public')));

// template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
//routes init
route(app);

//connect to db
db.connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});