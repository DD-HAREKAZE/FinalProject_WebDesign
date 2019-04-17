const User = require('../model/user');
const _ = require('lodash');

//user
exports.create = (req,res) => {
    console.log("backend",req.body.userName);
    const user = new User({
        userName : req.body.userName,
        password : req.body.password,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        city: req.body.city,
        zip: req.body.zip
    });

    user.save().
    then(() => {
        res.send({'message':'User created successfully'});
    });
};

//authenticate

//authenticate
exports.auth = (req,res) => {
    const data = {
        userName: req.body.userName,
        password: req.body.password
    };
    console.log(data);
    User.find({userName:data.userName, password:data.password},(error,user) => {
        console.log("user backend: "+ user);
        console.log(error);
        if(error){
            res.status(401).send({'message':'Invalid Username/Password'});
        }else if(user){
            console.log("user backend2 : "+ user);
            res.status(200).json({status:true, user: user});
        }else{
            return res.status(400).json("user not found");
        }
    });
};
/*
exports.auth = (req,res) => {
    const data = {
        userName: req.params.userName,
        password: req.params.password
    };
  //  User.findOne({userName:req.params.userName,password:req.params.password},(error,user) => {
    User.findOne(req.params.userName,(error,user) => {
        console.log("user backend: " + user);
        if(!user || error){
            res.status(401).send({'message':'User does not exist'});
        }
        if( user && (user.password === req.params.password)){
            res.send({'user':user});
        }
        else{
            console.log("user" + user);
            res.status(403).send({'message':'Credentials wrong'});
        }
    })
};
*/




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
