const express = require("express")
const router = new express.Router();
const Products = require("../Models/product.Schema")
const USER = require("../Models/User.Schema")
const bcrypt = require("bcryptjs")
const authenticate = require("../middleware/authenticate")


//get product data api 
router.get("/getproducts",async(req,res)=>{
    try{
        const productData = await Products.find();
        //console.log("data db se aa raha hai" + productData)
        res.status(201).json(productData);
    }catch(err){
        console.log("error in getting data " + err.msg )
    }
});

//get individual data

router.get('/getproductsone/:id', async(req, res) => {
    try{
        const { id } = req.params;

        const individualData = await Products.findOne({id});

        
        res.status(201).json(individualData);
  
    }catch(error){
        res.status(400).json();
        console.log("error in fetching item" + error)
    }
    
  });

  //register user's data
  router.post("/register",async(req,res)=>{
   // console.log(req.body);
   const {fname,email,mobile,password,cpassword} = req.body;

   if(!fname|| !email || !mobile || !password || !cpassword){
    res.status(422).json({error : "fill the complete data"});
    console.log("no data found")
   }

   try{
    const preUser = await USER.findOne({email:email});
    if(preUser){
        res.status(422).json({error: "this user is already registered"})
    }else if(password !== cpassword){
        res.status(422).json({error: "Password not matched"})
    }else{
        const finalUser = new USER({fname,email,mobile,password,cpassword});

        

        const storeData = await finalUser.save();
        console.log(storeData)

        res.status(201).json(storeData);
    }
   }catch(error){
    res.status(400).json();
        console.log("error in registering user data" + error)
   }
  })

  // user login api

  router.post("/login", async(req,res)=>{
    const {email, password}= req.body;

    if(!email || !password){
        res.status(400).json({error:"fill the data completely"})
    };

    try{
        const userLogin= await USER.findOne({email:email});
        if(userLogin){
            const isMatched = await bcrypt.compare(password, userLogin.password);
            console.log(isMatched);

            //token generation
            const token = await userLogin.generateAuthToken();
                console.log(token);

                res.cookie("eccomerce", token, {
                    expires: new Date(Date.now() + 2589000),
                    httpOnly: false,
                    
                    sameSite:"None"
                });
                console.log(res.cookie)
            
            


            if(!isMatched){
                res.status(400).json({error:"incorrect password"})
            }else{
                res.status(201).json(userLogin)
            }
            }else{

                

            res.status(400).json({error:"invalid email address"})
        }

    }catch(error){
        res.status(400).json({error:"invalid credentials"});
    }
  })

  //adding the data to the cart

  router.post("/addcart/:id",authenticate, async(req,res)=>{
    try{
        const id = req.params;
        console.log(id);
        const cart = await Products.findOne(id);
        //console.log(cart + "cart value");

        const Uid = req.userId;
        

        const UserContact = await USER.findOne(Uid);
        //console.log(UserContact);

        if(UserContact){
            const cartData = await UserContact.addCartData(cart);
            await UserContact.save();
            console.log(cartData);
            res.status(201).json(UserContact);
        }else{
            res.status(401).json({error:"invalid user"});
        }
    }catch(error){
        res.status(401).json({error:"invalid user"});
    }
  });


  //get cart details
  router.get("/cartdetails", authenticate, async(req,res)=>{
    try{

        const Uid = req.userId;
        const buyuser = await USER.findOne(Uid);
        res.status(201).json(buyuser);
    }catch(error){
        console.log("error in getting cart details" + error)

    }
  })

 // get valid user

 router.get("/validateuser", authenticate, async(req,res)=>{
    try{

        const Uid = req.userId;
        const validuserone = await USER.findOne(Uid);
        res.status(201).json(validuserone);
    }catch(error){
        console.log("error in getting cart details" + error)

    }
  });

  //remove item from cart
  router.delete("/remove/:id",authenticate, async(req,res)=>{
    try{
        const id = req.params;
        console.log(id)
    req.rootUser.carts = req.rootUser.carts.filter((curval)=>  {
        
        return curval.id != id.id
    });
    
    req.rootUser.save();
    res.status(201).json(req.rootUser);
    console.log("Item removed");
    }catch(error){
        console.log(error)
        res.status(400).json(req.rootUser);
    }
  })


  module.exports = router;

