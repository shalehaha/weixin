
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};


exports.verify = function(req, res){
  
    console.log(req.query.signature);
    console.log(req.query.timestamp);
    console.log(req.query.nonce);
        console.log(req.query.echostr);


    

  res.send("respond with a resource");
};


exports.message = function(req, res){
  
    console.log(req.query.signature);
    console.log(req.query.timestamp);
    console.log(req.query.nonce);
    
};