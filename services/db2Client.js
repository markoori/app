const mongoose = require('mongoose')
const Food = require('../models/mongodb/model')

mongoose.connect("mongodb://localhost:27017/Ajoosignup",{useNewUrlParser: true, useUnifiedTopology: true})
 .then(()=>{console.log("Connected to db")})
 .catch((e)=>{console.log(e)})

async function fetch_food(){
    const food_vendors = await Food.find();
    return food_vendors;
}

module.exports = fetch_food
