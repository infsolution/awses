import { Router, Request, Response, NextFunction } from "express";

const route = Router()
route.post('/message',()=>{console.log('Eita')})

export default route