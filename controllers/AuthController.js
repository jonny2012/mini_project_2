import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AuthService from "./../services/AuthService.js"

import { configDotenv } from "dotenv";
import { Basket } from "../models/ProductModel.js";
import { User } from "../models/ProductModel.js";
configDotenv(".env")

class UserController {
  async registerUser(req, res) {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        return res.json("Username or password is not entered");
      }
      const user = await AuthService.OneUserbyEmail(email);
      if (user) {
        return res.json("User is alrready registered");
      }

      const hashedpassword = await bcrypt.hash(password, 3);
      const newUser = await AuthService.createUser(email, hashedpassword);

      const basket =  await Basket.create({userId:newUser._id})
      await User.create({email:newUser.email, basket:basket._id})
      res.json(newUser);
    } catch (err) {
      console.log(err.message);
    }
  }
  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.json("Username or password is not entered");
      }
      const user = await AuthService.OneUserbyEmail(email);
      if (!user) {
        return res.json("Wrong username");
      }
      const passwordValid = await bcrypt.compare(password, user.password);
      if (!passwordValid) {
        return res.json("Wrong Passwod");
      }
      const token = jwt.sign({ _id: user._id, email:user.email }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.json({ token });
    } catch (err) {
      console.log(err.message);
    }
  }
  async getUserbyId(req, res) {
    try {
    } catch (err) {
      console.log(err.message);
    }
  }
  async checkAuth(req, res) {
    const user = req.user
    try {
        const token = jwt.sign({ _id: user._id },  process.env.SECRET_KEY, {
            expiresIn: "1h",
          });
          res.json({token})
    } catch (err) {
      console.log(err.message);
    }
  }

//   async getUserbyId(req, res) {
//     try {
//       const {id} = req.params

//       const user = await User.findById(id)

//       if(!user) return res.json({message:"User not found"})

//       res.json(user)

//     } catch (err) {
//       console.log(err.message);
//     }
//   }
  
//   async getAllUsers(req, res) {
//     const {username}= req.query
//     try {
//       const users = await User.find().populate("posts")


//       res.json(users)

//     } catch (err) {
//       console.log(err.message);
//     }
//   }
// }
}

export default new UserController();
