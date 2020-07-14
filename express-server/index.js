//
const express = require('express')
const app = express() //Creando instancia de express

//instancia.method(path,handler)
app.get('/', (request, response) => {
  response.status(200).json({ success: 'conexión exitosa' })
})

app.post('/', (request, response) => {
  response.status(200).send('Hello world! got  a POST request')
})

app.get('/adios', (request, response) => {
  response.status(200).send('Bye world! got a GET request')
})

app.post('/adios', (request, response) => {
  response.status(200).send('Bye world! got a POST request')
})

// * captura todos los paths no definidos
app.get('*', (request, response) => {
  response.status(404).send('Not found')
})

//listen (puerto, cb)
app.listen(8080, () => {
  console.log('running on 4000')
})
