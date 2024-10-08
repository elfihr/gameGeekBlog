import express from 'express'
import cors from 'cors'
import postRouter from './routes/post.js'
import authRouter from './routes/auth.js'
import usersRouter from './routes/users.js'
import cookieParser from 'cookie-parser'
import multer from 'multer'

const app = express()
//middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())

//routes
app.use("/api/posts", postRouter)
app.use("/api/auth", authRouter)
app.use("/api/user", usersRouter)

//===upload img
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage })

app.post("/api/upload", upload.single("file"), function (req, res) {
    const file = req.file
    res.status(200).json(file.filename)
})








app.listen(4150, () => {
    console.log("Server Online")
    console.log("http://localhost:4150")
})

app.get("/", (req, res) => {
    res.json("Server is Running on port 4150")
})