const express=require('express')
const router=express.Router();
const db = require('../models/db');

router.post("/api/upload_image", function(req, res) {
    const file = req.files.image;
    console.log(file.originalname + " load");
    const des_file = "./public/static/img/" + file.originalname;
    let resData={}//标志登陆成功与否
    fs.readFile(file.path, (err, data)=> {
      fs.writeFile(des_file, data,(err)=> {
        if (err) console.log(err);
        else {
            db.user.update(
              {username:req.cookies.User},{image:des_file}
            ).exec((err,data)=>{
              if(err)
              {
                console.log(err);
                resData.succeed=0;
                res.json(resData);
              }
              resData.succeed=1;
              res.json(resData);
            });
            //  res.send(req.headers.origin + "/static/img/" + 
            // file.originalname);
        }
      });
    });
});
module.exports=router;