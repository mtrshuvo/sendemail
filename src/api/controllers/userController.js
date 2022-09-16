
const {User} = require("../models/userModel");
const jwt = require("jsonwebtoken");
const SiB = require("sib-api-v3-sdk");
const apikey="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"
module.exports.sendEmail = async(req, res)=> {
    try{

        const {useremail, name, message} = req.body;
        let defaultClient = SiB.ApiClient.instance;
        let apiKey = defaultClient.authentications['api-key'];
        apiKey.apiKey = apikey;

        //create contact
        const transEmailApi = new SiB.TransactionalEmailsApi();
        const sender = {
            email: process.env.emailfrom
        }
        const receivers = [
            {
                email: process.env.emailto
            }
        ]
        transEmailApi.sendTransacEmail({
            sender,
            to: receivers,
            subject: process.env.subject || useremail,
            // textContent: message,
            htmlContent: `
            <h3>${name} sent you a message</h3>
            <p>${message}</p>
            `
        }).then(()=> res.status(200).send("success"))
        .catch(err=>{
            res.status(400).send("failed")})
    }catch(e){
        console.log(e);
        return res.status(500).json("Something went wrong");
    }
}
