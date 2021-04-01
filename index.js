const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const { User } =require("./models/User");

//applicatioin/x-www.from.urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json
app.use(bodyParser.json());

const mongoose= require('mongoose')
mongoose.connect('mongodb+srv://yeongin:7590aa@boilerplate.rpkzh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err=> console.log(err)) 

app.get('/', (req, res) => {
  res.send('Hello World! 나는 펭귄')
})

app.post('/register', (req,res) => {
 //회원 가입 할때 필요한 정보들을 client에서 가져오면
 //그것들을 데이터 베이스에 넣어준다.
 
 const user = new User(req.body)

 //요청정보 저장하고 오류,성공여부 알려줌
 user.save((err,userInfo) => {
  if(err) return res.json({ success: false, err })
   return res.status(200).json({
    success: true
  })
 })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})