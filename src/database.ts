import mongoose, { ConnectionOptions } from 'mongoose'
import config from './config'

(async () => {
    try {
        const mongooseOptions: ConnectionOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
            // user: config.MONGO_USER,
            // pass: config.MONGO_PASS
        }
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DB}`, mongooseOptions)
        console.log('DB CONNECTED >', db.connection.name)
    } catch (error) {
        console.log(error)
    }
})()

