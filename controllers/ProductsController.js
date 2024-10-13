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
    async updateProductInBasket(req,res){
        try{
            const {id} = req.params
            const {name, quantity, price}=req.body
            const  updateProduct= await Product.findByIdAndUpdate(
                {_id:id},
                {name, quantity, price}
            )
            if(!updateProduct){
                return res.json({message: "Product not found"})
            }
            res.json(updateProduct)
        }
        catch(error){
            res.json({message: error.message})
        }
    }
    async deleteProductInBasket(req,res){
        try{
            const {id} = req.params
      
            const  deleteProduct= await Product.findByIdAndDelete(
                {_id:id},
              
            )
            if(!deleteProduct){
                return res.json({message: "Product not found"})
            }
            res.json({message: "Product deleted"})
        }
        catch(error){
            res.json({message: error.message})
        }
    }
}
export default new ProductController()
