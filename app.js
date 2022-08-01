let jsonData = require('./pokedex.json')
const express = require('express') 
const app = express()
const cors = require('cors')
const port = 8000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Create a GET route on /pokemon which gives the complete list of pokemon from the JSON
app.get('/pokemon',  (req, res) => {
    res.send(jsonData)
  })
//Create a GET route on /pokemon/:id which gives only one pokemon from the JSON thanks to its id
app.get('/pokemon/:id', (req, res) => {
    const result = jsonData.find( pokemon => pokemon.id == req.params.id)
    res.send(result)
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})