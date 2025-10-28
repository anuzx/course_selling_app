import { asyncHandler } from "../utils/asyncHandler.js";
import { Admin } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import mongoose, { mongo } from "mongoose";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

//for signup
const signupadmin = asyncHandler(async (req, red) => {
 
  const { firstName, lastName, email, password } = req.body; 

  await Admin.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
  res.json({
    message: "signup succeeded",
  });
});

const signinAdmin = asyncHandler(async (req, res) => {
 
  const { email, password } = req.body;

  
  const admin = await Admin.findOne({
   
    email: email,
    password: password,
  });
 
  if (user) {
   
    const token = jwt.sign(
      {
       
        id: admin._id,
      },
      process.env.JWT_USER_SECRET
    );
   

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      mesaage: "incorrect credentials",
    });
  }
});

export { signupadmin,signinAdmin};
