import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config();
// import JWT_SECRET_KEY from '.env'
export const generateToken = (user) => {
    console.log(JWT_SECRET_KEY);
    console.log("generate token");

    return jwt.sign(
        user,
        JWT_SECRET_KEY
    )
};

