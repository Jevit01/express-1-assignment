const express = require('express')
const app = express()

app.get('/', (req,res)=>{
  console.log(req.query);
  res.json(req.query)
})

app.get('/add/:num1/:num2', (req,res)=>{
  let result = parseInt(req.params.num1) + parseInt(req.params.num2)
  if(isNaN(parseInt(req.params.num1)) || isNaN(parseInt(req.params.num2))){
    res.send('Input Number')
  }
  res.send({num1: req.params.num1, num2: req.params.num2, result: result})

})

app.get('/sub/:num1/:num2', (req,res)=>{
  let result = parseInt(req.params.num1) - parseInt(req.params.num2)
  if(isNaN(parseInt(req.params.num1)) || isNaN(parseInt(req.params.num2))){
    res.send('Input Number')
  }
  res.send({num1: req.params.num1, num2: req.params.num2, result: result})
})

app.get('/mult/:num1/:num2', (req,res)=>{
  let result = parseInt(req.params.num1) * parseInt(req.params.num2)
  if(isNaN(parseInt(req.params.num1)) || isNaN(parseInt(req.params.num2))){
    res.send('Input Number')
  }
  res.send({num1: req.params.num1, num2: req.params.num2, result: result})
})

app.get('/div/:num1/:num2', (req,res)=>{
  let result = parseInt(req.params.num1) / parseInt(req.params.num2)
  if(isNaN(parseInt(req.params.num1)) || isNaN(parseInt(req.params.num2))){
    res.send('Input Number')
  }
  res.send({num1: req.params.num1, num2: req.params.num2, result: result})
})

app.listen(3000, ()=>{
  console.log("Lets do this")
})
