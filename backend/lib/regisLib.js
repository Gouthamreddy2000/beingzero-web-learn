var regisModel = require('../model/regisModel');

module.exports.getall = function(req,res)
{
var query = {};
regisModel.find(query, function(err, obj){
if(err)
console.log("ERROR: "+err);
res.send(obj);
});
}
module.exports.addnewone = function(req,res)
{
    var obj = new regisModel(req.body);
    console.log(obj);
    obj.save(function(err){
        if(err)
        console.log("ERROR: "+err);
        else
        console.log("SAVE SUCCESS "+ JSON.stringify(obj));
        })   
}