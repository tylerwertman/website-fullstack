const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')

require('dotenv').config()
require('./server/config/mongoose.config')

app.use(cookieParser())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(express.json(), express.urlencoded({ extended: true }))

require('./server/routes/message.routes')(app)
require('./server/routes/user.routes')(app)


app.listen(8000, () => console.log(`Listening on port: 8000`))

