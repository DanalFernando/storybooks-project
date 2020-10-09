const express = require('express')
const router = express.Router()

//@desc login/landing

//@route GET/

router.get('/', function(req ,res) {
    res.render('login',{
        layout:'login',
    })
})

//@route GET/dashboard

router.get('/dashboard', function(req ,res) {
    res.render('dashboard')
})

module.exports = router