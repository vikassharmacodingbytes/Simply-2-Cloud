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
const { omit } = _;
import UserModel from "../models/user.models.js";
const registerUser = (my_user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield UserModel.create(my_user);
    }
    catch (error) {
        if (typeof error === 'string') {
            throw new Error(error); // If error is a string, throw it as is
        }
        else {
            throw new Error(String(error)); // Cast error to string before throwing
        }
    }
});
const findUser = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield UserModel.find(query).lean();
    }
    catch (error) {
        throw new Error(String(error)); // Cast error to string before throwing 
    }
});
const validatePassword = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, password }) {
    const user = yield UserModel.findOne({ email: email });
    if (!user) {
        return false;
    }
    const is_valid = user.comparePassword(password);
    if (!is_valid) {
        return false;
    }
    return omit(user.toJSON(), "password");
});
export { registerUser, findUser, validatePassword };
