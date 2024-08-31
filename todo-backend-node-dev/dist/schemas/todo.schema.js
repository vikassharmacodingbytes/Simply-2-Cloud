import { object, string } from "yup";
const payload = {
    body: object({
        todo_title: string().required("Title is required").max(120, "Title Cannot more than 120 words"),
        todo_desc: string().required().max(1000, "Desc char Limit Exceeded")
    })
};
const params = {
    params: object({
        _id: string().required("Todo Id is required")
    })
};
const todoGetOneTodo = object().shape(Object.assign({}, params));
const todoCreateSchema = object().shape(Object.assign({}, payload));
const todoUpdateSchema = object().shape(Object.assign(Object.assign({}, payload), params));
const todoDeleteSchema = object().shape(Object.assign(Object.assign({}, payload), params));
export { todoUpdateSchema, todoDeleteSchema, todoCreateSchema, todoGetOneTodo };
