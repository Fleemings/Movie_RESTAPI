import morgan, { Morgan, StreamOptions } from "morgan";
import config from 'config'
import Logger from "../../config/logger";

// String to read http requests
const stream: StreamOptions = {
    write: (message) => Logger.http(message)
}

// Not print in production
const skip = () => {
    const env = config.get<string>('env') || 'development'
    return env !== 'development'
}

// creating final middleware combine with both functions
const morganMiddleware = morgan(
    ':method :url :status :res[content-length] - :response-time ms', {
        stream, skip
    }
)

export default morganMiddleware;