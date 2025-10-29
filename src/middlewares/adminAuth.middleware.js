import { jwt } from "jsonwebtoken";

function adminVerification(req, res, next) {
  const token = req.headers.token;
  const decoded = jwt.verify(token, process.env.JWT_ADMIN_SECRET);

  //if verification is done
  if (decoded) {
      req.userId = decoded.id; //its decoded.id because when we encoded the jwt in signin we encoded it in a object with a key called id 
      //here the name userId is random you could have kept it anything 
    next();
  } else {
    res.status(401).json({
      message: "you are not signed in",
    });
  }
}

export { adminVerification };
