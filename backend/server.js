const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./db')

const Recipes = require('./routes/Recipes')


dotenv.config({path: './.env'})
const port = process.env.PORT || 8080

const app = express()

connectDB()
app.use(express.json())


app.use('/api/recipes', Recipes)

const server = app.listen(port, () => {
  console.log('Server is running on port: ' + port)
})


process.on('unhandledRejection', (err) => {
  console.log(`Server Error: ${err}`)
  server.close(() => {
    process.exit(1)
  })
})

