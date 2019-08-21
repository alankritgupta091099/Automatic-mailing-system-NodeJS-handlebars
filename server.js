const express=require('express');
const app=express();
const path=require('path');
const bodyParser=require('body-parser');
const sendMail=require('./mail.js')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.post('/',(req,res)=>{
    subject=req.body.subject;
    email=req.body.email;
    text=req.body.text;
    sendMail(email,subject,text,function(err,data){
        if(err){
            console.log(err);
        }
        else{
            res.json({message:'Email Sent'});
        }
    })
});

app.listen(8080,()=>{
    console.log('listening at port ',8080);
});