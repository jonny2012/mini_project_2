import { Router } from "express";
import AuthController  from "../controllers/AuthController.js";
import { checkAuth } from "../midldlewares/checkAuth.js";

export const userRouter = new Router()

userRouter.get("/get-one/:id", AuthController.getUserbyId )
userRouter.post("/register", AuthController.registerUser )
userRouter.post("/login", AuthController.loginUser )
userRouter.get("/auth", checkAuth, AuthController.checkAuth )
userRouter.get("/one/:id", AuthController.getUserbyId )

