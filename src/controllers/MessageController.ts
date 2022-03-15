import { Router, Request, Response, NextFunction, response } from "express";
import SendMessageService from '../services/SendMessageService' 
class MessageController{
    
    async store(request: Request, response: Response){
        const messageService = new SendMessageService()
        const {source, toAddresses,subject, text, html} = request.body
       await messageService.sendEmail(source, toAddresses,subject, text, html)
       return response.send({ok:true})
    }
}

export default MessageController