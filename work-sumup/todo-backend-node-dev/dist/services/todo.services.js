var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import todoModel from "../models/todo.models.js";
const createTodo = (object_1, ...args_1) => __awaiter(void 0, [object_1, ...args_1], void 0, function* (object, option = { lean: true }) {
    return yield todoModel.create(object, option);
});
const updateTodo = (query_1, update_1, ...args_2) => __awaiter(void 0, [query_1, update_1, ...args_2], void 0, function* (query, update, options = { lean: true }) {
    return yield todoModel.updateOne(query, update, options);
});
const deleteTodo = (query_2, ...args_3) => __awaiter(void 0, [query_2, ...args_3], void 0, function* (query, options = { lean: true }) {
    return yield todoModel.deleteOne(query, options);
});
const findOneTodo = (query_3, ...args_4) => __awaiter(void 0, [query_3, ...args_4], void 0, function* (query, options = { lean: false }) {
    return yield todoModel.findOne(query, options);
});
const findTodo = (query_4, ...args_5) => __awaiter(void 0, [query_4, ...args_5], void 0, function* (query, options = { lean: false }) {
    return yield todoModel.find(query, options);
});
export { createTodo, updateTodo, deleteTodo, findOneTodo, findTodo };
