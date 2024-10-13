import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name:{type:String, required:true},
    quantity:{type:Number, required:true, min:1},
    price:{type:Number, required:true},
    dateAdded:{type:Date, default:Date.now}

})

const userSchema = new mongoose.Schema({
    email:{type:String, required:true, unique:true},
    basket:{type:mongoose.Types.ObjectId, ref:"Basket"}
})

const basketSchema  = new mongoose.Schema({
    userId:{type:mongoose.Types.ObjectId, ref:"User"},
    products:[{type:mongoose.Types.ObjectId, ref:"Product"}]
})


  const User = mongoose.model("User", userSchema)
const Basket = mongoose.model("Basket", basketSchema)

const Product = mongoose.model("Product", productSchema)
export { Product, User, Basket}