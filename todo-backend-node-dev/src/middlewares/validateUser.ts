import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const validateUser = (schema: AnySchema)=> async (
    req : Request, 
    res : Response, 
    next : NextFunction
)=>{
    try {
        await schema.validate({
            body : req.body, 
            query : req.query, 
            params : req.params
        });
        return next();
    } catch (err) {
        console.log(err);
        return res.status(400).send({"error":"Invalid Data"});
    }
}

export default validateUser;