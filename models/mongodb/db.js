const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost:27017/Ajoosignup",{useNewUrlParser: true, useUnifiedTopology: true})
 .then(()=>{console.log("Connected to db")})
 .catch((e)=>{console.log(e)})