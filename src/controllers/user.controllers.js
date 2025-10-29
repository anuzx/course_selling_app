import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import mongoose, { mongo } from "mongoose";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

//for signup
const signupUser = asyncHandler(async (req, red) => {
  //how to think what to write
  //1) see the user schema ;it has firstName , lastName , email ,password
  const { firstName, lastName, email, password } = req.body; //we expect the user to give this to us
  //TODO : ADD ZOD VALIDATION

    //TODO : hash password using bcrypt so plain text password is not stored in databse
    
  //now call userModel and create an entry in your databse with all the things mentioned in schema

  await User.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
  res.json({
    message: "signup succeeded",
  });
})

const signinUser = asyncHandler(async (req, res) => {
    //here we just need email and password 
    const { email, password } = req.body;

    //TODO: ideally password should be hased , and hence you cant compare the user provided password and datbase password 

    //how find the email and password in the database
    const user = await User.findOne({ //findOne will return only one user with that specific email and password
        email: email,
        password:password,
    })
    //what to do if user exist (email and password is correct)
    if (user) {
      //create jwt for the user
      const token = jwt.sign(
        {
          //sign his id (in database it is saved in ._id field)
          id: user._id,
        },
        process.env.JWT_ADMIN_SECRET
      );
      //now do cookie logic if you are doing session based authentication , we are here doing token based authentication

      res.json({
        token: token,
      });
    } else {
         res.status(403).json({
           mesaage: "incorrect credentials",
         });
    }
   
})

export {
    signupUser,
    signinUser,
}