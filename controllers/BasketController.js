import { Basket } from "../models/ProductModel.js";


class BasketController{

    async findAllBaskets(req,res){

        const allBaskets = await Basket.find().populate("products")
    }
}
export default  new BasketController()