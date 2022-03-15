import { Router, Request, Response, NextFunction } from "express";
import MessageController from '../controllers/MessageController'
const message = new MessageController()
const route = Router()
route.post('/message',message.store)

export default route