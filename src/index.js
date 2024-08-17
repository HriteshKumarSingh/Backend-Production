import 'dotenv/config';
import {connectDB}  from "./db/index.js";
import { app } from './app.js';


connectDB()
.then(() => {
    app.on("error" , (error) => {
        console.error("Server connection failed !!! :: ",error)
    })

    app.listen(process.env.PORT || 3000 , () => {
        console.log("Server is running and listening on the port :: ",process.env.PORT || 3000)
    })
})
.catch((error) => {
    console.error("Server is not listening !!! :: ",error)
})





























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