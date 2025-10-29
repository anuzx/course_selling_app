import { asyncHandler } from "../utils/asyncHandler.js";
import { Admin } from "../models/user.model.js";
import jwt from "jsonwebtoken";

import { Course } from "../models/course.model.js";
//for signup
const signupAdmin = asyncHandler(async (req, red) => {
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
//for signin
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
//for course creation
const createCourseAdmin = asyncHandler(async (req, res) => {
  const adminId = req.userId; //set in adminAuth.middleware.js

  //what do we expect the admin to give in course

  const { title, description, imageUrl, price } = req.body;

  //put it in databse

  const course = await Course.create({
    title,
    description,
    imageUrl,
    price,
    creatorId: adminId,
  });
  res.json({
    message: "course created",
    courseId: course._id,
  });
});

//update anything in course
const updateCourseAdmin = asyncHandler(async (req, res) => {
  const adminId = req.userId;

  const { title, description, imageUrl, price, courseId } = req.body;

  //we need to check ki jo course id bhej rha hai vo usko belong krta hai ya nhi , warna koi bhi kisi ka course change krdega agr 1 se zayda admins hue
  const course = await Course.updateOne(
    {
      //filter (which one you want to change)
      _id: courseId,
      creatorId: adminId,
    },
    {
      //what to update
      title,
      description,
      imageUrl,
      price,
    }
  );
  res.json({
    message: "course updated",
    courseId: course._id,
  });
});

//to get all of your own courses (made by admin)

const getAllCourseAdmin = asyncHandler(async (req, res) => {
  const adminId = req.userId;
   const course = await Course.find(
     {//find all courses specific to this admin
       
       creatorId: adminId,
     },
     {
      
       title,
       description,
       imageUrl,
       price,
     }
   );
   res.json({
     message: "course found",
     courseId: course._id,
   });
})

export { signupAdmin, signinAdmin, createCourseAdmin, updateCourseAdmin  , getAllCourseAdmin};
