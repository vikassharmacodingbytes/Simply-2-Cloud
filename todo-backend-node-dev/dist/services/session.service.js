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
import SessionModel from "../models/session.models.js";
import { userDecodeByJwt, userSignByJwt } from "../utils/utils.jwt.js";
import { findUser } from "./user.services.js";
const createSession = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield SessionModel.create({ user: userId });
    return session.toJSON();
});
const createAccessToken = ({ user, session }) => {
    const accessToken = userSignByJwt(Object.assign(Object.assign({}, user), { session: session._id }));
    return accessToken;
};
const reIssueAccessTokenFunc = (_a) => __awaiter(void 0, [_a], void 0, function* ({ refreshToken }) {
    const decode = userDecodeByJwt(refreshToken);
    if (!decode || get(!decode, "_id"))
        return false;
    const session = yield SessionModel.findById(get(decode, "_id"));
    if (!session || !session.valid)
        return false;
    const user = yield findUser({ "_id": session.user });
    if (!user)
        return false;
    const accessToken = userSignByJwt({ user, session });
    return accessToken;
});
const updateSession = (query, update) => __awaiter(void 0, void 0, void 0, function* () {
    return SessionModel.updateOne(query, update);
});
const findSession = (query) => {
    return SessionModel.find(query).lean();
};
export { reIssueAccessTokenFunc, updateSession, createAccessToken, createSession, findSession };
