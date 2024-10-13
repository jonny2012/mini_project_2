import { Router } from "express";
import { userRouter } from "./userRouter.js";
import PostController from "../controllers/PostController.js";
import { checkAuth } from "../midldlewares/checkAuth.js";
import ProductsController from "../controllers/ProductsController.js";
import BasketController from "../controllers/BasketController.js";



export const router = new Router()

router.use("/user", userRouter)

router.post('/post', checkAuth, PostController.createPost)
router.get("/post", PostController.getAllPosts)


router.post("/product", ProductsController.createProduct)
router.get("/product", ProductsController.findAllProducts)
router.get("/basket", BasketController.findAllBaskets )
