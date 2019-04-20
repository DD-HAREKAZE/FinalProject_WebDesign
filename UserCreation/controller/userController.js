const User = require('../model/user');
const _ = require('lodash');
const City = require('../model/city');

//user Sign up
exports.create = (req,res) => {

    var userName = req.body.userName;
    var password = req.body.password;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var city = req.body.city;
    var zip = req.body.zip;

    console.log("backend", userName);

    User.findOne({userName: userName},(error,user) =>{
        if(error){
            res.status(501).send();
        }
        if(user){
            res.status(406).send();
            console.log("user already exists")
        }
        else{
            var newuser = new User();
            newuser.userName = userName;
            newuser.password = password;
            newuser.firstName = firstName;
            newuser.lastName = lastName;
            newuser.city = city;
            newuser.zip = zip;

            newuser.save(function (err, savedUser) {
                if (err) {
                    console.log(err);
                    return res.status(500).send();
                }
                return res.status(200).send();
            });
        }
    });
};


//authenticate / Log in
exports.auth = (req,res) => {

       var userName = req.body.userName;
       var password = req.body.password;

    User.findOne({userName: userName, password: password},(error,user) => {

        console.log("user backend: "+ user);

        if(error){
            console.log(error);
            res.status(401).send();
        }
        if(!user){
            res.status(404).send({'message':'invalid user'});
        }else{
            return res.send({'user':user});
        }
    })
};


//email service
exports.email=(req,res)=>{
    // email send function--------------------------------------------------------------------------------
    'use strict';

    const nodemailer = require('nodemailer');
    console.log(req.body.userName+"!");
    let transporter = nodemailer.createTransport({
        // host: 'smtp.ethereal.email',
        service: req.body.userName, // support: https://nodemailer.com/smtp/well-known/
        port: 465, // SMTP 端口
        secureConnection: true, // 使用了 SSL
        auth: {
            user: 'a837986356@gmail.com',
            // smtp auth ocde
            pass: 'zygdpwgytwxmjvhb',
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: '"WayFarer" <a837986356@gmail.com>', // sender address
        to: req.body.userName, // list of receivers
        subject: 'Wayfarer Subscribe Confirm', // Subject line
        // text or html
        // text: 'Hello world?', // plain text body
        html: '<b><p>Welcome to WayFarer!</p ><p>Thank you for subscribing our channel.' +
            ' We will provide you the most popular travel sites and information, please substained!</p >' +
            '<p>Thank you!</p ><p>WayFarer</p ></b>' // html body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        res.send({'message':'Email sent successfully'});
        // Message sent
    });
}

//------------------------------------------------------------------------------------------------------



exports.getUser = (req,res) => {
    const data = {
        userName: req.params.userName,
        password: req.params.password
    };
    User.findOne(data,(error,user) => {
        if(!user || error){
            res.status(401).send({'message':'Invalid Username/Password'});
        }else{
            res.send({'user':user});
        }
    })
};

exports.delete = (req,res) => {
    User.findOneAndRemove(req.params.userName).
    then(user => {
        res.send({'message':'user deleted successfully'});
    }); 
};


//-----------------------------------------------------------------------------------------------------
//city in destination
exports.list = (req,res) => {
    City.find((err,doc) =>{

        if(!err && doc){
            console.log("successfully");
            console.log(doc);
            res.send({'city':doc});
        }else{
            res.status(401).send({'message':'Error something wrong!'})
        }
    });
};
