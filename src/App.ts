require('dotenv').config();
import express  from "express";
import config from 'config';
const cors = require('cors')
import morganMiddleware from "./Middleware/MorganMiddleware";
import {movieRoutes} from "./Router/Router";
import db from '../config/db'
import Logger from "../config/logger";


const app = express()

app.use(express.json())
app.use(cors())
app.use(morganMiddleware)
app.use('/api', movieRoutes)


const port = config.get<number>('port')

app.listen(port, async () => {
    await db()
    Logger.info(`Application is running at port: ${port}`)
})