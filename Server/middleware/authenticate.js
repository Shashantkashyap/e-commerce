const jwt = require("jsonwebtoken");
const USER = require("../Models/User.Schema")
const secretKey = process.env.KEY;


const authenticate = async(req,res,next)=>{
    try{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTgyZTU3ZTg3ZTM3MGVmYmVjMjM1ZmYiLCJpYXQiOjE3MDMwNzcyNjd9.36Y7qPTP7pLjz5gukPfCalwiSUzciei0SzGNtuo3b6o";
        const verifyToken = jwt.verify(token,secretKey);
        console.log(verifyToken + "cookie and token verified");

        const rootUser = await USER.findOne({_id: verifyToken._id,"tokens.token":token});
        //console.log(rootUser);

        if(!rootUser){
            throw new Error("user not found");
        }

        req.token = token
        req.rootUser = rootUser
        req.userId = rootUser._id

        //console.log(req.userId);

        next();
    }catch(error){
        res.status(401).send("unauthorized user: no token provide")
        console.log(error)
    }
}

module.exports =  authenticate;