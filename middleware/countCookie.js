var count = 0;
module.exports.cookie = (req, res, next) =>{
   if(req.cookies)
   {
        count++;
   }
   console.log(count)
   next();
}