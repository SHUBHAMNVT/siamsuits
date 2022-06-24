const express = require("express")
const dotenv = require("dotenv")
const path = require("path")
const cors = require('cors')

require("./mongoose/mongoose")
const app = express()
const Port = process.env.PORT || 4545

// const corsOptions =  {
//   origin: "http://localhost:3000",
//   methods: "GET,POST,PUT,DELETE",
//   credentials: true,
// }
app.use(cors())

app.use(express.urlencoded({ extended: false}))
app.use(express.json())

app.use("/", express.static(path.join(__dirname, "/public")))

if(process.env.NODE_ENV == 'production'){
  app.use(express.static('client/build'))

  app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

// Routes====================================

const AuthRoute = require("./controllers/Authentication")
const CustomerRoute = require("./controllers/Customer")

// app.get("/", (req, res)=>{
//   res.send("HELLO")
// })

// app.use("/", express.static(path.join(__dirname, "/public")))

// Defining Paths for routes=========================

dotenv.config()

app.use('/auth', AuthRoute)
app.use('/customer', CustomerRoute)



app.listen(Port, ()=>{
  console.log("App is listening on port: "+ Port)
})

