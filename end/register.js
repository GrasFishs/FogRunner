const express = require('express');
const db = require('../models/db');

const router = express.Router();
router.post('/',(req,res)=>{
    let username=req.body.username;
    let pwd=req.body.password;
    console.log(username+":"+pwd);
    resData={}//标志注册成功与否
    db.user.findOne({username:username}).exec(function(info){
        if(info)
        {
            resData.succeed=0;
            resData.message="username is already exists."
            res.json(resData);
            return false;
        }else{
            var usr = new db.user({
                username: username,
                password: pwd,
                image: '../public/img/people.png',
                state: false//注册成功后要重新登陆，故state设置为false
            });
            usr.save(function(err){
                if(err) return console.error(err);
                resData.succeed=1;
                res.json(resData);
            });//把user数据存入database，若果出错就报错
            // res.send("一个用户注册:"+username);
        }
    });
});
module.exports = router;
// router.get('/', function (req, res) {
//     
//     res.send("!!!")
// });

// router.get('/', function (req, res) {
//     res.render('register.html');
// });

// router.post('/signUp',(req, res)=> {
//     var username = req.body.username;
//     var password = req.body.password;
//     var resData = {};   
//     User.findOne({
//         username: username
//     }).then(function (userInfo) {
//         if (userInfo) {
//             resData.success = 0;
//             var err=new Error("该用户名已被注册！");
//             // resData.err = "该用户名已被注册！";
//             res.json(resData);
//             return false;
//         } else {
//             var user = new User({
//                 username: username,
//                 password: password,
//                 image: '../public/img/people.png',
//                 state: false
//             });
//             return user.save();
//         }
//     }).then(function () {
//         resData.success = 1;
//         resData.message = "注册成功！";
//         res.json(resData);
//     })
// });
