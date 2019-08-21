const nodemailer=require('nodemailer');

let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
});
const sendMail=(email,subject,text,cb)=>{
    let mailOptions={
        from:email,
        to://your email, 
        subject, 
        text
    };
    transporter.sendMail(mailOptions,function(err,data){
        if(err){
            cb(err,null);
        }else {
            cb(null,data);
        }
    });
}
module.exports=sendMail;