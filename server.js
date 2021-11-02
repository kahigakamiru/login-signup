const express = require('express')
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


function CheckPassword(req, res, next) 
{ 
let value = req.body.password
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(value.match(passw) &&  value === req.body.confirm_password)
{ 
    console.log('Correct, try another...')
    next()
}
else
{ 
   console.log('Wrong...!')
   res.send("data not true")
}
}
app.post('/login',  (req, res) => {
    res.send(req.body)
    console.log(req.body)
})
app.post('/signup', (req, res) => {
    res.send(req.body)
})

app.listen(3500, () => {
    console.log('weuh')
})