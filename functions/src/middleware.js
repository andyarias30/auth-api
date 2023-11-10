import jwt, { decode } from "jsonwebtoken";
import { secretKey } from "./creds.js";

export async function isAuthenticated(req, res, next) {
    // first check if they have a token :
    const { authorization } = req.headers;
    if (!authorization) {
        res.status(401).send({ message: 'No authorization token found ' });
        return;
    }
    // then check if the token is Valid:
    jwt.verify(authorization, secretKey, (err, decoded) => {
        if (err) { // not valids tokens:
            res.status(401).send(err);
            return;
        }
        //valid token:
        req.locals = decoded; // attach our decoded token to the request ...
        //if so , go on 
        next();
    });
}