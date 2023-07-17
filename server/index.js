import express from 'express'
//mongo password : pzCafoNcDzTYUtr7
import mongoose, { connect } from 'mongoose'
import dotenv from "dotenv";
import cors from 'cors'
import Userroutes from '../server/routes/users.js'
import questionroutes from '../server/routes/Questions.js'
import answerRoutes from '../server/routes/Answers.js'



const app = express();
dotenv.config();

app.use(express.json({limit:'30mb', extended:'true' }))
app.use(express.urlencoded({limit:'30mb', extended:'true' }))
app.use(cors());

app.get('/' ,(req,res) => {
    res.send("This is a stackoverflow clone API")
})
app.use('/user' , Userroutes)
app.use('/questions' , questionroutes)
app.use('/answer' , answerRoutes)
const PORT = process.env.PORT || 5000

const connectionurl = process.env.CONNECTION_URL

mongoose.connect(connectionurl,{useNewUrlParser: true , useUnifiedTopology: true})
.then(() => app.listen(PORT, () => {console.log(`Port running on ${PORT}`)}))
.catch((err) => console.log(err.message))