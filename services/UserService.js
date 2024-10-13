import { User } from "../models/ProductModel"



class UserService{


    async createUser( email,basket){

        const newUser = await User.create({email,basket})
        return newUser
    }

    async findUserById(userId){
        const user = await User.findById(userId)
        return user
    }
}
export default new UserService()