const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const Bundler = require('parcel-bundler')
const routes = require(path.join(__dirname, 'routes'))

const app = express()
const config = require('./parcel.config.js')
const bundler = new Bundler(config.file, config.options)

app.set('trust proxy', true)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://@ds063929.mlab.com:63929/testapp', {
    useNewUrlParser: true,
    auth: {
        user: 'admin',
        password: 'admin123'
    }
})
mongoose.connection.on('error', console.error.bind('console', 'Error de conexión: '))

app.use(cors({ credentials: true, origin: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/public', express.static('public'))
app.use(bundler.middleware())
app.use(routes)

//add the manifest
app.get("/public/dist/manifest.json", function(req, res){
    //send the correct headers
    res.header("Content-Type", "text/cache-manifest");
    //console.log(path.join(__dirname,"manifest.json"));
    //send the manifest file
    //to be parsed bt express
    res.sendFile(path.join(__dirname,"manifest.json"));
  });

//add the service worker
  app.get("/public/js/service-worker.js", function(req, res){
    //send the correct headers
    res.header("Content-Type", "text/javascript");
    
    res.sendFile(path.join(__dirname,"service-worker.js"));
  });


  app.listen(3000, ()=>{
    console.log("server running @ localhost:3000");
});