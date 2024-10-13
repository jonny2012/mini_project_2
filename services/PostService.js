import { Post } from "../models/PostModel.js"

class PostService{

    async  createPost(postData, username){
        const user = await Post.create({
            title:postData.title,
             content:postData.content,
            author:username,
            createdAt: new Date()
            })
        return user
    }

    async  AllPosts(){
        const user = await Post.find()
        return user
    }


}
export default new PostService()