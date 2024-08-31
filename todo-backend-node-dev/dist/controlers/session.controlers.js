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
import { validatePassword } from "../services/user.services.js";
import { createAccessToken, createSession, findSession, updateSession } from "../services/session.service.js";
import { userSignByJwt } from "../utils/utils.jwt.js";
const userLoginHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield validatePassword(req.body);
    if (!user) {
        return res.status(401).send("Invalid username or password");
    }
    const session = yield createSession(user._id);
    const accessToken = createAccessToken({ user, session });
    const refreshToken = userSignByJwt(session);
    return res.send({ accessToken, refreshToken, user });
});
const logoutHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const sessionId = get(req, "user.session");
    yield updateSession({ _id: sessionId }, { valid: false });
    return res.sendStatus(200);
});
const getUserSessionHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = get(req, "user._id");
    const session = yield findSession({ user: userId,
        valid: true
    });
    return res.send(session);
});
export { userLoginHandler, logoutHandler, getUserSessionHandler };
