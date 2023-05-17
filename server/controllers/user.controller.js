const User = require("../models/user.model")
const jwt = require("jsonwebtoken");
const secret = process.env.FIRST_SECRET_KEY;
const bcrypt = require('bcrypt')


module.exports= {
    register: async (req, res)=>{
        try{
            const potentialUser = await User.findOne({email: req.body.email})
            if (potentialUser){
                res.status(400).json({msg: "Email exists"})
            }else {
                const newUser = await User.create(req.body);
                const userToken = jwt.sign({_id:newUser.id, email:newUser.email, fName:newUser.fName}, secret, {expiresIn: "1d"});
                res.cookie("userToken", userToken, {httpOnly:false}).json({msg: "Create new userToken success!", user: newUser})
                // console.log(userToken);
                // res.json({msg: "success!", user: newUser})
            }
        }catch(err){
            console.log(err);
            return res.status(400).json(err)
        }
    },
    login: async (req, res)=>{
        try{
            const user = await User.findOne({email: req.body.email})
            if (user){
                console.log(User)
                const passwordMatch = await bcrypt.compare(req.body.password, user.password)
                if(passwordMatch){
                    const userToken = jwt.sign({_id:user.id, email:user.email, fName:user.fName}, secret, {expiresIn: "1d"});
                    res.cookie("userToken", userToken, {httpOnly:false}).json({msg: "Login success!", user: user})
                }else {
                    res.status(400).json({msg: "Invalid login attempt"})
                }
            }else {
                res.status(400).json({msg: "Invalid login attempt"})
            }
        }catch(err){
            console.log(User);
            return res.status(400).json(err)
        }
    },
    logout: (req, res) => {
        res.clearCookie("userToken").json({msg: "Logout success!"});
    }
}


module.exports.findAllUsers = (req, res) => {
    User.find()
    .then(allUsers => res.json({user: allUsers}))
    .catch(err => res.status(400).json({message: "Something went worng finding all users", error: err}))
}
module.exports.findOneUser = (req, res) => {
    User.findById(req.params.id)
    .then(oneUser => res.json({user: oneUser}))
    .catch(err => res.status(400).json({message: "Something went worng finding a user", error: err}))
}
module.exports.createUser = (req, res) => {
    User.create(req.body)
    .then(newUser => res.json({user: newUser}))
    .catch(err => res.status(400).json({message: "Something went worng creating a user", error: err}))
}
module.exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
    .then(updatedUser => res.json({user: updatedUser}))
    .catch(err => res.status(400).json({message: "Something went worng updating a user", error: err}))
}
module.exports.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(result => res.json({result: result}))
    .catch(err => res.status(400).json({message: "Something went worng deleting a user", error: err}))
}