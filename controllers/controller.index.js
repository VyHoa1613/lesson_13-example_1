module.exports.index = (req, res) =>{
    res.cookie("name",12345)
    res.send("Cookie is Ok")
}