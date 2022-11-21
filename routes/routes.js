     let express = require('express')
     let router = express.Router()

     router.get('/', function(req, res, next){
         res.json({ 'messages': 'Hello I am an Azure app built by an ITEC student at MCTC !'})
     })

     module.exports = router