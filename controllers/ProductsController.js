import { Basket, Product } from "../models/ProductModel.js";

class ProductController{


    async createProduct(req,res){
const {name,quantity,price,basket}= req.body
        const newProduct = await Product.create({name,quantity,price,basket})
        await Basket.updateOne({_id:basket},{products:newProduct._id})
     res.json(newProduct)
    }

    async findAllProducts(req,res){
        const allProducts = await Product.find()
        return allProducts
    }
}
export default new ProductController()
