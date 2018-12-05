const express = require('express')
const app = express()

app.get('/', (req,res)=>{
  console.log(req.query);
  res.json(req.query)
})

const add = (num1,num2) => num1 + num2
const sub = (num1,num2) => num1 - num2
const mult = (num1,num2) => num1 * num2
const div = (num1,num2) => num1 / num2

app.get('/:operation/:num1/:num2', (req,res)=>{
  let n1 = parseInt(req.params.num1)
  let n2 = parseInt(req.params.num2)
  let op = req.params.operation

  if(isNaN(n1) || isNaN(n2)){
    res.send('Invalid numbers')

  } else if(op === 'add'){
    res.send({num1: `${n1}`,num2: `${n2}`, result: `${add(n1,n2)}`})
  } else if(op === 'sub'){
    res.send({num1: `${n1}`,num2: `${n2}`, result: `${sub(n1,n2)}`})
  } else if(op === 'mult'){
    res.send({num1: `${n1}`,num2: `${n2}`, result: `${mult(n1,n2)}`})
  } else if(op === 'div'){
    res.send({num1: `${n1}`,num2: `${n2}`, result: `${div(n1,n2)}`})
  } else if(op !== 'add' || op !== 'sub' || op !== 'mult' || op !== 'div'){
    res.send('Invalid operation. Please use add, sub, mult, or div')
  }

})



app.listen(3000, ()=>{
  console.log("Lets do this")
})
