import mongoose from "mongoose";
import config from 'config'
import Logger from "./logger";

async function connect() {
    const dbUri = config.get<string>('dbUri')

    try {
        await mongoose.connect(dbUri)
        Logger.info('connected to database')
    } catch (error) {
        Logger.error('Not possible to connect')
        Logger.error(`Error: ${error}`)
        process.exit(1)
    }
}

export default connect