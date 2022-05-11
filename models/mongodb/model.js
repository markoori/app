const mongoose = require('mongoose')
const { Schema } = mongoose;

const food_vendor_schema = new Schema({
    'Business Name' : {
        type : String,
        required: true
    },
    'Business Phone no' : {
        type : String,
        required : true
    },
    'Business Type' : {
        type: String,
        required: true
    },
    'State(s) your business is operational in' : {
        type: String,
        required: true
    },
    'Choose what describes you best' : {
        type: String,
        required: true
    },
    'Proposed Hours your Business stays opened per day' : {
        type: String,
        required: true
    },
    'Proposed Days your Business works per week' : {
        type: String,
        required: true
    },
    'As commission for using our platform, do you agree to a 5\% date on each transaction' : {
        type: String,
        required: true
    }

})

module.exports = FoodSchema = mongoose.model('FoodSchema',food_vendor_schema);
