const express = require('express');
const db = require('../models/db');
const router = express.Router();

router.post('/',(req,res,next)=>{
    let username=req.body.username;
    let password=req.body.password;
    let resData={}//标志登陆成功与否
    console.log(username+":"+password);
    db.user.findOne({
        username:username,
        password:password
    }).then((info)=>{
        if(!info){
            //用户已存在之后的执行
            console.log('用户名密码错误')
            resData.succeed=0;
            resData.message="username or password is wrong";
            res.json(resData);
            //return false;
        }
        else{
            if(info.state){
                //用户已经登陆
                console.log(info.username+'已经登陆')
                resData.succeed=1;
                resData.message="already login";
                res.json(resData);
                //return false;
            }
            else{
                //把用户state设为true表示登陆了
                db.user.update({_id:info._id},{state:true}).then(()=>{
                    resData.succeed=0;
                    res.cookie("user",info.username,{maxAge:1000*60*60});
                    res.json(resData);
                    next();
                });
            }
        }
    });

});


// router.post('/signIn', function (req, res, next) {
//     var username = req.body.username;
//     var password = req.body.password;
//     var resData = {};
//     User.findOne({ 
//         username: username,
//         password: password
//     }).then(function (userInfo) {
//         if (!userInfo) {
//             resData.success = 0;
//             resData.err = "用户名或者密码错误!";
//             res.json(resData);
//             return false;
//         } else {
//             if(userInfo.state){
//                 resData.success = 0;
//                 resData.err = "该用户已登录!";
//                 res.json(resData);
//                 return false;
//             }else{
//                 User.update({
//                     _id: userInfo._id
//                 }, {
//                     state: true
//                 }).then(function () {
//                     resData.success = 1;
//                     resData.err = "登录成功!";
//                     res.cookie("user", userInfo.username, {maxAge: 1000 * 60 * 60});
//                     res.json(resData);
//                     next();
//                 })
//             }
//         }
//     })
// });

module.exports = router;