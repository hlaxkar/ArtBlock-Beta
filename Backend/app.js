const exrpess = require('express');
const userRoutes = require('./routes/user');
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');
const app = exrpess();

mongoose.connect('mongodb://127.0.0.1/ArtBlockDb').then(()=>{
    console.log('connected to database');
}).catch(err=>{
    console.log(err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Origin, X-Requested-With, Accept");
    next();
});



app.use('/user', userRoutes);
module.exports = app;