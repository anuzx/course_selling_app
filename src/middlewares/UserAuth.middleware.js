import { jwt } from "jsonwebtoken";


function userVerification(req, res, next) {
  const token = req.headers.token;
  const decoded = jwt.verify(token, process.env.JWT_USER_SECRET);

  //if verification is done 
  if (decoded) {
    req.userId = decoded.id;
    next()
  } else {
    res.status(401).json({
      message:"you are not signed in"
    })
  }
}

export {
  userVerification,
}