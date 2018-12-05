const express = require('express')
const app = express()

let rockChoices = [{"user":"rock","ai":"rock","result":"tie"},
{"user":"rock","ai":"paper","result":"lose"},
{"user":"rock","ai":"scissors","result":"win"}]

let paperChoices = [{"user":"paper","ai":"rock","result":"win"},
{"user":"paper","ai":"paper","result":"tie"},
{"user":"paper","ai":"scissors","result":"lose"}]

let scissorsChoices = [{"user":"scissors","ai":"rock","result":"lose"},
{"user":"scissors","ai":"paper","result":"win"},
{"user":"scissors","ai":"scissors","result":"tie"}]

app.get('/', (req,res)=>{
  console.log(req.query);
  res.json(req.query)
})

app.get('/:choice', (req,res)=>{
  if(req.params.choice === 'rock'){
res.send(rockChoices[Math.floor(Math.random()*3)])
} else if (req.params.choice === 'paper'){
  res.send(paperChoices[Math.floor(Math.random()*3)])
} else if (req.params.choice === 'scissors'){
  res.send(scissorsChoices[Math.floor(Math.random()*3)])
} else {
  res.send('You must enter Rock, Paper, or Scissors')
}
})



app.listen(3000,()=>{
  console.log("Lets do this")
})
