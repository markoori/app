// const route = require('./src/api/routes/index');
const express = require('express');
const bodyparser = require('body-parser')
const router = require('./src/api/routes/index')
const register_form = require('./src/api/form')


const port = process.env.PORT || 7100;

const app = express();
app.set('view engine','ejs');
app.set('views','./views');

app.use(bodyparser.json());
app.use('/',router)
app.use('/form', register_form);
app.use('/css', express.static(__dirname + '/public/css')); 
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/img', express.static(__dirname + '/public/img'));


//handling registeration 
// require("./src/api/form");
 
 

app.listen(port,()=>{console.log(
    `The server is running at ${port}`
)});