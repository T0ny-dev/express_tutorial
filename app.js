
const express = require('express')
const app = express()


app.use(express.json());

app.get('/ping', (resquest, response) => {
  response.send({message: 'pong'})
})


app.post('/sum', (request, response) => {
  const {number1, number2} = request.body;
  const result = number1 + number2;
  response.send({message: result});
})

app.post('/res', (request, response) => {
  const {number1, number2} = request.body;
  const result = number1 - number2;
  response.send({message: result});
})

app.post('/div', (request, response) => {
  const {number1, number2} = request.body;
  const result = number1 / number2;
  response.send({message: result});
})

app.post('/mul', (request, response) => {
  const {number1, number2} = request.body;
  const result = number1 * number2;
  response.send({message: result});
})

app.listen (3001, () => {
  console.log('servidor esta corriendo en el localhost 3001')
  
})

