const express = require('express')
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html')
})

app.post('/', (req, res) => {
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1 + n2;

  res.send("The result of the calculation is" + result)
})

app.get('/bmiCalculator', (req, res) => {
  res.sendFile(__dirname+'/bmiCalculator.html')
})

app.post('/bmiCalculator', (req, res) => {
  var w1 = parseFloat(req.body.w)
  var h1= parseFloat(req.body.h)
  var answer = w1/(h1*h1)
  
  res.send("YOUR BMI  is" + answer)
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})