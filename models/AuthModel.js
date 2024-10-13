import mongoose from "mongoose";


const AuthSchema= new mongoose.Schema({

    email:{type:String, required:true, unique:true },
    password:{type:String, required:true},
    posts:{
        type: mongoose.Types.ObjectId,
        ref:"post"
    }

})
export const AuthUser= mongoose.model("Auth", AuthSchema)
