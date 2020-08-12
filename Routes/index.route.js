var express = require('express')
var router = express.Router()

router.get("/",(req, res) =>{
    res.cookie("setCookie-id",12345)
    res.send("Cookie is Ok")
})

module.exports = router;