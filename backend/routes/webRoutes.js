const express=require('express');
const webRouter=express.Router();
const path=require('path');
const htmlBase= path.join(__dirname ,"../../frontend/html");
webRouter.get("/:pageName", function (req, res) {
    let pageName = req.params.pageName;
    res.sendFile(path.join(htmlBase,pageName+".html"));
});
module.exports=webRouter;