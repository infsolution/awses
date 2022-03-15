import SES from 'aws-sdk/clients/ses'
require('dotenv/config');
class SendMessageSerive{
    private client: SES;
    constructor(){
        this.client = new SES({
            region:'us-east-1',
        })
    }
 async sendEmail(source:string, toAddresses:string[], subject:string, text:string, html:string):Promise<void>{
   try{
    await this.client.sendEmail({
        Source: source,
        Destination:{
            ToAddresses:toAddresses,
        },
        Message: {
            Subject:{
                Data:subject,
            },
            Body:{
                Text:{
                    Data:text,
                },
                Html:{
                    Data:html
                }
            }
        },
        ConfigurationSetName:process.env.SET_NAME,
    }).promise()
   }catch(error){
       console.log(error)
   }
 }
}

export default SendMessageSerive