import { Basket, Product } from "../models/ProductModel"



class ProductService{


    async createProduct(name, quantity, price,dateAdded){

        const newProduct = await Product.create({
            name,
            quantity,
            price,
            dateAdded
        })
    
        return newProduct
    }

    async getProducts(){
        const Products = await Product.find()
        
    }
}
export default new ProductService()