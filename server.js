require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000


mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => console.log('Mongo DB is in da house!'))


app.listen(PORT, () => {
    console.log(`The port is lit on channel ${PORT}`)
})