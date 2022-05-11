const mongoose = require('mongoose');
require("../../../models/_mongodb/register.model")

mongoose.connect("url",{userNewUrIParser: true, useUnifiedTopology: true})
.then(() => console.log("Mongo_db connected"))
.catch((e) => console.log(e));
