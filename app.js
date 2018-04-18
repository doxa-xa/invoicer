//requirements [START]
const express = require('express');
const ejs = require('ejs');
const routes = require('./routes/routes.js');
//requirements [END]

//initiate expres variable
const app = express();

//managing static files
app.use('assets',express.static('/assets'));

//setting up view engine
app.set('view engine','ejs');

//routing
app.use(routes);

//start a sever at port 3000
app.listen(3000,()=>{
  console.log('listening on port 3000');
});
