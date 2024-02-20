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


app.use("/api/admin/users",verifyJWT, require("./routes/usersRoutes"))
app.use("/api/admin/forums",verifyJWT, require("./routes/forumsRoutes"))
app.use("/api/admin/threads",verifyJWT, require("./routes/threadsRoutes"))
app.use("/api/admin/posts",verifyJWT, require("./routes/postsRoutes"))
app.use("/api/admin/me",verifyJWT, require("./routes/meRoutes"))
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
