var userModel=require('../model/regisModel');
module.exports.createUsers=function(){
        userModel.find({},function(err,collection){
            if(collection.length==0)
            {
                var userJson={};
        var userJson={};
        userModel.create(userJson);
        userModel.create(userJson);
            }
        })
}
