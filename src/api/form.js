const express = require('express');
const Joi = require('joi');
require('../../services/query');



// const app = require(express).express();

const route = express.Router();

route.post("/register/:type",(req,res)=>{
     const {body} = req;
        if (req.params.type == "restaurants"){
            const { restaurants_name } = body;
            const { full_name } = body;
            const { city } = body;
            const { phone } = body;
            const { email } = body;
            const { owner } = body;
            const { restaurant_phone } = body;
        }
        else{
            // this is the drivers form
        }

//validating input using Joi...
const ValidateForm = data => {
    const schema = Joi.object({
        restaurants_name : Joi.string().required(),
        full_name : Joi.string().required(),
        city : Joi.string().required(),
        phone : Joi.number().required(),
        email : Joi.string().alphanum().required(),
        owner : Joi.boolean(),
        restaurant_phone : Joi.number().required()
    });
};

const {error} = ValidateForm(body);

if (error)  res.status(400).render("message",{data:{'message': error,'status' : 'err'}});
else {
    
    // sending to the sql db
    mysql = new Mysql_db(restaurants_name,full_name,city,phone,email,owner,restaurant_phone);
    mysql.Restaurants_db()
    // send the data to both dbs

}

});

module.exports = route
