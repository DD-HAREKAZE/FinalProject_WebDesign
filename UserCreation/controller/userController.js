const User = require('../model/user');
const _ = require('lodash');


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
            return res.status(200).send({'user':user});
        }
    });
};


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

