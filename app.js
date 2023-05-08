const express = require('express')
const multer = require('multer')
const path = require('path')
const app = express();


app.use(express.urlencoded({extended:true}))

app.use(express.static(path.resolve('./public')))
const tp = './public/index.html'

app.get('/',(req,res)=>{
    res.sendFile(tp)
})


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
  
  const upload = multer({ storage })



app.post('/first', upload.single('file'), function (req, res, next) {
    // console.log(req.body)
    // console.log(req.file)
    res.sendFile(__dirname + '/public/first.html');
    
  })





app.listen(7000,()=>{
    console.log("connected")
})