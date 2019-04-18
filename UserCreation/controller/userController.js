const User = require('../model/user');
const _ = require('lodash');


//user
exports.create = (req,res) => {

    console.log("backend", req.body.userName);

    var userName = req.body.userName;
    var password = req.body.password;
    var firstName = req.body.userName;
    var lastName = req.body.lastName;
    var city = req.body.city;
    var zip = req.body.zip;

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
};


//authenticate
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
            res.status(404).send();
        }else{
            return res.status(200).send();
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

