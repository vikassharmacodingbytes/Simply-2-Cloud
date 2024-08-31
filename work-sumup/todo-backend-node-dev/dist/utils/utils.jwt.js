import jwt from "jsonwebtoken";
import configraution from "../config/config.env.js";
const userSignByJwt = (object, options = undefined) => {
    return jwt.sign(object, configraution.private_key, options);
};
const userDecodeByJwt = (token) => {
    try {
        const decode = jwt.verify(token, configraution.private_key);
        return {
            expired: false,
            valid: true,
            decode
        };
    }
    catch (error) {
        return {
            expired: true,
            valid: false,
            decode: null
        };
    }
};
export { userSignByJwt, userDecodeByJwt };
