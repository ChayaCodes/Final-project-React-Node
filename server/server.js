const dotenv = require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors')
const verifyJWT = require('./middleware/verifyJWT');

const PORT = process.env.PORT || 7001

const connectDB = require('./config/connectDB');
const corsOption = require('./config/corsOption');
const { default: mongoose } = require('mongoose');

connectDB()

app.use(cors(corsOption))
app.use(express.json())
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.send("home page")
})


app.use("/api/users",verifyJWT, require("./routes/usersRoutes"))
app.use("/api/forums",verifyJWT, require("./routes/forumsRoutes"))
app.use("/api/threads",verifyJWT, require("./routes/threadsRoutes"))
app.use("/api/posts",verifyJWT, require("./routes/postsRoutes"))
app.use("/api/me",verifyJWT, require("./routes/meRoutes"))
app.use("/api/auth", require("./routes/authRoutes"))

mongoose.connection.once('open',()=>{
    console.log("connected to DB successfully")
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    })
})

mongoose.connection.on('error',(err)=>{
    console.log("error conection to DB ",err)
})
