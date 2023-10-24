const nodemailer = require('nodemailer')

const sendEmail=(req, res)=>{
    const {email} = req.params

    let transporter = nodemailer.createTransport({
        host:'smtp.ethereal.email',
        port:587,
        auth:{
            user:'ellsworth.jakubowski@ethereal.email',
            pass:'cagaj8bVRZRghEbABk'
        }
    })
    
    
    let mailOptions = {
        from: 'rn.kubin@gmail.com',
        to: email,
        subject: 'verificacion de email',
        text: 'aaa'
    }

    transporter.sendMail(mailOptions, (error,info)=>{
        if(err){
            res.status(500).send(error)
        }else{
            console.log('se ha enviado correctamente')
            res.status(200).json(req.body)
        }
    } )
}

module.exports ={
    sendEmail
}