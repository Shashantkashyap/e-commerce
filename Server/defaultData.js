const Products = require("../Server/Models/product.Schema")
const productsData = require("../Server/Constant/productData")

const DefaultData = async()=>{
    try{

        await Products.deleteMany({})
        const storeData = await Products.insertMany(productsData);
        
    }catch(err){
        console.log("error in storing data" + err);
    }
}

module.exports = DefaultData;