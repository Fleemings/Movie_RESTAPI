import express  from "express";
import { Config } from "winston/lib/winston/config";

const app = express()

app.use(express.json())

app.listen(3000, async () => {
    console.log('Application is running at port: 3000')
})