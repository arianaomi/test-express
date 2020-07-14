//
const express = require('express')
const app = express()
//app.all() -> responde a todos los metodos

//endpoint
app.get('/hola', (request, response) => {
  response.write('Hello world from node!')
  response.end()
})

app.post('/hola', (request, response) => {
  response.write('Hello world con post!')
  response.end()
})

app.listen(8080, () => {
  console.log('Server is ready on port 8080')
})
