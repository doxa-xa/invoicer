const appRoutes = require('express').Router();
const bodyParser = require('body-parser');
const language = require('../assets/lang.js');

var urlencodedparser = bodyParser.urlencoded({extended:false});

//routes [START]
appRoutes.get('/',(req,res)=>{
  res.status(200).render('index',{lang:language.en});
});
//language choosing option POST request
appRoutes.post('/',urlencodedparser,(req,res)=>{
  switch (req.body.selectLang){
    case 'fr': res.redirect('/fr'); break;
    case 'es': res.redirect('/es'); break;
    case 'de': res.redirect('/de'); break;
    case 'bg': res.redirect('/bg'); break;
    case 'gr': res.redirect('/gr'); break;
    case 'pl': res.redirect('/pl'); break;
    case 'it': res.redirect('/it'); break;
    case 'en': res.redirect('/en'); break;
    default : res.redirect('/en'); break;
  }
});
//language UI redirects [START]
appRoutes.get('/fr',(req,res)=>{
  res.status(200).render('index',{lang:language.fr});
});
appRoutes.get('/es',(req,res)=>{
  res.status(200).render('index',{lang:language.es});
});
appRoutes.get('/de',(req,res)=>{
  res.status(200).render('index',{lang:language.de});
});
appRoutes.get('/bg',(req,res)=>{
  res.status(200).render('index',{lang:language.bg});
});
appRoutes.get('/pl',(req,res)=>{
  res.status(200).render('index',{lang:language.pl});
});
appRoutes.get('/it',(req,res)=>{
  res.status(200).render('index',{lang:language.it});
});
appRoutes.get('/en',(req,res)=>{
  res.status(200).render('index',{lang:language.en});
});
appRoutes.get('/gr',(req,res)=>{
  res.status(200).render('index',{lang:language.gr});
});
//language UI redirects [END]
//register routes [START]
appRoutes.get('/register',(req,res)=>{
  res.status(200).render('register');
});
//register routes [END]
appRoutes.get('/company',(req,res)=>{
  res.status(200).render('company');
});
//routes [END]



//exporting routes
module.exports = appRoutes;
