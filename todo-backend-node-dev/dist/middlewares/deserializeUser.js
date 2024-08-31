var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import _ from "lodash";
const { get } = _;
import { userDecodeByJwt } from "../utils/utils.jwt.js";
import { reIssueAccessTokenFunc } from "../services/session.service.js";
const deserializeUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "");
    const refreshToken = get(req, "headers.x-refresh");
    if (!accessToken)
        return next();
    const { decode, expired } = userDecodeByJwt(accessToken);
    if (decode) {
        // @ts-ignore
        req.user = decode;
        return next();
    }
    if (expired && refreshToken) {
        if (typeof (refreshToken) == "string") {
            const newAccessToken = yield reIssueAccessTokenFunc({ refreshToken });
            if (newAccessToken) {
                res.setHeader("x-access-token", newAccessToken);
                const { decode } = userDecodeByJwt(newAccessToken);
                // @ts-ignore
                req.user = decode;
            }
            return next();
        }
    }
    return next();
});
export default deserializeUser;
