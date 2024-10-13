
import {AuthUser} from "../models/AuthModel.js";

class AuthService{

    async  createUser(email, password){
        const user = await AuthUser.create({email, password})
        return user
    }

    async  AllUsers(){
        const user = await AuthUser.find()
        return user
    }
    async  OneUserbyId(userId){
        const user = await  AuthUser.findById({_id:userId})
        return user
    }
    async  OneUserbyEmail(email){
        const user = await AuthUser.findOne({email})
        return user
    }
}

export default new AuthService()