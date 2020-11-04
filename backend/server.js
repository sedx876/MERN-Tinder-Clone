import express from 'express'
import mongoose from 'mongoose'

//app config
const app = express()
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://admin:41vlxBYFyNEMkrvq@cluster0.sx02s.mongodb.net/tinderdb?retryWrites=true&w=majority`

//middleware


//db config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

//api endpoints
app.get('/', (req, res) => res.status(200).send('Hello'))

//listener
app.listen(port, () => console.log('listening'))