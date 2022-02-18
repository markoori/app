// const db = require('../src/config/mysql/config');
// const Register = require('../models/_mongodb/register.model');
// const Token = require('../models/_mongodb/token.model');

// // schemas for mongodb
// //const Register = require('../models/_mongodb/');

// // all sql commands are in the query.sql

// class Mysql_db{
//     user = "";

//     constructor(args){
//         this.user = args; 
//     }

//     restaurants_db(id,resName,fname,city,phone,email,owner,resPhone){
//         if (this.user == "home"){
//             sql = "SELECT Restaurant_name FROM restaurants ";
//             db.query(sql,(err,res) => { if(err) return err; else return res; } )
//         }
//         else if(this.user == "send")
//             // var cmd_1 = "INSERT INTO tasteclandb.register ";
//             // var cmd_2 = "(`_id`,`Restaurant Name`,`Full Name`,`City`,`Phone`,`Email`,`Owner`,`Restaurants_Phone`) VALUES ";
//             // var cmd_3 = `('${id}','${resName}','${fname}','${city}','${phone}','${email}','${owner}','${resPhone}')`;
//             // console.log(cmd_1 + cmd_2 + cmd_3);
            
//            // let query = "INSERT INTO tasteclandb.register (`_id`,`Restaurant Name`,`Full Name`,`City`,`Phone`,`Email`,`Owner`,`Restaurants_Phone`) VALUES  ('id','resName','fname','city','email','owner','resPhone')"
//             db.query("INSERT INTO tasteclandb.register (`_id`,`Restaurant_Name`,`Full_Name`,`City`,`Phone`,`Email`,`Owner`,`Restaurants_Phone`) VALUES  (id,'resName','fname','city',phone,'email','owner',resPhone)", // callback function
//                       (err,res)=>{ if(err) return err; else return "Success!"; } );
//             console.log("sent data");
//     }
// }

// const mysql = new Mysql_db('send');

// let res = mysql.restaurants_db(23,'mark','david','lagos',234343,'oori@gmail','someone',234343);
// console.log('successfully sent to db');
// console.log(res);

 
// class Mongodb_db{
//     constructor(args){
//         this.args = args;
//     }
 
//     restaurants_db(resName,fname,city,phone,email,owner,resPhone){

//         const restaurants = new Register({
//             restaurants_name : resName,
//             full_name : fname,
//             city : city,
//             phone : phone,
//             email : email,
//             owner : owner,
//             restaurants_phone : resPhone,
//         });
        

//         restaurants.save()
//         .then((res) => { return true })
//         .catch((e) => { return e })
//     }

//     receive_token(){
//         const token_info = new Token()
//         let info = token_info.find();
//     }
// }

// module.exports = Mysql_db