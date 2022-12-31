import jwt from 'jsonwebtoken';
import userInfo from '../models/userModel.js';

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.cookie;
    console.log(authHeader);
    if (authHeader) {
      const token = authHeader.replace("jwtoken=", "");
      console.log(token);
      const verifyToken = jwt.verify(token, "my_encryption_text_key")
    
        if (!verifyToken) {
          res.status(403).json("Token is not valid!");
        }
        req.user_id = verifyToken._id;
        console.log('token verified');
        next();
      
    } else {
      return res.status(401).json("You are not authenticated!");
    }
};


export default authenticate;
