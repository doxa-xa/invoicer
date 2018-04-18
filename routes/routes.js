const appRoutes = require('express').Router();

//routes [START]
appRoutes.get('/',(req,res)=>{
  res.status(200).render('index');
});
//routes [END]



//exporting routes
module.exports = appRoutes;
