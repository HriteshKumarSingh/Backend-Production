import 'dotenv/config';
import {connectDB}  from "./db/index.js";


connectDB()





























/*
import express from 'express'
import 'dotenv/config'


const app = express()

app.get('/' , (req , res) => {
    res.send("Hello World !!!");
})

;( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error" , (error) => {
            console.error("An error occours while listening to the port ::", error);
            throw error
        })

        app.listen(process.env.PORT || 3000 , () => {
            console.log("Successfully connected to the database and app is listening on port ::",process.env.PORT || 3000)
        })
    } catch (error) {
        console.error("An error occours while connecting to the database ::", error)
        throw error
    }
})()
*/