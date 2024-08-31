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
import { createTodo, deleteTodo, findOneTodo, findTodo, updateTodo } from "../services/todo.services.js";
const createTodoHadler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield createTodo(req.body);
    return res.status(200).json({ "message": "Todo Updated Successfully!!" });
});
const updateTodoHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo_id = get(req, "params._id");
    const body = get(req, "body");
    const user_id = get(req, "user._id");
    const todo = yield findOneTodo({ "_id": todo_id });
    if (!todo)
        return res.status(400).json({ "error": "Not Found!" });
    // @ts-ignore
    if (todo.user != user_id)
        return res.status(401).json({ "error": "Not Found" });
    const upTodo = yield updateTodo({ _id: todo_id }, body);
    return res.status(200).json({ "message": "Todo Updated Successfully!!" });
});
const getUserTodoHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = get(req, "user._id");
    const user_todo = yield findTodo({ user: user_id });
    console.log(user_todo);
    return res.status(200).json(user_todo);
});
const getTodoByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = get(req, "user._id");
    const user_todo = yield findOneTodo({ user: user_id });
    if (!user_todo)
        return res.status(404).json({ "error": "Todo not Found" });
    // @ts-ignore
    if (req.user._id != user_todo.user)
        return res.status(401).json({ "error": "Unauthorize User" });
    return res.status(200).json(user_todo);
});
const deleteTodoHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = get(req, "user._id");
    const todo_id = get(req, "params._id");
    const todo = yield findOneTodo({ "_id": todo_id });
    if (!todo)
        return res.status(400).json({ "error": "Not Found!" });
    console.log(todo);
    // @ts-ignore
    if (todo.user != user_id)
        return res.status(401).json({ "error": "Not Found" });
    const delTodo = yield deleteTodo({ _id: todo_id });
    return res.status(200).json({ "message": "Todo Deleted Successfully!!" });
});
export { updateTodoHandler, getUserTodoHandler, deleteTodoHandler, getTodoByIdHandler, createTodoHadler };
