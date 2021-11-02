const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const bcrypt = require("bcrypt")
const app = express()

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

// global middleware 
app.use((req, res, next)=>{
    console.log('middleware was globally called');
    next();
})


// function CheckPassword(password) 

// const {email, username, password, confirm_password} =req.body
// { 

// var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
// if(password !== confirm_password)
// { 
//     return res.send("password must match confirm password")
// }
// else
// { 
//    console.log('Wrong...!')
//    res.send("data not true")
// }
// }
app.post('/login',  (req, res) => {
    res.send(req.body)
    console.log(req.body)
})
app.post('/signup', async (req, res)  => {
try {
        
const {email, name, password, confirm_password} =req.body 
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

if(!password){
    res.send("enter password")
}

if(!passw.test(password)){
    res.send("criteria not met");
}else{
    res.send("sucess")
}
if(password !== confirm_password){
    res.send("password must match")
}else{
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);
}
    } catch (error) {
        res.status(500).send()
    }

})

app.listen(3500, () => {
    console.log('weuh')
})