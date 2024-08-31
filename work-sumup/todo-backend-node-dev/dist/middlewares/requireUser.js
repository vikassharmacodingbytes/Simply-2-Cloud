import _ from "lodash";
const { get } = _;
const requireUser = (req, res, next) => {
    const user = get(req, "user");
    if (!user) {
        return res.sendStatus(401);
    }
    return next();
};
export default requireUser;
