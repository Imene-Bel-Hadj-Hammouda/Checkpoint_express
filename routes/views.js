const express = require('express'
)
const router = express.Router();
const path = require('path')


//home route
router.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname + '../','public','home.html'));
});

//services route
router.get('/services',(req,res)=> {
    res.sendFile(path.join(__dirname + '../','public','services.html'));
});

//contact services
router.get('/contact',(req,res)=> {
    res.sendFile(path.join(__dirname + '../','public','contact.html'));
});


module.exports = router