import PostService from "../services/PostService.js";


class PostController {
  async createPost(req, res) {
    const reqPost = req.body;
  const  username = req.user.username
    try {
        const newPost = await PostService.createPost(reqPost,username)
        res.json(newPost)
    } catch (err) {
        console.log(err)
    }
  }
  async getAllPosts(req, res) {
    try {
        const posts = await PostService.AllPosts()
        res.json(posts)
    } catch (err) {
        console.log(err.message)
    }
  }
}
export default new PostController()
