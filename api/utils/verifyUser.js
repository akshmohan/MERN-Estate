import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;

    console.log("VeriToken token generated: ",token);

    if(!token) return next(errorHandler(401, "Unauthorised!!!"));


    // eslint-disable-next-line no-undef
    jwt.verify(token, process.env.JWT_SECRET, (err,user) => {
        if(err) return next(errorHandler(403, "Forbidden!!!"));

        req.user = user;
        next();

    });
}