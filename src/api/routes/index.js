const express = require('express');
//const fetch_food = require('../../../services/db2Client')

const router = express.Router();

// function session_middleware(req,res,next){     // the middleware ensures that the user is
//     // 1. collect the token from the db     // logged in before a certain router can be opend
//     // 2. send it to the frontend

//     next();
// }

let route = ['about','contact','login']

// home-page
router.get('/',(req,res)=>{
    res.render('_index')
});

// about-page
router.get('/about',(req,res)=>{
    res.render('about');
})

// contact-page
router.get('/contact',(req,res)=>{
    res.render('contact')
})

// login page
router.get('/login',(req,res)=>{
    res.render('login')
})

// Restaurants Registration
router.get('/restaurants',(req,res)=>{
    res.render('restaurants')
})

// blog
router.get('/blog',(req,res)=>{
    res.render('blog')
})

// cart
router.get('/cart',(req,res)=>{
    res.render('cart')
})

// vendor
router.get('/vendors',(req,res)=>{
    res.render('vendors')
})

// router.get('/food_vendor',(req,res)=>{
//     info = fetch_food()
//     res.render('foodsection',{data : {info}})
// })

router.get('/order',(req,res)=>{
    res.render('orderfood')
})

router.get('/restaurants',(req,res)=>{
    res.render('restaurants')
})

router.get('/partner',(req,res)=>{
    res.render('partner')
})

router.get('/faq',(req,res)=>{
    res.render('faq');
})
module.exports = router