require('dotenv').config()
const express = require('express')
const connectDB = require('./db/connect')
const { insertManyData } = require('./controllers/product')

const app = express()
app.use(express.json())

const PORT = process.env.PORT | 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    
    await insertManyData();

    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`),
    )
  } catch (error) {
    console.log(error)
  }
}

start()