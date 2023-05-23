const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
export default {
    port: 3000,
    dbUri: `mongodb+srv://${dbUser}:${dbPass}@movie-rest-api.rt27tk8.mongodb.net/?retryWrites=true&w=majority`,
    env: 'development'
};