const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>console.log("Database Connected")).catch((err)=>console.log("error in db connection" + err.message));
