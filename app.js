let jsonData = require('./pokedex.json')
const express = require('express') 
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Create a GET route on /pokemon which gives the complete list of pokemon from the JSON
app.get('/pokemon', (req, res) => {
    res.send(jsonData)
  })
//Create a GET route on /pokemon/:id which gives only one pokemon from the JSON thanks to its id
app.get('/pokemon/:id', (req, res) => {
    const pokemonList = jsonData.map((item) => {
        if(item.id == req.params.id) {
            //console.log(item)
            return res.send(item)
        }else{
            res.send('Pokemon not found')
        }
    })
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})