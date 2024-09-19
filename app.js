require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (err) => console.error)
db.once('open', () => console.log("Connected to database"))

app.use(express.json())

const subscriberRouter = require("./routes/subscribers")
app.use('/subscribers', subscriberRouter)
// localhost:3000/subscribers/post

app.listen(3003, () => console.log("Server started"));