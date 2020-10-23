import dotenv from 'dotenv'
dotenv.config()

export default {
    PORT: process.env.PORT || 3000,
    MONGO_DB: process.env.MONGO_DB || "mern-typescript-practice",
    MONGO_USER: process.env.MONGO_USER || "admin",
    MONGO_PASS: process.env.MONGO_PASS || "admin",
    MONGO_HOST: process.env.MONGO_HOST || "localhost"
}